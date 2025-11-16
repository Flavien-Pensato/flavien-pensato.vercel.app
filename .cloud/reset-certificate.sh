#!/bin/bash

# Script pour supprimer et régénérer le certificat SSL

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Suppression du certificat SSL existant ==="

# Arrêter les conteneurs
echo "Arrêt des conteneurs..."
docker-compose down || true

# Trouver et supprimer les volumes de certificats
echo "Recherche et suppression des volumes de certificats..."
VOLUME_PREFIX=$(basename "$(dirname "$SCRIPT_DIR")") || echo "."
for volume in $(docker volume ls -q | grep -E "(certbot-conf|certbot-www)"); do
    echo "  Suppression du volume: $volume"
    docker volume rm "$volume" 2>/dev/null || true
done

# Supprimer le conteneur certbot-init pour forcer sa réexécution
echo "Suppression du conteneur certbot-init..."
docker rm certbot-init 2>/dev/null || true

echo ""
echo "=== Certificat supprimé avec succès ==="
echo ""
echo "Pour redémarrer et régénérer le certificat:"
echo "  docker-compose up -d"
echo ""
echo "Pour suivre les logs de génération:"
echo "  docker-compose logs -f certbot-init"
echo ""
echo "Pour vérifier que nginx a bien rechargé la configuration HTTPS:"
echo "  docker-compose logs -f nginx"

