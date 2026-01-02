# 🚀 Deployment Checklist - Screenshots Fix

## ✅ What Was Fixed

The screenshots weren't showing in production because they were in `src/assets/images/` which doesn't get served in production builds.

### Changes Made:

1. **Moved images to public folder:**
   - `public/images/app-screenshot.png` ✓
   - `public/images/owner-dashboard.png` ✓

2. **Updated image paths in code:**
   - Changed from `/src/assets/images/...` 
   - To `/images/...` (served from public folder)

3. **Updated Home.jsx:**
   - Line 82: App screenshot path
   - Line 177: Owner dashboard path

## 📋 Before Deploying

Make sure these files are committed:
```bash
git status
```

You should see:
- ✓ `public/images/app-screenshot.png`
- ✓ `public/images/owner-dashboard.png`
- ✓ `src/pages/Home.jsx` (modified)

## 🔄 Deploy to Cloud Run

### Option 1: Commit and Push (if using CI/CD)
```bash
git add .
git commit -m "Fix: Move screenshots to public folder for production"
git push origin main
```

### Option 2: Manual Docker Build
```bash
# Build the Docker image
docker build -t playda-website .

# Test locally
docker run -p 8080:8080 playda-website

# Visit http://localhost:8080 to verify screenshots appear

# Tag and push to GCP
docker tag playda-website gcr.io/YOUR-PROJECT-ID/playda-website
docker push gcr.io/YOUR-PROJECT-ID/playda-website
```

## ✨ How It Works Now

### Development (npm run dev):
- Vite serves files from `public/` at the root
- `/images/app-screenshot.png` → `public/images/app-screenshot.png`

### Production (Docker + Cloud Run):
1. Docker copies all files including `public/`
2. Vite build copies `public/` contents to `dist/`
3. Nginx serves `dist/` folder
4. `/images/app-screenshot.png` → `dist/images/app-screenshot.png`

## 🧪 Testing

### Test Locally:
```bash
npm run dev
# Visit http://localhost:5173
# Screenshots should appear
```

### Test Production Build:
```bash
npm run build
npm run preview
# Visit http://localhost:4173
# Screenshots should appear
```

### Test Docker:
```bash
docker build -t playda-website .
docker run -p 8080:8080 playda-website
# Visit http://localhost:8080
# Screenshots should appear
```

## 🔍 Troubleshooting

### If screenshots still don't appear in production:

1. **Check browser console** for 404 errors
2. **Verify files are in dist:** After build, check `dist/images/`
3. **Check nginx logs** in Cloud Run
4. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)

### Common Issues:

**Issue:** 404 error for `/images/app-screenshot.png`
**Fix:** Make sure files are in `public/images/` before building

**Issue:** Images work locally but not in Docker
**Fix:** Rebuild Docker image after adding files to public folder

**Issue:** Old placeholder still showing
**Fix:** Hard refresh browser (Ctrl+Shift+R) to clear cache

## 📝 Notes

- Images in `public/` are copied as-is to the build output
- No import statements needed for public folder assets
- Paths start with `/` (e.g., `/images/file.png`)
- Files are served from the root of the domain
