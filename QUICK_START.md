# Playda Website - Quick Start Guide

## ✅ What's Ready

Your Playda marketing website is complete and ready to deploy!

### Features
- ✅ Modern landing page with app showcase
- ✅ Venue owner portal section
- ✅ Support page with FAQ
- ✅ Privacy Policy (App Store compliant)
- ✅ Terms of Service (App Store compliant)
- ✅ Responsive design (mobile-friendly)
- ✅ Docker configuration for GCP Cloud Run
- ✅ Git repository initialized

## 🚀 Next Steps

### 1. Push to GitHub (5 minutes)

```bash
# Create repository on GitHub: https://github.com/new
# Repository name: playda-website

# Then run:
cd /Users/muthukumararunachalam/Documents/Repo/playda-website
git remote add origin https://github.com/YOUR_USERNAME/playda-website.git
git push -u origin main
```

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed instructions.

### 2. Deploy to GCP Cloud Run (10 minutes)

```bash
# Set your GCP project
gcloud config set project YOUR_PROJECT_ID

# Deploy
gcloud run deploy playda-website \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### 3. Set Up Custom Domain (15 minutes)

```bash
# Map domain
gcloud run domain-mappings create \
  --service playda-website \
  --domain playda.snkltech.com \
  --region us-central1

# Then update DNS records at your domain registrar
```

### 4. Update App Store Connect

Once deployed, use these URLs:

- **Support URL**: `https://playda.snkltech.com/support`
- **Privacy Policy**: `https://playda.snkltech.com/privacy`
- **Marketing URL**: `https://playda.snkltech.com`

### 5. Update snkltech.com

Add Playda to the Products menu linking to `https://playda.snkltech.com`

## 📋 URLs for App Store Submission

**For immediate submission** (before deployment):

Temporarily use:
- **Support URL**: `https://snkltech.com`
- **Privacy Policy**: `https://snkltech.com`

**After deployment** (update in App Store Connect):
- **Support URL**: `https://playda.snkltech.com/support`
- **Privacy Policy**: `https://playda.snkltech.com/privacy`
- **Marketing URL**: `https://playda.snkltech.com`

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:5173
```

## 📦 Project Structure

```
playda-website/
├── src/
│   ├── components/     # Header, Footer
│   ├── pages/          # Home, Support, Privacy, Terms
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎯 Key Features

### Home Page
- Hero section with app download CTA
- 4 key features showcase
- Venue owner section with benefits
- Link to owner portal (manager.playda.snkltech.com)
- Call-to-action section

### Support Page
- Contact information
- 8 comprehensive FAQs
- Email support link

### Legal Pages
- Complete Privacy Policy
- Complete Terms of Service
- App Store compliant

## 📞 Support

For questions: playda.support@snkltech.com

## 📝 To-Do After Deployment

- [ ] Push to GitHub
- [ ] Deploy to GCP Cloud Run
- [ ] Set up custom domain (playda.snkltech.com)
- [ ] Update App Store Connect URLs
- [ ] Add Playda to snkltech.com Products menu
- [ ] Update App Store link once app is approved
- [ ] Test all pages on mobile devices
- [ ] Set up Google Analytics (optional)
- [ ] Set up monitoring/alerts (optional)
