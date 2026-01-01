# GitHub Repository Setup

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `playda-website`
3. Description: `Marketing and support website for Playda - Padel court booking app`
4. Visibility: **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
cd /Users/muthukumararunachalam/Documents/Repo/playda-website

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/playda-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify

Visit your repository on GitHub to confirm all files are uploaded.

## Repository Structure

```
playda-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Support.jsx
│   │   ├── Support.css
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── Legal.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── nginx.conf
├── .dockerignore
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── DEPLOYMENT.md
```

## Next Steps

After pushing to GitHub:

1. **Deploy to GCP Cloud Run** (see DEPLOYMENT.md)
2. **Set up custom domain** (playda.snkltech.com)
3. **Update App Store Connect** with the live URLs
4. **Update snkltech.com** to link to Playda site

## Quick Deploy Command

Once on GitHub, deploy to Cloud Run:

```bash
gcloud run deploy playda-website \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

Or use the GCP Console for a visual deployment process.
