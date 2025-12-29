# Modern Portfolio Site with Next.js & Framer Motion

A beautiful, modern portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** for stunning animations.

## Features

✨ **Modern Design**
- Dark theme with gradient accents
- Glassmorphism effects
- Smooth animations and transitions

🎬 **Framer Motion Animations**
- Staggered animations
- Scroll-triggered reveals
- Smooth hover effects
- Page transitions

📱 **Fully Responsive**
- Mobile-first design
- Works on all devices
- Optimized performance

🚀 **Next.js Features**
- Server-side rendering
- Optimized images
- Fast build times
- Easy deployment

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Project card component
│   ├── SkillCategory.tsx   # Skill category component
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Update Personal Info
- Edit **name** in `components/Navbar.tsx` and `components/Hero.tsx`
- Update **email** and **contact info** in `components/Contact.tsx`
- Modify **projects** data in `components/Projects.tsx`
- Update **skills** in `components/Skills.tsx`

### Styling
- Tailwind CSS classes used throughout
- Custom colors defined in `tailwind.config.js`
- Global styles in `globals.css`

### Adding Social Links
- Update social media links in `components/Footer.tsx` and `components/Contact.tsx`

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Update `next.config.js` for static export
2. Push to GitHub
3. Enable Pages in repository settings

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **PostCSS** - CSS processing

## License

MIT License - feel free to use this template for your portfolio!
