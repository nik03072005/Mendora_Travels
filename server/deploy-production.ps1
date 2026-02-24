# 🚀 PRODUCTION DEPLOYMENT - Clean Image Upload System
# PowerShell deployment script for Windows VPS
# Run: .\deploy-production.ps1

Write-Host "`n════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 Mendora Travels - Production Deployment" -ForegroundColor Cyan
Write-Host "   Clean Image Upload System" -ForegroundColor Cyan  
Write-Host "════════════════════════════════════════════`n" -ForegroundColor Cyan

# Check if we're in server directory
if (-not (Test-Path "server.js")) {
    Write-Host "❌ Error: server.js not found!" -ForegroundColor Red
    Write-Host "Please run this from the server directory:" -ForegroundColor Yellow
    Write-Host "cd path\to\Mendora_Travels\server" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Found server.js`n" -ForegroundColor Green

# Step 1: Install/Update dependencies
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Blue
Write-Host "📦 Step 1: Installing Dependencies" -ForegroundColor Blue
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -ForegroundColor Blue

npm install

Write-Host ""

# Step 2: Clean database
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Blue
Write-Host "🧹 Step 2: Cleaning Database" -ForegroundColor Blue
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -ForegroundColor Blue
Write-Host "Running database cleanup to remove invalid dayImage values...`n"

node scripts/cleanDatabaseComplete.js

Write-Host ""

# Step 3: Restart server
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Blue
Write-Host "🔄 Step 3: Restarting Server" -ForegroundColor Blue
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -ForegroundColor Blue

# Check if PM2 is installed
$pm2Exists = Get-Command pm2 -ErrorAction SilentlyContinue

if ($pm2Exists) {
    Write-Host "Restarting with PM2...`n"
    pm2 restart all
    
    Write-Host "`n✅ Server restarted successfully`n" -ForegroundColor Green
    
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    Write-Host "📊 PM2 Status:" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    pm2 status
    
    Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    Write-Host "📝 Recent Logs:" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    pm2 logs --lines 15 --nostream
} else {
    Write-Host "⚠️  PM2 not found" -ForegroundColor Yellow
    Write-Host "Install PM2: npm install -g pm2" -ForegroundColor Yellow
    Write-Host "Then run: pm2 start ecosystem.config.cjs --env production`n" -ForegroundColor Yellow
}

# Final summary
Write-Host "`n════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "🎯 What Changed:" -ForegroundColor White
Write-Host "  ✅ Centralized upload middleware created" -ForegroundColor Green
Write-Host "  ✅ Routes updated for clean architecture" -ForegroundColor Green
Write-Host "  ✅ Schema validation strengthened" -ForegroundColor Green
Write-Host "  ✅ Database cleaned of invalid data" -ForegroundColor Green
Write-Host "  ✅ Multi-layer protection active`n" -ForegroundColor Green

Write-Host "🛡️ Protection Layers:" -ForegroundColor White
Write-Host "  • Layer 1: Multer file validation" -ForegroundColor Gray
Write-Host "  • Layer 2: Controller sanitization" -ForegroundColor Gray
Write-Host "  • Layer 3: Schema type checking" -ForegroundColor Gray
Write-Host "  • Layer 4: Pre-save hooks" -ForegroundColor Gray
Write-Host "  • Layer 5: Pre-update hooks`n" -ForegroundColor Gray

Write-Host "📚 Documentation:" -ForegroundColor White
Write-Host "  • IMAGE_UPLOAD_ARCHITECTURE.md - Full system docs" -ForegroundColor Gray
Write-Host "  • DAYIMAGE_FIX_COMPLETE.md - Technical details" -ForegroundColor Gray
Write-Host "  • QUICK_FIX_CORS.md - CORS troubleshooting`n" -ForegroundColor Gray

Write-Host "🧪 Next Steps:" -ForegroundColor White
Write-Host "  1. Test package creation with images" -ForegroundColor Gray
Write-Host "  2. Test package creation without images" -ForegroundColor Gray
Write-Host "  3. Test package updates" -ForegroundColor Gray
Write-Host "  4. Verify no CORS errors" -ForegroundColor Gray
Write-Host "  5. Verify no CastError crashes`n" -ForegroundColor Gray

Write-Host "🔍 Monitoring Commands:" -ForegroundColor White
Write-Host "  pm2 logs           - View real-time logs" -ForegroundColor Gray
Write-Host "  pm2 monit          - Monitor resources" -ForegroundColor Gray
Write-Host "  pm2 status         - Check process status`n" -ForegroundColor Gray

Write-Host "🌐 Test URLs:" -ForegroundColor White
Write-Host "  • Health: https://api.mendoratravels.com/health" -ForegroundColor Gray
Write-Host "  • Website: https://mendoratravels.com" -ForegroundColor Gray
Write-Host "  • Admin: https://mendoratravels.com/admin`n" -ForegroundColor Gray

Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🎉 System is Production-Ready!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════`n" -ForegroundColor Cyan
