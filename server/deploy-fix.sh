#!/bin/bash

# 🚀 Quick VPS Deployment - DayImage Fix
# Run this after git pull on VPS

echo "🚀 Mendora Travels - DayImage Fix Deployment"
echo "============================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if we're in the right directory
if [ ! -f "server.js" ]; then
    echo -e "${RED}❌ Error: server.js not found!${NC}"
    echo "Make sure you're in the server directory:"
    echo "cd /path/to/Mendora_Travels/server"
    exit 1
fi

echo -e "${GREEN}✅ Found server.js${NC}"
echo ""

# Step 2: Check Node.js
echo "📦 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found!${NC}"
    exit 1
fi
node -v
echo ""

# Step 3: Install dependencies
echo "📥 Installing dependencies..."
npm install
echo ""

# Step 4: Run cleanup script
echo "🧹 Cleaning up invalid dayImage values in database..."
echo ""
node scripts/cleanupDayImages.js
echo ""

# Step 5: Check if PM2 is installed
if command -v pm2 &> /dev/null; then
    echo "🔄 Restarting server with PM2..."
    pm2 restart all
    echo ""
    
    echo "📊 PM2 Status:"
    pm2 status
    echo ""
    
    echo "📝 Recent logs:"
    pm2 logs --lines 20 --nostream
    echo ""
else
    echo -e "${YELLOW}⚠️  PM2 not found. Install it with: npm install -g pm2${NC}"
    echo "Then start server with: pm2 start ecosystem.config.cjs --env production"
    echo ""
fi

# Step 6: Final checks
echo ""
echo "═══════════════════════════════════════════"
echo "✅ Deployment Complete!"
echo "═══════════════════════════════════════════"
echo ""
echo "🔍 Verify deployment:"
echo "1. Check server logs: pm2 logs"
echo "2. Test health endpoint: curl https://api.mendoratravels.com/health"
echo "3. Try creating/editing packages on website"
echo ""
echo "📚 Documentation:"
echo "- DAYIMAGE_FIX_COMPLETE.md - Full details about the fix"
echo "- QUICK_FIX_CORS.md - CORS troubleshooting"
echo ""
echo "🎯 Expected behavior:"
echo "✅ No more CORS errors"
echo "✅ No more CastError crashes"
echo "✅ Packages can be created/updated without dayImages"
echo "✅ Invalid dayImages automatically convert to null"
echo ""
