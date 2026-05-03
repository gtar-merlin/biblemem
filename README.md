# Bible Memorization App

A responsive, client-side web application to help children memorize Bible passages through interactive word-fill exercises.

## Features

- **Three Difficulty Levels**
  - Easy: ~25% of words blanked out
  - Medium: ~50% of words blanked out
  - Hard: ~75% of words blanked out

- **Interactive Learning**
  - Click blanked words to reveal 3 options (1 correct + 2 semantic alternatives)
  - Immediate visual feedback (green for correct, red for incorrect)
  - Retry any word as many times as needed
  - Progress bar showing completion percentage

- **Scoring System**
  - Final score displayed as percentage
  - Shows number of correct answers out of total blanked words
  - Option to retry or change difficulty level

- **Responsive Design**
  - Works seamlessly on mobile (iPhone, Android), tablet, and desktop
  - Clean, modern typography and layout
  - Proper Bible text formatting with verse numbers in superscript
  - Poetry indentation preserved

- **100% Client-Side**
  - No server required
  - No login needed
  - All processing happens in the browser
  - Fast and secure

## Current Content

- **Philippians 2:1-18 (NIV)**
- Static word alternatives embedded in code
- Random word selection per session (different words blanked each time)

## File Structure

```
biblemem/
├── index.html          # Main HTML structure
├── styles.css          # Responsive styling
├── app.js              # Application logic
├── data.js             # Bible text and word alternatives
└── README.md           # This file
```

## How to Use Locally

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd biblemem
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the app**
   - Open `http://localhost:8000` in your browser

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new repository named `biblemem`

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/biblemem.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

4. **Access your site**
   - Your app will be live at: `https://YOUR_USERNAME.github.io/biblemem`

### Option 2: Vercel (Also Recommended)

1. **Sign up at Vercel**
   - Go to https://vercel.com/signup

2. **Connect your repository**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a static site

3. **Deploy**
   - Click "Deploy"
   - Your app will be live at: `https://biblemem.vercel.app` (or custom domain)

### Option 3: GitLab Pages

1. **Create a GitLab repository**
   - Go to https://gitlab.com/projects/new

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://gitlab.com/YOUR_USERNAME/biblemem.git
   git push -u origin main
   ```

3. **Enable GitLab Pages**
   - Go to repository Settings → Pages
   - Select `main` branch and `/` (root) folder
   - Save

4. **Access your site**
   - Your app will be live at: `https://YOUR_USERNAME.gitlab.io/biblemem`

### Option 4: Netlify

1. **Sign up at Netlify**
   - Go to https://netlify.com

2. **Connect your repository**
   - Click "New site from Git"
   - Choose your Git provider and repository
   - Netlify will auto-detect settings

3. **Deploy**
   - Click "Deploy site"
   - Your app will be live at: `https://biblemem.netlify.app` (or custom domain)

## Future Enhancements

- [ ] Support for multiple Bible passages
- [ ] User-selectable Bible versions (KJV, ESV, NKJV, etc.)
- [ ] Dynamic word alternative generation
- [ ] Session history and statistics
- [ ] Leaderboard/progress tracking
- [ ] Audio pronunciation of words
- [ ] Difficulty customization (% of words to blank)
- [ ] Multiple languages support
- [ ] Offline mode with service workers

## Technical Details

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies required

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight: ~50KB total (uncompressed)
- No external dependencies
- Fast load times
- Optimized for mobile networks

## Credits

### Icons
<a href="https://www.flaticon.com/free-icons/bible" title="bible icons">Bible icons created by Haca Studio - Flaticon</a>

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Made with ❤️ to help children memorize Scripture**
