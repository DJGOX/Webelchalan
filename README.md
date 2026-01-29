This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Opción 1: Desde el dashboard (recomendado)

1. Entra en **[vercel.com](https://vercel.com)** e inicia sesión con GitHub.
2. Click en **“Add New…” → “Project”**.
3. Importa el repo **`DJGOX/Webelchalan`** (conecta GitHub si hace falta).
4. Vercel detecta Next.js automáticamente. Click en **“Deploy”**.
5. En unos minutos tendrás la URL (ej. `webelchalan.vercel.app`).

Cada `git push` a `main` generará un nuevo deploy automático.

### Opción 2: Con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Sigue los pasos (linkear al proyecto o crear uno nuevo). Para producción: `vercel --prod`.
