# YouTube Clone Project

This repository contains multiple versions of a YouTube-inspired clone project.

## Project Versions

- "Youtube_1st verision" - original static HTML/CSS/JavaScript version
- "Youtube-Clone" - another static implementation
- "youtube-clone-react" - modern React + Vite version

## React Project Structure

```text
src/
├── components/
│   ├── Header.tsx / Header.css        # Top bar
│   ├── sidebar.tsx / sidebar.css      # Sidebar menu
│   ├── Layout.tsx / Layout.css        # Wraps Header + Sidebar + <Outlet/>
│   ├── CategoryPills.tsx / .css       # Filter buttons
│   ├── videocard.tsx / .css           # Single video card
│   └── videogrid.tsx / .css           # Video grid
├── pages/
│   ├── Home.tsx                       # Main home page
│   └── Watch.tsx / Watch.css          # Placeholder, not actively used
├── data/
│   └── video.ts                       # Video data and categories
├── types/
│   └── video.ts                       # TypeScript interfaces
├── App.tsx                            # React Router setup
├── main.tsx                           # Entry point
└── index.css                          # Global CSS variables and resets
```

## How to Run

For the React version, open the folder "youtube-clone-react" and run:

```bash
npm install
npm run dev
```

## Notes

This repository keeps all project folders together without removing any existing content.
