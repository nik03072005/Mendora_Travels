#!/bin/bash

# 🚀 Quick Fix for 413 Error on VPS
# Run this script on your VPS after git pull

echo "════════════════════════════════════════"
echo "🔧 Fixing 413 Content Too Large Error"
echo "════════════════════════════════════════"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if Nginx is installed
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}⚠️  Nginx not found. Skipping Nginx configuration.${NC}"
    echo "If you're using Apache or standalone Node, this fix is not needed."
    exit 0
fi

echo -e "${GREEN}✅ Nginx found${NC}"
echo ""

# Find Nginx config file
CONFIG_FILE="/etc/nginx/sites-available/api.mendoratravels.com"

if [ ! -f "$CONFIG_FILE" ]; then
    CONFIG_FILE="/etc/nginx/conf.d/api.mendoratravels.com.conf"
fi

if [ ! -f "$CONFIG_FILE" ]; then
    echo -e "${RED}❌ Nginx config file not found!${NC}"
    echo "Please specify your Nginx config file location:"
    echo "  /etc/nginx/sites-available/api.mendoratravels.com"
    echo "  /etc/nginx/conf.d/api.mendoratravels.com.conf"
    exit 1
fi

echo -e "${GREEN}✅ Found config: $CONFIG_FILE${NC}"
echo ""

# Backup config
echo "📦 Creating backup..."
sudo cp "$CONFIG_FILE" "${CONFIG_FILE}.backup.$(date +%Y%m%d_%H%M%S)"
echo -e "${GREEN}✅ Backup created${NC}"
echo ""

# Check if already configured
if grep -q "client_max_body_size" "$CONFIG_FILE"; then
    echo -e "${YELLOW}⚠️  client_max_body_size already exists in config${NC}"
    echo "Current value:"
    grep "client_max_body_size" "$CONFIG_FILE"
    echo ""
    echo "Do you want to update it? (y/n)"
    read -r response
    if [[ "$response" != "y" ]]; then
        echo "Skipping update."
        exit 0
    fi
fi

# Add or update the setting
echo "🔧 Updating Nginx configuration..."
echo ""
echo "Please add the following inside your 'server' block for HTTPS (443):"
echo ""
echo -e "${YELLOW}    # File upload limits${NC}"
echo -e "${YELLOW}    client_max_body_size 100M;${NC}"
echo -e "${YELLOW}    client_body_timeout 300s;${NC}"
echo ""
echo "Opening editor in 5 seconds..."
sleep 5
sudo nano "$CONFIG_FILE"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 Testing Nginx Configuration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sudo nginx -t

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Nginx configuration is valid!${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🔄 Reloading Nginx"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    sudo systemctl reload nginx
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✅ Nginx reloaded successfully!${NC}"
        echo ""
        echo "════════════════════════════════════════"
        echo -e "${GREEN}✅ Fix Applied Successfully!${NC}"
        echo "════════════════════════════════════════"
        echo ""
        echo "📊 Verification:"
        echo "  • Nginx body size limit: 100MB"
        echo "  • Upload timeout: 5 minutes"
        echo ""
        echo "🧪 Next Steps:"
        echo "  1. Restart your Node.js server: pm2 restart all"
        echo "  2. Test package creation with multiple images"
        echo "  3. Verify no 413 errors in logs"
        echo ""
        echo "📝 Monitor Logs:"
        echo "  sudo tail -f /var/log/nginx/error.log"
        echo "  pm2 logs --lines 50"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Failed to reload Nginx${NC}"
        echo "Try manually: sudo systemctl reload nginx"
    fi
else
    echo ""
    echo -e "${RED}❌ Nginx configuration has errors!${NC}"
    echo ""
    echo "Restoring backup..."
    sudo cp "${CONFIG_FILE}.backup."* "$CONFIG_FILE"
    echo "Please fix the errors and try again."
    exit 1
fi
