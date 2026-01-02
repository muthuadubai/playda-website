# Images for Production

## Important: Public Folder for Production

Images in this folder (`public/images/`) are served in both development and production.

### Current Images:
- `app-screenshot.png` - Mobile app screenshot (hero section)
- `owner-dashboard.png` - Owner dashboard screenshot (owners section)

### Why this folder?

In Vite projects:
- Files in `public/` are served at the root path `/`
- They work in both local development and production builds
- Referenced as `/images/filename.png` in the code

### Deployment Note:

When deploying to Docker/Cloud Run, these images are:
1. Copied during Docker build (`COPY . .`)
2. Built into the `dist` folder by Vite
3. Served by nginx from `/usr/share/nginx/html`

### Adding New Images:

1. Place image files directly in `public/images/`
2. Reference in code as `/images/your-image.png`
3. Commit and push to trigger new deployment
