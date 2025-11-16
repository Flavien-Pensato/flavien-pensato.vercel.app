#!/bin/sh

CONFIG_FILE="/etc/nginx/conf.d/default.conf"
CERT_PATH="/etc/letsencrypt/live/flavien-pensato.fr/fullchain.pem"
KEY_PATH="/etc/letsencrypt/live/flavien-pensato.fr/privkey.pem"
CHAIN_PATH="/etc/letsencrypt/live/flavien-pensato.fr/chain.pem"
CONFIG_STATE_FILE="/etc/nginx/conf.d/.config-state"

# Fonction pour vérifier la validité du certificat
check_cert_validity() {
    if [ ! -f "$CERT_PATH" ] || [ ! -f "$KEY_PATH" ]; then
        return 1
    fi
    
    # Vérifier que le certificat n'est pas vide
    if [ ! -s "$CERT_PATH" ] || [ ! -s "$KEY_PATH" ]; then
        echo "### ERREUR: Les fichiers de certificat sont vides"
        return 1
    fi
    
    # Vérifier le format basique du certificat (doit commencer par BEGIN CERTIFICATE)
    if ! grep -q "BEGIN CERTIFICATE" "$CERT_PATH" 2>/dev/null; then
        echo "### ERREUR: Le certificat n'a pas le format PEM attendu"
        return 1
    fi
    
    # Vérifier le format basique de la clé privée (doit commencer par BEGIN PRIVATE KEY ou BEGIN RSA PRIVATE KEY)
    if ! grep -q "BEGIN.*PRIVATE KEY" "$KEY_PATH" 2>/dev/null; then
        echo "### ERREUR: La clé privée n'a pas le format PEM attendu"
        return 1
    fi
    
    # Si openssl est disponible, faire des vérifications plus approfondies
    if command -v openssl >/dev/null 2>&1; then
        # Vérifier le format du certificat avec openssl (fullchain.pem contient plusieurs certificats)
        if ! openssl x509 -in "$CERT_PATH" -noout -text >/dev/null 2>&1; then
            echo "### ERREUR: Le certificat n'est pas dans un format valide (vérification openssl échouée)"
            return 1
        fi
        
        # Vérifier que le certificat n'est pas expiré
        if ! openssl x509 -in "$CERT_PATH" -noout -checkend 0 >/dev/null 2>&1; then
            echo "### ERREUR: Le certificat est expiré"
            openssl x509 -in "$CERT_PATH" -noout -enddate 2>/dev/null || true
            return 1
        fi
        
        # Vérifier que la clé privée correspond au certificat
        CERT_MODULUS=$(openssl x509 -noout -modulus -in "$CERT_PATH" 2>/dev/null | openssl md5 2>/dev/null)
        KEY_MODULUS=$(openssl rsa -noout -modulus -in "$KEY_PATH" 2>/dev/null 2>&1 | openssl md5 2>/dev/null)
        
        if [ -z "$CERT_MODULUS" ] || [ -z "$KEY_MODULUS" ]; then
            echo "### AVERTISSEMENT: Impossible de vérifier la correspondance certificat/clé (openssl peut être limité)"
            # On continue quand même car les vérifications basiques ont réussi
        elif [ "$CERT_MODULUS" != "$KEY_MODULUS" ]; then
            echo "### ERREUR: La clé privée ne correspond pas au certificat"
            return 1
        fi
    else
        echo "### AVERTISSEMENT: openssl n'est pas disponible, vérification basique uniquement"
    fi
    
    return 0
}

# Vérifier si la configuration a déjà été générée avec HTTPS
CURRENT_STATE=""
if [ -f "$CONFIG_STATE_FILE" ]; then
    CURRENT_STATE=$(cat "$CONFIG_STATE_FILE")
fi

# Vérifier la validité du certificat
CERT_VALID=false
if [ -f "$CERT_PATH" ]; then
    if check_cert_validity; then
        CERT_VALID=true
        echo "### Certificat valide détecté"
    else
        echo "### Certificat invalide détecté, utilisation de la configuration HTTP uniquement"
    fi
else
    echo "### Certificat non trouvé, utilisation de la configuration HTTP uniquement"
fi

if [ "$CERT_VALID" = "true" ]; then
    # Si les certificats existent et que la config est déjà en HTTPS, ne rien faire
    if [ "$CURRENT_STATE" = "https" ]; then
        echo "### Configuration HTTPS déjà active, pas de changement nécessaire"
        exit 0
    fi
    echo "### Certificats trouvés, utilisation de la configuration HTTPS complète"
    cat > "$CONFIG_FILE" << 'EOF'
upstream nextjs {
    server app:3000;
}

# Configuration HTTP (pour Let's Encrypt challenge et redirection)
server {
    listen 80;
    server_name flavien-pensato.fr;

    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Redirection vers HTTPS pour tout le reste
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# Configuration HTTPS
server {
    listen 443 ssl http2;
    server_name flavien-pensato.fr;

    # Certificats SSL (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/flavien-pensato.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/flavien-pensato.fr/privkey.pem;

    # Configuration SSL moderne
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;

    # OCSP stapling (nécessite un résolveur DNS)
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/flavien-pensato.fr/chain.pem;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Proxy settings
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
    proxy_cache_bypass $http_upgrade;

    # Timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;

    # Location blocks
    location / {
        proxy_pass http://nextjs;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://nextjs;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    echo "https" > "$CONFIG_STATE_FILE"
    echo "### Configuration HTTPS générée et sauvegardée"
else
    # Si les certificats n'existent pas et que la config est déjà en HTTP, ne rien faire
    if [ "$CURRENT_STATE" = "http" ]; then
        echo "### Configuration HTTP déjà active, pas de changement nécessaire"
        exit 0
    fi
    
    echo "### Certificats non trouvés, utilisation de la configuration HTTP uniquement"
    cat > "$CONFIG_FILE" << 'EOF'
upstream nextjs {
    server app:3000;
}

# Configuration HTTP (pour Let's Encrypt challenge)
server {
    listen 80;
    server_name flavien-pensato.fr;

    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy settings
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;

    # Timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;

    # Location blocks
    location / {
        proxy_pass http://nextjs;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://nextjs;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    echo "http" > "$CONFIG_STATE_FILE"
    echo "### Configuration HTTP générée et sauvegardée"
fi

