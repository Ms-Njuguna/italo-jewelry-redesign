# ITALO Jewelry — Website Redesign Concept (React + Vite)

Unofficial redesign concept for **Italo Jewelry** (italojewelry.com).  
Built to demonstrate a more premium, conversion-focused storefront experience: clearer navigation, smoother browsing, tasteful sale handling, and modern product interactions.

> **Disclaimer:** This is an independent redesign concept for demonstration/portfolio purposes. Not affiliated with or endorsed by Italo Jewelry.

---

## What’s included (MVP but strong)

### Homepage (conversion-focused)
- Sticky navbar + dropdown navigation
- Search input that filters products in real time
- Category browsing section (image tiles)
- Featured section + “Best sellers” grid
- Tasteful sale UI using `compareAt` vs `price` (no tacky banners)
- Trust signals (shipping/returns/warranty/secure checkout)

### Product discovery
- Filter chips (category)
- Sorting (best match, rating, price low→high, price high→low)
- Search term highlighting in product names

### Quick View modal (popover)
- Animated open/close (Framer Motion)
- View price/compareAt, category, rating
- CTA buttons + direct navigation to Product Details

### Product Details page (route)
- `/products/:id` route (React Router)
- Premium “PDP” layout:
  - gallery thumbnail switching
  - metal & size option selection (UI)
  - in-stock + delivery ETA pill (UI)
  - accordion sections (materials/care/shipping)
  - sticky add-to-cart bar after scrolling past CTA

### Announcement ribbon (marquee)
- Conveyor-belt style message ribbon for shipping/returns + a subtle sale callout

---

## Tech Stack
- React + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (routing)
- Lucide React (icons)

---

## Getting Started

### 1) Install dependencies
```bash
npm install
```
2) Run dev server
```bash
npm run dev
```
***Open the URL printed in the terminal (usually http://localhost:5173).***
4) Production build
```bash
npm run build
npm run preview
```

---

## Routing (SPA)
/ — homepage

/products/:id — product details page

This is a client-side routed SPA, so production hosting must serve index.html for unknown routes (see Deployment below).

---

## Project Structure (high level)

```bash
src/
  components/
    sections/     # page sections (Hero, TrustBar, etc.)
    ui/           # reusable UI components (Button, Card, Accordion, Modal)
  data/           # products + categories (mock data layer)
  pages/          # Home, ProductDetails routes
  lib/            # helpers (cn, etc.)
public/
  _redirects      # SPA routing support for Cloudflare Pages
```
