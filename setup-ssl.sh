#!/bin/bash

# Setup script for SSL certificate with Let's Encrypt using DNS-01 challenge
# This doesn't require port 80 to be available

DOMAIN="ramzi-portfolio.duckdns.org"
EMAIL="shodmonbekov516@gmail.com"  # Replace with your email

# Create directories for certbot
mkdir -p certbot/conf

echo "=========================================="
echo "DNS-01 Challenge Setup for Let's Encrypt"
echo "=========================================="
echo ""
echo "This will use DNS validation (no port 80 needed)"
echo "You'll need to manually add a TXT record to DuckDNS"
echo ""
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo ""
read -p "Press Enter to continue..."

# Get SSL certificate using DNS-01 challenge (manual)
docker run --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  certbot/certbot certonly \
  --manual \
  --preferred-challenges dns \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN

# Copy HTTPS nginx config
cp nginx-https.conf nginx.conf

# Update docker-compose to use HTTPS config
# Restart with HTTPS
docker-compose -f docker-compose-https.yml down
docker-compose -f docker-compose-https.yml up -d

echo ""
echo "=========================================="
echo "SSL certificate setup complete!"
echo "=========================================="
echo "Your site should now be accessible at:"
echo "https://$DOMAIN/ramzi-portfolio/"
echo ""
echo "Note: You may need to configure port forwarding"
echo "or use a reverse proxy if port 443 is not accessible."

