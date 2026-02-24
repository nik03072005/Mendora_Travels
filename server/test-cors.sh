#!/bin/bash

# CORS Configuration Test Script
# Run this on your VPS to test if CORS is configured correctly

echo "🧪 Testing CORS Configuration for Mendora Travels API"
echo "======================================================"
echo ""

API_URL="https://api.mendoratravels.com"
FRONTEND_URL="https://mendoratravels.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Health check
echo "📡 Test 1: API Health Check"
echo "Testing: $API_URL/health"
HEALTH_RESPONSE=$(curl -s -w "\n%{http_code}" $API_URL/health)
HTTP_CODE=$(echo "$HEALTH_RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$HEALTH_RESPONSE" | head -n-1)

if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "${GREEN}✅ API is reachable${NC}"
    echo "Response: $RESPONSE_BODY"
else
    echo -e "${RED}❌ API is not reachable (HTTP $HTTP_CODE)${NC}"
fi

echo ""
echo "─────────────────────────────────────────────────────"
echo ""

# Test 2: OPTIONS preflight request
echo "📡 Test 2: CORS Preflight (OPTIONS) Request"
echo "Testing OPTIONS request from origin: $FRONTEND_URL"
CORS_HEADERS=$(curl -s -I -X OPTIONS $API_URL/api/tour-packages \
  -H "Origin: $FRONTEND_URL" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type,Authorization")

echo "$CORS_HEADERS"
echo ""

# Check for CORS headers
if echo "$CORS_HEADERS" | grep -q "Access-Control-Allow-Origin"; then
    ALLOW_ORIGIN=$(echo "$CORS_HEADERS" | grep "Access-Control-Allow-Origin" | cut -d' ' -f2)
    echo -e "${GREEN}✅ Access-Control-Allow-Origin header found${NC}"
    echo "   Value: $ALLOW_ORIGIN"
else
    echo -e "${RED}❌ Access-Control-Allow-Origin header NOT found${NC}"
    echo -e "${YELLOW}⚠️  This means CORS is not configured or server is not running!${NC}"
fi

echo ""
echo "─────────────────────────────────────────────────────"
echo ""

# Test 3: Actual GET request
echo "📡 Test 3: Actual GET Request with Origin Header"
echo "Testing: $API_URL/health"
ACTUAL_RESPONSE=$(curl -s -I -X GET $API_URL/health \
  -H "Origin: $FRONTEND_URL")

if echo "$ACTUAL_RESPONSE" | grep -q "Access-Control-Allow-Origin"; then
    echo -e "${GREEN}✅ CORS headers present in actual request${NC}"
else
    echo -e "${RED}❌ CORS headers missing in actual request${NC}"
fi

echo ""
echo "─────────────────────────────────────────────────────"
echo ""

# Test 4: Check environment variables
echo "🔍 Test 4: Server Configuration Check"
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env file exists${NC}"
    
    if grep -q "ALLOWED_ORIGINS" .env; then
        ALLOWED=$(grep "ALLOWED_ORIGINS" .env | cut -d'=' -f2)
        echo -e "${GREEN}✅ ALLOWED_ORIGINS found in .env${NC}"
        echo "   Value: $ALLOWED"
        
        if echo "$ALLOWED" | grep -q "mendoratravels.com"; then
            echo -e "${GREEN}✅ Production domain is included${NC}"
        else
            echo -e "${RED}❌ Production domain (mendoratravels.com) is NOT included!${NC}"
            echo -e "${YELLOW}⚠️  Add this to .env:${NC}"
            echo "   ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com"
        fi
    else
        echo -e "${RED}❌ ALLOWED_ORIGINS not found in .env${NC}"
        echo -e "${YELLOW}⚠️  Add this to .env:${NC}"
        echo "   ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com"
    fi
else
    echo -e "${RED}❌ .env file not found!${NC}"
    echo -e "${YELLOW}⚠️  Create .env file with production configuration${NC}"
fi

echo ""
echo "─────────────────────────────────────────────────────"
echo ""

# Test 5: Check if server process is running
echo "🔍 Test 5: Server Process Check"
if command -v pm2 &> /dev/null; then
    echo "Checking PM2 processes..."
    pm2 list
    echo ""
    if pm2 list | grep -q "online"; then
        echo -e "${GREEN}✅ Server is running via PM2${NC}"
    else
        echo -e "${YELLOW}⚠️  No online processes in PM2${NC}"
    fi
else
    echo "PM2 not installed. Checking for node processes..."
    if pgrep -f "node.*server.js" > /dev/null; then
        echo -e "${GREEN}✅ Node server process is running${NC}"
    else
        echo -e "${RED}❌ No node server process found!${NC}"
        echo "   Start the server with: npm start or pm2 start server.js"
    fi
fi

echo ""
echo "─────────────────────────────────────────────────────"
echo ""

# Summary
echo "📊 Test Summary"
echo "==============="
echo ""
echo "Next steps if tests failed:"
echo "1. Make sure server is running: pm2 status"
echo "2. Check .env has ALLOWED_ORIGINS with production domains"
echo "3. Restart server: pm2 restart all"
echo "4. Check server logs: pm2 logs"
echo "5. Verify Nginx is forwarding requests correctly"
echo ""
echo "For detailed help, read: QUICK_FIX_CORS.md"
echo ""
