#!/bin/bash

# Setup script to install Cloudflare Tunnel as a systemd service

echo "=========================================="
echo "Cloudflare Tunnel Service Setup"
echo "=========================================="
echo ""

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Error: cloudflared is not installed."
    echo "Please install it first:"
    echo "  curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared"
    echo "  chmod +x /usr/local/bin/cloudflared"
    exit 1
fi

# Check if tunnel config exists
if [ ! -f ~/.cloudflared/config.yml ]; then
    echo "Error: Tunnel config not found at ~/.cloudflared/config.yml"
    echo "Please set up the tunnel first."
    exit 1
fi

# Copy service file
echo "Installing systemd service..."
cp cloudflared.service /etc/systemd/system/cloudflared.service

# Reload systemd
systemctl daemon-reload

# Enable service to start on boot
systemctl enable cloudflared.service

# Start the service
systemctl start cloudflared.service

# Check status
echo ""
echo "Service status:"
systemctl status cloudflared.service --no-pager

echo ""
echo "=========================================="
echo "Cloudflare Tunnel service installed!"
echo "=========================================="
echo ""
echo "Useful commands:"
echo "  sudo systemctl status cloudflared    # Check status"
echo "  sudo systemctl restart cloudflared  # Restart service"
echo "  sudo systemctl stop cloudflared      # Stop service"
echo "  sudo journalctl -u cloudflared -f    # View logs"
echo ""

