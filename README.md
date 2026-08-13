# Personal Engineering Portfolio

A modern, responsive personal portfolio web application showcasing full-stack projects, client deliverables, and custom glassmorphic design systems.

Built with **React 18**, **Vite 6**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🛠️ Technology Stack

- **Framework**: React 18 (TypeScript)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Toast Notifications**: Sonner

---

## 📂 Project Architecture

```
Personal_Portfolio/
├── public/                 # Static public assets
├── src/
│   ├── components/         # Page sections and interactive modules
│   │   ├── ui/             # Core visual elements & background effects
│   │   ├── About.tsx       # Bio & profile section
│   │   ├── Contact.tsx     # Contact form & social channels
│   │   ├── Experience.tsx  # Timeline nodes
│   │   ├── Hero.tsx        # Dynamic hero layout
│   │   ├── Navbar.tsx      # Glass header
│   │   └── Projects.tsx    # Showcase grid
│   ├── data/
│   │   └── portfolio-data  # Content source of truth
│   ├── hooks/
│   │   └── useInView.ts    # Viewport scroll animations
│   ├── styles/
│   │   └── globals.css     # Design system variables & custom utilities
│   ├── App.tsx             # Application layout coordinator
│   ├── index.css           # Tailwind entry directives
│   └── main.tsx            # DOM mounting entrypoint
├── index.html              # HTML shell
├── vite.config.ts          # Vite compilation settings
└── package.json            # Node project configuration
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```