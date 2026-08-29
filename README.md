# Automation Engineer Resume Website

Portfolio website สำหรับ Automation Engineer — Professional, modern, bilingual (Thai/English) resume website.

## 🚀 Live Demo

[View Live Site](#) <!-- เพิ่ม URL หลัง deploy -->

## ✨ Features

- 🎨 Modern dark theme with lime accent
- 🌏 Bilingual support (Thai/English)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth animations and micro-interactions
- ♿ Accessibility optimized (WCAG compliant)
- 🔍 SEO ready with meta tags
- 📄 PDF certificate viewing
- 🎯 Single-page application

## 📁 Project Structure

```
automation-engineer-resume/
├── index.html              # Main HTML file
├── style.css              # Styles and responsive design
├── script.js              # Bilingual content & interactions
├── assets/                # Images and documents
│   ├── favicon.svg        # Site favicon
│   ├── og-image.svg       # Social sharing image
│   ├── profile-photo.jpg  # Profile picture
│   ├── cert-*.pdf         # Certifications (PDF)
│   ├── cert-*.png         # Certifications (preview images)
│   └── thesis.pdf         # Bachelor's thesis
└── README.md              # This file
```

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** — No frameworks, pure JS
- **Google Fonts** — Source Serif 4, Noto Sans Thai

## 📦 Deployment

### Option 1: Netlify (Recommended)

1. Push code to GitHub repository
2. Connect to Netlify
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
4. Deploy!

Or use **Netlify Drop**: Drag the entire folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option 2: Vercel

1. Push to GitHub
2. Import project to Vercel
3. Framework preset: **Other**
4. Build settings:
   - Build command: (leave empty)
   - Output directory: `.` (root)
5. Deploy!

### Option 3: GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / (root)
5. Save and wait for deployment

### Option 4: Cloudflare Pages

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy!

### Option 5: Manual Upload (FTP/cPanel)

Upload these files to your web server:
- `index.html`
- `style.css`
- `script.js`
- `assets/` folder (entire directory)

## 🔧 Local Development

No build tools required! Just open `index.html` in a browser.

For a local server (recommended for testing):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 🎨 Customization

### Update Content

Edit `script.js` to modify:
- Personal information
- Experience & internships
- Skills
- Education
- Certifications

### Change Colors

Edit `:root` variables in `style.css`:

```css
:root {
  --bg: #0a0a0a;        /* Background */
  --card: #141412;      /* Card background */
  --lime: #d7ff3d;      /* Accent color */
  --text: #f5f5f0;      /* Primary text */
  --muted: #9a9a95;     /* Secondary text */
  --border: #232320;    /* Borders */
}
```

### Update Photos & Documents

Replace files in `assets/` folder:
- `profile-photo.jpg` — Profile picture
- `cert-*.pdf` — Certificate PDFs
- `cert-*.png` — Certificate preview images
- `thesis.pdf` — Thesis document

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Gittisak Tongob. All rights reserved.

## 🤝 Contact

- Email: Feem19321932@gmail.com
- Phone: 098-504-2932
- Location: ขุขันธ์, ศรีสะเกษ, Thailand

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
