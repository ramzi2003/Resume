# Ramzi Shodmonbekov - Portfolio Website

A modern, high-performance portfolio website built with Astro, Three.js, and GSAP, inspired by the Montfort website design.

## 🚀 Tech Stack

- **Framework**: Astro v5.2.6
- **3D Graphics**: Three.js
- **Animations**: GSAP 3.12.7 with ScrollTrigger
- **Styling**: Custom CSS with CSS Variables
- **React**: For interactive components
- **TypeScript**: Type safety

## 📦 Installation

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

## 🎨 Features

- **3D WebGL Scene**: Interactive Three.js scene with particles and geometric shapes
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Custom Cursor**: Interactive cursor with hover effects
- **Responsive Design**: Mobile-first approach with breakpoints
- **View Transitions**: Native browser view transitions for smooth page navigation
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets

## 📁 Project Structure

```
/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   ├── Cursor.astro
│   │   ├── WebGLScene.astro
│   │   ├── Hero.astro
│   │   └── ...
│   ├── layouts/         # Layout components
│   │   └── Layout.astro
│   ├── pages/           # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── styles/          # Global styles
│       └── global.css
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🎯 Pages

- **Home** (`/`): Hero section with featured content
- **About** (`/about`): Education, certifications, and languages
- **Projects** (`/projects`): Portfolio of projects with details
- **Contact** (`/contact`): Contact information and availability

## 🛠️ Development

The project uses Astro's component islands architecture, allowing you to use React components where needed while keeping most of the site as static HTML for optimal performance.

### Adding New Projects

Edit `src/pages/projects.astro` and add your project to the `projects` array.

### Customizing Styles

Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #2d628c;
  --text-dark: #1a1a1a;
  /* ... */
}
```

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Ramzi Shodmonbekov**
- Email: shodmonbekov516@gmail.com
- LinkedIn: [linkedin.com/in/ramzi-shodmonbekov](https://linkedin.com/in/ramzi-shodmonbekov)
- GitHub: [github.com/ramzi2003](https://github.com/ramzi2003)
