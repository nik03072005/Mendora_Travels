# Setup Custom Domain for R2 Bucket

## Goal
Configure `files.mendoratravels.com` to serve files from your Cloudflare R2 bucket named "mendora".

## Prerequisites
- Cloudflare account with R2 enabled
- Domain `mendoratravels.com` managed in Cloudflare
- R2 bucket "mendora" already created
- R2 API token with Admin Read & Write permissions

## Steps to Configure Custom Domain

### Step 1: Enable Public Access on R2 Bucket
1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/
2. Navigate to **R2** in the sidebar
3. Click on your bucket: **mendora**
4. Go to **Settings** tab
5. Scroll to **Public Access** section
6. Click **Connect Domain** or **Allow Access**
7. Enable public read access for the bucket

### Step 2: Add Custom Domain to R2 Bucket
1. Still in the **mendora** bucket settings
2. Find **Custom Domains** section
3. Click **Connect Domain**
4. Enter: `files.mendoratravels.com`
5. Click **Continue**
6. Cloudflare will automatically create a CNAME record pointing to your R2 bucket
7. Wait for DNS propagation (can take 5-15 minutes)

### Step 3: Verify Domain Configuration
Test in browser or use curl:
```bash
curl -I https://files.mendoratravels.com/images/test.jpg
```

Should return:
- **200 OK** if the file exists
- **404 Not Found** if file doesn't exist (but domain is working)
- **Not 521, 522, or certificate errors** (means domain is properly configured)

### Step 4: Update All Database URLs
Once domain is working, run migration script:
```bash
cd server
node scripts/migrateToCustomDomain.js
```

### Step 5: Restart Servers
```powershell
# Kill all node processes
Stop-Process -Name node -Force

# Start backend
cd server
npm run dev

# Start frontend (in new terminal)
cd frontend  
npm run dev
```

## Troubleshooting

### Issue: 404 on files.mendoratravels.com
**Cause**: Domain not connected or public access not enabled
**Fix**: Go back to Step 1 & 2, ensure public access is enabled

### Issue: 521/522 Errors
**Cause**: DNS not propagated or CNAME not created
**Fix**: Wait 15-30 minutes for DNS propagation, check Cloudflare DNS records

### Issue: Certificate errors
**Cause**: SSL certificate not issued yet
**Fix**: Cloudflare automatically issues certificates, wait a few minutes

### Issue: Works in browser but not in code
**Cause**: Server hasn't reloaded .env
**Fix**: Restart backend server (Step 5)

## Verification Checklist
- [ ] Public access enabled on "mendora" bucket
- [ ] Custom domain `files.mendoratravels.com` connected
- [ ] DNS propagated (test with curl)
- [ ] Migration script completed successfully
- [ ] Backend server restarted
- [ ] Frontend can load images from files.mendoratravels.com
- [ ] Admin panel can upload new images successfully

## Important Notes
- Custom domain requires your domain to be managed by Cloudflare
- If `mendoratravels.com` is not in Cloudflare, you need to:
  1. Add nameservers to your domain registrar
  2. Wait for nameserver propagation (24-48 hours)
  3. Then proceed with custom domain setup
- Free Cloudflare accounts support custom domains for R2
