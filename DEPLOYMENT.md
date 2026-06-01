# Deployment Guide - Avan Intelligence

This guide covers deploying Avan Intelligence to production with the domain `avanintelligence.com`.

## GitHub Setup

### Prerequisites
- GitHub account with push access to `mkt-dan/avanintelligence`
- Node.js 18+ installed locally
- Vercel account (for deployment)

### 1. Clone the Repository
```bash
git clone https://github.com/mkt-dan/avanintelligence.git
cd avanintelligence
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=https://avanintelligence.com
NEXT_PUBLIC_SITE_NAME=Avan Intelligence
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Test Build Locally
```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify it works.

## Deployment to Vercel

### Option 1: Via Vercel Dashboard (Easiest)

1. **Connect GitHub**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select `mkt-dan/avanintelligence`

2. **Configure Project**
   - Framework: Next.js
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   - Add `NEXT_PUBLIC_BASE_URL`: `https://avanintelligence.com`
   - Add `NEXT_PUBLIC_SITE_NAME`: `Avan Intelligence`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your project is now live!

### Option 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Add Domain**
   ```bash
   vercel domains add avanintelligence.com
   ```

## Domain Setup

### Point Domain to Vercel

1. **Access DNS Settings**
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Navigate to DNS settings

2. **Add DNS Records**
   Vercel will provide these, but typically:
   
   **For `avanintelligence.com`:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.21
   ```

   **For `www.avanintelligence.com`:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Verify SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - This typically takes 24 hours
   - Monitor deployment status in Vercel dashboard

## GitHub Actions CI/CD

The repository includes automated deployment via GitHub Actions.

### Setup CI/CD

1. **Create Vercel Tokens**
   - Go to [Vercel Settings](https://vercel.com/account/tokens)
   - Create a new token (copy the value)

2. **Add GitHub Secrets**
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your Vercel organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel project ID

3. **Find Your IDs**
   ```bash
   # Run this locally after Vercel deploy
   vercel info
   ```
   Copy the `Project ID` and note your Org ID from Vercel dashboard.

### How It Works

- **On Push to `main`**: Automatically builds and deploys to production
- **On Pull Requests**: Builds and creates preview deployment
- **Automatic**: No manual action needed after setup

## Monitoring & Logs

### View Deployment Logs

```bash
# Via Vercel CLI
vercel logs

# Via Vercel Dashboard
# 1. Go to your project
# 2. Click "Deployments" tab
# 3. Select a deployment to see logs
```

### Monitor Performance
- Vercel Dashboard shows Core Web Vitals
- Analytics available in Vercel Pro plan
- Check staging deployments before production

## Rollback

If something goes wrong:

```bash
# View deployment history
vercel deployments list

# Rollback to previous deployment
vercel rollback
```

Or via dashboard:
- Go to Deployments
- Find the previous stable version
- Click "..." → "Promote to Production"

## Environment Variables

### For Production (avanintelligence.com)

In Vercel dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_BASE_URL = https://avanintelligence.com
NEXT_PUBLIC_SITE_NAME = Avan Intelligence
```

### For Development

In local `.env.local`:

```
NEXT_PUBLIC_BASE_URL = http://localhost:3000
NEXT_PUBLIC_SITE_NAME = Avan Intelligence
```

## Testing Before Deployment

```bash
# Build and test locally
npm run build
npm start

# Run type checking
npm run lint

# Build production optimized version
npm run build

# Check bundle size
npm run build
# Look at .next/static folder
```

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Domain Not Working
- DNS can take 24-48 hours to propagate
- Verify DNS records in domain registrar
- Check SSL certificate status in Vercel dashboard

### Slow Deployments
- Vercel caches dependencies
- First deployment is slower
- Subsequent deployments are faster

### Environment Variables Not Working
- Restart deployment after adding secrets
- Variables must start with `NEXT_PUBLIC_` to be exposed to browser
- Rebuild function to reflect changes

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Configure domain (avanintelligence.com)
3. ✅ Set up monitoring
4. ✅ Configure CI/CD
5. Add error tracking (Sentry, DataDog)
6. Add analytics (Vercel Analytics, Mixpanel)
7. Set up automated backups

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [DNS Setup Guide](https://vercel.com/docs/concepts/projects/domains)

---

**Questions?** Check the main README.md or open an issue on GitHub.
