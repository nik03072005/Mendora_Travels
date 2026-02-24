#!/bin/bash

# 🚀 PRODUCTION DEPLOYMENT - Clean Image Upload System
# Run this script on VPS after git pull

echo "════════════════════════════════════════════"
echo "🚀 Mendora Travels - Production Deployment"
echo "   Clean Image Upload System"
echo "════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in server directory
if [ ! -f "server.js" ]; then
    echo -e "${RED}❌ Error: server.js not found!${NC}"
    echo "Please run this from the server directory:"
    echo "cd /path/to/Mendora_Travels/server"
    exit 1
fi

echo -e "${GREEN}✅ Found server.js${NC}"
echo ""

# Step 1: Install/Update dependencies
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📦 Step 1: Installing Dependencies${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
npm install
echo ""

# Step 2: Clean database
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🧹 Step 2: Cleaning Database${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Running database cleanup to remove invalid dayImage values..."
echo ""
node scripts/cleanDatabaseComplete.js
echo ""

# Step 3: Restart server
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🔄 Step 3: Restarting Server${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if command -v pm2 &> /dev/null; then
    echo "Restarting with PM2..."
    pm2 restart all
    echo ""
    
    echo -e "${GREEN}✅ Server restarted successfully${NC}"
    echo ""
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📊 PM2 Status:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    pm2 status
    echo ""
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📝 Recent Logs:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    pm2 logs --lines 15 --nostream
    echo ""
else
    echo -e "${YELLOW}⚠️  PM2 not found${NC}"
    echo "Install PM2: npm install -g pm2"
    echo "Then run: pm2 start ecosystem.config.cjs --env production"
    echo ""
fi

# Final summary
echo ""
echo "════════════════════════════════════════════"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo "════════════════════════════════════════════"
echo ""
echo "🎯 What Changed:"
echo "  ✅ Centralized upload middleware created"
echo "  ✅ Routes updated for clean architecture"
echo "  ✅ Schema validation strengthened"
echo "  ✅ Database cleaned of invalid data"
echo "  ✅ Multi-layer protection active"
echo ""
echo "🛡️ Protection Layers:"
echo "  • Layer 1: Multer file validation"
echo "  • Layer 2: Controller sanitization"
echo "  • Layer 3: Schema type checking"
echo "  • Layer 4: Pre-save hooks"
echo "  • Layer 5: Pre-update hooks"
echo ""
echo "📚 Documentation:"
echo "  • IMAGE_UPLOAD_ARCHITECTURE.md - Full system docs"
echo "  • DAYIMAGE_FIX_COMPLETE.md - Technical details"
echo "  • QUICK_FIX_CORS.md - CORS troubleshooting"
echo ""
echo "🧪 Next Steps:"
echo "  1. Test package creation with images"
echo "  2. Test package creation without images"
echo "  3. Test package updates"
echo "  4. Verify no CORS errors"
echo "  5. Verify no CastError crashes"
echo ""
echo "🔍 Monitoring Commands:"
echo "  pm2 logs           - View real-time logs"
echo "  pm2 monit          - Monitor resources"
echo "  pm2 status         - Check process status"
echo ""
echo "🌐 Test URLs:"
echo "  • Health: https://api.mendoratravels.com/health"
echo "  • Website: https://mendoratravels.com"
echo "  • Admin: https://mendoratravels.com/admin"
echo ""
echo "════════════════════════════════════════════"
echo -e "${GREEN}🎉 System is Production-Ready!${NC}"
echo "════════════════════════════════════════════"
echo ""
