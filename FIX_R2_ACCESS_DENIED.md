# How to Fix R2 Access Denied Error

## Problem
You're getting "Access Denied" error when trying to upload images to Cloudflare R2.

## Root Cause
Your R2 API credentials either:
1. Are incorrect/expired
2. Don't have write permissions
3. Are for a different Cloudflare account
4. The bucket name is wrong

## Step-by-Step Fix

### Step 1: Run Diagnostic Script
```powershell
cd D:\DEV\internships\Mendora_Travels\server
node scripts/testR2Connection.js
```

This will tell you exactly what's wrong:
- ✅ Can it connect to R2?
- ✅ Can it list buckets?
- ✅ Does the "mendora" bucket exist?
- ✅ Can it upload a test file?

### Step 2: Create New R2 API Token

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Navigate to R2**:
   - Click on "R2" in the left sidebar
   - Click "Manage R2 API Tokens"
3. **Create New API Token**:
   - Click "Create API Token"
   - Name: `mendora-travels-upload`
   - Permissions: **Admin Read & Write** (or at minimum: Object Read & Write)
   - TTL: Choose appropriate expiration (or "Forever")
   - Click "Create API Token"
4. **Copy the credentials**:
   - Access Key ID (looks like: `7a62cc3fbc09885750752ec4f20a1516`)
   - Secret Access Key (longer string)
   - **⚠️ Save these immediately - you can't see them again!**

### Step 3: Verify Bucket Exists

1. In Cloudflare R2 dashboard, check:
   - Is there a bucket named exactly `mendora`?
   - If not, either:
     - Create a new bucket named `mendora`, OR
     - Update your `.env` to match the actual bucket name

2. **Check bucket settings**:
   - Click on your bucket
   - Go to "Settings"
   - Under "Public Access", enable if you want images publicly accessible
   - Configure custom domain if using `files.mendoratravels.com`

### Step 4: Update .env File

Open `server/.env` and update:

```env
# Cloudflare R2 Configuration
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
R2_ACCESS_KEY_ID=your_new_access_key_id_here
R2_SECRET_ACCESS_KEY=your_new_secret_access_key_here
R2_BUCKET_NAME=mendora
R2_PUBLIC_DOMAIN=files.mendoratravels.com
CLOUDFLAIRE_URL_PREFIX=https://files.mendoratravels.com
```

**To find your Account ID**:
- In Cloudflare Dashboard → R2
- Look at the URL: `https://dash.cloudflare.com/{ACCOUNT_ID}/r2`
- Or check "Account Details" in the right sidebar

### Step 5: Restart Server

```powershell
# Stop the server (Ctrl+C)
# Start it again
cd D:\DEV\internships\Mendora_Travels\server
npm run dev
```

### Step 6: Test Again

```powershell
# Run the diagnostic script again
node scripts/testR2Connection.js
```

You should see:
```
✅ Successfully connected to R2!
✅ Bucket "mendora" is accessible
✅ Upload successful!
✅ ALL TESTS PASSED
```

### Step 7: Try Uploading Destination Image

Now go back to your admin panel and try adding/editing a destination with an image.

## Common Issues

### Issue: "Bucket not found"
**Solution**: Create a bucket named `mendora` in Cloudflare R2 dashboard

### Issue: "InvalidAccessKeyId"
**Solution**: Your R2_ACCESS_KEY_ID is wrong - regenerate API token

### Issue: "SignatureDoesNotMatch"
**Solution**: Your R2_SECRET_ACCESS_KEY is wrong - regenerate API token

### Issue: "Access Denied" even with correct credentials
**Solution**: 
1. API token permissions - must have "Object Read & Write" at minimum
2. Token might be restricted to specific buckets - check token settings
3. Make sure token is for the correct Cloudflare account

### Issue: Images upload but can't be viewed
**Solution**: 
1. Configure public access on the bucket
2. Set up custom domain (files.mendoratravels.com) in R2 settings
3. Make sure CLOUDFLAIRE_URL_PREFIX matches your R2 public URL

## Verification Checklist

- [ ] Can run `node scripts/testR2Connection.js` without errors
- [ ] Diagnostic script shows all buckets including "mendora"
- [ ] Test file uploads successfully
- [ ] Can access test file URL in browser
- [ ] Server restarts without errors
- [ ] Can add destination with image in admin panel
- [ ] Image URL is saved to database
- [ ] Image displays correctly when viewing/editing destination

## Still Having Issues?

Run the diagnostic script and share the output. It will tell us exactly what's wrong!
