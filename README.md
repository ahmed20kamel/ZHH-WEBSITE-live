# ZHH Group Holding Website

A professional corporate website for ZHH Group Holding built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design inspired by Mubadala
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast performance with Next.js 14+ App Router
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized with metadata, sitemap, and robots.txt
- 📧 Contact form integration with EmailJS
- 🗺️ Interactive map with Leaflet

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Maps**: Leaflet / React Leaflet

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your EmailJS credentials.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
zhh-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── divisions/          # Divisions page
│   ├── projects/           # Projects page
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ui/                 # UI components
├── data/                   # Data files
│   ├── divisions.ts
│   ├── projects.ts
│   └── team.ts
├── lib/                    # Utility functions
│   ├── animations.ts
│   └── emailjs.ts
└── public/                 # Static assets
```

## Configuration

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Customization

- **Colors**: Update colors in `app/globals.css`
- **Content**: Edit data files in `data/` directory
- **Images**: Add images to `public/images/` and update references

## Deployment

The site can be deployed on Vercel, Netlify, or any platform that supports Next.js.

## License

© 2025 ZHH Group Holding. All rights reserved.
