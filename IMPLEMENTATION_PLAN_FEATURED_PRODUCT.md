# Implementation Plan — "Featured Product" Section

Status: **APPROVED — ready to implement.**

## 1. Objective

Add a "Featured Product" section to the landing page that highlights a single product — **Kolo sreće** ("Wheel of Fortune" prize wheel) — using the two provided thumbnail/lightbox image pairs. The section must be in Serbian, match the existing visual language of the site, and be reviewable by the client on a live preview URL before it touches production.

Source images (already present in the repo on `origin/main`, confirmed via `git ls-tree`):
- `public/assets/thumbs/proizvodi/tocak-srece.webp`
- `public/assets/thumbs/proizvodi/tocak-srece-1.webp`
- `public/assets/lightbox/proizvodi/tocak-srece.webp`
- `public/assets/lightbox/proizvodi/tocak-srece-1.webp`

Note: these two images already appear inside the general product gallery in [Capabilities.tsx](components/fora/Capabilities.tsx) (via `lib/gallery.ts`, `proizvodi` array, listed there as part of the "Kola sreće" feature). This plan does not remove them from there — the new section calls the same two files out on their own, with more prominence and dedicated copy.

## 2. Pre-work: sync before branching

Local `main` is 35 commits behind `origin/main`, and has 3 uncommitted local changes (`app/globals.css`, `components/fora/Capabilities.tsx`, `components/fora/Navigation.tsx`) — confirmed to be stale formatting-only diffs against an old base, not intentional work.

Resolved:
1. Discard the 3 uncommitted local changes.
2. Fast-forward local `main` to match `origin/main` exactly (`git pull` — a local-only sync, nothing is pushed to GitHub in this step).
3. Create the feature branch from that up-to-date `main`, so it includes everything already live in production plus this new section — nothing else. `main` on GitHub itself is never modified directly at any point — only the feature branch is pushed, and `main` only changes later via a reviewed PR merge.

## 3. Branch & preview workflow

1. Branch name: `feature/featured-product-section`
2. Push branch to GitHub (`origin`) as soon as it's created, even before the section is finished, so a Vercel preview URL exists early.
3. Because the Vercel project is already connected to this GitHub repo, pushing the branch (or opening a PR) will automatically generate a unique **Vercel Preview Deployment URL** — this is what gets sent to the client for approval. Production (`main` branch → the live domain) is untouched until we merge.
4. Open a GitHub Pull Request: `feature/featured-product-section` → `main`, marked clearly as "awaiting client approval" (e.g. in the PR description), so it isn't merged prematurely.
5. Share the Vercel preview URL with the client for review.
6. On client approval: merge the PR into `main`. Vercel will then deploy it to production automatically.
7. If the client requests changes: push additional commits to the same branch — the preview URL updates automatically, no new link needed.
8. If rejected/shelved: the branch can simply be left unmerged or deleted; `main`/production is never affected.

## 4. On-page copy (Serbian) — final

- Eyebrow label: `Istaknuti proizvod`
- Heading: `Kolo sreće`
- Subheading / description:
  `Personalizovano kolo sreće izrađeno od kvalitetnog pleksiglasa — idealno rješenje za nagradne igre, sajmove i promotivne aktivnosti u maloprodaji.`
- Feature bullets (matching the bullet-list style used in Capabilities):
  - `Izrada po mjeri i dizajnu klijenta`
  - `Kvalitetan i izdržljiv pleksiglas`
  - `Prilagodljive dimenzije i boje`
  - `Idealno za nagradne igre i promocije`
- CTA button (same label/behavior used elsewhere on the site): `Zatražite ponudu` → smooth-scrolls to `#contact`
- Image alt text: `"Kolo sreće od pleksiglasa"`

## 5. Component design

New file: `components/fora/FeaturedProduct.tsx`

Follows the exact conventions already established in [Capabilities.tsx](components/fora/Capabilities.tsx) and [Industries.tsx](components/fora/Industries.tsx):
- `'use client'` component, `<section id="featured-product" className="... scroll-mt-24">`
- Centered header block: eyebrow `span` (`text-fora-red uppercase`) → `h2` → `p` description, animated in with `framer-motion` (`whileInView`, matching the fade/slide-up pattern used site-wide)
- Two-column layout on desktop (image side + copy/CTA side, mirroring the reversed-row cards in Capabilities), stacked on mobile
- Image side: the 2 thumbnail images (`tocak-srece.webp`, `tocak-srece-1.webp`) shown at larger size than the small gallery grid thumbs elsewhere (since there are only 2 images, not 6+), each clickable
- Clicking an image opens `yet-another-react-lightbox` (already a project dependency, already used in Capabilities.tsx — same import pattern) showing the two full-resolution `assets/lightbox/proizvodi/*.webp` files, swipeable between the two
- Copy side: heading, description paragraph, feature bullets (red dot markers, same style as Capabilities feature lists), CTA button
- Image data declared as a small local const inside the component (2 filenames) rather than editing shared `lib/gallery.ts`, since this is a standalone highlight, not part of the general gallery
- Images rendered with plain `<img>` (consistent with rest of the codebase — no `next/image` used anywhere currently), `loading="lazy"`, descriptive Serbian `alt` text

## 6. Placement on the page

Insert **between `<Capabilities />` and `<Process />`** in [app/page.tsx](app/page.tsx), so it reads as a natural extension of "what we make" right after the services section, before the process/how-we-work section.

## 7. Navigation

No nav link added. The section is reachable by scrolling; the top nav stays as-is (`components/fora/Navigation.tsx` is not touched).

## 8. QA checklist before requesting client review

- Section renders correctly at mobile / tablet / desktop widths
- Lightbox opens on click, both images swipeable, closes correctly
- CTA button scrolls to the contact form
- No console errors/warnings
- Images load from the correct `/assets/thumbs/proizvodi/` and `/assets/lightbox/proizvodi/` paths (already confirmed present in repo)
- Section doesn't break existing scroll-anchor/nav behavior for other sections

## 9. Out of scope

- No pricing, checkout, or e-commerce functionality
- No CMS/admin editing UI — content is hardcoded in the component, same as every other section on this site
- No changes to the existing gallery inside Capabilities.tsx
- No changes to `Navigation.tsx`
