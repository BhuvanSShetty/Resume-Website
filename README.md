# Bhuvan S Shetty Resume Website

##  Live Demo
[Check out the live site](http://bhuvans.in) 

## Tech Stack

- **Core**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Design System**: Architecting the Core (Custom Design Tokens)
- **Typography**: Plus Jakarta Sans
- **Icons**: Material Symbols Outlined

## Key Features

- **Architectural Aesthetic**: Minimalist, high-performance design featuring a global black dotted grid pattern and glassmorphism.
- **Responsive Layout**: Editorial-style grid systems that adapt seamlessly from mobile to wide-screen displays.
- **Tech Core Bento Grid**: A visual, interactive map of my technical stack spanning Languages, Tools, Frameworks, and Cloud/DB.
- **Optimized Performance**: Built using Vite for near-instant HMR and production-ready bundles.

## Project Structure

```bash
├── public/               # static assets (favicon, etc.)
├── src/
│   ├── assets/           # images (portraits, project thumbnails)
│   ├── components/       # re-usable modular UI components
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx      # Master identity and CTA
│   │   ├── Navbar.jsx    # Sticky transparent navigation
│   │   ├── Projects.jsx  # Complex project grids
│   │   └── TechCore.jsx  # Skills bento grid
│   ├── App.jsx           # Main application shell
│   ├── index.css         # Tailwind v4 globals and design system
│   └── main.jsx          # React entry point
└── index.html            # Documentation and metadata
```

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---
Created by **Bhuvan S Shetty**.
