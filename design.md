# Floro — Design System & Architecture Specification (Living Source of Truth)

> **Document Status:** Absolute Truth of Current Codebase  
> **Version:** 2.0 (Post-Redesign Live Implementation)  
> **Product:** Floro — Daily Devotional Flower Subscriptions  
> **Platform:** Responsive Web Application (Next.js 14 App Router, TypeScript, Tailwind CSS)  
> **Audience:** Culturally connected Indian Hindu households across Tier 1 & 2 cities seeking pure, reliable, daily puja flowers delivered with reverence.

---

## 1. Executive Summary & Brand Direction

Floro is a contemporary cultural lifestyle brand rooted in sacred Hindu ritual. It bridges timeless devotional traditions with modern metropolitan convenience by delivering fresh, handpicked, ethically sourced puja flowers every single morning (6:00 AM – 8:00 AM) through monthly subscription plans.

### Core Visual Identity: Neo-Brutalist Folk Fusion
The user interface combines the bold structural clarity of **Neo-Brutalism** with the intricate organic beauty of **traditional Indian folk art (Kalamkari & Madhubani)**.
- **Neo-Brutalist Architecture:** Bold 2px near-black outlines (`#241D20`), crisp geometric containers, high-contrast typography, and hard offset drop shadows (`4px 4px 0 #241D20`).
- **Indian Folk Art Soul:** Authentic Madhubani paintings for weekday deities and festivals, Kalamkari motifs for cultural storytelling, handcrafted vector torans (`<GarlandDivider />`), and a subtle textured Kalamkari SVG background overlay (`<KalamkariBackground />`).
- **Respectful Devotional Tone:** Deities and sacred botanicals (Bilva, Durva, Tulsi) are treated with scriptural accuracy and artistic reverence—never as cartoonish stickers or frivolous marketing gimmicks.

---

## 2. Design Tokens & Visual Hierarchy

### 2.1 Color Palette
The color system balances the warmth of temple ritual with modern digital legibility:

| Token | Hex Value | Role & Usage |
|---|---|---|
| **Canvas** (`--canvas` / `bg-floro-canvas`) | `#FFF9F1` | Warm sacred ivory page canvas; soft natural base for all routes |
| **Surface** (`--surface` / `bg-white`) | `#FFFFFF` | Crisp card, modal, and input background surface |
| **Surface Soft** (`bg-floro-surface-soft`) | `#F4EEE6` | Secondary card fills and subtle container accents |
| **Text Primary** (`--text-primary`) | `#20191C` | Deep near-black ink for headings, primary body, and 2px borders |
| **Text Secondary** (`--text-secondary`) | `#63595C` | Warm slate for subtitles, descriptions, and metadata |
| **Accent Magenta** (`--accent` / `bg-floro-accent`) | `#E9005B` | Vibrant brand accent for primary conversion CTAs and active states |
| **Accent Hover** (`bg-floro-accent-hover`) | `#C9004E` | High-contrast interactive hover state for primary buttons |
| **Accent Soft** (`bg-floro-accent-soft`) | `#FFE4EE` | Soft tint for badge highlights, lotus accents, and active tabs |
| **Folk Marigold** (`bg-floro-marigold`) | `#F2B72F` | Traditional Genda yellow for torans, badges, and folk accents |
| **Folk Terracotta** (`bg-floro-terracotta`) | `#B84E36` | Earthy vermilion/sindoor red for ritual badges and flower cores |
| **Folk Leaf** (`bg-floro-leaf`) | `#758B32` | Sacred Vilva/Tulsi green for botanical accents and trust badges |
| **Folk Indigo** (`bg-floro-indigo`) | `#2E4D86` | Deep temple midnight blue for evening rituals and Vishnu features |

### 2.2 Typography Scale & Readability Standards
- **Display & Headings:** `Space Grotesk` (700 / 600 weight, `-0.025em` tracking) provides architectural dignity, structure, and modernity.
- **Body & Controls:** `DM Sans` (400 / 500 / 600 weight) ensures fluid reading comfort.
- **Sacred & Sanskrit Names:** `Noto Sans Devanagari` supports accurate Hindi/Sanskrit rendering for deity names and botanical varieties.
- **Strict Readability Threshold:** To guarantee effortless readability for all age demographics, all card copy, labels, and table cells enforce a minimum font size of `text-sm` (14px) and standard body text of `text-base` (16px). Microscopic font sizes (<13px) are strictly barred.

### 2.3 Neo-Brutalist Geometry & Shadows
- **Borders:** Universal `2px solid #241D20` on all cards, buttons, modals, input fields, and table headers.
- **Corners:** Controlled radii—`rounded-lg` (8px) for buttons, `rounded-xl` (12px) for cards and modals, `rounded-full` for status pills and badges.
- **Drop Shadows:**
  - Standard button/card: `box-shadow: 4px 4px 0px #241D20`
  - Hover state: `box-shadow: 6px 6px 0px #241D20` with `translate(-2px, -2px)`
  - Active/Pressed state: `box-shadow: 2px 2px 0px #241D20` with `translate(2px, 2px)`
  - Pink shadow accent: `box-shadow: 4px 4px 0px #E9005B` on selected subscription cards.

---

## 3. Motion, Physics & Micro-Interactions

### 3.1 Card Hover Zoom-in Physics
All interactive cards throughout the application feature a smooth, elevated zoom-in effect:
- **Transform:** `transform: scale(1.025)`
- **Z-Index:** Elevated to `z-index: 10` to cleanly float above adjacent layout elements.
- **Timing Curve:** `300ms cubic-bezier(0.2, 0, 0, 1)` for organic, tactile acceleration and deceleration.

### 3.2 Scoped Sibling Blur
To avoid overwhelming the user when comparing complex offerings, a selective sibling blur effect is strictly constrained to specific comparison grids:
- **Scoped Containers:** Exclusively applied inside `.neo-card-group` containers on:
  1. Subscription Plan Cards (`PlanPreviewSection` & `/subscriptions`)
  2. Botanical Flower Glossary (`/flowers-and-sourcing`)
  3. 7 Days of Devotion & Festival Cards (`/rituals-and-festivals`)
- **Sibling Effect:** Non-hovered sibling cards gently scale to `scale(0.99)`, drop opacity to `0.82`, and take a subtle `filter: blur(0.5px)`.
- **Exclusions:** Feature cards, testimonials, FAQ items, and checkout steps are intentionally excluded from sibling blur to preserve uninterrupted reading flow.
- **Scroll Optimization:** An active scroll listener applies `body.is-scrolling` to disable hover transforms while scrolling, eliminating cursor-induced stutter.
- **Reduced Motion:** Fully adheres to `prefers-reduced-motion: reduce` by zeroing transition durations and suppressing blur filters.

---

## 4. Architectural Components & Layout Patterns

### 4.1 Section Flow & Garland Dividers
- **Seamless Page Transitions:** Subpages avoid heavy, boxed, full-bleed border bands. Content headers and sections transition organically with transparent backgrounds (`bg-transparent pt-12 md:pt-16 pb-4`).
- **Folk Garland Accents (`<GarlandDivider />`):** Handcrafted cultural toran bands feature repeating yellow marigolds, terracotta cores, mango leaves, and a central auspicious lotus framed by subtle 2px divider lines. They mark major contextual transitions:
  - Between Hero and Trust Strip
  - Between How It Works and Freshness & Care
  - Between Freshness & Care and Testimonials
  - Between Testimonials and FAQ Preview
  - Before page footers and between major content sections.

### 4.2 Global Serviceability Checker Modal
Rather than occupying large, static vertical space on the landing page, pin-code serviceability is implemented as an on-demand global modal dialog (`<ServiceabilityModal />` supported by `<ServiceabilityContext />`):
- **Trigger Points:** Invoked via "Check Delivery in Your Area" or "Check Pin Code" CTAs located in the Hero, Subscriptions page, and Footer.
- **Keyboard & Focus Handling:** Locks background scroll, auto-focuses input, supports Escape-key dismiss, and closes on backdrop click.
- **Validation & Feedback:** 6-digit PIN validation against active regional logistics hubs.
- **Instant Hub Chips:** Pre-configured quick-select chips for major metropolitan hubs (Delhi `110001`, Bengaluru `560034`, Mumbai `400050`, Hyderabad `500001`, Varanasi `221001`).
- **Waitlist Capture:** In unserved areas, users can instantly submit their phone/email to join the expansion priority list.

### 4.3 Authentic Indian Art Assets
The application strictly uses bespoke, culturally accurate imagery:
1. **Madhubani Paintings (Mithila Art):** High-resolution traditional paintings depicting the 7 weekday ruling deities:
   - *Ravivar (Sunday):* Lord Surya seated on his divine chariot (`surya_ravivar.jpg`).
   - *Somvar (Monday):* Lord Shiva in serene meditation with Crescent Moon (`shiva_somvar.jpg`).
   - *Mangalvar (Tuesday):* Lord Hanuman carrying Sanjeevani mountain (`hanuman_mangalvar.jpg`).
   - *Budhvar (Wednesday):* Lord Ganesha with Modak and Lotus (`ganesha_budhvar.jpg`).
   - *Guruvar (Thursday):* Lord Vishnu with Shankha and Chakra (`vishnu_guruvar.jpg`).
   - *Shukravar (Friday):* Goddess Lakshmi seated on Kamal (`lakshmi_shukravar.jpg`).
   - *Shanivar (Saturday):* Lord Shani with Crow vahana (`shani_shanivar.jpg`).
   - *Festivals:* Maa Durga Navratri Mahishasuramardini (`durga_navratri.jpg`).
2. **Kalamkari Paintings:** Heritage paintings for brand philosophy and temples (Gaja Lakshmi, Kailash, Kalpavriksha, Vrindavan grove, Saraswati).
3. **Botanical Photography:** High-resolution crisp photography of the 7 sacred worship botanicals (Marigold/Genda, Hibiscus/Gudhal, Aparajita, Jasmine/Mogra, Belpatra, Durva Grass, Tulsi).
4. **Vector Folk Motifs:** Custom SVG components (`LotusIcon`, `DiyaIcon`, `SacredLeaves`, `TempleArch`).

---

## 5. Subscription Plan Matrix & Pricing Truth

The application provides three carefully structured monthly subscription tiers. All weights and quantities describe the **daily morning packet**, delivered 365 days a year including Sundays and festivals:

| Plan Tier | Monthly Price | Daily Packet Composition | Special Inclusions | Target Devotee Need |
|---|---|---|---|---|
| **Value** | **₹450 / mo** | ~50 g fresh flowers | Marigold, Hibiscus, Butterfly Pea (Aparajita), Jasmine, Doobh Grass, Tulsi | Compact home mandirs, daily single-deity worship |
| **Basic** | **₹600 / mo** | ~100 g mixed flowers | Daily mixed blooms + **Belpatra every Monday** for Shiva Puja, Tulsi & Durva | Standard family puja, daily morning ritual for all family members |
| **Premium** | **₹900 / mo** | Custom Configuration:<br>• **Option A:** 2 × Basic Packets (~200 g total)<br>• **Option B:** 1 × Basic Packet + 1 Fresh Marigold Garland (Mala) | Belpatra Mondays, daily sacred leaves, plus fresh marigold mala or double volume | Large home temples, multiple altars, or devotees desiring daily fresh malas |

### Critical Product Policies
- **Weather & Seasonal Substitutions:** Clearly stated across plan cards, tables, and checkout. Natural regional weather shifts trigger thoughtful, equal-value substitutions.
- **6:00 AM – 8:00 AM Silent Delivery:** Delivered in a complimentary door basket without ringing doorbells or disturbing morning sleep.
- **Sacred Nirmalya Disposal:** Educational guidance provided on composting spent flowers or returning them for sacred vermicomposting.

---

## 6. Complete Page Inventory & Route Architecture

| Route | Page Title | Primary Functional Role & Content |
|---|---|---|
| `/` | **Home** | Brand thesis, Hero with sacred proposition, Garland dividers, Trust strip, 3-tier subscription cards, How It Works flow, Flower care & Nirmalya guide, authentic devotee testimonials, FAQ preview, and footer. |
| `/subscriptions` | **Flower Subscriptions** | Detailed plan cards, Premium configuration selector (2 Packs vs. Pack + Mala), comprehensive side-by-side feature matrix table, seasonal policy, and subscription FAQ. |
| `/how-it-works` | **How Floro Works** | 4-step illustrated subscriber journey, morning timeline (harvest to 6 AM delivery), packaging hygiene breakdown, and delivery reassurance. |
| `/flowers-and-sourcing` | **Flowers & Ethical Sourcing** | Botanical glossary of 7 sacred flowers/leaves with Sanskrit/Hindi names, deity symbolism, cold-chain handling, ethical farmer partnerships, and Nirmalya sacred disposal. |
| `/rituals-and-festivals` | **Rituals & Festivals** | "7 Days of Devotion" deity calendar featuring authentic Madhubani paintings, scriptural flower offering guidelines, and festival calendar. |
| `/faq` | **Frequently Asked Questions** | Searchable accordion directory categorized by Subscriptions, Delivery & Timing, Flower Varieties, and Account Management. |
| `/contact` | **Contact & Support** | Multi-channel support: direct telephone, monitored WhatsApp link, web ticket submission form, physical registered addresses, and escalation SLA. |
| `/account` | **Subscriber Dashboard** | Active plan management, pause/skip delivery calendar, address update, order history, invoice download, and renewal preferences. |
| `/checkout` | **Guided 5-Step Checkout** | Plan selection review -> Subscriber Details -> Mobile OTP Verification -> Delivery Address -> Secure Payment Simulation. |
| `/confirmation` | **Order Confirmation** | Authoritative order summary, first delivery date, morning delivery time window, account link, and calendar reminder. |
| `/delivery-policy` | **Delivery Policy** | 6 AM – 8 AM silent drop guidelines, complimentary door basket care, weather delays, and apartment security protocols. |
| `/refund-policy` | **Refund & Cancellation Policy** | Pause/cancellation cut-off times, damaged packet dispute turnaround, and refund processing terms. |
| `/terms` | **Terms of Service** | Legal usage terms, monthly subscription billing policies, and customer obligations. |
| `/privacy` | **Privacy Policy** | Customer data handling, OTP encryption, and communication consent. |
| `/not-found` | **Custom 404** | Branded neo-brutalist error screen with graceful navigation recovery. |

---

## 7. Interactive State & Checkout Engine

The checkout process is modeled as a deterministic, multi-step state machine:
```
[Plan Selection] 
       ↓
[Step 1: Details] (Name, Phone Number, Email)
       ↓
[Step 2: OTP Verification] (6-digit simulated OTP with paste support & resend timer)
       ↓
[Step 3: Delivery Address] (Street, Landmark, City, State, PIN with instant serviceability check)
       ↓
[Step 4: Order Review] (Plan composition, price breakdown, seasonal substitution agreement)
       ↓
[Step 5: Payment Gateway] (UPI / Cards / Net Banking mock gateway with instant confirmation)
       ↓
[Confirmation Screen] (Unique Order ID, first delivery schedule, invoice view)
```

---

## 8. Accessibility & Quality Compliance (WCAG 2.2 AA)

1. **Color Contrast:** All body text (`#20191C`) against canvas (`#FFF9F1`) exceeds a contrast ratio of `12:1`. Accent pink (`#E9005B`) on white surfaces exceeds `4.5:1` for large text and interactive fills.
2. **Focus Visibility:** Every button, card, link, and input has a distinct `3px` focus ring with offset for keyboard navigation.
3. **Screen Readers:** Sacred imagery and Madhubani artwork have descriptive `alt` tags celebrating the depicted deity and tradition; purely ornamental SVG separators carry `aria-hidden="true"`.
4. **Touch Targets:** All clickable touch targets on mobile maintain a minimum hit size of `48px × 48px`.
5. **No Layout Shifts:** Fixed aspect ratios on all Madhubani and botanical imagery eliminate Cumulative Layout Shift (CLS).

---

> *This document represents the absolute truth of the Floro web platform as currently engineered in `c:\Users\Acer\VibeCoding\Projects\redisigning floro`.*
