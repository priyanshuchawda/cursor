# Cursor Lab - Interactive Cursor Experiments

An experimental playground showcasing advanced custom cursor effects and interactions. This project explores creative cursor designs with smooth animations, particle effects, and unique interactive patterns that transform the traditional pointer experience.

## ✨ Features

- **Multiple Cursor Effects** - Collection of unique custom cursor designs
- **Real-time Interactions** - Cursors that respond to mouse movement and clicks
- **Particle Systems** - Dynamic particle fields and visual effects
- **State Management** - Zustand for efficient cursor state handling
- **Mobile Responsive** - Optimized experience for touch devices
- **Dark/Light Themes** - Dynamic theme switching with cursor adaptations
- **Performance Optimized** - Smooth 60fps animations with hardware acceleration
- **Terminal Aesthetics** - Hacker-inspired UI with glitch effects

## 🎯 Cursor Collection

### Available Cursor Types

**🔥 Meteor Cursor**
- Plasma comet trail with quantum easing protocols
- Fiery particle trail that follows mouse movement
- Dynamic intensity based on velocity
- Orange-red gradient with glow effects

**🌊 Blob Cursor**
- Liquid consciousness that adapts to motion
- Morphing circular shape with smooth transitions
- Purple-violet gradient with elastic animations
- Responsive to mouse speed and direction

**🧲 Magnet Cursor**
- Electromagnetic field visualization
- Attracts and repels particles in proximity
- Cyan-blue gradient with magnetic effects
- Interactive particle clustering

**✨ Neon Cursor**
- Electric energy with cyberpunk aesthetics
- Glowing trails with electric discharge effects
- Pink-purple neon glow
- High-intensity visual feedback

**🎮 Pixel Cursor**
- Retro 8-bit inspired cursor design
- Pixelated trails and blocky animations
- Green monochrome terminal styling
- Nostalgic gaming aesthetics

## 🚀 Tech Stack

- **React 18** + TypeScript for robust component architecture
- **Vite** for lightning-fast development and optimized builds
- **Tailwind CSS** for utility-first styling and responsive design
- **Zustand** for lightweight state management
- **shadcn/ui** for modern, accessible UI components
- **React Router DOM** for seamless navigation
- **Lucide React** for consistent and beautiful icons
- **React Hook Form** for advanced form handling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanshuchawda/cursor.git
   cd cursor
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

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run build:dev` - Build with development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Deploy to Netlify

1. **Fork this repository** to your GitHub account

2. **Connect to Netlify**:
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your forked repository
   - Build settings are automatically detected from `netlify.toml`

3. **Build Configuration** (auto-configured):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

4. **Deploy**: Netlify will automatically build and deploy your site

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🎨 Architecture

### Component Structure

```
src/
├── components/
│   ├── cursors/           # Individual cursor implementations
│   │   ├── BlobCursor.tsx
│   │   ├── MagnetCursor.tsx
│   │   ├── MeteorCursor.tsx
│   │   ├── NeonCursor.tsx
│   │   └── PixelCursor.tsx
│   ├── layout/            # Layout components
│   ├── ui/               # Reusable UI components
│   ├── CursorDemo.tsx    # Main cursor demonstration
│   └── ParticleField.tsx # Particle system
├── store/                # Zustand state management
├── hooks/                # Custom React hooks
└── styles/               # Global styles and themes
```

### State Management

Using Zustand for efficient cursor state management:

```typescript
interface CursorStore {
  activeCursor: string;
  setActiveCursor: (cursor: string) => void;
  mousePosition: { x: number; y: number };
  updateMousePosition: (position: { x: number; y: number }) => void;
}
```

## 🔧 Customization

### Creating Custom Cursors

1. **Create Cursor Component**: Add new cursor in `src/components/cursors/`
2. **Implement Animation Logic**: Use CSS transforms and transitions
3. **Register Cursor**: Add to the cursor experiments array
4. **Configure Effects**: Define particle behavior and visual styling

### Example Custom Cursor

```typescript
interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  isActive: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition, isActive }) => {
  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Custom cursor implementation */}
    </div>
  );
};
```

### Particle System Customization

- **Particle Count**: Adjust number of particles for performance
- **Physics**: Customize gravity, velocity, and attraction forces
- **Visual Effects**: Modify colors, sizes, and opacity
- **Interaction**: Configure mouse interaction radius and effects

## ⚡ Performance Optimization

### Animation Techniques
- **CSS Transforms**: Hardware-accelerated animations
- **RequestAnimationFrame**: Smooth 60fps rendering
- **Pointer Events**: Efficient mouse tracking
- **Debouncing**: Optimized event handling

### Memory Management
- **Component Cleanup**: Proper useEffect cleanup
- **Event Listeners**: Automatic removal on unmount
- **Particle Recycling**: Efficient particle pool management
- **State Optimization**: Minimal re-renders with Zustand

## 📱 Mobile Experience

### Touch Device Optimization
- **Touch Events**: Responsive to touch interactions
- **Fallback UI**: Alternative experience for mobile users
- **Performance**: Optimized animations for mobile hardware
- **Accessibility**: Touch-friendly interface elements

### Responsive Design
- **Breakpoints**: Tailored experience for different screen sizes
- **Touch Targets**: Appropriately sized interactive elements
- **Navigation**: Mobile-optimized navigation patterns

## 🎮 Interactive Features

### Control Panel
- **Cursor Selection**: Live switching between cursor types
- **Theme Toggle**: Dark/light mode with cursor adaptations
- **Effect Intensity**: Adjustable particle and animation intensity
- **Performance Monitor**: Real-time FPS and performance metrics

### Status Bar
- **Active Cursor**: Display current cursor information
- **Mouse Coordinates**: Real-time position tracking
- **Performance Stats**: Frame rate and animation metrics
- **System Status**: Browser compatibility and feature detection

## 📱 Browser Support

- Chrome/Chromium (recommended for best performance)
- Firefox (good support for most features)
- Safari (hardware acceleration optimized)
- Edge (full feature compatibility)

**Note**: Some advanced cursor effects may have reduced performance on older devices.

## 🐛 Troubleshooting

### Performance Issues
- Reduce particle count in settings
- Disable advanced effects on slower devices
- Check browser hardware acceleration settings
- Monitor memory usage in dev tools

### Cursor Not Appearing
- Verify browser supports custom cursors
- Check CSS pointer-events settings
- Ensure proper z-index layering
- Test with different cursor types

### Animation Stuttering
- Enable GPU acceleration in browser
- Reduce concurrent animations
- Check for memory leaks
- Optimize particle system settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-cursor`
3. Commit changes: `git commit -m 'Add amazing cursor effect'`
4. Push to branch: `git push origin feature/amazing-cursor`
5. Open a Pull Request

## 📞 Contact

- **Website**: [Live Demo](https://cursordobble.netlify.app/)
- **GitHub**: [@priyanshuchawda](https://github.com/priyanshuchawda)

## 🌟 Inspiration

This project explores the often-overlooked cursor as a canvas for creative expression. Every movement becomes an opportunity for visual storytelling, transforming the mundane act of pointing into an artistic experience.

---

*"The cursor is the bridge between intention and action - let's make that bridge beautiful."*
