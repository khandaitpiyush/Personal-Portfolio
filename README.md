# Piyush Khandait — Software Engineering Portfolio

A premium, interactive personal portfolio website designed to showcase full-stack engineering capability, database design masteries, and fluid UI/UX principles.

Built with **React 18**, **Vite 6**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🎨 Visual & Interactive Systems

*   **Apple Glassmorphism**: Translucent frosted panels (`backdrop-blur-2xl`), hair-line borders, and realistic drop shadows.
*   **Interactive Spotlight Canvas**: Custom HTML5/React backdrop overlaying a dotted grid mesh that dynamically tracks and glows around the user's mouse position.
*   **Light/Dark Toggle**: Fully reactive theme synchronization using CSS variables (`--bg-color`, `--card-bg`, etc.) mapped directly with `localStorage` and OS settings.
*   **Case Study Grid**: Asymmetric, responsive display cards highlighting active engineering projects with direct links, feature checkmarks, and technologies.
*   **Work Milestones Timeline**: Vertical node system mapping internships, hackathons, and certifications chronologically.

---

## 🛠️ Technology Stack

*   **Frontend Library**: React 18 (TypeScript)
*   **Build Tool**: Vite 6 (Fast Refresh, SWC Compiler)
*   **Styling**: Tailwind CSS v4 (native `@import` architecture)
*   **Animations**: Framer Motion (`motion/react`)
*   **Icons**: Lucide React
*   **Notifications**: Sonner (Toast alerts)

---

## 📂 Project Architecture

```
Personal_Portfolio/
├── public/                 # Static assets (mockups, avatar)
├── src/
│   ├── components/         # Page sections and interactive modules
│   │   ├── ui/             # Core visual elements (DottedBackground)
│   │   ├── About.tsx       # Bio & context profile
│   │   ├── Contact.tsx     # Message validation form & links
│   │   ├── Experience.tsx  # chronological timeline
│   │   ├── Hero.tsx        # Dynamic banner statement
│   │   ├── Navbar.tsx      # Floating glass header
│   │   └── Projects.tsx    # Case studies grid
│   ├── data/
│   │   └── portfolio-data  # Application content source of truth
│   ├── hooks/
│   │   └── useInView.ts    # Scroll-triggered viewport animations
│   ├── styles/
│   │   └── globals.css     # CSS Variables and design system variables
│   ├── App.tsx             # Application layout coordinator
│   ├── index.css           # Tailwind entry directives
│   └── main.tsx            # DOM mounting entrypoint
├── index.html              # HTML shell & Google Fonts integration
├── vite.config.ts          # Vite compilation & tailwind integration rules
└── package.json            # Node project configuration
```

---

## 🚀 Running Locally

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will boot locally at `http://localhost:3000` (or the next available port) and open in your default browser automatically.

### 3. Build for Production
To compile a minimized, highly optimized build bundle for deployment:
```bash
npm run build
```
The build artifacts will be generated in the `/build` directory, ready to be hosted on Vercel, Netlify, or GitHub Pages.