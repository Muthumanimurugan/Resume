# Muthumanimurugan KR - React JS Developer Portfolio

A fully responsive, modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Showcasing 2 years of React development experience and expertise.

## 🌟 Features

### 📱 Responsive Design
- **Mobile-first approach** ensuring perfect display on all devices
- Hamburger menu navigation for mobile devices
- Optimized layouts for tablets and desktop screens
- Smooth responsive transitions

### 🎨 Modern UI/UX
- Clean and professional design
- Dark/Light mode toggle with system preference detection
- Consistent color palette and typography
- Beautiful gradient effects and shadows
- Card-based layouts for projects and skills

### ✨ Animations
- Smooth scroll animations using Framer Motion
- Section reveal effects on scroll
- Slide-in animations for components (left/right/fade)
- Staggered animations for list items
- Hover effects on interactive elements
- Smooth page transitions

### 📍 Pages & Routing
- **Home**: Hero section with call-to-action buttons
- **About**: Personal bio, journey timeline, and key features
- **Projects**: Showcase of projects with cards, tags, and links
- **Skills**: Categorized technical and soft skills with proficiency levels
- **Contact**: Contact form and contact information

### 🎯 Additional Features
- Active navigation highlighting
- Contact form (frontend UI only)
- Social media links integration
- Smooth scrolling between sections
- Performance optimized images
- SEO-friendly meta tags
- Accessibility considerations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
```bash
cd my-react-app
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start the development server**
```bash
npm run dev
```

The application will start at `http://localhost:5174/`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── Navbar.jsx           # Navigation bar with mobile menu
│   │       ├── Footer.jsx           # Footer with social links
│   │       ├── ProjectCard.jsx      # Reusable project card component
│   │       ├── SkillItem.jsx        # Individual skill component
│   │       └── SocialLinks.jsx      # Social media links component
│   ├── pages/
│   │   ├── Home.jsx                 # Home page with hero section
│   │   ├── About.jsx                # About page with timeline
│   │   ├── Projects.jsx             # Projects showcase page
│   │   ├── Skills.jsx               # Skills and experience page
│   │   └── Contact.jsx              # Contact form page
│   ├── hooks/
│   │   ├── useTheme.js              # Dark/light mode management
│   │   └── useScrollAnimation.js    # Scroll animation hook
│   ├── App.jsx                      # Main App component with routing
│   ├── App.css                      # App-specific styles
│   ├── index.css                    # Tailwind CSS imports and global styles
│   └── main.jsx                     # React entry point
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.js                   # Vite configuration
├── package.json                     # Project dependencies and scripts
├── index.html                       # HTML entry point
└── README.md                        # This file
```

## 💻 Technology Stack

### Frontend Framework
- **React 19.2.4**: UI library for building components
- **React Router v6**: Client-side routing

### Build Tool
- **Vite 8.0.4**: Fast build tool and dev server

### Styling
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS 8.4.31**: Tool for transforming CSS

### Animations
- **Framer Motion 10.16.4**: Animation library for React

### Icons
- **Lucide React 0.344.0**: Beautiful SVG icons

## 🎨 Customization

### Update Personal Information

1. **Home page** (`src/pages/Home.jsx`):
   - Change the name and tagline in the hero section
   - Update the avatar image URL
   - Modify the call-to-action buttons

2. **About page** (`src/pages/About.jsx`):
   - Update bio and description
   - Modify the timeline events
   - Replace the About image

3. **Projects** (`src/pages/Projects.jsx`):
   - Add your projects in the `projects` array
   - Update project images, descriptions, tags, and links

4. **Skills** (`src/pages/Skills.jsx`):
   - Modify the `skills` array with your technical skills
   - Update proficiency levels
   - Add new skill categories

5. **Contact** (`src/pages/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Modify form handling if needed

### Customize Colors

Edit `tailwind.config.js` to modify:
- Primary colors (currently blue-based)
- Dark mode colors
- Custom shadows and animations

```javascript
// In tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        // Update these color values
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
}
```

### Modify Theme

The dark/light mode is controlled by the `useTheme` hook in `src/hooks/useTheme.js`. It automatically:
- Detects system preference
- Saves user preference to localStorage
- Applies the `dark` class to the root element

## 📋 Features Explanation

### Dark/Light Mode
- Located in `src/hooks/useTheme.js`
- Automatically detects system preference
- Persists user choice in localStorage
- Toggle button in navbar

### Animations
All animations use Framer Motion for smooth transitions:
- Scroll animations trigger when elements come into view
- Component entrance animations on page transitions
- Hover and tap animations for interactivity

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Responsive grid layouts (1 col mobile, 2 cols tablet, 3 cols desktop)
- Hamburger menu on mobile devices
- Optimized touch targets for mobile

### Form Validation
The contact form includes basic HTML5 validation. To add backend submission:
1. Create an API endpoint on your backend
2. Update the `handleSubmit` function in `Contact.jsx`
3. Add error handling and loading states

## 🔧 Available Scripts

### Development
```bash
npm run dev      # Start development server
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

### Code Quality
```bash
npm run lint     # Run ESLint
```

## 📱 Responsive Breakpoints

The portfolio uses standard Tailwind CSS breakpoints:
- **sm**: 640px (tablets)
- **md**: 768px (small laptops)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large screens)

## ♿ Accessibility

The portfolio includes:
- Semantic HTML elements
- ARIA labels on buttons and links
- Proper heading hierarchy
- Keyboard navigation support
- High contrast colors

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
  plugins: [react()],
}
```

## 📚 Dependencies

### Core Dependencies
- **react**: ^19.2.4 - UI library
- **react-dom**: ^19.2.4 - DOM rendering
- **react-router-dom**: ^6.21.0 - Routing
- **framer-motion**: ^10.16.4 - Animations
- **lucide-react**: ^0.344.0 - Icons

### Dev Dependencies
- **vite**: ^8.0.4 - Build tool
- **tailwindcss**: ^3.4.0 - CSS framework
- **postcss**: ^8.4.31 - CSS processor
- **autoprefixer**: ^10.4.16 - CSS prefixer
- **eslint**: ^9.39.4 - Code linter

## 🐛 Troubleshooting

### Port Already in Use
If port 5174 is in use:
```bash
npm run dev -- --port 3000
```

### Build Errors
Clear node_modules and reinstall:
```bash
rm -r node_modules
npm install --legacy-peer-deps
```

### Dark Mode Not Working
Ensure your browser supports CSS custom properties and the `dark` class is applied to the root element.

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your personal portfolio. If you improve it, consider sharing your changes!

## 📞 Support

For issues or questions, please create an issue in the repository or reach out through the contact form on the portfolio.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
