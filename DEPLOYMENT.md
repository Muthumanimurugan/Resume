# Deployment Guide

Complete guide for deploying your portfolio to various hosting platforms.

## 🚀 Quick Deploy Checklist

- [ ] Update all personal information in pages
- [ ] Replace placeholder images
- [ ] Update contact form handling (optional)
- [ ] Test dark/light mode
- [ ] Test responsive design on mobile
- [ ] Test all links and navigation
- [ ] Run build: `npm run build`
- [ ] Test production build: `npm run preview`

## 📦 Building for Production

```bash
npm run build
```

This creates a `dist/` directory with optimized files ready for deployment.

## ☁️ Deploy to Vercel

**Easiest option for Next.js and Vite projects.**

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Option 2: Using GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Environment Variables** (if needed):
- Go to Project Settings → Environment Variables
- Add any API keys or secrets

**Custom Domain**:
- Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

## 🌐 Deploy to Netlify

**Great for static sites and SPAs.**

### Option 1: Using Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Option 2: Drag & Drop

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder
3. Your site is live!

### Option 3: GitHub Integration

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy"

**Custom Domain**:
- Domain Settings → Custom Domains
- Add your domain
- Update DNS records

## 🌍 Deploy to GitHub Pages

**Free hosting from GitHub.**

### Steps:

1. **Update vite.config.js**:
```javascript
export default {
  base: '/your-repo-name/',
  plugins: [react()],
}
```

2. **Build the project**:
```bash
npm run build
```

3. **Push to GitHub**:
```bash
git add .
git commit -m "Build files"
git push origin main
```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder

Your site will be available at: `https://username.github.io/repo-name`

## 🏢 Deploy to Custom Server

### Prerequisites:
- SSH access to server
- Node.js installed on server
- Domain name pointed to server

### Using PM2 (Recommended)

1. **Build locally and upload**:
```bash
npm run build
# Upload dist/ folder to server
scp -r dist/ user@server:/path/to/portfolio/
```

2. **Serve with HTTP Server**:
```bash
npm install -g http-server
http-server dist -p 3000
```

3. **Use PM2 for Production**:
```bash
npm install -g pm2
pm2 start "http-server dist -p 3000" --name portfolio
pm2 startup
pm2 save
```

### Using Nginx

1. **Upload dist/ folder** to `/var/www/portfolio/`

2. **Create Nginx config** at `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri /index.html;
    }
    
    location ~* \.(js|css|images|icons|fonts)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Enable site and reload**:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

4. **Add SSL with Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 🐳 Deploy with Docker

### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
RUN npm install -g http-server
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["http-server", "dist", "-p", "3000"]
```

### Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Deploy to Docker Hub

```bash
docker tag portfolio your-username/portfolio
docker push your-username/portfolio
```

## 💰 Deploy to Free Platforms

### Surge.sh

```bash
npm install -g surge
surge dist my-portfolio.surge.sh
```

### Fleek (Web3)

1. Push to GitHub
2. Go to [fleek.co](https://fleek.co)
3. Connect your repository
4. Auto-deploys on every push

## 🔍 SEO & Performance

### After Deployment, Check:

1. **Google Search Console**:
   - Add your site
   - Submit sitemap
   - Check indexing

2. **Page Speed**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Optimize images if needed
   - Enable compression

3. **Meta Tags**:
   - Verify Open Graph tags
   - Check robots.txt (create if needed)
   - Add sitemap.xml

### Create robots.txt

Place in public folder:
```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://yourdomain.com/sitemap.xml
```

## 🔐 Security

### SSL Certificate

- Most platforms provide free SSL (Vercel, Netlify)
- For custom servers: Use Let's Encrypt

### Security Headers

Add to your server config:
```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

## 📊 Monitoring

### Error Tracking

1. **Sentry** (Free tier):
```bash
npm install @sentry/react
```

2. **LogRocket**:
   - Free for small sites
   - Great debugging tool

### Analytics

Option 1: **Google Analytics**
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Option 2: **Plausible Analytics** (Privacy-friendly)
- No cookie consent needed
- GDPR compliant

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install --legacy-peer-deps
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 📧 Contact Form Setup

### Option 1: FormSubmit

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: EmailJS

```javascript
import emailjs from '@emailjs/browser';

emailjs.init('SERVICE_ID', 'PUBLIC_KEY');

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target)
    .then(response => console.log('Success!'))
    .catch(error => console.log('Error:', error));
};
```

### Option 3: Firebase

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sendMessage = async (data) => {
  await addDoc(collection(db, 'messages'), data);
};
```

## 🧪 Testing Before Deployment

### Local Testing

```bash
# Build production version
npm run build

# Test production build locally
npm run preview
```

Visit `http://localhost:4173/` and test:
- All navigation links
- Dark/light mode toggle
- Contact form
- Mobile responsiveness
- External links

### Browser Testing

- Chrome/Chromium
- Firefox
- Safari
- Mobile Safari (iOS)
- Mobile Chrome (Android)

## 🎯 Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Major version updates (be careful)
npm install package@latest
```

### Backup

- Keep your code in Git
- Regular commits to GitHub
- Deploy from version control

## 📞 Troubleshooting

### Build Fails

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Site Shows Old Version

Clear cache:
- Browser: Clear cookies and cached files
- CDN: Purge cache
- Server: Restart services

### Routes Not Working

For SPA, ensure server redirects 404s to index.html:

**Vercel**: Automatic
**Netlify**: Add `_redirects` file
**Custom Server**: Configure in Nginx/Apache

## 🎓 Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)

---

**Happy Deploying! 🚀**
