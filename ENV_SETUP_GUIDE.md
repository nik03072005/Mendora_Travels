# Environment Variables Setup Guide

## 🔐 Security Notice
**NEVER commit `.env` files to version control!** Always use `.env.example` as a template.

---

## 📁 Server Environment Variables

### Location: `server/.env`

Copy `server/.env.example` to `server/.env` and update with your actual credentials:

```bash
cd server
cp .env.example .env
```

### Required Variables:

#### 1. **MongoDB Configuration**
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mendora_travels?retryWrites=true&w=majority
```
- Get this from [MongoDB Atlas](https://cloud.mongodb.com/)
- Replace `username`, `password`, and cluster URL with your credentials

#### 2. **JWT Secret**
```env
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```
- Use a strong, random string (min 32 characters)
- Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

#### 3. **Cloudflare R2 Storage**
```env
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_BUCKET_NAME=travel
```
- Get credentials from [Cloudflare Dashboard](https://dash.cloudflare.com/) > R2
- Create a bucket named "travel" or update the bucket name

#### 4. **Redis (Upstash)**
```env
REDIS_URL=https://your-redis-url.upstash.io
REDIS_TOKEN=your_redis_token
```
- Get credentials from [Upstash Console](https://console.upstash.com/)
- Create a new Redis database and copy REST URL & Token

#### 5. **Email Configuration**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
```
- For Gmail: Enable 2-factor authentication
- Generate App Password: [Google Account Security](https://myaccount.google.com/security)
- Use the 16-character app password

#### 6. **CORS Configuration**
```env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173
```
- Add production domain when deploying

---

## 🎨 Frontend Environment Variables

### Location: `frontend/.env`

Copy `frontend/.env.example` to `frontend/.env`:

```bash
cd frontend
cp .env.example .env
```

### Required Variables:

```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

**Production:**
```env
VITE_API_URL=https://your-api-domain.com
VITE_ENV=production
```

---

## 🚀 Quick Setup Commands

```bash
# Clone the repository
git clone <repository-url>
cd Mendora_Travels

# Setup Server
cd server
cp .env.example .env
# Edit .env with your credentials
npm install

# Setup Frontend
cd ../frontend
cp .env.example .env
# Edit .env with your API URL
npm install

# Create Admin User
cd ../server
npm run create-admin

# Run Development Servers
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## ✅ Verification Checklist

- [ ] MongoDB connection working
- [ ] JWT authentication working
- [ ] Image uploads to R2 working
- [ ] Redis connection established
- [ ] Email notifications sending
- [ ] Frontend connecting to backend API
- [ ] CORS configured correctly

---

## 🔒 Production Security Notes

1. **Use strong, unique secrets** for JWT and passwords
2. **Never expose API keys** in client-side code
3. **Enable IP whitelisting** for MongoDB Atlas
4. **Use HTTPS** in production
5. **Set NODE_ENV=production** for production deployments
6. **Rotate secrets regularly**
7. **Use secret management** services (AWS Secrets Manager, HashiCorp Vault)

---

## 🆘 Troubleshooting

### MongoDB Connection Failed
- Check if your IP is whitelisted in MongoDB Atlas
- Verify connection string format
- Ensure network access is configured

### Redis Connection Failed
- Verify REDIS_URL and REDIS_TOKEN are correct
- Check Upstash dashboard for database status

### Email Not Sending
- Verify Gmail app password (not regular password)
- Check 2FA is enabled on Google account
- Test with simple email first

### CORS Errors
- Verify ALLOWED_ORIGINS includes frontend URL
- Check that credentials: true is set
- Ensure frontend uses correct VITE_API_URL

---

## 📚 Additional Resources

- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Upstash Redis](https://docs.upstash.com/redis)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
