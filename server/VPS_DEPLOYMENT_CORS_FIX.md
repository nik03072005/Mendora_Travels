# VPS Deployment - CORS Configuration Fix

## Problem
```
Access to XMLHttpRequest at 'https://api.mendoratravels.com/api/tour-packages' 
from origin 'https://mendoratravels.com' has been blocked by CORS policy: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Solution

### 1. **Check Environment Variables on VPS**

SSH into your VPS and check if the environment variables are set correctly:

```bash
cd /path/to/your/server
cat .env
```

### 2. **Update .env File on VPS**

Make sure your `.env` file on the VPS includes the production domains in `ALLOWED_ORIGINS`:

```bash
# CORS Configuration
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com,https://api.mendoratravels.com
```

**Important**: Add ALL domains that need to access your API:
- `https://mendoratravels.com` - Main frontend
- `https://www.mendoratravels.com` - WWW version
- `https://api.mendoratravels.com` - API domain (if needed for self-access)

### 3. **Method to Update on VPS**

#### Option A: Edit directly on VPS
```bash
nano .env
# or
vi .env
```

Add/Update this line:
```
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com
```

#### Option B: Use .env.production file
```bash
# Copy production env file
cp .env.production .env

# Or set NODE_ENV to production
export NODE_ENV=production
```

### 4. **Restart the Server**

After updating the environment variables, restart your Node.js server:

#### If using PM2:
```bash
pm2 restart all
# or specific app
pm2 restart server
```

#### If using systemd:
```bash
sudo systemctl restart mendora-api
```

#### If using node directly:
```bash
# Stop the current process (Ctrl+C) and restart
npm start
# or
node server.js
```

### 5. **Verify CORS Configuration**

Test if CORS is working by making a request from browser console:

```javascript
fetch('https://api.mendoratravels.com/health')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
```

### 6. **Check Server Logs**

View server logs to ensure it picked up the new configuration:

```bash
# If using PM2
pm2 logs

# If using systemd
sudo journalctl -u mendora-api -f

# If using screen/tmux
# Check the terminal where server is running
```

### 7. **Additional Nginx Configuration (if applicable)**

If you're using Nginx as a reverse proxy, ensure CORS headers aren't being stripped:

```nginx
# /etc/nginx/sites-available/api.mendoratravels.com

server {
    listen 443 ssl;
    server_name api.mendoratravels.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # IMPORTANT: Let Node.js handle CORS headers
        # Don't add CORS headers here if your Express app already handles them
    }
}
```

Reload Nginx after changes:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Quick Checklist

- [ ] `.env` file on VPS has correct `ALLOWED_ORIGINS`
- [ ] Server is restarted after env changes
- [ ] No firewall blocking the API domain
- [ ] SSL certificates are valid for both domains
- [ ] Nginx (if used) is not interfering with CORS headers
- [ ] Check browser console for actual error details

---

## Testing Commands

### 1. Test API health endpoint:
```bash
curl -I https://api.mendoratravels.com/health
```

### 2. Test CORS headers:
```bash
curl -I -X OPTIONS https://api.mendoratravels.com/api/tour-packages \
  -H "Origin: https://mendoratravels.com" \
  -H "Access-Control-Request-Method: POST"
```

Expected response should include:
```
Access-Control-Allow-Origin: https://mendoratravels.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## Common Issues

### Issue 1: Still seeing CORS error after restart
**Solution**: Clear browser cache or test in incognito mode

### Issue 2: Works locally but not on VPS
**Solution**: Check if VPS firewall (ufw/iptables) is blocking requests

### Issue 3: CORS works but 500 errors
**Solution**: Check MongoDB connection and other env variables

---

## Current Configuration

Your `.env.production` file already has the correct setup:
```
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com
```

Make sure this is used on your VPS!
