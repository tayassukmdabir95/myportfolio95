# Tayassuk Md Abir — Developer Portfolio

A complete responsive Next.js (App Router) portfolio for Tayassuk Md Abir. Dark/light theme, full-page sections, three individual project detail pages, real GitHub/live links, social contacts, and a downloadable starter resume.

## Quick start (VS Code)

1. Extract the ZIP and open the **`tayassuk-portfolio`** folder in VS Code (**File > Open Folder**).
2. In VS Code terminal, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open **http://localhost:3000**.

## Add your own pictures

Copy the following files into the `public` folder (names must match exactly):

| File | Purpose |
| --- | --- |
| `public/me.jpeg` | Professional photo in hero |
| `public/std.jpeg` | StudioSpace project image |
| `public/bazar.jpeg` | BazarDor project image |
| `public/fit.jpeg` | FitLog project image |

The site has attractive SVG fallback art if any of these are missing. When you add your files, refresh the page. Suggested dimensions: photo portrait (e.g. 900 × 1100); project screenshots landscape (e.g. 1400 × 800). JPG with `.jpeg` extension works.

## Resume

A simple starter `public/resume.pdf` is **already included**, so the resume button works. It does not claim any internships or experience. **Please review it** before submission. To replace it, create/export your resume as a PDF and overwrite `public/resume.pdf`. Edit `RESUME_CONTENT.md` if you want the source text as a starting point.

## Sections and requirements covered

- Responsive navigation linking to About, Skills, Education, Projects, and Contact
- Professional designation, introduction, and portrait slot
- One-click PDF resume download
- GitHub, LinkedIn, and Facebook links
- Detailed About Me including programming journey and interests
- Visually styled skill categories for frontend/backend/AI/tools
- BRAC University, BSc in CS, 2023–2027 (expected)
- No invented employment experience; professional experience section omitted as optional
- StudioSpace, BazarDor and FitLog with cards + individual `/projects/[slug]` pages
- Each project page includes stack, summary, live link, client repository, challenges and future ideas
- Email, phone, WhatsApp and social contact methods
- Footer, responsive layout, theme switch and SEO metadata

## Project structure

```text
app/
  layout.js
  page.js
  globals.css
  not-found.js
  projects/[slug]/page.js
components/
  Navbar.jsx
  ThemeButton.jsx
  Providers.jsx
  ProjectCard.jsx
  SmartImage.jsx
  Footer.jsx
data/site.js               # All project, social and skills content
public/
  resume.pdf               # Downloadable starter resume
  photo-placeholder.svg    # Temporary portrait placeholder
  *-preview.svg            # Temporary project artwork
```

## Customize text and links

Edit `data/site.js` for skills, bio fields, link URLs, project tech stacks, project challenges or plans. Edit `app/page.js` for the About text and other homepage descriptions.

## Production check

```bash
npm run build
npm run start
```

## Push to a new GitHub repository

First create an **empty** public GitHub repository (e.g. `tayassuk-portfolio`) without README/license. Then run these commands in the project directory. Replace YOUR-USERNAME if needed:

```bash
git init
git add .
git commit -m "Build responsive developer portfolio"
git branch -M main
git remote add origin "YOURGITHUBBRANCHORIGIN"
git push -u origin main
```

If Git asks for credentials, use your normal GitHub authentication. Never commit secrets.

## Deploy on Vercel (required for assignment)

1. Visit https://vercel.com/new and sign in with GitHub.
2. Choose/import the new `tayassuk-portfolio` repository.
3. Framework preset: **Next.js**. Project root: `./`.
4. Press **Deploy**. No environment variables are required.
5. Wait for a successful production build, then open the Vercel URL.
6. Test all three `/projects/...` pages, theme toggle, links, resume download, mobile menu and WhatsApp.
7. Submit the *actual* live Vercel URL shown in your dashboard. Without the deployed URL, the submission hosting requirement is not met.

Subsequent pushes to `main` should trigger a new Vercel deployment if automatic deployments are enabled.

## Tech stack

Next.js App Router, React, JavaScript (no TypeScript), Tailwind CSS 4 and custom CSS, Lucide React, next-themes. No backend, API keys, databases, or `.env` files are needed for this static portfolio.
