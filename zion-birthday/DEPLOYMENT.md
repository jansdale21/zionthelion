# 🚀 Deployment Guide

This guide will help you deploy Zion's First Birthday website to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] Update venue information in `InteractiveMap.tsx`
- [ ] Replace placeholder images with actual photos
- [ ] Add real background music file
- [ ] Update contact information in `Footer.tsx`
- [ ] Test all functionality locally
- [ ] Run `npm run build` to ensure build succeeds
- [ ] Test the built version with `npm run preview`

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Automatic deployments from GitHub
- Built-in CDN and performance optimization
- Easy custom domain setup
- Free tier available

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite configuration
7. Click "Deploy"
8. Your site will be live at `https://your-project.vercel.app`

**Custom Domain:**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### 2. Netlify

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login
4. Drag and drop the `dist` folder to deploy
5. Or connect your GitHub repository for automatic deployments

**Configuration:**
Create `public/_redirects` file:
```
/*    /index.html   200
```

### 3. GitHub Pages

**Steps:**
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### 4. Firebase Hosting

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 🔧 Environment Configuration

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Type Checking
```bash
npm run type-check
```

## 📱 Mobile Testing

Before deploying, test on:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Various screen sizes

## 🎨 Customization Before Deployment

### 1. Update Venue Information
Edit `src/components/InteractiveMap.tsx`:
```typescript
const venue = {
  name: "Your Venue Name",
  address: "Your Address",
  coordinates: [latitude, longitude], // Replace with actual coordinates
  phone: "(555) 123-4567",
  hours: "2:00 PM - 6:00 PM"
}
```

### 2. Replace Images
- Hero carousel images
- Gallery photos
- Game elements
- Favicon

### 3. Add Background Music
1. Add music file to `public/audio/safari-music.mp3`
2. Update `MusicPlayer.tsx` to reference the file

### 4. Update Contact Information
Edit `src/components/Footer.tsx`:
```typescript
// Update phone, email, address
```

## 🚨 Common Issues & Solutions

### Issue: Map not loading
**Solution:** Ensure you have internet connection and correct coordinates

### Issue: Images not loading
**Solution:** Check file paths and ensure images are in `public` folder

### Issue: Audio not playing
**Solution:** Check browser autoplay policies and user interaction requirements

### Issue: Build fails
**Solution:** 
1. Check for TypeScript errors: `npm run type-check`
2. Check for linting errors: `npm run lint`
3. Ensure all dependencies are installed: `npm install`

## 📊 Performance Optimization

### Before Deployment:
1. Optimize images (use WebP format when possible)
2. Compress audio files
3. Run Lighthouse audit
4. Test loading speed

### After Deployment:
1. Monitor Core Web Vitals
2. Check mobile performance
3. Test on slow connections

## 🔒 Security Considerations

- No sensitive data in client-side code
- Use HTTPS for all deployments
- Validate all form inputs
- Sanitize user-generated content

## 📈 Analytics (Optional)

Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🎉 Post-Deployment

1. Test all functionality on live site
2. Share the URL with guests
3. Monitor for any issues
4. Collect feedback and iterate

## 📞 Support

If you encounter issues during deployment:
1. Check the platform's documentation
2. Review build logs for errors
3. Test locally first
4. Contact platform support if needed

---

**Happy Deploying! 🦁**

*May Zion's birthday celebration be a roaring success!*



