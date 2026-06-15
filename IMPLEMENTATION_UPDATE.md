# Implementation Plan: Luxury Cosmetic Dentistry Landing Page

This plan outlines the architecture, layout, styling, and checklist for the luxury cosmetic dentistry landing page for **Lumière Dental**, while preserving the existing project structures.

---

## 🏛️ Architecture & Preservation

To keep the original screens intact (like the desktop layouts), we will separate the screens into dedicated directories:
* **Preserved Pages:** 
  * `src/screens/Desktop/` (Original desktop layout)
  * `src/screens/OldDesktop/` (Legacy elements)
* **New Luxury Landing Page:**
  * `src/screens/Landing/` (New high-converting premium screen)

---

## 🎨 Design System & Aesthetic (Luxury Dark Theme)

* **Backgrounds:** Sophisticated dark stone and slate tones (`bg-stone-950`, `bg-stone-900`).
* **Highlights & Accents:** Premium gold/champagne colors (`text-amber-200`, `bg-amber-200`, amber transitions).
* **Typography:** Elegant and premium spacings, clear high-contrast layouts.
* **Badges:** Trust badges (AACD, 5-Star, 25+ Years of Experience).

---

## 🗺️ Screen Sections & Components

The landing page consists of 5 main sections inside `src/screens/Landing/sections/`:

1. **HeroSection:**
   * Full-viewport stone gradient background with amber/champagne accents.
   * Brand: **Lumière Dental**.
   * CTAs: "Reserve Your Consultation" (modal booking form) & "View Before & After Gallery" (smooth scroll).
   * Trust badges (AACD, 5-Star Rating, 25+ Years).
2. **ServicesSection:**
   * Interactive pricing matrix:
     * Porcelain Veneers ($900 - $2,500 / tooth)
     * Invisalign ($3,000 - $7,500)
     * Teeth Whitening ($300 - $800)
     * Dental Bonding ($150 - $500)
     * Elite Smile Makeover ($8,000 - $30,000+)
   * 0% Financing Banner.
3. **GallerySection:**
   * Before/After interactive comparison gallery.
   * 6 real case studies with modal detail views.
4. **FAQSection:**
   * Accessible Accordion addressing friction points:
     * Natural-looking results guarantee.
     * Pain and recovery times.
     * Insurance and flexible payment options.
     * Treatment duration.
     * Maintenance.
     * Step-by-step consultation process.
5. **FooterSection:**
   * Clean contact layout with ADA/AACD credentials.
   * Urgency banner: *"Only 4 new smile makeover openings remaining for June"*.
   * Instant booking widget/card.

---

## 📋 Implementation Checklist

Use this checklist to track the progress of development, testing, and optimization.

### Phase 1: Foundation & Structures
- [x] Create directory structure under `src/screens/Landing/`
- [x] Initialize main `Landing.tsx` and export it via `index.ts`
- [x] Set up base tailwind styles and root background styles

### Phase 2: Component Implementation
- [x] Implement **HeroSection** with premium styling, CTAs, and badges
- [x] Implement **ServicesSection** with the pricing matrix and financing banner
- [x] Implement **GallerySection** with modal views for before/after case studies
- [x] Implement **FAQSection** addressing core patient anxieties
- [x] Implement **FooterSection** with direct booking, urgency banner, and credentials

### Phase 3: Integration & Routing
- [x] Update root rendering in `src/index.tsx` to mount `<Landing />`
- [x] Implement query/route parameter switching if the user needs to swap between the legacy `Desktop` view and the new `Landing` page
- [x] Ensure state preservation or graceful fallback for legacy desktop routes

### Phase 4: Polish, UI Polish & Micro-interactions
- [x] Add smooth scrolling triggers between sections (e.g., Hero -> Gallery)
- [x] Implement responsive layout adjustments for all mobile and tablet viewports
- [x] Add hover animations on pricing cards and CTA buttons
- [x] Add modal transitions (open/close animations for booking and gallery details)

### Phase 5: Verification & Production Build
- [x] Check console for React warning/errors
- [x] Verify accessibility attributes (ARIA roles) on Accordions and Modals
- [x] Execute production build (`npm run build`) and fix any TS or linter issues
