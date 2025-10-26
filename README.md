# Team Resume Prototypes

A showcase application featuring 10 different team resume prototypes built with React, Vite, and Tailwind CSS.

## Features

- 10 unique team resume layout prototypes
- Interactive landing page with prototype navigation
- Print-ready resume layouts
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Data visualization with Recharts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will start on `http://localhost:5173` (or the next available port).

### Available Routes

- `/` - Landing page with links to all prototypes
- `/prototype1` through `/prototype10` - Individual prototype pages

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Framer Motion (animations)
- Recharts (data visualization)
- Lucide React (icons)
- React to Print (print functionality)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run export-pdfs` - Export all prototypes as PDFs
- `npm run export-pdfs <number>` - Export a single prototype (e.g., `npm run export-pdfs 3`)

## PDF Export

The project includes an automated PDF export script that generates PDFs of all prototypes using Puppeteer.

### Export All Prototypes

```bash
npm run export-pdfs
```

This will generate PDFs for all 10 prototypes in the `exported-pdfs/` folder.

### Export Single Prototype

```bash
npm run export-pdfs 5
```

This will regenerate only `prototype-5.pdf`, perfect for iterating on a single design.

### Output

- **Location**: `exported-pdfs/` folder in the project root
- **File Names**: `prototype-1.pdf` through `prototype-10.pdf`
- **Format**: A4 portrait, 2 pages per prototype
- **Note**: Files are always overwritten with the same name for easy iteration

## Project Structure

```
src/
├── components/
│   ├── LandingPage.jsx
│   ├── prototypes/
│   │   ├── Prototype1.jsx
│   │   ├── Prototype2.jsx
│   │   └── ...
│   └── shared/
├── data/
├── styles/
└── utils/
```
