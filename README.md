# Playda Website

Marketing and support website for Playda - the padel court booking app.

## Features

- **Landing Page**: Showcase app features and benefits for players
- **Owner Portal Section**: Information and access for venue owners
- **Support Page**: FAQ and contact information
- **Privacy Policy**: GDPR-compliant privacy policy
- **Terms of Service**: Legal terms and conditions

## Tech Stack

- React 18
- Vite
- React Router
- Framer Motion (animations)
- React Icons

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is designed to be deployed at `playda.snkltech.com` using GCP Cloud Run.

### Quick Deploy

```bash
# Deploy to Cloud Run
gcloud run deploy playda-website \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Local Build

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Docker Build

```bash
docker build -t playda-website .
docker run -p 8080:8080 playda-website
```

## Pages

- `/` - Home page with app features and owner portal section
- `/support` - Support and FAQ page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Links

- **Player App**: App Store (coming soon)
- **Owner Portal**: https://manager.playda.snkltech.com
- **Support Email**: playda.support@snkltech.com
- **Parent Company**: https://snkltech.com

## License

© 2025 SNKL Enterprises LLC-FZ. All rights reserved.
