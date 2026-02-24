# 🚀 VPS Deployment Checklist

## Pre-Deployment Verification

### ✅ Code Review
- [x] Phone number updated to +91 9147144627
- [x] Centralized upload middleware created (`middleware/upload.js`)
- [x] Routes cleaned and deduplicated
- [x] Schema validation strengthened with custom validator
- [x] Old base64 code deprecated in `services/upload.js`
- [x] Database cleanup script ready (`scripts/cleanDatabaseComplete.js`)
- [x] No compilation errors
- [x] All documentation complete

### ✅ Environment Configuration
- [ ] `.env.production` present on VPS with:
  - `NODE_ENV=production`
  - `PORT=7000`
  - `MONGODB_URI` (production database)
  - `CORS_ORIGIN` with correct domains
  - R2 credentials (account ID, access key, secret key, bucket name)
  - JWT secret
  - Email service credentials

### ✅ Dependencies
- [ ] Node.js v18+ installed
- [ ] MongoDB accessible (local or cloud)
- [ ] PM2 installed globally: `npm install -g pm2`
- [ ] Git configured for repository access
- [ ] Nginx installed (if using reverse proxy)

### ✅ Nginx Configuration (VPS Only)
- [ ] `client_max_body_size 30M;` set in server block
- [ ] Multer enforces 5MB per file limit (main protection)
- [ ] Nginx reloaded after configuration changes
- [ ] No 413 errors in Nginx logs
- [ ] SSL certificates valid and not expired

---

## Deployment Steps

### 1️⃣ Pull Latest Code
```bash
cd /path/to/Mendora_Travels
git pull origin main
```

**Expected Output:**
```
Updating abc123..def456
Fast-forward
 server/middleware/upload.js           | 45 +++++++++++++++++
 server/routes/tourPackageRoutes.js    | 15 +-----
 server/models/TourPackage.js          | 12 +++--
 ... (other changed files)
```

---

### 2️⃣ Navigate to Server Directory
```bash
cd server
```

---

### 2.5️⃣ Update Nginx Configuration (VPS with Nginx ONLY)

**CRITICAL:** If your VPS uses Nginx as reverse proxy, you MUST increase body size limit:

```bash
# Edit Nginx config
sudo nano /etc/nginx/sites-available/api.mendoratravels.com

# Add this inside server block:
client_max_body_size 30M;  # Total request (~10-15 images × 2-3MB each)
client_body_timeout 120s;   # 2 minutes for uploads

# Note: Individual files are limited to 5MB by Multer (protects against 2.5GB mistakes!)

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

**Or use complete config:**
```bash
# Copy our optimized configuration
sudo cp nginx-api.conf /etc/nginx/sites-available/api.mendoratravels.com
sudo nginx -t && sudo systemctl reload nginx
```

**Without this step, you'll get 413 Content Too Large errors!**

See [FIX_413_ERROR.md](./FIX_413_ERROR.md) for detailed guide.

---

### 3️⃣ Run Deployment Script

**For Linux/Mac VPS:**
```bash
chmod +x deploy-production.sh
./deploy-production.sh
```

**For Windows VPS:**
```powershell
.\deploy-production.ps1
```

**Or Manual Steps:**

```bash
# Install dependencies
npm install

# Clean database
node scripts/cleanDatabaseComplete.js

# Restart server
pm2 restart all

# Check status
pm2 status
pm2 logs --lines 20
```

---

### 4️⃣ Verify Deployment

#### Check Server Status
```bash
pm2 status
```

**Expected Output:**
```
┌────┬────────────────┬─────────┬─────────┬─────────┬──────────┐
│ id │ name           │ mode    │ status  │ cpu     │ memory   │
├────┼────────────────┼─────────┼─────────┼─────────┼──────────┤
│ 0  │ mendora-api    │ cluster │ online  │ 0%      │ 45.2mb   │
└────┴────────────────┴─────────┴─────────┴─────────┴──────────┘
```

#### Check Logs
```bash
pm2 logs mendora-api --lines 30
```

**Watch For:**
- ✅ `Server running on PORT 7000`
- ✅ `MongoDB connected successfully`
- ✅ `CORS enabled for origins: https://mendoratravels.com, https://www.mendoratravels.com`
- ❌ NO CastError messages
- ❌ NO 413 Payload errors
- ❌ NO schema validation errors

#### Test Health Endpoint
```bash
curl https://api.mendoratravels.com/health
```

**Expected Response:**
```json
{"status":"ok","timestamp":"2024-01-15T10:30:00.000Z"}
```

---

## Post-Deployment Testing

### Test 1: Create Package WITH dayImages ✅
1. Go to Admin Panel: `https://mendoratravels.com/admin`
2. Login with admin credentials
3. Click "Add New Package"
4. Fill all required fields
5. In Itinerary section, upload images for Day 1, Day 2, etc.
6. Click "Save Package"

**Expected Outcome:**
- ✅ Package created successfully
- ✅ Images uploaded to R2
- ✅ URLs stored in database (not files or base64)
- ✅ Package displays correctly on frontend

**Check Database:**
```javascript
db.tourpackages.findOne({}, {tripSummary: 1}).pretty()
// Should show:
{
  "tripSummary": [
    {
      "day": "Day 1",
      "title": "Arrival in Kashmir",
      "description": "...",
      "dayImage": "https://files.mendoratravels.com/tours/kashmir/day1.jpg" // URL string
    }
  ]
}
```

---

### Test 2: Create Package WITHOUT dayImages ✅
1. Add new package
2. Fill required fields
3. In Itinerary section, do NOT upload any dayImages
4. Click "Save Package"

**Expected Outcome:**
- ✅ Package created successfully
- ✅ No upload errors
- ✅ dayImage fields are `null` (not empty objects or empty strings)
- ✅ No server crashes

**Check Database:**
```javascript
db.tourpackages.findOne({}, {tripSummary: 1}).pretty()
// Should show:
{
  "tripSummary": [
    {
      "day": "Day 1",
      "title": "Arrival",
      "description": "...",
      "dayImage": null // NOT {} or ""
    }
  ]
}
```

---

### Test 3: Update Existing Package ✅
1. Go to admin panel
2. Edit an existing package
3. Add new dayImages to days that didn't have them
4. Update some day descriptions
5. Click "Update Package"

**Expected Outcome:**
- ✅ Package updated successfully
- ✅ New images uploaded to R2
- ✅ Existing images preserved
- ✅ All validations pass

---

### Test 4: Invalid File Upload (Should Reject) ✅
1. Try to upload:
   - PDF file as dayImage
   - Video file as dayImage
   - File > 5MB as dayImage

**Expected Outcome:**
- ✅ Multer rejects with clear error message
- ✅ Server does NOT crash
- ✅ Error displayed to user: "Only image files allowed" or "File too large"

---

### Test 5: Frontend Display ✅
1. Visit package page: `https://mendoratravels.com/packages/kashmir`
2. Expand itinerary sections
3. Check day images display

**Expected Outcome:**
- ✅ Images load from R2 CDN
- ✅ Days without images show default placeholder
- ✅ No broken image icons
- ✅ No console errors

---

## Monitoring & Maintenance

### Daily Health Checks
```bash
# Check server status
pm2 status

# Check recent logs
pm2 logs --lines 50 | grep -i "error\|warning"

# Check memory usage
pm2 monit
```

### Weekly Database Audit
```bash
# Check for any invalid dayImage values (should be 0 after cleanup)
node scripts/cleanDatabaseComplete.js
```

### Log Rotation
```bash
# PM2 automatic log rotation (recommended)
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 50M
pm2 set pm2-logrotate:retain 7
```

---

## Rollback Plan (If Issues Occur)

### Quick Rollback
```bash
# Stop current version
pm2 stop all

# Revert code
git reset --hard HEAD~1

# Reinstall dependencies
npm install

# Start server
pm2 start ecosystem.config.cjs --env production
```

### Restore Database (If Cleanup Script Caused Issues)
```bash
# If you have MongoDB backups:
mongorestore --uri="your_mongodb_uri" --drop /path/to/backup

# Or manually fix specific package:
mongo
> use mendora_db
> db.tourpackages.updateOne(
    {_id: ObjectId("package_id")},
    {$set: {"tripSummary.$[].dayImage": null}}
  )
```

---

## Troubleshooting Guide

### Issue: PM2 shows "errored" status
```bash
# Check error logs
pm2 logs --err --lines 50

# Restart server
pm2 restart all

# If still failing, check environment
pm2 env 0  # Shows environment variables for process 0
```

### Issue: MongoDB connection failed
- Check `.env.production` has correct `MONGODB_URI`
- Verify MongoDB is running: `systemctl status mongod` (Linux)
- Check network connectivity to MongoDB host
- Verify firewall rules allow connection

### Issue: CORS errors still appearing
- Verify `CORS_ORIGIN` in `.env.production` matches frontend domain exactly
- Check browser console for exact blocked origin
- Restart server after environment changes: `pm2 restart all`

### Issue: Images not uploading to R2
- Verify R2 credentials in `.env.production`
- Check R2 bucket has public read access
- Test R2 connection: `node scripts/testR2Connection.js`
- Check network connectivity to R2 endpoint

### Issue: 413 Content Too Large Error
**THIS IS THE MOST COMMON VPS ISSUE!**

```bash
# Quick Fix:
sudo nano /etc/nginx/sites-available/api.mendoratravels.com

# Add inside server block (port 443):
client_max_body_size 30M;  # Total request size
client_body_timeout 120s;

# Test and reload:
sudo nginx -t && sudo systemctl reload nginx
```

**Full Details:** See [FIX_413_ERROR.md](./FIX_413_ERROR.md)

**Why this happens:**
- Nginx default body size: 1MB
- Multiple image uploads: 20-30MB total
- **Single file > 5MB:** Blocked by Multer (e.g., 2.5GB image ❌)
- Result: Nginx blocks → 413 error → CORS error appears

**After fix:**
- ✅ Can upload ~10-15 images per package (2-3MB each)
- ✅ Individual files limited to 5MB max
- ✅ No 413 errors for normal usage
- ✅ No misleading CORS errors

### Issue: CastError still occurring
```bash
# Run cleanup script again
node scripts/cleanDatabaseComplete.js

# Check for any invalid data
mongo
> use mendora_db
> db.tourpackages.find({"tripSummary.dayImage": {$type: "object"}}).count()
# Should return 0 after cleanup
```

---

## Success Metrics

After deployment, you should see:

✅ **Server Metrics:**
- PM2 status: "online" (not "errored" or "restarting")
- CPU usage: < 20% at idle
- Memory usage: Stable (not increasing over time)
- Uptime: Continuous (no unexpected restarts)

✅ **Error Metrics:**
- Zero CastError in logs
- Zero 413 Payload errors
- Zero schema validation errors
- CORS errors: 0

✅ **Functionality:**
- Package creation works (with and without images)
- Package updates work
- Image uploads to R2 successful
- Frontend displays packages correctly
- Admin panel fully functional

✅ **Database:**
- All dayImage values are either String URL or null
- No objects, no empty strings
- No invalid type data

---

## Documentation Reference

For detailed technical information:

1. **[IMAGE_UPLOAD_ARCHITECTURE.md](./IMAGE_UPLOAD_ARCHITECTURE.md)**
   - Complete architecture overview
   - Data flow diagrams
   - 5-layer protection system
   - Testing scenarios
   - Troubleshooting guide

2. **[DAYIMAGE_FIX_COMPLETE.md](./DAYIMAGE_FIX_COMPLETE.md)**
   - Multi-layer fix details
   - Controller sanitization logic
   - Schema hooks implementation

3. **[QUICK_FIX_CORS.md](./QUICK_FIX_CORS.md)**
   - CORS configuration guide
   - Common CORS issues
   - Environment setup

4. **[VPS_DEPLOYMENT_CORS_FIX.md](./VPS_DEPLOYMENT_CORS_FIX.md)**
   - VPS-specific deployment
   - PM2 configuration
   - Domain setup

---

## Support Contacts

**MongoDB Issues:**
- Check MongoDB docs: https://docs.mongodb.com
- Community forums: https://community.mongodb.com

**Cloudflare R2 Issues:**
- R2 docs: https://developers.cloudflare.com/r2
- Support: https://dash.cloudflare.com

**PM2 Issues:**
- PM2 docs: https://pm2.keymetrics.io
- GitHub: https://github.com/Unitech/pm2

---

## Final Notes

🎉 **Congratulations!** Your production-ready image upload system is now deployed with:

- ✅ 5-layer validation preventing ANY invalid data
- ✅ Centralized middleware following DRY principles
- ✅ Clean architecture separating concerns
- ✅ R2 cloud storage with URL-only database storage
- ✅ Zero-error guarantee through comprehensive validation

**Remember:**
- Monitor logs daily for first week
- Keep backups of database
- Document any custom changes
- Test thoroughly before announcing updates

---

**Deployment Date:** _________

**Deployed By:** _________

**PM2 Process ID:** _________

**Production URL:** https://mendoratravels.com

**API URL:** https://api.mendoratravels.com

**Status:** 🟢 Production Ready
