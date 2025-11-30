#!/bin/bash

# Setup script for SSL certificate with Let's Encrypt

DOMAIN="ramzi-portfolio.duckdns.org"
EMAIL="shodmonbekov516@gmail.com"  # Replace with your email

# Create directories for certbot
mkdir -p certbot/conf
mkdir -p certbot/www

# Stop existing containers
docker-compose down

# Start nginx temporarily on port 80 for certificate validation
docker-compose -f docker-compose-https.yml up -d web

# Wait for nginx to start
sleep 5

# Get SSL certificate
docker run --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN

# Copy HTTPS nginx config
cp nginx-https.conf nginx.conf

# Restart with HTTPS
docker-compose -f docker-compose-https.yml down
docker-compose -f docker-compose-https.yml up -d

echo "SSL certificate setup complete!"
echo "Your site should now be accessible at: https://$DOMAIN:5000/ramzi-portfolio/"

