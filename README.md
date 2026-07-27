# Jacob Maynard — AI Systems Portfolio

Premium recruiter-facing executive architecture portfolio for **Jacob Maynard**, Founder | AI Systems Architect.

Live production domain: [https://portfolio.jacobmaynard.co](https://portfolio.jacobmaynard.co)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project structure

```
src/
  app/                 # Layout, metadata, OG image, favicon, sitemap
  components/
    sections/          # Hero through Contact
    PortfolioShell.tsx # Navigation + section assembly
  hooks/               # Active section tracking
  lib/content.ts       # Copy and structured content
public/downloads/      # Resume + portfolio PDFs
```

## Environment variables

No required environment variables for local or production.

Optional (if you later add analytics or form handlers):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Override canonical site URL (defaults to `https://portfolio.jacobmaynard.co` via code) |

## Downloads

- Resume: `/downloads/Jacob-Maynard-Resume.pdf`
- Portfolio PDF: `/downloads/Jacob-Maynard-Portfolio.pdf`

Replace the email placeholder in `src/lib/content.ts` (`emailPlaceholder`) when a public contact address is ready.

## Vercel deployment

### Option A — CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
vercel domains add portfolio.jacobmaynard.co
```

### Option B — Dashboard

1. Import this GitHub repository into Vercel.
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: Next.js defaults (no override needed)
5. Deploy Production
6. Project Settings → Domains → add `portfolio.jacobmaynard.co`

## DNS (Namecheap)

After Vercel assigns the domain, add these records in Namecheap → Domain List → Manage → Advanced DNS.

### Recommended (CNAME)

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME Record | `portfolio` | `cname.vercel-dns.com` | Automatic |

If Vercel shows a project-specific CNAME target, use that exact value instead of `cname.vercel-dns.com`.

### Alternative (A record)

Only if Vercel instructs you to use an A record for the subdomain:

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | `portfolio` | `76.76.21.21` | Automatic |

Remove conflicting `URL Redirect` or old `A`/`CNAME` records for `portfolio`.

Propagation usually completes within minutes; allow up to 24–48 hours in rare cases.

## Accessibility & QA checklist

- Semantic landmarks and headings
- Skip link
- Keyboard-focusable navigation
- Visible `:focus-visible` states
- Active section tracking
- Smooth scrolling with reduced-motion fallback
- Responsive desktop / tablet / mobile layouts
- Print stylesheet
- Resume + Portfolio PDF download buttons
- Open Graph + favicon metadata

## Design system

- Navy: `#18365B`
- Gold: `#B78A2D`
- Background: `#FAFAF8`
- Body text: `#222222`
- Display: Playfair Display
- Body: Inter
