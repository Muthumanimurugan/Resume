# Portfolio Configuration Guide

This guide provides detailed instructions for customizing the portfolio website for your needs.

## 🎯 Quick Customization Steps

### 1. Update Home Page Hero Section

**File**: `src/pages/Home.jsx`

```javascript
// Change the hero section text
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hey, I'm Your Name  // ← Update this
</h1>

<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
  Full-stack developer passionate about... // ← Update description
</p>
```

### 2. Replace Profile Avatar

```javascript
<img
  src="https://via.placeholder.com/200"  // ← Use your image URL or import local image
  alt="Avatar"
  className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto shadow-xl border-4 border-primary-500"
/>
```

### 3. Update About Page

**File**: `src/pages/About.jsx`

Add your personal information:
- Bio text
- Skills and features you specialize in
- Work experience and timeline

### 4. Add Your Projects

**File**: `src/pages/Projects.jsx`

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'What does this project do?',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/your-username/project',
    demo: 'https://your-project-demo.com',
  },
  // Add more projects...
];
```

### 5. Update Skills

**File**: `src/pages/Skills.jsx`

Modify the skills array:
```javascript
const skills = [
  { name: 'React', icon: '⚛️', proficiency: 95 },
  { name: 'JavaScript', icon: '📜', proficiency: 90 },
  // Update with your skills
];
```

### 6. Add Contact Information

**File**: `src/pages/Contact.jsx`

Update contact details:
```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',  // ← Update this
    href: 'mailto:your@email.com',  // ← Update this
  },
  // Update other contact methods
];
```

## 🎨 Color Customization

### Primary Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',    // Main color
    600: '#0284c7',    // Darker variant
    700: '#0369a1',    // Even darker
    900: '#082f49',    // Darkest
  },
}
```

### Color Options (Tailwind Presets)

**Blue** (Current):
```javascript
primary: {
  500: '#0ea5e9',  // Sky blue
}
```

**Purple**:
```javascript
primary: {
  500: '#a855f7',  // Purple
}
```

**Pink**:
```javascript
primary: {
  500: '#ec4899',  // Pink
}
```

**Green**:
```javascript
primary: {
  500: '#10b981',  // Green
}
```

## 📝 Update Metadata

### Browser Tab Title and Meta Tags

**File**: `index.html`

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your professional portfolio description" />
```

### Open Graph (For Sharing)

Add to `index.html` head:
```html
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your portfolio description" />
<meta property="og:image" content="https://your-image-url.com/preview.jpg" />
<meta property="og:url" content="https://your-portfolio.com" />
```

## 🔗 Social Media Links

**File**: `src/components/common/Footer.jsx` and `src/components/common/SocialLinks.jsx`

Update the social links array:
```javascript
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/your-username',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/your-profile',
    label: 'LinkedIn',
  },
  // Add more social links
];
```

## 🎬 Customize Animations

### Framer Motion Settings

**Scroll Animation Threshold**:
Edit animation components to change when animations trigger:

```javascript
// In any component using whileInView
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}  // ← Adjust duration (in seconds)
```

### Custom Animations

Add new animations to `tailwind.config.js`:

```javascript
animation: {
  'slide-in-left': 'slideInLeft 0.5s ease-out',
  'your-custom': 'yourCustom 1s ease-out',
}

keyframes: {
  yourCustom: {
    '0%': { opacity: '0', transform: 'translateY(-20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
```

## 📸 Image Optimization

### Replace Placeholder Images

Currently using placeholder images from `https://via.placeholder.com/`

Replace with your own:

1. **Local Images**:
   ```javascript
   import projectImage from '../assets/my-project.jpg';
   
   <img src={projectImage} alt="Project" />
   ```

2. **External URLs**:
   ```javascript
   <img src="https://your-domain.com/project.jpg" alt="Project" />
   ```

3. **Optimize Images**:
   - Use WebP format for better compression
   - Compress images to reduce file size
   - Use responsive image sizes

## 🔧 Advanced Customization

### Change Navigation Links

**File**: `src/components/common/Navbar.jsx`

```javascript
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },  // Add new page
  // Customize as needed
];
```

### Add New Pages

1. Create new page in `src/pages/YourPage.jsx`
2. Import in `src/App.jsx`
3. Add route:
   ```javascript
   <Route path="/your-path" element={<YourPage />} />
   ```

### Modify Global Styles

**File**: `src/index.css`

Contains Tailwind CSS directives and global helper classes:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.card` - Card component style

## 📊 Data Management

### Contact Form Handling

Currently, the contact form saves to console. To add backend:

1. Create API endpoint (Node.js, Firebase, etc.)
2. Update `handleSubmit` in `src/pages/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🚀 Performance Tips

1. **Image Optimization**:
   - Use next-image or similar for lazy loading
   - Compress images before uploading
   - Use WebP format with fallbacks

2. **Code Splitting**:
   - React Router automatically code-splits pages
   - Use React.lazy() for heavy components

3. **Caching**:
   - Vite automatically optimizes caching
   - Images are cached by browser

## 🎁 Additional Features to Consider

1. **Blog Section**:
   - Add a `/blog` route
   - Create blog page with markdown support

2. **Newsletter Signup**:
   - Add form to footer
   - Integrate with email service

3. **Analytics**:
   - Add Google Analytics
   - Track user interactions

4. **Comments**:
   - Add Disqus or similar for project comments

5. **Search**:
   - Add search functionality for projects

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com)
- [Lucide React Icons](https://lucide.dev)

---

**Questions? Check README.md or create an issue!**
