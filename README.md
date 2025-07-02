# Auto Garage Website

A modern, professional website built with Next.js for local auto garage businesses.

## Features

- 🚗 Professional auto garage landing page
- 📱 Mobile-responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 🔍 SEO optimized for local search
- 📧 Contact forms for appointments
- 🖼️ Service showcase and gallery
- ⭐ Customer testimonials
- 📍 Location and contact information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel/Netlify

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   └── forms/          # Contact and appointment forms
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── data/               # Static data (services, testimonials)
└── assets/             # Images and icons
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

The website is designed to be easily customizable for any auto garage:
- Update business information in `src/data/`
- Replace images in `public/images/`
- Modify colors and styling in `tailwind.config.ts`
- Add/remove services in the services data file

## Deployment

The site is ready to deploy on platforms like Vercel, Netlify, or any hosting service that supports Next.js.
