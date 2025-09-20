# 🦁 Zion's First Birthday - #ZionTheLion

A beautiful, interactive single-page React website for Zion's first birthday celebration with a safari/Lion King theme.

## ✨ Features

### 🎉 Core Features
- **Invitation Flow**: Interactive invitation card with Accept/Decline functionality
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations throughout
- **Background Music**: Optional safari-themed background music with controls
- **Interactive Elements**: Floating butterflies, leaves, and safari animals

### 📱 Sections
- **Hero Section**: Full-screen carousel with safari imagery and call-to-action
- **Photo Gallery**: Interactive image carousel with lightbox functionality
- **Event Timeline**: Animated schedule with expandable details
- **RSVP Form**: Complete form with validation and confirmation
- **Interactive Map**: Venue location with directions integration
- **Mini Games**: Memory match and spot-the-cub games
- **Floating Elements**: Animated background elements

### 🎮 Interactive Features
- **Memory Game**: Match safari animal pairs
- **Spot the Cub**: Find hidden lion cubs before time runs out
- **Music Player**: Play/pause controls with volume adjustment
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Confetti Animation**: Celebration animation on invitation acceptance

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zion-birthday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Swiper** for carousels
- **React Hook Form** for form handling
- **React Leaflet** for maps
- **React Icons** for icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── InvitationCard.tsx   # Initial invitation overlay
│   ├── Hero.tsx             # Hero section with carousel
│   ├── Gallery.tsx          # Photo gallery with lightbox
│   ├── Timeline.tsx         # Event schedule
│   ├── RSVPForm.tsx         # RSVP form with validation
│   ├── InteractiveMap.tsx   # Venue location map
│   ├── MiniGames.tsx        # Memory and spot-the-cub games
│   ├── FloatingElements.tsx # Animated background elements
│   ├── MusicPlayer.tsx      # Background music controls
│   └── Footer.tsx           # Footer with links and contact
├── App.tsx                  # Main app component
├── main.tsx                 # App entry point
└── index.css                # Global styles and TailwindCSS
```

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- **Safari Colors**: Warm oranges and yellows
- **Lion Colors**: Deep browns and golds

### Images
Replace placeholder images in the components:
- Hero carousel images
- Gallery photos
- Game elements

### Content
Update the following in the components:
- Event details in `Timeline.tsx`
- Venue information in `InteractiveMap.tsx`
- Contact information in `Footer.tsx`
- RSVP form fields in `RSVPForm.tsx`

### Audio
Add background music by:
1. Placing audio files in `public/audio/`
2. Updating the audio source in `MusicPlayer.tsx`

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly interactive elements
- Bottom navigation bar for mobile devices
- Optimized images and lazy loading
- Smooth touch gestures for carousels

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels for interactive elements
- High contrast colors
- Screen reader friendly
- Focus indicators for keyboard users

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 🎯 Performance

- Lazy loading for images
- Optimized bundle size
- Smooth 60fps animations
- Efficient re-renders with React hooks
- Compressed assets

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading**: Ensure you have an internet connection for OpenStreetMap tiles
2. **Audio not playing**: Check browser autoplay policies and user interaction
3. **Animations not smooth**: Check if `prefers-reduced-motion` is enabled

### Development Issues

1. **TypeScript errors**: Run `npm run type-check` to see detailed errors
2. **Build failures**: Check console for specific error messages
3. **Dependency issues**: Delete `node_modules` and run `npm install` again

## 📄 License

This project is created for Zion's first birthday celebration. Feel free to use as inspiration for your own projects!

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

## 📞 Support

For questions or issues, please contact the development team.

---

**Made with ❤️ for Zion's special day! 🦁**

*#ZionTheLion*