# whoami

Personal portfolio for Arielson Oliveira — Platform Engineer (Cloud, DevOps & AI).

Built with Next.js (static export), Tailwind CSS v4 and Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Update career content

All content lives in `src/data/profile.ts`:

- `experience` — roles on the career timeline (newest first)
- `projects` — case studies shown under "Selected work"
- `metrics`, `services`, `engagements`, `certifications`, `education`, `stack`

Edit the data, rebuild, deploy. No component changes needed.

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
Live at https://arielson.dev (custom domain set in Settings → Pages; DNS on Cloudflare).
