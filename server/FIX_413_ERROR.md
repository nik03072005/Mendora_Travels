# 🚨 FIX: 413 Content Too Large Error

## Problem Analysis

You're seeing TWO errors:
```
1. ❌ CORS error (misleading symptom)
2. ❌ 413 Content Too Large (REAL ISSUE)
```

The **413 error** happens FIRST, causing the CORS error to appear. The root cause is **Nginx's default 1MB body size limit** on your VPS.

---

## Why This Happens

### Request Flow:
```
Frontend → Nginx (VPS) → Express Server → MongoDB
           ↑
         BLOCKS HERE (413)
         Request too large!
```

### Default Limits:
- **Nginx default:** `client_max_body_size 1M` ❌ TOO SMALL
- **Express default:** `express.json()` no limit for multipart ✅
- **Multer config:** 5MB per file, 60 files max ✅

When uploading multiple images:
- 10 package images × 2MB each = 20MB
- Day images × 1MB each = additional MBs
- **Total request:** 30-50MB

**Result:** Nginx blocks at 1MB → 413 error → Browser shows CORS error

---

## ✅ SOLUTION: Fix Both Server & Nginx

### Step 1: Update Express Limits (DONE ✅)

**File:** `server/server.js`

Already updated to:
```javascript
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
```

### Step 2: Update Nginx Configuration (VPS)

#### Option A: Quick Fix (Update existing file)

```bash
# SSH into VPS
ssh your-vps

# Edit Nginx site config
sudo nano /etc/nginx/sites-available/api.mendoratravels.com
```

**Add this line inside the `server` block:**
```nginx
server {
    listen 443 ssl http2;
    server_name api.mendoratravels.com;
    
    # 🚀 ADD THIS LINE
    client_max_body_size 100M;  # Allow up to 100MB
    client_body_timeout 300s;    # 5 minutes for uploads
    
    # ... rest of config
}
```

**Test and reload:**
```bash
# Test configuration
sudo nginx -t

# If OK, reload
sudo systemctl reload nginx
```

#### Option B: Complete Configuration (Recommended)

Use the complete Nginx config file we created:

```bash
# On VPS, backup existing config
sudo cp /etc/nginx/sites-available/api.mendoratravels.com /etc/nginx/sites-available/api.mendoratravels.com.backup

# Upload new config from repository
# Method 1: Use git pull
cd /path/to/Mendora_Travels
git pull origin main
sudo cp server/nginx-api.conf /etc/nginx/sites-available/api.mendoratravels.com

# Method 2: Or manually copy content
sudo nano /etc/nginx/sites-available/api.mendoratravels.com
# Paste content from nginx-api.conf

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Verification Steps

### 1. Check Nginx Configuration
```bash
# Verify the setting is present
sudo nginx -t
sudo grep -r "client_max_body_size" /etc/nginx/sites-available/
```

**Expected output:**
```
client_max_body_size 100M;
```

### 2. Restart Services
```bash
# Restart Nginx
sudo systemctl restart nginx

# Restart Node.js (if code changed)
cd /path/to/Mendora_Travels/server
pm2 restart all
```

### 3. Test Upload from Frontend

Go to: `https://mendoratravels.com/admin/add-package`

**Test Case 1:** Upload 5 images (small ~500KB each)
- Expected: ✅ Success

**Test Case 2:** Upload 10 images (large ~2MB each)  
- Before fix: ❌ 413 error
- After fix: ✅ Success

**Test Case 3:** Upload 20+ day images
- Before fix: ❌ 413 error
- After fix: ✅ Success

---

## Understanding the Error

### What You Saw:
```javascript
// Browser Console Error:
Access to XMLHttpRequest at 'https://api.mendoratravels.com/api/tour-packages' 
from origin 'https://mendoratravels.com' has been blocked by CORS policy

POST https://api.mendoratravels.com/api/tour-packages net::ERR_FAILED 413
```

### What Actually Happened:

1. ✅ Frontend creates FormData with images
2. ✅ Frontend sends POST request
3. ❌ **Nginx blocks:** "Request body too large (50MB > 1MB limit)"
4. ❌ Returns 413 error
5. ❌ No CORS headers in 413 response (Nginx doesn't add them)
6. ❌ Browser sees missing CORS headers → Shows CORS error

**The CORS error is a red herring!** The real issue is the 413.

---

## Additional Nginx Tweaks

If you still have issues after increasing `client_max_body_size`, add these:

```nginx
server {
    # ... existing config
    
    # Buffer settings
    client_max_body_size 100M;         # Max request size
    client_body_buffer_size 10M;       # Buffer size
    client_body_timeout 300s;          # Upload timeout (5 min)
    
    # Proxy timeouts (for file processing)
    proxy_connect_timeout 300s;
    proxy_send_timeout 300s;
    proxy_read_timeout 300s;
    
    # Disable buffering for large uploads
    proxy_buffering off;
    proxy_request_buffering off;
}
```

---

## Common Issues & Solutions

### Issue 1: Still getting 413 after Nginx update

**Check:**
```bash
# 1. Verify config is loaded
sudo nginx -s reload

# 2. Check for other Nginx configs
sudo grep -r "client_max_body_size" /etc/nginx/

# 3. Look for conflicting settings
sudo cat /etc/nginx/nginx.conf | grep client_max_body_size
```

**Solution:** The http block setting overrides server block. Update both:
```nginx
# In /etc/nginx/nginx.conf
http {
    client_max_body_size 100M;  # Global setting
    
    # ... include sites
}
```

### Issue 2: Nginx config test fails

```bash
sudo nginx -t
# Shows syntax error
```

**Solutions:**
- Check for missing semicolons `;`
- Verify SSL certificate paths exist
- Ensure upstream server is defined
- Check brackets `{}` are balanced

### Issue 3: Still seeing CORS error (not 413)

This means Nginx IS working, but Express CORS is blocking.

**Check frontend origin:**
```javascript
// Should match exactly
CORS_ORIGIN in .env.production: https://mendoratravels.com
Frontend URL: https://mendoratravels.com
```

**Fix:** Update `.env.production`:
```bash
ALLOWED_ORIGINS=https://mendoratravels.com,https://www.mendoratravels.com
```

---

## Monitoring After Fix

### Check Nginx Logs
```bash
# Watch access logs
sudo tail -f /var/log/nginx/api.mendoratravels.com.access.log

# Watch error logs
sudo tail -f /var/log/nginx/api.mendoratravels.com.error.log
```

### Check Express/PM2 Logs
```bash
pm2 logs mendora-api --lines 50
```

### Successful Upload Logs Should Show:
```
✅ Nginx: POST /api/tour-packages - 201 (no 413)
✅ Express: Package created successfully
✅ R2: Images uploaded to cloud storage
✅ MongoDB: Package saved with image URLs
```

---

## Architecture After Fix

```
┌─────────────────────────────────────────────────────┐
│ Frontend (mendoratravels.com)                       │
│ - Creates FormData with images (30-50MB)            │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│ Nginx (api.mendoratravels.com)                      │
│ ✅ client_max_body_size 100M  (was 1M)              │
│ ✅ Allows large requests                             │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│ Express Server (PORT 7000)                          │
│ ✅ express.json({ limit: '50mb' })                  │
│ ✅ Multer: 5MB per file, 60 files max               │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│ Cloudflare R2                                        │
│ ✅ Stores images, returns URLs                       │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│ MongoDB                                              │
│ ✅ Stores only URLs (not files/base64)              │
└─────────────────────────────────────────────────────┘
```

---

## Summary

### What We Fixed:

1. ✅ **Express:** Increased JSON/URL-encoded limits to 50MB
2. ✅ **Nginx Config:** Created complete config with 100MB limit
3. ✅ **Documentation:** This guide for VPS deployment

### What You Need to Do:

1. **Git pull** on VPS to get updated server.js
2. **Update Nginx** configuration with client_max_body_size
3. **Restart** both Nginx and PM2
4. **Test** package creation with multiple images

### Success Criteria:

- ❌ No 413 errors
- ❌ No CORS errors (unless actual CORS issue)
- ✅ Multiple images upload successfully
- ✅ Large packages (50MB+) work fine

---

## Quick Commands Reference

```bash
# Update code
cd /path/to/Mendora_Travels && git pull origin main

# Update Nginx
sudo nano /etc/nginx/sites-available/api.mendoratravels.com
# Add: client_max_body_size 100M;

# Test & reload
sudo nginx -t && sudo systemctl reload nginx

# Restart Node.js
cd server && pm2 restart all

# Monitor
pm2 logs --lines 50
sudo tail -f /var/log/nginx/*.log
```

---

## Need More Help?

1. **Check Nginx docs:** https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size
2. **Check Express docs:** https://expressjs.com/en/api.html#express.json
3. **Check Multer docs:** https://github.com/expressjs/multer#limits

**Still having issues?** Share:
- Nginx error logs: `sudo tail -100 /var/log/nginx/error.log`
- PM2 logs: `pm2 logs --lines 50 --err`
- Browser console screenshot
