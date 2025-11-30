# Deployment Guide for Digital Ocean

This guide will help you deploy your Astro portfolio to a Digital Ocean server using Docker and Docker Compose.

## Prerequisites

- A Digital Ocean droplet (Ubuntu 20.04 or later recommended)
- SSH access to your server
- Docker and Docker Compose installed on your server

## Step 1: Install Docker and Docker Compose on Your Server

SSH into your Digital Ocean droplet and run:

```bash
# Update system packages
sudo apt update
sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group (optional, to run docker without sudo)
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installations
docker --version
docker-compose --version

# Log out and back in for group changes to take effect
```

## Step 2: Transfer Your Project to the Server

You can use one of these methods:

### Option A: Using Git (Recommended)
```bash
# On your server
cd ~
git clone <your-repo-url> portfolio
cd portfolio
```

### Option B: Using SCP
```bash
# From your local machine
scp -r . user@your-server-ip:/home/user/portfolio
```

## Step 3: Build and Run with Docker Compose

On your server:

```bash
cd ~/portfolio

# Build and start the containers
docker-compose up -d --build

# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 4: Configure Firewall (if needed)

```bash
# Allow HTTP traffic
sudo ufw allow 80/tcp

# If you want HTTPS later, allow HTTPS
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
```

## Step 5: Access Your Website

Your site should now be accessible at:
- `http://your-server-ip`

## Useful Commands

```bash
# Stop the containers
docker-compose down

# Restart the containers
docker-compose restart

# View logs
docker-compose logs -f

# Rebuild after code changes
docker-compose up -d --build

# Remove everything (containers, images, volumes)
docker-compose down -v --rmi all
```

## Setting Up a Domain Name (Optional)

1. Point your domain's A record to your Digital Ocean droplet IP
2. Update the `server_name` in `nginx.conf` to your domain
3. Rebuild: `docker-compose up -d --build`

## Setting Up HTTPS with Let's Encrypt (Optional)

For HTTPS, you can use Certbot with nginx:

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate (replace with your domain)
sudo certbot --nginx -d yourdomain.com

# Certbot will automatically update nginx config
# Then rebuild your container
docker-compose up -d --build
```

## Updating Your Site

When you make changes:

```bash
# Pull latest changes (if using git)
git pull

# Rebuild and restart
docker-compose up -d --build
```

## Troubleshooting

- **Port 80 already in use**: Stop any existing web server: `sudo systemctl stop apache2` or `sudo systemctl stop nginx`
- **Permission denied**: Make sure Docker is installed correctly and your user is in the docker group
- **Build fails**: Check Docker logs: `docker-compose logs`
- **Site not loading**: Check if container is running: `docker-compose ps` and check logs: `docker-compose logs web`

