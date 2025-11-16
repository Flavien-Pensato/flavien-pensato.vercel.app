# Configuration Docker avec Certbot pour HTTPS

Cette configuration Docker Compose intègre automatiquement Certbot pour obtenir et renouveler les certificats SSL/TLS Let's Encrypt.

## Services

- **app** : Application Next.js
- **nginx** : Serveur web avec configuration HTTPS automatique
- **certbot-init** : Service d'initialisation qui obtient les certificats au premier démarrage
- **certbot** : Service qui renouvelle automatiquement les certificats toutes les 12 heures

## Fonctionnement

1. Au démarrage, nginx démarre avec une configuration HTTP uniquement (pour permettre le challenge Let's Encrypt)
2. Le service `certbot-init` obtient les certificats SSL via le challenge HTTP
3. Nginx surveille la présence des certificats toutes les 30 secondes et recharge automatiquement avec la configuration HTTPS complète une fois qu'ils sont disponibles
4. Le service `certbot` renouvelle automatiquement les certificats avant expiration

## Utilisation

### Premier démarrage

```bash
cd .cloud
docker-compose up -d
```

Le service `certbot-init` va automatiquement :
- Attendre que nginx soit prêt (10 secondes)
- Obtenir les certificats SSL pour `flavien-pensato.fr`
- Nginx détectera automatiquement les certificats et activera HTTPS

### Vérification des certificats

```bash
docker-compose logs certbot-init
docker-compose logs nginx
```

### Renouvellement manuel

Les certificats sont renouvelés automatiquement, mais vous pouvez forcer un renouvellement :

```bash
docker-compose exec certbot certbot renew --force-renewal
docker-compose exec nginx nginx -s reload
```

## Configuration

- **Domaine** : `flavien-pensato.fr` (modifiable dans `docker-compose.yml` et `generate-nginx-config.sh`)
- **Email** : `flavien.pensato@gmail.com` (modifiable dans `docker-compose.yml`)

## Volumes

- `certbot-www` : Fichiers du challenge HTTP Let's Encrypt
- `certbot-conf` : Certificats SSL Let's Encrypt
- `nginx-conf` : Configuration nginx générée dynamiquement

## Dépannage

### Certificat invalide ou problème d'accès HTTPS

Si vous rencontrez des problèmes avec le certificat SSL :

1. **Vérifier les logs** :
```bash
docker-compose logs certbot-init
docker-compose logs nginx
```

2. **Supprimer et régénérer le certificat** :
```bash
cd .cloud
./reset-certificate.sh
docker-compose up -d
```

3. **Vérifier manuellement la validité du certificat** :
```bash
docker-compose exec nginx openssl x509 -in /etc/letsencrypt/live/flavien-pensato.fr/fullchain.pem -noout -text
```

4. **Forcer la régénération du certificat** :
```bash
docker-compose exec certbot certbot certonly --webroot --webroot-path=/var/www/certbot --email flavien.pensato@gmail.com --agree-tos --no-eff-email --force-renewal -d flavien-pensato.fr
docker-compose exec nginx nginx -s reload
```

### Validation automatique

Le système valide maintenant automatiquement les certificats avant de les utiliser :
- Vérification de l'existence des fichiers
- Vérification du format (non vide, format valide)
- Vérification de l'expiration
- Vérification de la correspondance entre le certificat et la clé privée

Si un certificat invalide est détecté, le système basculera automatiquement en mode HTTP uniquement et tentera de régénérer le certificat.

## Notes importantes

- Assurez-vous que le domaine `flavien-pensato.fr` pointe vers le serveur avant de démarrer
- Les ports 80 et 443 doivent être ouverts et accessibles depuis Internet
- Le renouvellement automatique nécessite que les conteneurs restent en cours d'exécution
- Les certificats invalides sont automatiquement détectés et supprimés pour être régénérés

