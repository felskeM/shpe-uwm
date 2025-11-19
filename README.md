# SHPE UWM Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers/)
[![Wrangler](https://img.shields.io/badge/Wrangler-4.45.0-orange?logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers/wrangler/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![License](https://img.shields.io/github/license/felskeM/shpe-uwm?color=blue)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/felskeM/shpe-uwm)

---

This is the official repository for the **Society of Hispanic Professional Engineers (SHPE)** at the **University of Wisconsin–Milwaukee (UWM)** chapter.
It’s a dynamic, high-performance website built to:

- Empower Hispanic STEM leaders
- Share events, programs, and resources
- Foster connection among UWM students and professionals

The site is powered by **Next.js**, **TypeScript**, and **TailwindCSS**, dynamically deployed on **Cloudflare Workers** via **OpenNext + Wrangler** with CI/CD handled by **GitHub Actions**.

---

## Live Deployment

**Production:** [https://shpeuwm.org](https://shpeuwm.org)

The website runs as a fully dynamic Cloudflare Worker using `@opennextjs/cloudflare`, supporting:

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes (e.g., contact form via Nodemailer)
- Global edge caching and routing

---

## Frameworks & Tools

### Core Stack

| Purpose    | Tool                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| Framework  | [Next.js 15](https://nextjs.org/)                                      |
| Language   | [TypeScript 5.9](https://www.typescriptlang.org/)                      |
| Styling    | [Tailwind CSS 4.1](https://tailwindcss.com/)                           |
| Hosting    | [Cloudflare Workers](https://workers.cloudflare.com/)                  |
| Deployment | [Wrangler 4.45.0](https://developers.cloudflare.com/workers/wrangler/) |
| CI/CD      | [GitHub Actions](https://github.com/features/actions)                  |
| Adapter    | [OpenNext.js (Cloudflare)](https://github.com/opennextjs)              |

### Frontend Libraries & UX

- **Radix UI** – Accessible, composable component primitives
- **Lucide Icons** – Clean, customizable SVG icons
- **Framer Motion** – Animation and motion library
- **Zustand** – Lightweight global state management
- **SWR** – Data fetching and revalidation
- **Zod** – Schema validation
- **react-hook-form** – Simplified form handling

### Backend & Integrations

- **Resend + Nodemailer** – Secure email transport for contact forms
- **Vercel Analytics / Speed Insights** – Web performance monitoring
- **dotenv** – Environment variable management for local dev

---

## Deployment Overview

| Step                 | Description                                   |
| -------------------- | --------------------------------------------- |
| `npm run cf:build`   | Builds for Cloudflare’s OpenNext runtime      |
| `npm run dev:worker` | Runs local Cloudflare simulation on port 8771 |
| `npm run deploy`     | Builds + deploys via Wrangler                 |
| GitHub Actions       | Automatically deploys on push to `main`       |

The build process compiles your Next.js app for Cloudflare’s runtime (`.open-next/worker.js`) and bundles routes, middleware, and assets globally at the edge.

---

## Design Highlights

- Fully responsive and accessible layout
- SHPE-inspired blue & gold accent color system (globals.css)
- Semantic HTML + optimized Lighthouse scores
- Motion and interactivity via Framer Motion
- Tailwind plugins for typography, aspect-ratio, forms, and container queries

---

## 👥 Contribution & Credits

**Matthew Felske** (Mateo) — serving as Webmaster on the SHPE @ UWM Executive Board.
This project is built collaboratively with the amazing SHPE board members who make its content possible.

💡 Want to help improve the site?

- Open an [issue](../../issues)
- Submit a pull request
- Or chat with me directly via [Discussions](../../discussions)

Constructive feedback and collaboration are always welcome!

---

## ⚠️ Disclaimer

_This project is not officially affiliated with SHPE National._
For more information about SHPE, visit [shpe.org](https://shpe.org).

---

_Developed and maintained by [@felskeM](https://github.com/felskeM) — SHPE UWM Webmaster_
