# VPS Deployment Guide - Quick Fix for CORS Error

## 🔴 Current Problem
```
Access to XMLHttpRequest at 'https://api.mendoratravels.com/api/tour-packages' 
from origin 'https://mendoratravels.com' has been blocked by CORS policy
```

## ✅ Quick Fix (Do this on your VPS)

### Step 1: SSH into your VPS
```bash
ssh root@your-vps-ip
# or
ssh username@your-vps-ip
```

### Step 2: Navigate to server directory
```bash
cd /path/to/mendora_travels/server
# Example: cd /var/www/mendora_travels/server
```

### Step 3: Edit .env file
```bash
nano .env
```

### Step 4: Update ALLOWED_ORIGINS
Find the line with `ALLOWED_ORIGINS` and update it to:
```env
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com
```

If the line doesn't exist, add it at the bottom of the file.

Press `Ctrl + X`, then `Y`, then `Enter` to save and exit.

### Step 5: Restart the server

#### If using PM2:
```bash
pm2 restart all
```

#### If using systemd:
```bash
sudo systemctl restart mendora-api
```

#### If running with node directly:
```bash
# Find the process
ps aux | grep node

# Kill the process
kill -9 <process-id>

# Start again
npm start
# or
node server.js
```

### Step 6: Test the fix
Open your browser and go to: `https://mendoratravels.com`

Try adding a package again. The CORS error should be gone!

---

## 🚀 Recommended: Deploy with PM2

If you're not using PM2, here's how to set it up:

### 1. Install PM2 globally
```bash
npm install -g pm2
```

### 2. Use the deployment script
```bash
cd /path/to/mendora_travels/server
chmod +x deploy-vps.sh
./deploy-vps.sh
```

### 3. Or manually start with PM2
```bash
# Start the server
pm2 start server.js --name mendora-api

# Set environment to production
pm2 restart mendora-api --update-env

# Save PM2 process list
pm2 save

# Setup auto-restart on server reboot
pm2 startup
```

---

## 🔍 Verify Configuration

### Check if CORS headers are being sent:
```bash
curl -I -X OPTIONS https://api.mendoratravels.com/api/tour-packages \
  -H "Origin: https://mendoratravels.com" \
  -H "Access-Control-Request-Method: POST"
```

You should see:
```
Access-Control-Allow-Origin: https://mendoratravels.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
```

---

## 📝 Complete .env Template for VPS

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mendora_travels

# JWT Configuration
JWT_SECRET=your-secure-jwt-secret-here

# Cloudflare R2 Configuration
CLOUDFLARE_ACCOUNT_ID=695c49d4bbb772bac278a07e59bb1ef8
R2_ACCESS_KEY_ID=7a62cc3fbc09885750752ec4f20a1516
R2_SECRET_ACCESS_KEY=9341a1aa4bed9555371fd52a68c082d15abc9ae70383c8e8a3b91269e1ccd053
R2_BUCKET_NAME=mendora
R2_PUBLIC_DOMAIN=files.mendoratravels.com
CLOUDFLAIRE_URL_PREFIX=https://files.mendoratravels.com

# Redis Configuration
REDIS_URL=https://thorough-macaw-13532.upstash.io
REDIS_TOKEN=ATTcAAIjcDFkZGM1ZDAzMTRhYzk0OGRlYWU4YTViODRmM2IwYzU2YnAxMA

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# CORS Configuration - IMPORTANT!
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com
```

---

## 🛠️ Troubleshooting

### Issue: Still seeing CORS error after restart
```bash
# Check if process actually restarted
pm2 status

# Check server logs
pm2 logs mendora-api

# Check if environment variable is loaded
pm2 env mendora-api | grep ALLOWED_ORIGINS
```

### Issue: Server not starting
```bash
# Check logs
pm2 logs

# Check if MongoDB is running
sudo systemctl status mongod

# Check if port 3000 is already in use
sudo lsof -i :3000

# Kill process on port 3000 if needed
sudo kill -9 $(lsof -t -i:3000)
```

### Issue: Nginx showing errors
```bash
# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log
```

---

## 📞 PM2 Commands Reference

```bash
# View all processes
pm2 status

# View logs
pm2 logs

# Restart
pm2 restart mendora-api

# Stop
pm2 stop mendora-api

# Delete process
pm2 delete mendora-api

# Monitor
pm2 monit

# View specific app logs
pm2 logs mendora-api

# View environment variables
pm2 env mendora-api
```

---

## ✅ Success Checklist

- [ ] `.env` file has `ALLOWED_ORIGINS` with production domains
- [ ] Server restarted after updating `.env`
- [ ] MongoDB is running and connected
- [ ] Port 3000 is open in firewall
- [ ] Nginx is proxying correctly to localhost:3000
- [ ] SSL certificates are valid
- [ ] Browser can access both frontend and API
- [ ] No CORS errors in browser console

---

After following these steps, your CORS error should be resolved! 🎉
