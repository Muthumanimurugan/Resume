# Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Installation (2 minutes)

```bash
# Navigate to project
cd my-react-app

# Install dependencies (with legacy peer deps for compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit `http://localhost:5174/` in your browser!

## ✏️ Quick Customization (3 minutes)

### 1. Update Your Name
Open `src/pages/Home.jsx` and change:
```javascript
<h1>Hey, I'm Your Name</h1>  // ← Change this line
```

### 2. Update Your Bio
In the same file, update:
```javascript
<p>Full-stack developer passionate about...</p>  // Change description
```

### 3. Add Your Projects
Edit `src/pages/Projects.jsx` in the `projects` array:
```javascript
{
  title: 'Your Project Name',
  description: 'What it does',
  image: 'https://your-image.jpg',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/you/project',
  demo: 'https://project-live.com',
}
```

### 4. Update Contact Info
In `src/pages/Contact.jsx`, update:
- Email address
- Phone number
- Location

### 5. Add Skills
Edit `src/pages/Skills.jsx`:
```javascript
{ name: 'React', icon: '⚛️', proficiency: 95 },
{ name: 'JavaScript', icon: '📜', proficiency: 90 },
```

## 🎨 Theme Colors

Edit `tailwind.config.js` to change primary color:

```javascript
primary: {
  500: '#0ea5e9',  // Change this hex color
}
```

Popular choices:
- Blue: `#0ea5e9`
- Purple: `#a855f7`
- Green: `#10b981`
- Pink: `#ec4899`

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/pages/Home.jsx` | Hero section and main content |
| `src/pages/About.jsx` | Bio and timeline |
| `src/pages/Projects.jsx` | Your projects list |
| `src/pages/Skills.jsx` | Technical skills |
| `src/pages/Contact.jsx` | Contact info and form |
| `tailwind.config.js` | Color scheme |
| `index.html` | Page title and meta tags |

## 🔧 Common Tasks

### Change Navigation Links
In `src/components/common/Navbar.jsx`:
```javascript
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },  // Add custom link
];
```

### Add Social Media Links
In `src/components/common/Footer.jsx`, update `socialLinks` array with your URLs.

### Replace Images
- Remove `https://via.placeholder.com/` URLs
- Use your own image URLs or import local images

### Change Font
In `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📱 Test Responsive Design

Press `F12` to open DevTools:
1. Click device toggle (top-left corner)
2. Select device (iPhone, iPad, etc.)
3. Test all pages

## 🌙 Dark Mode Testing

Click the sun/moon icon in the navbar to toggle dark mode. It automatically:
- Detects your system preference
- Saves your choice locally
- Works on all pages

## ✅ Checklist Before Deploying

- [ ] Updated all text with your info
- [ ] Replaced placeholder images
- [ ] Tested dark/light mode
- [ ] Tested on mobile
- [ ] Tested all navigation links
- [ ] Updated contact information
- [ ] Changed color scheme (optional)
- [ ] Ran `npm run build` successfully

## 🚀 Deploy to Production

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Or Deploy to Netlify

Drag and drop `dist/` folder to [netlify.com](https://netlify.com)

See [DEPLOYMENT.md](DEPLOYMENT.md) for more options.

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Module not found error?**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Dark mode not working?**
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for errors

## 📚 Learn More

- [Tailwind CSS Docs](https://tailwindcss.com) - Styling
- [Framer Motion Docs](https://www.framer.com/motion/) - Animations
- [React Router Docs](https://reactrouter.com) - Navigation
- [Vite Docs](https://vitejs.dev) - Build tool

## 💡 Pro Tips

1. **Use Placeholder Images Initially**
   - Don't worry about images at first
   - Add real images before deploying
   - Use free stock photos: Unsplash, Pexels

2. **Test Your Form**
   - Current form logs to console
   - Add backend service for production
   - Try FormSubmit or EmailJS

3. **Optimize Images**
   - Compress before upload
   - Use WebP format
   - Lazy load images

4. **Enable Analytics**
   - Add Google Analytics for tracking
   - Monitor user behavior
   - See what works

5. **Custom Domain**
   - Buy domain on Namecheap, GoDaddy
   - Point to your hosting
   - Enable HTTPS (automatic on Vercel/Netlify)

## 🎉 You're Ready!

Your portfolio is now ready to showcase. Make it uniquely yours by:
1. Adding your content
2. Choosing your colors
3. Sharing your projects
4. Keep it updated!

**Questions?** Check [README.md](README.md) for detailed documentation.

Happy building! 🚀

---

**Pro tip**: Customize before deploying = better first impression! ✨
