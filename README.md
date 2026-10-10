# Floro — Daily Devotional Flower Subscriptions

> **A contemporary cultural lifestyle brand rooted in ritual.**  
> Delivering fresh, thoughtfully selected puja flowers in daily packets through monthly subscription plans across India.

---

## 🌸 Overview

Floro helps Indian Hindu households maintain unbroken daily worship by delivering fresh, carefully selected puja flowers before 7:30 AM every morning, 365 days a year (including Sundays and public holidays).

- **Value Plan:** ₹450 / month (~50 g daily packet)
- **Basic Plan:** ₹600 / month (~100 g daily packet, with fresh Belpatra every Monday for Lord Shiva)
- **Premium Plan:** ₹900 / month (Configurable: Two ~100 g Basic packets OR One Basic packet + One fresh Marigold Mala daily)

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS with centralized design tokens matching `Floro_design.md` Section 5
  - Canvas: `#FFF9F1` (Warm Ivory)
  - Surface: `#FFFFFF` (Pure White)
  - Accent: `#E9005B` (Floro Pink)
  - Borders: `2px solid #241D20`
  - Shadows: Hard offset `4px 4px 0 #241D20`
- **Typography:** `Space Grotesk` (Headings), `DM Sans` (Body & UI), `IBM Plex Mono` (Codes), `Noto Sans Devanagari` (Hindi flower names)
- **Deployment:** Netlify with `@netlify/plugin-nextjs` and `netlify.toml`
- **Data & Storage:** Hybrid service layer (`src/lib/storage.ts`) supporting local persistence and Supabase PostgreSQL (`supabase/schema.sql`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ☁️ Supabase Cloud Setup (Optional)

Floro works out-of-the-box with local browser state simulation. To connect a live Supabase database:

1. Create a project at [supabase.com](https://supabase.com).
2. Go to SQL Editor in your Supabase dashboard and run the script in `supabase/schema.sql`.
3. Set your environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🌐 Netlify Deployment

Floro includes pre-configured `netlify.toml` for zero-configuration Netlify builds:

1. Push this repository to GitHub / GitLab.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. The `@netlify/plugin-nextjs` plugin handles Next.js App Router edge functions and SSR automatically.

---

## 📂 Key Pages & Routes

- `/` — High-converting Homepage with mandir visual, trust strip, and live PIN serviceability check
- `/subscriptions` — Side-by-side plan comparison matrix and Premium configurator
- `/how-it-works` — 5-step daily delivery and logistics breakdown
- `/flowers-and-sourcing` — Botanical glossary with Hindi script and seasonal substitution rules
- `/rituals-and-festivals` — Weekly deity offering cadence and festival calendars
- `/faq` — Searchable and categorized FAQ accordion
- `/contact` — Verified support channels and contact inquiry form
- `/checkout` — 5-step checkout flow (Details → OTP → Address → Review → Payment)
- `/confirmation` — Authoritative order receipt (`FLR-XXXXXX`) and delivery schedule
- `/account` — Subscriber dashboard with pause, resume, and cancellation controls
- `/terms`, `/privacy`, `/refund-policy`, `/delivery-policy` — Transparent policies
