#!/bin/bash

# Mendora Travels - VPS Deployment Script
# This script helps deploy the backend on VPS

echo "🚀 Mendora Travels - VPS Deployment"
echo "===================================="
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
node -v || { echo "❌ Node.js not found! Please install Node.js first."; exit 1; }

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "⚠️  PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
npm install

# Create logs directory
echo ""
echo "📁 Creating logs directory..."
mkdir -p logs

# Check if .env file exists
if [ ! -f .env ]; then
    echo ""
    echo "⚠️  .env file not found!"
    echo "Creating .env from .env.production..."
    cp .env.production .env
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file with your production credentials!"
    echo "Run: nano .env"
    read -p "Press Enter to continue after editing .env file..."
fi

# Verify ALLOWED_ORIGINS in .env
echo ""
echo "🔍 Checking ALLOWED_ORIGINS configuration..."
if grep -q "ALLOWED_ORIGINS.*mendoratravels.com" .env; then
    echo "✅ ALLOWED_ORIGINS includes mendoratravels.com"
else
    echo "❌ ALLOWED_ORIGINS missing mendoratravels.com!"
    echo ""
    echo "Adding production domains to .env..."
    echo "" >> .env
    echo "# Production CORS domains" >> .env
    echo "ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com" >> .env
fi

# Test MongoDB connection
echo ""
echo "🔌 Testing MongoDB connection..."
node -e "
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('✅ MongoDB connected!'); process.exit(0); })
  .catch(err => { console.log('❌ MongoDB connection failed:', err.message); process.exit(1); });
" || echo "⚠️  MongoDB connection test failed. Check MONGODB_URI in .env"

# Start with PM2
echo ""
echo "🔄 Starting server with PM2..."
pm2 start ecosystem.config.cjs --env production

# Save PM2 process list
echo ""
echo "💾 Saving PM2 process list..."
pm2 save

# Setup PM2 startup script
echo ""
echo "🔧 Setting up PM2 startup script..."
pm2 startup

echo ""
echo "✅ Deployment completed!"
echo ""
echo "📋 Useful commands:"
echo "  pm2 status         - View process status"
echo "  pm2 logs           - View logs"
echo "  pm2 restart all    - Restart server"
echo "  pm2 stop all       - Stop server"
echo "  pm2 delete all     - Remove from PM2"
echo ""
echo "🌐 Server should be running on port 3000"
echo "   Make sure your firewall allows port 3000"
echo "   and Nginx is configured to proxy to localhost:3000"
echo ""
