# Implementation Plan: Robust Website Metadata & Social Preview

This plan outlines the steps to replace the default URL previews (e.g., Bolt previews) with a custom snapshot of our website (`1q.PNG`) and configure a complete, robust metadata system (SEO, Open Graph, and Twitter Cards) in the project.

---

## User Review Required

> [!IMPORTANT]
> **No code changes will be made until you approve this plan.**
> Please review the metadata tags and open questions below to confirm the site title, description, and preview image settings.

## Open Questions

> [!IMPORTANT]
> 1. **Domain Name:** For Open Graph and Twitter Card images, social platforms prefer absolute URLs (e.g., `https://yourdomain.com/og-image.png`). Since the site runs on dynamic URLs (like local dev or Bolt/Vercel preview links), we can use a root-relative path `/og-image.png` which works on most modern deployment platforms, or hardcode a specific production domain if you have one. Do you have a specific production domain you'd like us to configure?
> 2. **Favicon:** Would you like us to use a cropped version of the website snapshot or logo as a custom favicon (`/favicon.ico`), or stick to the current setup?

---

## Proposed Changes

### Assets & Public Files

#### [NEW] [public/](file:///c:/Users/emmah/.gemini/antigravity-ide/scratch/dent/public/)
* Create a standard root-level `public/` directory (the default directory Vite uses to serve static assets directly at the root).

#### [NEW] [public/og-image.png](file:///c:/Users/emmah/.gemini/antigravity-ide/scratch/dent/public/og-image.png)
* Copy the snapshot image `src/screens/public/1q.PNG` to `public/og-image.png` so it is served at `https://<domain>/og-image.png` and is accessible by social scrapers (LinkedIn, X, Facebook, WhatsApp, Slack).

---

### HTML Head Configuration

#### [MODIFY] [index.html](file:///c:/Users/emmah/.gemini/antigravity-ide/scratch/dent/index.html)
* Replace generic headers with a complete, robust metadata header in English:
  * **Standard SEO Title:** `Lumière Obsidian | Luxury Cosmetic Dentistry Sanctuary`
  * **Description:** `Elite cosmetic dentistry for discerning professionals. Handcrafted porcelain veneers, Invisalign clear aligners, and personalized smile transformations in a private concierge sanctuary.`
  * **Keywords:** `luxury dentistry, cosmetic dentistry, porcelain veneers, Invisalign, smile makeover, elite dentist, private dental concierge`
  * **Open Graph Tags (Facebook, LinkedIn, Slack, WhatsApp):**
    * `og:type` = `website`
    * `og:title` = `Lumière Obsidian | Luxury Cosmetic Dentistry Sanctuary`
    * `og:description` = `Elite cosmetic dentistry for discerning professionals. Handcrafted porcelain veneers, Invisalign, and personalized smile makeovers.`
    * `og:image` = `/og-image.png`
    * `og:image:width` = `1200`
    * `og:image:height` = `630`
  * **Twitter / X Cards:**
    * `twitter:card` = `summary_large_image`
    * `twitter:title` = `Lumière Obsidian | Luxury Cosmetic Dentistry Sanctuary`
    * `twitter:description` = `Elite cosmetic dentistry for discerning professionals. Handcrafted porcelain veneers and personalized smile makeovers.`
    * `twitter:image` = `/og-image.png`
  * **Apple Mobile Meta Tags:**
    * `apple-mobile-web-app-title` = `Lumière`
    * `apple-mobile-web-app-capable` = `yes`

---

## Verification Plan

### Automated Build Verification
* Run `npm run build` to ensure Vite correctly copies the assets from the `public` folder to the `dist` folder root and injects metadata into `dist/index.html`.

### Manual Metadata Verification
* Verify the presence of `<meta property="og:image"...>` and other header elements in `dist/index.html`.
