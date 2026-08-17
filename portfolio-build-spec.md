# Portfolio Website Build Spec
**Style reference:** Majd-style single-page freelance/agency portfolio
**Use this as a prompt for:** Claude Code, Cursor, v0, Lovable, Framer AI, or a human developer

---

## 1. Project Summary (paste this as your opening prompt)

> Build a single-page, scroll-based personal portfolio website for a software engineer / freelance builder. The site should feel modern, minimal, and confident — dark-mode-first, big kinetic typography, generous whitespace, smooth scroll-triggered animations, and a service-led narrative (this is a business pitch, not just a resume). Structure it as one long homepage with anchor-linked sections, plus a separate `/work` page for full case studies and a `/blog` page for articles. Fully responsive, fast-loading, accessible.

---

## 2. Tech Stack Recommendation

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SEO-friendly, fast, easy to deploy |
| Styling | **Tailwind CSS** | Rapid, consistent design tokens |
| Animation | **Framer Motion** | Scroll-triggered reveals, marquee text, hover states |
| CMS (optional) | **Sanity.io** or **Contentlayer + MDX** | For blog posts / case studies without redeploying |
| Forms | **Resend** or **Formspree** | Contact form email delivery |
| Hosting | **Vercel** | Native Next.js support, free tier |
| Fonts | Variable sans-serif (e.g. **Inter, Geist, or Neue Montreal**) | Matches the clean/technical aesthetic |

*(If you'd rather not code it: Framer itself is the fastest route — drag-and-drop, built-in CMS, hosting included. Say so in your prompt if using Framer AI.)*

---

## 3. Site Architecture

```
/                     → Home (all sections below, anchor-linked)
/work                 → Full project list
/work/[slug]          → Individual case study
/blog                 → Article list
/blog/[slug]          → Individual article
```

### Homepage sections (in order)

1. **Nav bar** — logo/name (left), anchor links (Home / About / Services / Work / Contact), sticky on scroll, transparent → solid on scroll
2. **Hero** — name + role headline ("Software Engineer"), one-line intro sentence, portrait or abstract graphic, primary CTA button ("Get Started" / "Let's Talk")
3. **Marquee statement** — large horizontally-scrolling or wrapping headline making your value prop in one sentence (e.g. "From idea to launch — clean, scalable products built to move fast, stay simple, and perform in the real world")
4. **Bio / About** — 2–3 short paragraphs: who you are, what you focus on, what you're currently building
5. **Services grid** — 3–5 cards, each with a title + 2–3 sub-tags (e.g. "Frontend Development — UI Dev, Responsive Layouts, Web Performance")
6. **Featured Work** — 3–4 project cards (image, title, one-line category tag), links to `/work/[slug]`, "View All Work" CTA
7. **Testimonials** — 3–4 quote cards with photo, name, role/title
8. **Blog/Thoughts preview** — 2–3 latest article cards (date, title, one-line excerpt)
9. **Contact / CTA section** — short prompt + form (Name, Email, Message/Project) + social icon links
10. **Footer** — repeated nav, contact email, tagline, copyright

---

## 4. Design System

**Color palette**
- Background: near-black (`#0A0A0A` or `#111111`)
- Foreground text: off-white (`#F5F5F5`)
- Accent: one restrained accent color (electric blue, lime, or warm orange) used sparingly on CTAs/links only
- Muted text: gray (`#8A8A8A`) for secondary copy

**Typography**
- Headings: bold, tight letter-spacing, large scale (64–120px on hero, desktop)
- Body: 16–18px, relaxed line-height (1.5–1.6)
- Eyebrow/labels: small uppercase, wide letter-spacing, monospace or condensed style (e.g. `/CREATING SINCE 2020`)

**Spacing & layout**
- Max content width: ~1200–1280px, centered
- Section vertical padding: 120–160px desktop, 64–80px mobile
- 12-column grid for cards; 1–2 columns on mobile

**Motion**
- Fade-up + slight translateY on scroll-into-view for section content (Framer Motion `whileInView`)
- Marquee/infinite-scroll text loop for the statement section
- Hover states: subtle scale (1.02–1.05) or underline-reveal on links/cards
- Page transitions: soft fade between routes

---

## 5. Content Checklist (fill in with YOUR real info — don't leave placeholders)

- [ ] Name + role headline
- [ ] One-sentence positioning statement
- [ ] Short bio (3 paragraphs max)
- [ ] 3–5 services with sub-tags
- [ ] 3–4 real projects: title, cover image, category, link to case study
- [ ] 3–4 real testimonials with names/roles (only use if genuine — don't fabricate quotes)
- [ ] 2–3 blog posts (can start with none and add later)
- [ ] Real email + social links (not placeholder URLs)
- [ ] Favicon + OG image for link previews

---

## 6. Prompt to Paste Into Your AI Tool

> Build a Next.js 14 (App Router) + Tailwind CSS + Framer Motion personal portfolio site with the architecture and sections listed in "Section 3" above. Dark theme by default using the color palette in "Section 4." Use scroll-triggered fade-up animations for each section and an infinite-marquee text component for the value-proposition statement. Include a working contact form (POST to an API route that sends email via Resend). Make the project list and blog list data-driven from a local JSON/MDX source so I can add entries without touching layout code. Fully responsive down to 375px width. Optimize images with next/image. Generate placeholder content only where I haven't provided real content, clearly marked as `TODO: replace`.

---

## Important note

Don't copy Majd's actual images, copy text verbatim, or clone the Framer template file itself — that would infringe copyright/ToS. This spec captures the **structure, layout pattern, and design language** (which isn't copyrightable) so you can build an original site with your own content, copy, and assets in the same genre.
