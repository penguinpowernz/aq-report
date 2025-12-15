#!/bin/bash
# Quick start script for AQ Intelligence Dashboard

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NGINX_CONF="/etc/nginx/sites-available/aq-report"

echo "=========================================="
echo "AQ Intelligence Dashboard - Quick Start"
echo "=========================================="
echo ""

# Check if nginx is installed
if ! command -v nginx &> /dev/null; then
    echo "❌ nginx is not installed"
    echo "Install with: sudo apt-get install nginx"
    exit 1
fi

echo "✓ nginx is installed"

# Check if running as root (needed for nginx config)
if [ "$EUID" -eq 0 ]; then
    echo "⚠️  Running as root - will configure nginx"

    # Copy nginx config
    if [ ! -f "$NGINX_CONF" ]; then
        echo "Creating nginx configuration..."
        sed "s|/home/robert/src/golang/src/github.com/penguinpowernz/aq-report/htdocs|$SCRIPT_DIR|g" \
            "$SCRIPT_DIR/nginx.conf.example" > "$NGINX_CONF"

        # Enable site
        if [ ! -L "/etc/nginx/sites-enabled/aq-report" ]; then
            ln -s "$NGINX_CONF" /etc/nginx/sites-enabled/aq-report
        fi

        # Test configuration
        nginx -t

        # Restart nginx
        systemctl restart nginx

        echo "✓ nginx configured and restarted"
    else
        echo "✓ nginx already configured"
    fi

else
    echo "ℹ️  Not running as root - skipping nginx configuration"
    echo ""
    echo "To configure nginx, run:"
    echo "  sudo $0"
    echo ""
    echo "Or manually:"
    echo "  1. Copy nginx.conf.example to /etc/nginx/sites-available/aq-report"
    echo "  2. Update the 'root' path in the config"
    echo "  3. sudo ln -s /etc/nginx/sites-available/aq-report /etc/nginx/sites-enabled/"
    echo "  4. sudo nginx -t"
    echo "  5. sudo systemctl restart nginx"
    echo ""
fi

# Check if nginx is running
if systemctl is-active --quiet nginx; then
    echo "✓ nginx is running"

    # Get the server info
    SERVER_NAME=$(grep -E "^\s*server_name" "$SCRIPT_DIR/nginx.conf.example" | head -1 | awk '{print $2}' | tr -d ';')
    PORT=$(grep -E "^\s*listen\s+[0-9]+" "$SCRIPT_DIR/nginx.conf.example" | head -1 | awk '{print $2}' | tr -d ';')

    echo ""
    echo "=========================================="
    echo "✓ Dashboard is ready!"
    echo "=========================================="
    echo ""
    echo "Access at:"
    echo "  http://${SERVER_NAME}:${PORT}"
    echo ""
    if [ "$SERVER_NAME" = "localhost" ]; then
        echo "Or try:"
        echo "  http://127.0.0.1:${PORT}"
        echo "  http://$(hostname -I | awk '{print $1}'):${PORT}"
    fi
    echo ""
else
    echo "⚠️  nginx is not running"
    echo "Start with: sudo systemctl start nginx"
fi

echo ""
echo "=========================================="
echo "Documentation"
echo "=========================================="
echo ""
echo "See README.md for full documentation"
echo "Modify sections: js/modules/*.js"
echo "Regenerate diagrams: images/diagrams/*.dot"
echo ""
