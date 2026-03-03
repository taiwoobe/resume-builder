# Resume Builder

A local-first resume builder built with Vue 3, TypeScript, and Vite.

Users fill in a structured form (personal info, experience, projects, education, and skills), then click **Generate PDF** to download a professional A4 resume. The app is designed with a split-screen layout: a branded left panel and a focused form workspace on the right.

## Demo URL

`https://taiwo-resume-builder.netlify.app/`

## What the app does

- Collects resume data through an easy section-based form.
- Supports dynamic add/remove for roles, projects, education entries, and bullet points.
- Generates a polished PDF resume from the form data in one click.
- Uses a single clean resume template aligned with the provided design style.

## Tech stack

- Vue 3
- TypeScript
- Vite
- `html2canvas` + `jspdf` for PDF export

## Run locally

```bash
npm install
npm run dev
```

App default dev URL: `http://127.0.0.1:5173/` (or the port shown by Vite).

## Production build

```bash
npm run build
npm run preview
```
