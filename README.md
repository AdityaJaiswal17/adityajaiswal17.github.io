# Aditya Jaiswal — Portfolio Website

A personal academic portfolio built with **Vite + React 18 + TypeScript + Tailwind CSS**, deployed on GitHub Pages.

---

## Quick Start

### Prerequisites
- Node.js (v18+) — installed at `/opt/homebrew/bin/node` on this machine
- npm — installed at `/opt/homebrew/bin/npm`

### Install dependencies
```bash
cd "Portfolio revamp/New_V2"
/opt/homebrew/bin/npm install
```

### Run locally
```bash
/opt/homebrew/bin/npm run dev -- --host 127.0.0.1
# Opens at http://127.0.0.1:5173
# Use --host 127.0.0.1 for Safari compatibility
```
Vite hot-reloads on every file save — no restart needed when editing content.

### Kill a running dev server
```bash
lsof -ti:5173 | xargs kill -9
```

### Build for production
```bash
/opt/homebrew/bin/npm run build
# Output goes to dist/
```

### Deploy to GitHub Pages
```bash
/opt/homebrew/bin/npm run build
npx gh-pages -d dist
```

---

## Project Structure

```
New_V2/
├── public/                         # Static assets (served as-is)
│   ├── images/
│   │   ├── loader.gif              # Loader screen animation
│   │   ├── logos/                  # Institution/company logos
│   │   │   ├── imperial.png
│   │   │   ├── bits.png
│   │   │   ├── ideaforge.png
│   │   │   ├── iitb.png
│   │   │   ├── iisc.png            # Black-on-transparent — auto-inverted in CSS
│   │   │   └── isro.png
│   │   └── self_upload/            # All project/research images
│   │       ├── profile_pic.JPG
│   │       ├── flowPastCylinder.gif
│   │       ├── Phase_field_ST_0.0001.png
│   │       ├── ST_0.0001.png
│   │       ├── fdm/                # FDM project images
│   │       ├── lbm/                # LBM project images
│   │       └── thesis/             # Thesis mesh images
│   └── files/
│       ├── Aditya_Jaiswal_MS_CV.pdf
│       └── Aditya_Jaiswal_Thesis.pdf
│
├── src/
│   ├── data/
│   │   └── content.ts              # *** ALL CONTENT LIVES HERE ***
│   ├── pages/
│   │   ├── HomePage.tsx            # Main landing page
│   │   ├── ProjectsPage.tsx        # Projects listing page
│   │   ├── ProjectDetailPage.tsx   # Individual project page
│   │   ├── ThesisPage.tsx          # Thesis detail page (content inline, not in content.ts)
│   │   └── NotFoundPage.tsx        # 404 page
│   ├── components/
│   │   ├── Navbar.tsx              # Top navigation bar
│   │   ├── Loader.tsx              # Full-screen loader (shows loader.gif for ~4s on first visit)
│   │   ├── ExperienceTimeline.tsx  # Work & research timeline
│   │   └── EducationSection.tsx    # Education cards + Achievements subsection
│   ├── App.tsx                     # Routes definition + Loader mount
│   ├── main.tsx                    # Entry point (HashRouter)
│   └── index.css                   # Global styles & Tailwind components
│
├── tailwind.config.js              # Colors, fonts, animations
├── vite.config.ts                  # Build config
└── index.html                      # HTML shell
```

---

## Content Editing Guide

**All content is in one file: `src/data/content.ts`**

### 1. Personal Info (`siteConfig`)
Location: `content.ts` → `export const siteConfig`

```typescript
export const siteConfig = {
  name: 'Aditya Jaiswal',
  location: 'India',
  email: 'adi1709.jaiswal@gmail.com',
  github: 'https://github.com/AdityaJaiswal17',
  linkedin: 'https://www.linkedin.com/in/aditya-jaiswal-bits',
  cvUrl: '/files/Aditya_Jaiswal_MS_CV.pdf',
  profilePic: '/images/self_upload/profile_pic.JPG',
}
```

To update CV: replace the file at `public/files/Aditya_Jaiswal_MS_CV.pdf`.

---

### 2. About Text
Location: `content.ts` → `export const aboutText`

An array of paragraph strings. Each string supports **HTML tags** (`<a>`, `<code>`, `<strong>`).

```typescript
export const aboutText = [
  `First paragraph with <a href="...">links</a> supported.`,
  `Second paragraph...`,
]
```

---

### 3. Experience (Work & Research Timeline)
Location: `content.ts` → `export const experience`

Each entry:
```typescript
{
  role: 'R&D Sourcing',
  company: 'ideaForge',
  companyUrl: 'https://www.ideaforge.co.in/',
  logo: '/images/logos/ideaforge.png',
  period: 'Oct 2025 – Present',
  location: 'India',
  current: true,                    // true → shows "Current" badge + filled dot
  // Optional fields:
  advisor: 'Dr. Name',              // Shows "under Dr. Name"
  description: 'One-paragraph summary...',
  venue: 'Presented at Conference 2023',
  venueUrl: 'https://...',
  logoInvert: true,                 // CSS-inverts logo (use for black-on-transparent logos like IISc)
  bullets: [
    'Achievement 1.',
  ],
}
```

**To add a new experience entry**: copy an existing block and add it to the `experience` array. Order is top-to-bottom.

**To add a logo**: place the image in `public/images/logos/` and reference as `/images/logos/filename.png`.

---

### 4. Education
Location: `content.ts` → `export const education`

Each entry:
```typescript
{
  degree: 'MSc Applied Computational Science & Engineering',
  institution: 'Imperial College London',
  institutionUrl: 'https://www.imperial.ac.uk',
  logo: '/images/logos/imperial.png',
  period: '2026 – 2027',
  location: 'London, United Kingdom',
  upcoming: true,               // true → shows "Upcoming" badge
  highlights: [
    'Specialisation in Machine Learning, Numerical Methods...',
  ],
  achievements: [] as string[], // Shown in the Achievements strip below the cards
}
```

Education appears as **two horizontal cards** just below the hero. Achievements from all entries are collected and shown as a full-width strip beneath the cards.

---

### 5. FDM Projects
Location: `content.ts` → `export const fdmProjects`

Each FDM project:
```typescript
{
  id: 'my-project',            // Used in URL: /projects/fdm/my-project
  title: 'Project Title',
  excerpt: 'Short description on listing card.',
  tags: ['FDM', 'C++', 'OpenMP'],
  github: 'https://github.com/...',
  images: [
    { src: '/images/self_upload/fdm/image.png', caption: 'Caption text.' },
  ],
  method: 'fdm' as const,
  fullContent: {
    title: 'Full page title',
    description: `Markdown with $inline math$ and $$display math$$.`,
    compilation: `g++ file.cpp -o output\n./output`,
    outputStructure: ['Column 1: description'],
    notes: 'Optional note in accent box.',
  },
}
```

---

### 6. LBM Projects
Location: `content.ts` → `export const lbmProjects`

Same structure as FDM. URL pattern: `/projects/lbm/project-id`.

---

### 7. Thesis Page
Location: `src/pages/ThesisPage.tsx`

Content is **inline in the TSX file** (not in `content.ts`):
- **Mesh image pairs** (before/after): Edit `meshPairs` array
- **Pipeline steps**: Edit `pipelineSteps` array
- **Text content**: Edit JSX directly
- **Thesis PDF**: Replace `public/files/Aditya_Jaiswal_Thesis.pdf`

---

## Loader Screen

The loader shows `public/images/loader.gif` as a full-screen animation for ~3.8 seconds on every page load.

**To replace the GIF**: swap out `public/images/loader.gif`. Keep file size under ~5 MB for fast loads.

**Timing** is controlled in `src/components/Loader.tsx`:
```typescript
const t1 = setTimeout(() => setPhase('hold'), 80)    // fade in
const t2 = setTimeout(() => setPhase('out'), 3800)   // start fade out
const t3 = setTimeout(() => setPhase('done'), 4400)  // unmount
```

---

## Math Equations (KaTeX)

Uses **KaTeX** via `react-markdown + remark-math + rehype-katex`.

| Type | Syntax |
|------|--------|
| Inline math | `$u = \frac{\partial \psi}{\partial y}$` |
| Display math | `$$\nabla^2 \psi = -\omega$$` |

**Important**: In JS template literals, LaTeX backslashes must be doubled:
- `\frac` → `\\frac`, `\nabla` → `\\nabla`, `\partial` → `\\partial`

---

## Images

All images live in `public/images/self_upload/`:

| Location | Path |
|----------|------|
| Profile picture | `public/images/self_upload/profile_pic.JPG` |
| IIT Bombay research | `public/images/self_upload/Phase_field_ST_0.0001.png`, `ST_0.0001.png` |
| LBM flow GIF | `public/images/self_upload/flowPastCylinder.gif` |
| FDM project images | `public/images/self_upload/fdm/` |
| LBM project images | `public/images/self_upload/lbm/` |
| Thesis mesh images | `public/images/self_upload/thesis/` |
| Institution logos | `public/images/logos/` |

Replace a file with the same filename → change appears automatically. If you rename it, update the `src` reference in `content.ts` or the relevant `.tsx`.

**IISc logo note**: The IISc logo PNG is black-on-transparent. Set `logoInvert: true` on the experience entry to CSS-invert it for the dark background.

---

## Colors / Theme

Location: `tailwind.config.js`

Current theme is **black & white sharp**:

```javascript
colors: {
  navy: {
    950: '#000000',  // Page background (pure black)
    900: '#0a0a0a',  // Navbar background
    800: '#111111',  // Card background
    700: '#1c1c1c',  // Elevated elements
    600: '#2a2a2a',  // Borders
  },
  accent: {
    DEFAULT: '#ffffff',            // Primary accent (pure white)
    dark: '#d4d4d4',
    glow: 'rgba(255,255,255,0.06)',
  },
}
```

After changing colors, also update the grid pattern opacity in `src/index.css` (body `background-image`).

---

## Routing

Uses **HashRouter** for GitHub Pages compatibility:
```
https://adityajaiswal17.github.io/#/
https://adityajaiswal17.github.io/#/projects
https://adityajaiswal17.github.io/#/projects/fdm/lid-driven-cavity
https://adityajaiswal17.github.io/#/thesis
```

Routes are defined in `src/App.tsx`. To add a new page:
1. Create `src/pages/NewPage.tsx`
2. Add route in `App.tsx`: `<Route path="/new-page" element={<NewPage />} />`
3. Add nav link in `src/components/Navbar.tsx` → `navLinks` array

---

## Adding a New Project

1. Add images to `public/images/self_upload/fdm/` or `lbm/`
2. Add an entry to `fdmProjects` or `lbmProjects` in `content.ts`
3. It automatically appears on the listing page, homepage method cards, and "Other Projects" sidebar

---

## Deployment Checklist

1. Edit content in `src/data/content.ts`
2. Add images to `public/`
3. `npm run build` — must finish with `✓ built in X.XXs`
4. `npx gh-pages -d dist`
5. Live at `https://adityajaiswal17.github.io` within ~1 min

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Vite 5 | Build tool, dev server |
| React 18 | UI framework |
| TypeScript 5 | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| React Router v6 | Client-side routing (HashRouter) |
| KaTeX | Math equation rendering |
| react-markdown | Markdown → HTML in project descriptions |
| remark-math | Parses `$...$` / `$$...$$` in markdown |
| rehype-katex | Renders KaTeX from remark-math AST |
| react-syntax-highlighter | Code block syntax highlighting |
| lucide-react | Icon library |
