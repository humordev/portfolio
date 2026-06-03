# Portfolio | Jonas Costa de Lima

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)](https://tailwindcss.com)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Featuring interactive animations, optional GitHub integration, and a sleek dark-themed design.

## Features

- Modern UI with glass morphism and Framer Motion animations
- Responsive layout for mobile, tablet, and desktop
- Career journey timeline, projects, education, and contact form
- EmailJS contact form (optional)
- SEO metadata and OpenGraph tags

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/humordev/portfolio.git
   cd portfolio
   npm install
   ```

2. Review `src/config/site.ts` (links) and `src/config/resume.ts` (all portfolio text from your CV).

3. Create `.env.local` for optional features:

   ```
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_TO_NAME=Jonas
   ```

4. Add your resume as `public/resume.pdf` for the Download Resume button.

5. Run the dev server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Deploy Online

### GitHub + Vercel (recommended)

1. Push this project to a new GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and import the repo.
3. Add environment variables from `.env.local` in the Vercel project settings.
4. Deploy; Vercel will give you a live URL (you can add a custom domain later).

## Customization Checklist

- [ ] `src/config/site.ts` — GitHub username and LinkedIn slug
- [ ] `public/resume.pdf` — your CV file
- [ ] `public/data/projects.json` — add real repos/links when ready
- [ ] Project images in `public/` if you add new ones
- [ ] EmailJS keys for the contact form

## License

MIT — see [LICENSE](LICENSE).

## Contact

**Jonas Costa de Lima** — jonaslima2026j@gmail.com
