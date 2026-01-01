# Playda Website Deployment Guide

## Prerequisites

- Google Cloud SDK installed
- Docker installed
- GCP project with Cloud Run enabled
- GitHub repository created

## Deployment Steps

### 1. Build Docker Image Locally (Optional Test)

```bash
docker build -t playda-website .
docker run -p 8080:8080 playda-website
```

Visit http://localhost:8080 to test.

### 2. Deploy to GCP Cloud Run

#### Option A: Using gcloud CLI

```bash
# Set your GCP project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy in one command
gcloud run deploy playda-website \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080

# Or build with Cloud Build first, then deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/playda-website
gcloud run deploy playda-website \
  --image gcr.io/YOUR_PROJECT_ID/playda-website \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

#### Option B: Using Cloud Console

1. Go to Cloud Run in GCP Console
2. Click "Create Service"
3. Select "Deploy one revision from an existing container image"
4. Or select "Continuously deploy new revisions from a source repository"
5. Configure:
   - Service name: `playda-website`
   - Region: `us-central1` (or your preferred region)
   - Authentication: Allow unauthenticated invocations
   - Container port: `8080`
6. Click "Create"

### 3. Custom Domain Setup

#### Map Custom Domain (playda.snkltech.com)

```bash
# Add domain mapping
gcloud run domain-mappings create \
  --service playda-website \
  --domain playda.snkltech.com \
  --region us-central1
```

#### Update DNS Records

Add the DNS records provided by Cloud Run to your domain registrar:
- Type: CNAME
- Name: playda
- Value: ghs.googlehosted.com (or the value provided by Cloud Run)

### 4. Environment Variables (if needed)

```bash
gcloud run services update playda-website \
  --set-env-vars "KEY=VALUE" \
  --region us-central1
```

## GitHub Repository Setup

### 1. Initialize Git Repository

```bash
cd /Users/muthukumararunachalam/Documents/Repo/playda-website
git init
git add .
git commit -m "Initial commit: Playda marketing website"
```

### 2. Create GitHub Repository

Go to GitHub and create a new repository named `playda-website`

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/playda-website.git
git branch -M main
git push -u origin main
```

## Continuous Deployment (Optional)

### Using Cloud Build Triggers

1. Go to Cloud Build → Triggers in GCP Console
2. Click "Create Trigger"
3. Connect your GitHub repository
4. Configure trigger:
   - Name: `playda-website-deploy`
   - Event: Push to branch
   - Branch: `^main$`
   - Build configuration: Dockerfile
   - Dockerfile location: `/Dockerfile`
5. Add build step to deploy to Cloud Run

### cloudbuild.yaml (Optional)

Create `cloudbuild.yaml` for automated deployments:

```yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/playda-website', '.']
  
  # Push the container image to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/playda-website']
  
  # Deploy container image to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'playda-website'
      - '--image'
      - 'gcr.io/$PROJECT_ID/playda-website'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'
      - '--port'
      - '8080'

images:
  - 'gcr.io/$PROJECT_ID/playda-website'
```

## Update App Store URLs

Once deployed, update your App Store Connect submission with:

- **Support URL**: `https://playda.snkltech.com/support`
- **Privacy Policy URL**: `https://playda.snkltech.com/privacy`
- **Marketing URL**: `https://playda.snkltech.com`

## Monitoring

View logs:
```bash
gcloud run services logs read playda-website --region us-central1
```

## Troubleshooting

### Build Fails
- Check Dockerfile syntax
- Ensure all dependencies are in package.json
- Test build locally first

### Site Not Loading
- Check Cloud Run logs
- Verify nginx configuration
- Ensure port 8080 is configured

### Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check domain mapping status in Cloud Run

## Costs

Cloud Run pricing:
- Free tier: 2 million requests/month
- After free tier: ~$0.40 per million requests
- Estimated cost for low traffic: $0-5/month

## Support

For issues, contact: playda.support@snkltech.com
