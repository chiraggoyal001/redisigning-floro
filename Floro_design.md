# Floro — Design System & Website Specification

> **Status:** MVP design specification  
> **Version:** 1.0  
> **Product:** Floro — daily devotional flower subscriptions  
> **Platform:** Responsive web  
> **Audience:** Affluent, culturally connected Indian Hindu households, especially time-poor working people who want to maintain daily worship without sourcing flowers themselves.

## 1. Overview

Floro is a contemporary cultural lifestyle brand rooted in ritual. It helps people stay connected to everyday worship by delivering fresh, carefully selected puja flowers in daily packets through monthly subscription plans. The website should make the cultural meaning of the product memorable, the subscription offer easy to understand, and ordering feel dependable and low-friction.

The interface combines **expressive Indian folk-art-inspired storytelling** with **neo-brutalist structure** and a **premium, respectful devotional sensibility**. The visual identity should feel authored and contemporary rather than like a generic ecommerce template, a discount marketplace, or a religious poster.

### Product truth and scope

- Subscriptions are priced monthly and delivered daily, including Sundays and public holidays.
- Plan weights in the current plan reference describe the **daily packet**, not the monthly total.
- Current plans: Value ₹450/month (approx. 50 g daily packet); Basic ₹600/month (approx. 100 g daily packet); Premium ₹900/month (either two Basic packets or one Basic packet with one mala, per the supplied plan reference).
- Flower varieties can change by season and weather. The website must explain this clearly before payment.
- Floro's aspiration is to serve Tier 1 and Tier 2 cities across India. Actual deliverability must be checked by location; do not imply every pin code is live until operations confirm it.
- The initial release is an MVP. The design describes the intended user journey, but integrations and operational capabilities must be verified before they are presented as live.

### Goals

1. Communicate the emotional value: daily worship made easier without losing the connection to tradition.
2. Make the three subscription plans quickly comparable.
3. Convert interested visitors into paying subscribers through a guided, mobile-friendly flow.
4. Establish trust through explicit quality standards, transparent seasonal substitutions, real testimonials, and clear delivery information.
5. Make ongoing subscription details easy to find after signup.

### Non-goals for MVP

- A large multi-category online marketplace.
- Unsupported claims about sourcing, freshness duration, purity, sustainability, or religious outcomes.
- Complex custom ritual configuration unless operations can fulfil it.
- An unverified pan-India delivery promise.
- Copying a reference brand's illustrations, packaging, copy, or layout.

## 2. Brand Direction

### Positioning

**A contemporary cultural lifestyle brand rooted in ritual.** Floro serves people who value their traditions and want a reliable, considered way to maintain daily puja amid busy modern lives.

### Brand attributes

- **Rooted:** informed by Indian devotional practice and regional visual traditions.
- **Considered:** quality-focused, transparent, and deliberate about what is included.
- **Contemporary:** modern layouts, strong typographic hierarchy, and simple digital interactions.
- **Warm:** human, reassuring, and respectful rather than corporate or preachy.
- **Premium:** quality and care over discount-led communication.

### Brand voice

Use clear, calm, respectful, contemporary language. Cultural terms such as puja, mala, tulsi, doobh/durva, belpatra, and deity names should be spelled consistently and explained where a broad audience may benefit. Avoid exaggerated spiritual claims, guilt, fear, pressure, or suggesting that a subscription is a measure of devotion.

**Preferred:** “Fresh flowers for your daily puja, delivered every morning.”  
**Preferred:** “Seasonal varieties may change with availability. We’ll tell you what to expect.”  
**Avoid:** “Guaranteed divine blessings,” “the purest flowers in India,” or “always the same flowers” unless such claims are substantiated and operationally true.

### Suggested copy territory (draft, not locked legal copy)

- Hero headline: **“Stay close to your traditions. Every morning.”**
- Supporting line: “Thoughtfully selected puja flowers, delivered fresh for your daily rituals.”
- Primary CTA: **Explore subscriptions**
- Secondary CTA: **How Floro works**
- Serviceability CTA: **Check your pin code**

All claims about freshness standards and quality must be converted into specific, verifiable statements before launch.

## 3. Reference Interpretation

### Reference inputs

1. **Provided subscription pricing image:** authoritative reference for the current tiers, prices, daily packet weights, example varieties, the Premium mala option, and seasonal/weather substitution note.
2. **Provided Hoovu-inspired packaging image:** reference for colourful, dense, hand-drawn Indian-inspired ornamental patterning, product storytelling, and a tactile packaging personality.
3. **Hoovu Fresh website:** reference for presenting traditional flowers and rituals through contemporary product storytelling. Preserve the principle of making an everyday traditional category feel thoughtfully designed; do not copy its assets, wording, identity, or exact layout. Reference: https://hoovufresh.com/ and https://hoovufresh.com/pages/about-us.

### Preserve

- Folk-art-inspired illustration as a recognizable brand signature.
- A clear practical explanation of everyday flower offerings.
- Contemporary product presentation rooted in Indian cultural context.
- Distinct subscription options and transparent plan details.

### Improve / differentiate

- Make the plan comparison, address serviceability, substitution policy, and checkout easier to scan.
- Use a controlled illustration grammar rather than mixing unrelated styles across pages.
- Pair expressive cultural storytelling with strong conversion hierarchy.
- Treat mobile checkout and readable plan terms as first-class design requirements.

### Avoid

- Direct tracing or imitation of reference packaging, logos, copy, illustrations, or page compositions.
- Decorative sacred symbols used as meaningless filler.
- Treating all Indian art traditions as interchangeable.
- Overloading every section with patterns or oversized graphic elements.

## 4. Design Principles

1. **Ritual is the emotional context; reliability is the product promise.** Lead with cultural connection, then explain practical value.
2. **Art has a job.** Folk-art-inspired illustrations establish identity, explain rituals, and support storytelling; they must not obstruct product information or checkout.
3. **Make price and inclusion unambiguous.** Every plan card shows monthly price, daily packet weight or composition, key inclusions, and seasonal variation.
4. **Show before asking.** Let users explore plans before requiring account creation.
5. **One primary action per decision point.** Use one clear primary CTA per hero, plan-selection state, and checkout step.
6. **Contrast before decoration.** Thick borders and vivid accents support hierarchy; patterns and textures remain secondary to readable content.
7. **Cultural respect is non-negotiable.** Depict deities and sacred elements thoughtfully, in context, and without turning them into playful interface stickers.
8. **Honest availability beats broad claims.** Use pin-code checking to identify serviceable addresses.
9. **Mobile is a complete experience.** No desktop-only hover behavior, unreadable dense tables, or tiny checkout controls.
10. **Design for real states.** Loading, OTP errors, unavailable locations, seasonal substitutions, payment failures, and empty account states are specified, not improvised later.

## 5. Token System

The values below are the proposed source of truth for the MVP. Implement tokens centrally (CSS custom properties or the selected framework's token mechanism). Do not introduce one-off values without design review.

```yaml
version: 1.0
name: Floro Design System
description: Premium contemporary devotional flower subscription brand with Indian folk-art-inspired storytelling and neo-brutalist structure.
project:
  type: marketing-website-with-subscription-checkout
  platform: responsive-web
  contentType: product-information, subscriptions, trust-content, cultural-storytelling, account-and-checkout
  audience: affluent-culturally-connected-Indian-Hindu-households
  primaryGoal: convert visitors into active flower subscribers
brand:
  personality: [rooted, considered, contemporary, warm, premium]
  tone: respectful, clear, human, transparent
  principles:
    - ritual-context-with-practical-reliability
    - art-supports-information
    - price-and-inclusions-are-explicit
    - show-before-signup
    - cultural-respect
colors:
  canvas: "#FFF9F1"
  surface: "#FFFFFF"
  surface-soft: "#F4EEE6"
  surface-muted: "#EFE7DD"
  text-primary: "#20191C"
  text-secondary: "#63595C"
  text-muted: "#807579"
  accent: "#E9005B"
  accent-hover: "#C9004E"
  accent-soft: "#FFE4EE"
  border: "#241D20"
  border-subtle: "#D8CDC7"
  success: "#286342"
  success-soft: "#E7F3EA"
  warning: "#8A5200"
  warning-soft: "#FFF1D6"
  error: "#B4233D"
  error-soft: "#FCE8EC"
  information: "#2459A6"
  information-soft: "#E8F0FC"
  folk:
    marigold: "#F2B72F"
    leaf: "#758B32"
    terracotta: "#B84E36"
    indigo: "#2E4D86"
    ink: "#20191C"
  overlays:
    scrim: "rgba(32,25,28,0.52)"
typography:
  display-xl: {family: "Space Grotesk", size: 56px, weight: 700, lineHeight: 1.02, letterSpacing: -0.04em}
  display-lg: {family: "Space Grotesk", size: 44px, weight: 700, lineHeight: 1.06, letterSpacing: -0.035em}
  heading-xl: {family: "Space Grotesk", size: 36px, weight: 700, lineHeight: 1.12, letterSpacing: -0.025em}
  heading-lg: {family: "Space Grotesk", size: 28px, weight: 700, lineHeight: 1.18, letterSpacing: -0.02em}
  heading-md: {family: "Space Grotesk", size: 22px, weight: 650, lineHeight: 1.25, letterSpacing: -0.01em}
  heading-sm: {family: "Space Grotesk", size: 18px, weight: 650, lineHeight: 1.3, letterSpacing: 0}
  body-lg: {family: "DM Sans", size: 18px, weight: 400, lineHeight: 1.6, letterSpacing: 0}
  body-md: {family: "DM Sans", size: 16px, weight: 400, lineHeight: 1.55, letterSpacing: 0}
  body-sm: {family: "DM Sans", size: 14px, weight: 400, lineHeight: 1.5, letterSpacing: 0}
  label-md: {family: "DM Sans", size: 14px, weight: 650, lineHeight: 1.25, letterSpacing: 0.01em}
  caption: {family: "DM Sans", size: 12px, weight: 500, lineHeight: 1.45, letterSpacing: 0.01em}
  numeric: {family: "DM Sans", size: inherit, weight: 700, lineHeight: 1.05, letterSpacing: -0.03em, feature: tabular-nums}
  mono: {family: "IBM Plex Mono", size: 12px, weight: 500, lineHeight: 1.4}
  devanagariFallback: "Noto Sans Devanagari"
spacing:
  base: 4px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  sectionDesktop: 88px
  sectionTablet: 64px
  sectionMobile: 48px
layout:
  maxWidth: 1200px
  readingWidth: 720px
  desktopColumns: 12
  gutterDesktop: 24px
  gutterTablet: 20px
  gutterMobile: 16px
  headerHeightDesktop: 76px
  headerHeightMobile: 64px
  pageGutterDesktop: 32px
  pageGutterTablet: 24px
  pageGutterMobile: 16px
rounded:
  control: 8px
  card: 10px
  largeCard: 14px
  image: 8px
  modal: 14px
  pill: 999px
  sharpGraphic: 0px
borders:
  standard: 2px solid "#241D20"
  subtle: 1px solid "#D8CDC7"
  focus: 3px solid "#2459A6"
shadows:
  neo: "4px 4px 0 #241D20"
  neoHover: "6px 6px 0 #241D20"
  floating: "0 12px 32px rgba(32,25,28,0.14)"
  none: none
breakpoints:
  mobileMax: 599px
  tabletMin: 600px
  tabletMax: 899px
  desktopMin: 900px
  wideMin: 1280px
motion:
  fast: 120ms
  standard: 200ms
  slow: 320ms
  easing: "cubic-bezier(0.2, 0, 0, 1)"
  reducedMotion: reduce-to-opacity-or-no-motion
accessibility:
  wcag: "2.2 AA target"
  minBodyText: 14px
  touchTargetMin: 44px
  focus: visible-3px-outline-with-offset
  keyboard: full-keyboard-operation
components:
  primaryButton: "solid-accent, dark-text-contrast-verified, 2px-border, 8px-radius, neo-shadow"
  secondaryButton: "surface, dark-border, dark-text"
  subscriptionCard: "white-surface, 2px-dark-border, selected-card-accent-emphasis"
  illustration: "original-folk-art-inspired, controlled-palette, respectful-context"
pages:
  - home
  - subscriptions
  - how-it-works
  - flowers-and-sourcing
  - rituals-and-festivals
  - faq
  - contact-support
  - login-account
  - checkout
  - confirmation
  - legal-policies
  - not-found
```

### Color usage rules

- Warm ivory is the main page canvas; white is the principal content surface.
- Floro pink is the primary conversion accent, not a background for every section. Use it for primary CTAs, selected states, small highlights, and key price emphasis.
- Near-black is the principal text and neo-brutalist outline color.
- Folk colors (marigold, leaf, terracotta, indigo) belong mainly to illustrations and small visual accents. Do not use all of them in every component.
- Success, warning, error, and information colors are functional and must not be repurposed as decorative brand colors.
- Never communicate plan availability, status, or errors through color alone.
- Ensure text and controls meet WCAG 2.2 AA contrast. If the accent pink does not meet contrast for text at a given size, use it as a fill with a verified dark/white foreground or use dark text; do not assume white text is accessible.

### Typography rules

- Use Space Grotesk for headings and DM Sans for body, interface labels, and buttons where available and licensed/served reliably. Provide robust sans-serif fallbacks.
- Use Noto Sans Devanagari for Hindi-script text and test all mixed-script flower labels.
- Use tabular numerals for prices and quantities so plan cards align visually.
- Avoid all-caps for long labels. Short utility labels may use uppercase sparingly.
- Do not reduce important plan terms below 14px on desktop or mobile.
- Line-wrap long flower names and bilingual labels; never truncate meaning-critical inclusions.

## 6. Layout and Composition

### Global layout

- Center the main content in a maximum 1200px container.
- Use a 12-column grid on desktop, 8 columns on tablet, and a single-column flow on mobile.
- Keep page gutters at 32px desktop, 24px tablet, and 16px mobile.
- Use generous section spacing for brand storytelling but denser spacing for the plan comparison and checkout.
- Alternate white and soft ivory surfaces to establish rhythm; avoid boxing every paragraph into a card.
- Align section headings and content to the same container edge except for deliberate full-bleed illustration moments.

### Neo-brutalist rules

- Use visible 2px near-black borders on key cards, buttons, plan comparisons, and selected inputs.
- Use offset hard shadows only on primary actions or a small number of hero/feature objects. Do not apply shadows to every surface.
- Keep corners mostly square-to-soft (8–14px); avoid both all-sharp interfaces and excessive pill-shaped cards.
- Pair bold geometry with calm negative space and well-edited copy.
- Hover movement is restrained: a control can translate up/left slightly while the hard shadow grows; never animate layout enough to cause reflow.

## 7. Illustration, Imagery & Sacred Visuals

### Core art direction

Create an original, cohesive 2D illustration system influenced by Indian folk-art traditions. The supplied packaging reference points toward intricate linework, ornate botanical patterns, saturated flat colors, and hand-drawn shapes. Use folk traditions as specific sources of visual research, not as interchangeable decoration.

Recommended direction:

- **Primary motif system:** flowers, leaves, lotus forms, vines, garland geometry, ritual vessels, and temple architecture.
- **Supporting motifs:** yantras, mudras, and mantras where they serve a clear explanatory or editorial purpose.
- **Deity depictions:** use selectively, with respectful proportions, context, and composition. Do not place sacred imagery behind forms, crop faces casually, use it as a button texture, or add playful face/emoji treatment.
- **Style mix:** use one dominant linework and palette system across the site. Kalamkari- or Madhubani-inspired botanical detailing can inform decorative scenes; Pichwai/Tanjore-inspired richness can inform selected devotional feature illustrations; Warli should be used only where its graphic language fits the subject. Do not combine all styles indiscriminately in one frame.
- **Originality:** commission or generate original assets and review them for cultural accuracy, respectful treatment, and rights clearance. Do not copy Hoovu or another artist's illustration.

### Imagery hierarchy

1. Hero: a signature original illustration of a home mandir / offering context integrated with floral motifs, paired with clear subscription messaging. Actual fresh flowers may appear as supporting product photography if available.
2. Plans: small, consistent flower or packet images/illustrations for Value, Basic, and Premium. Keep plan quantity and price more prominent than decoration.
3. How it works: simple numbered diagram/illustration for plan selection, address/OTP, and delivery.
4. Rituals & festivals: larger editorial illustrations with respectful contextual captions.
5. Footer and utility areas: light floral ornaments only; don't impair legibility.

### Asset requirements

- Hero illustration desktop ratio: approximately 5:4 or 4:3; mobile crop must preserve the main subject.
- Plan thumbnail ratio: 4:3 or square; consistent crop across all three plans.
- Editorial illustrations: 4:3, 3:2, or square according to the composition, with an explicit mobile crop focal point.
- Use actual product photography honestly. Do not show a specific flower variety as guaranteed if the plan changes seasonally.
- Provide descriptive alt text for meaningful images. Decorative ornaments use empty alt text or equivalent decorative semantics.

## 8. Information Architecture & Navigation

### Primary navigation

- Floro logo → Home
- Flower Subscriptions
- How It Works
- Flowers & Sourcing
- Rituals & Festivals
- FAQs
- Account icon / Login or My Account
- Primary CTA: **Subscribe**

Contact/Support and legal policies appear in the footer and in checkout help. At mobile widths, place the primary CTA in the menu or as a concise visible action without covering content.

### Header behavior

- Desktop: 76px header; logo left, navigation central/right, account access and CTA at far right.
- Header may remain sticky after a short scroll, with a subtle bottom border. No heavy glass/blur effect.
- Mobile: 64px header; logo, account access if space permits, and menu button. Menu opens a keyboard-accessible panel/drawer.
- Active navigation uses text weight plus underline/border or a subtle accent; don't rely on color alone.
- If the account is authenticated, replace Login with My Account and preserve the current plan context where appropriate.

### Footer

Include subscription links, How It Works, FAQs, Support/Contact, serviceability, Terms, Privacy, Refund/Cancellation policy, and the seasonal-substitution policy. Show social links only when official active accounts exist. Never show placeholder icons that lead nowhere.

## 9. Page Inventory & Specifications

### 9.1 Home

**Purpose:** Explain the brand, build trust, and move visitors toward comparing plans.  
**Primary audience:** First-time visitors.  
**Primary CTA:** Explore subscriptions.  
**Secondary CTA:** How Floro works.

**Composition order:**
1. Header with logo, concise navigation, and Subscribe CTA.
2. Hero: headline about keeping traditions close; one-sentence value proposition; primary CTA; serviceability link; original folk-art illustration.
3. Trust strip: only substantiated quality standards, daily delivery inclusion, and transparent seasonal substitution. Avoid unsupported numeric promises.
4. Subscription plan preview: three plan cards with price, daily packet quantity, concise inclusions, seasonal notice, and “Choose plan” CTA.
5. How it works: choose a plan → verify details → set delivery address → pay → receive daily packets.
6. Flowers and care: describe the selection/packing standards actually used. Add a clear seasonal-variation link.
7. Ritual/cultural story: a concise editorial section about making time for daily worship, with art that supports the narrative.
8. Testimonials: authentic customer quotations with permission and appropriate attribution. Until real reviews exist, do not fabricate names, stars, photos, or claims; hide the module or label early feedback honestly.
9. FAQ preview: delivery, packet contents, seasonality, payment, account, and cancellation.
10. Final CTA and footer.

**Visual hierarchy:** hero concept first; subscription CTA second; clear plan prices and trust details third. The hero illustration can be visually bold but should not dominate the first screen so much that the product proposition is lost.

**Responsive behavior:** desktop hero is two-column; tablet can retain a compact split layout; mobile stacks text/CTA before illustration or places illustration after the core promise. Plan cards stack vertically on mobile. Do not make users scroll through all brand storytelling before they can reach plan prices.

### 9.2 Flower Subscriptions

**Purpose:** Help users compare Value, Basic, and Premium and select one.  
**Primary CTA:** Choose this plan.

**Plan content from the supplied plan reference:**

| Plan | Price | Daily packet | Included items / distinctions |
|---|---:|---|---|
| Value | ₹450/month | Approx. 50 g | Affordable flower pack. The reference lists Marigold, Hibiscus, Butterfly Pea, and Jasmine as possible flower options, plus Doobh Grass and Basil; several listed varieties/garland items are crossed out in the image. Exact final inclusion copy needs business confirmation. |
| Basic | ₹600/month | Approx. 100 g | Mix flower pack including Marigold, Doobh Grass, Basil, Butterfly Pea or Red Marigold, Shevanti or Jasmine, Hibiscus, and Belpatra every Monday, subject to the reference's seasonal/weather note. Marigold Garland is not included in the pictured plan. |
| Premium | ₹900/month | Either two Basic packets or one Basic packet with one mala | Includes Basic plan items with an optional Marigold Garland / mala configuration, as described in the supplied image. The exact default selection and meaning of “optional” must be confirmed before launch. |

**Critical plan-card rules:**
- Show price with the recurring period: “₹450 / month”, etc.
- Label quantities as **per daily packet** to prevent users interpreting grams as monthly totals.
- The Premium card must explain the two configurations plainly (two Basic packets OR one Basic packet + one mala) and let the user select a configuration if both are available.
- List included items and “not included” items clearly. Do not rely only on red strikethroughs or colour to distinguish exclusions.
- Display this notice beside the item list: “Flower varieties may change by season and weather. We’ll communicate substitutions transparently.” Only claim advance notification if the operational process supports it.
- State that daily delivery includes Sundays and public holidays.
- Make the selected plan/card state visually obvious; selecting a plan should persist into checkout.
- Do not preselect Premium by default. A “Popular” badge is allowed only if supported by actual adoption data.

**Layout:** three cards in a desktop row; two cards plus a full-width row or horizontal scroll only if every price and inclusion remains readable at tablet width; stacked cards on mobile. The primary plan CTA should remain visible without making the cards excessively tall. Keep all plan details accessible below the CTA if progressive disclosure is necessary.

### 9.3 How It Works

**Purpose:** Reduce uncertainty about joining and receiving daily deliveries.

1. Explore the three plans.
2. Select a plan and, for Premium, the applicable configuration.
3. Enter name, mobile number, and initial address details.
4. Verify the mobile number via OTP (skip if already authenticated).
5. Confirm or select the delivery address.
6. Review plan, address, delivery availability, seasonal-substitution note, and payment total.
7. Complete payment.
8. Show an order/subscription confirmation with next steps and account access.

Use a simple illustrated step sequence. On mobile, make it a vertical list, not a tiny horizontal timeline.

### 9.4 Flowers & Sourcing

**Purpose:** Explain how varieties are selected, prepared, and substituted without inventing supply-chain claims.

Sections: quality standards; how daily packet selection works; flower/leaf glossary with common names and optional Hindi script; seasonal availability and substitutions; care/usage information only when vetted; CTA to view plans.

Write the quality standards as measurable internal policies once the operator defines them. Do not make claims about farms, cold-chain, preservatives, pesticide status, harvest-to-door hours, or certifications without evidence.

### 9.5 Rituals & Festivals

**Purpose:** Connect Floro to the user's cultural context and support editorial discovery, without making the subscription feel like a religious obligation.

MVP may launch with a small curated set of editorial modules rather than a full CMS. Each article includes title, short description, relevant illustration, author/reviewer where appropriate, and publish/update date. Explain ritual practices respectfully and avoid presenting one regional practice as universal across Hindu households. Do not let this section delay access to subscription plans.

### 9.6 FAQs

Include searchable or grouped questions covering:
- What is included in each plan?
- Are weights per packet or per month?
- Are deliveries made on Sundays and public holidays?
- Why may flower varieties change?
- How will seasonal substitutions be communicated?
- Is delivery available at my pin code?
- How do I update my address?
- How do payments and renewals work?
- Can I pause, skip, cancel, or change my plan?
- What happens if payment fails or a delivery cannot be fulfilled?

Questions about renewal, pauses, skips, cancellation, refunds, and delivery failure must use the actual approved operating policy. Don't publish speculative answers.

### 9.7 Contact / Support

Show verified support channels, expected response windows only if operationally agreed, and a clear escalation method for active subscribers. A WhatsApp link can be offered only if Floro has an official monitored account. Provide accessible form errors and a submission confirmation if a contact form is used.

### 9.8 Login / My Account

Unauthenticated state: mobile number entry and OTP verification, with explanation of why verification is used. Do not require users to make a password unless the selected authentication system requires it.

Authenticated account dashboard:
- Current plan and configuration.
- Subscription status.
- Delivery address.
- Next delivery / delivery schedule information if supported by operations.
- Payment history/status and invoices/receipts if available.
- Manage subscription entry point.
- Help/support link.

Show pause, skip, cancel, upgrade/downgrade, and address-change controls only when their policies and backend support are implemented. Hide unsupported actions rather than showing dead controls.

### 9.9 Checkout

**Primary objective:** Complete the order with minimal uncertainty and prevent accidental plan/address errors.

**Required user journey:**
1. Visitor selects a subscription plan.
2. Collect name, mobile number, and initial address as the user's signup details. Explain the purpose of the information.
3. Verify the mobile number using an OTP. On return visits with an authenticated session, skip signup/OTP as appropriate.
4. Confirm delivery address: reuse the address entered earlier or choose/add another address.
5. Check serviceability by PIN code before payment. If unavailable, explain plainly and offer an honest alternative (e.g. join an availability list only if built).
6. Show order review: selected plan, Premium configuration where relevant, daily packet weight, included items, seasonal-substitution policy, delivery frequency including Sundays/public holidays, address, monthly price, taxes/fees if applicable, billing/renewal terms, and amount due now.
7. Payment step using the selected provider's supported methods.
8. Confirmation with transaction/order reference, plan summary, address, next steps, and account link.

**Form rules:**
- Use visible labels, not placeholders alone.
- Preserve inputs across recoverable OTP/payment errors.
- OTP inputs must support paste and accessible screen-reader labels; avoid requiring one keypress per field if the auth provider permits a single input.
- Provide resend cooldown and attempt/error messages only when supported by backend policy.
- Never reveal whether an unverified phone number belongs to another account beyond what the authentication flow requires.
- Make the back action safe; warn only if changing a value would lose state.
- Do not claim a payment succeeded until the backend confirms success.
- Display the final price and terms before the payment action.

**Renewal policy dependency:** the business has specified monthly subscription pricing but has not confirmed auto-renew versus manual renewal or the exact cancellation/refund policy. Do not imply automatic recurring debits or a renewal date until finalized. This information is mandatory before production checkout launch.

### 9.10 Confirmation

Show a success state only after authoritative order/payment confirmation. Include order reference, plan and configuration, delivery address (privacy-aware), expected next step/date if supported, help link, and account link. If payment is pending, show a pending state rather than success.

### 9.11 Legal / policy pages

Required before launch: Terms, Privacy Policy, cancellation/refund policy, and delivery/seasonal-substitution policy. Content must be supplied or reviewed by the business/legal advisor. Provide concise summaries at relevant decision points but link the complete policies.

### 9.12 Not Found / Error

Use a restrained branded illustration with a clear explanation and paths back to plans/home/support. Avoid an elaborate joke or confusing sacred imagery for technical errors.

## 10. Component Specifications

### 10.1 Header / Navigation

- **Variants:** desktop, mobile, authenticated, unauthenticated.
- **Structure:** logo, primary nav, account link, primary CTA, mobile menu control.
- **Default:** warm ivory/white surface, thin lower divider, dark text.
- **Hover/active:** text/border treatment plus accent; transitions 120–200ms.
- **Focus:** 3px visible outline with offset.
- **Responsive:** collapse to menu below 900px; ensure CTA remains findable.
- **Accessibility:** navigation landmarks, logical keyboard order, menu button with expanded state, escape-to-close if modal/drawer.
- **Anti-patterns:** nav wraps unpredictably, menu opens on hover only, icons lack accessible names.

### 10.2 Buttons

- **Variants:** primary, secondary, tertiary/text, destructive, loading.
- **Primary:** Floro accent fill, verified readable foreground, 2px dark border, 8px radius, 4px hard offset shadow. If contrast requires, use dark text on pink.
- **Secondary:** white/ivory fill, dark border/text.
- **Tertiary:** no enclosing box unless context needs it; visible hover/focus.
- **Sizes:** 48px minimum height for primary CTAs; compact utility buttons at least 44px touch target.
- **States:** default, hover, focus-visible, pressed, disabled, loading/success only when actual action state supports them.
- **Motion:** slight translate and hard-shadow change; no scaling that changes layout.
- **Rules:** labels begin with a verb (“Explore subscriptions”, “Choose plan”, “Verify number”, “Pay securely”). Never use ambiguous “Submit” if a more specific label fits.

### 10.3 Subscription Plan Card

- **Structure:** plan name, descriptor, monthly price, daily quantity, inclusion list, seasonal notice, CTA.
- **Style:** white surface, 2px dark border, 10px radius. One card may use a pink accent edge or background strip to anchor attention, but do not imply popularity without evidence.
- **States:** default, hovered, selected, unavailable, loading CTA.
- **Selected:** stronger outline plus visible “Selected” label or check indicator; do not rely on color only.
- **Content resilience:** tolerate long bilingual item names and substitutions; allow cards to grow to a shared height at desktop or align CTAs independently at the bottom.
- **Anti-patterns:** price separated from billing period, quantity unclear, unreadable crossed-out content, seasonal caveat hidden in tiny text, or Premium description that obscures the two configurations.

### 10.4 Serviceability Checker

- **Structure:** pin-code label/input, check button, inline status.
- **States:** idle, validating, serviceable, unavailable, network error, malformed pin code.
- **Behavior:** validate format client-side, confirm availability server-side, don't assume a city is serviceable based only on city name.
- **Messaging:** “Delivery is available at this pin code” only after a positive response; “We’re not delivering here yet” if unavailable; provide alternatives only when real.
- **Accessibility:** status communicated programmatically and visibly; associate errors with the input.

### 10.5 Forms / Inputs

- **Variants:** text, mobile, PIN code, address, OTP, select, checkbox.
- **Style:** white surface, 1–2px border, 8px radius; 48px target height where feasible.
- **States:** default, hover, focus, filled, invalid, disabled, loading.
- **Labels:** persistent labels above or beside the input; supporting text below; no placeholder-only labels.
- **Errors:** identify what went wrong and how to fix it; preserve valid content.
- **Mobile:** appropriate input mode and autocomplete hints; do not rely on hover.

### 10.6 OTP Verification

- Explain that a one-time code is used to verify the mobile number.
- Support paste and autofill where available.
- Provide resend, edit-number, expired-code, incorrect-code, rate-limited, and service-error states, subject to authentication-provider capabilities.
- Do not expose the complete mobile number after verification; mask it in confirmation and account UI where appropriate.

### 10.7 Testimonials

- Use actual authorized customer feedback only.
- Optional name/initials, city, verified status, or date appear only when genuine and permitted.
- If there are no authentic testimonials at launch, omit the component or replace it with factual service principles. Never fabricate testimonials to fill space.
- Design for one-line and multi-line quotes, with no carousel required for MVP.

### 10.8 FAQ Accordion

- Single or multiple expansion is acceptable; choose one behavior and use it consistently.
- Button semantics, `aria-expanded`, keyboard activation, and visible focus are required.
- Expanded answer remains in document flow; no abrupt animation under reduced-motion settings.

### 10.9 Illustration / Editorial Card

- Image has a consistent ratio, clear focal point, optional eyebrow/category, heading, and description.
- Keep sacred motifs in context and outside functional hit areas if possible.
- Hover effects may alter border/shadow only; don't spin yantras or animate sacred iconography decoratively.

### 10.10 Account Summary / Subscription Management

- Display plan, status, amount, address, and available actions with labels.
- Distinguish confirmed, pending, failed, and cancelled states by text/icon plus color.
- Hide unsupported management actions; show policy explanation before irreversible cancellation.
- Do not expose sensitive data unnecessarily.

### 10.11 Notifications / Inline Alerts

- Variants: success, info, warning, error.
- Use a semantic icon and explicit text, never color alone.
- Errors stay visible until resolved or dismissed by an accessible control; avoid auto-dismiss for payment/OTP errors.

### 10.12 Footer

- Two or three readable link groups on desktop; stacked groups on mobile.
- Include support, legal, subscription navigation, and any available social links.
- Do not use folk pattern behind small-print legal text.

## 11. Interaction & State Model

### Global interactions

- Use meaningful hover affordances on pointer devices; don't make functionality hover-dependent.
- All interactive elements need focus-visible treatment and keyboard operation.
- Keep transitions between 120ms and 320ms; avoid parallax and elaborate page choreography for MVP.
- Honor `prefers-reduced-motion` by removing decorative motion and replacing movement with a subtle instant state change or opacity transition.

### Required global states

- Initial load / skeleton where data is expected.
- Empty state.
- Network or server failure.
- Unavailable service area.
- Incomplete/invalid form.
- Loading action.
- Successful action.
- Unauthenticated / authenticated.
- Pending / successful / failed payment.
- Seasonal change or substituted item.

### Subscription selection state

- Preserve the selected plan while moving through signup and checkout.
- Back navigation must retain plan selection and entered form data when safe.
- If an item/configuration changes before payment, update the order summary and price visibly.
- Premium configuration must be an explicit, accessible choice if both variants are offered.

## 12. Responsive Rules

### Desktop: 900px and wider

- Full navigation and visible primary Subscribe CTA.
- Hero split layout; plan cards can appear in three columns.
- Use 12-column grid and generous vertical whitespace.
- Limit body copy width for readability.
- Plan cards may share a baseline, but don't compress detailed inclusion copy to force identical heights.

### Tablet: 600–899px

- Compact navigation or accessible menu depending on available width.
- Hero may use a 5/7 or stacked layout depending on illustration proportions.
- Plan cards use two columns or stack when item lists become cramped; avoid 3 narrow equal columns.
- Reduce section spacing to 64px; maintain 20–24px gutters.

### Mobile: up to 599px

- Single-column content, 16px page gutters, 48px section spacing.
- Stack subscription cards; keep price and CTA visible near the top of each card.
- Use a mobile menu with a clear Subscribe action. Do not obscure content with a permanent bottom bar unless testing shows it improves conversion and it respects safe areas.
- Inputs/buttons minimum 44px target, ideally 48px for main actions.
- No horizontal page overflow. Plan tables must convert to cards or stacked key/value blocks.
- Images use defined focal points; no crop may accidentally remove the key deity/ritual subject.
- OTP, address and payment steps must be comfortable for one-handed use where practical.
- Respect device safe areas and keyboard resizing for forms.

### Content resilience

- Titles may wrap to three lines without overlapping adjacent content.
- Long flower names and Hindi/English combinations wrap normally.
- Missing hero image falls back to a branded surface with no broken-image icon.
- If testimonials are absent, remove the section gracefully.
- A seasonal substitution notice must stay visible even with longer text.
- If only one or two plans can temporarily be sold, use a deliberate reduced layout rather than empty card slots.

## 13. Accessibility

Target **WCAG 2.2 AA**.

- Maintain compliant text/control contrast; test final real colors programmatically and visually.
- Use semantic landmarks and heading order; one H1 per page.
- All actions keyboard-accessible, with visible focus indicators not hidden by sticky headers.
- Minimum 44×44px touch targets where practical.
- Labels and errors associated programmatically; status updates announced to assistive technology.
- Meaningful illustrations have useful alt text; decorative ornament has empty alt text.
- Don't rely on pink/green/red alone to show selection, success, or failure.
- Respect browser zoom to 200% and avoid clipped text/controls.
- Forms and checkout should have a logical reading/focus order and clear step indication.
- Use reduced-motion behavior and avoid flashing or motion that implies a religious/spiritual effect.
- Ensure bilingual text is tagged with the appropriate language where possible and tested with screen readers.

## 14. Content & UX Rules

- Write short, direct headings that express a human benefit.
- Keep paragraphs to roughly 2–4 lines at desktop body width when possible.
- Put price period, packet quantity, and substitution rules near the related plan—not only in the footer.
- Use “daily packet” for the daily quantity and “per month” for the price.
- Use “may vary by season and weather” only where relevant; explain what the customer should expect.
- Be explicit about included and excluded items.
- Use honest button copy; don't imply that a click completes checkout if it merely advances to the next step.
- All Hindi/English flower naming should be reviewed for spelling and consistency before launch.
- Use consistent terms for “subscription”, “plan”, “packet”, “mala/garland”, “delivery address”, “OTP”, and “monthly price”.
- Do not publish fake review counts, urgency timers, scarcity messages, unsupported ratings, or claims about religious merit.

## 15. MVP Functional Dependencies & Assumptions

The design is technology-agnostic. The selected implementation must support:

- Plan catalog and per-plan content/configuration.
- Signup details and mobile OTP verification.
- Authenticated and unauthenticated checkout paths.
- Saved and additional delivery addresses.
- Server-checked pin-code serviceability.
- Payment initiation and authoritative payment confirmation.
- Order/subscription persistence and confirmation.
- Display of the subscriber's current plan and available management options.
- Support and policy content.

### Must be finalized before production checkout

1. **Recurring billing:** auto-renew vs manual renewal; renewal date and payment authorization language.
2. **Taxes and fees:** whether plan prices include applicable taxes and any delivery fees.
3. **Cancellation/refund policy:** cut-off times, refund eligibility, missed/failed delivery handling.
4. **Subscription controls:** which options (pause, skip, cancel, upgrade/downgrade, address change) can actually be self-served and when they take effect.
5. **Premium configuration:** whether the customer chooses between two Basic packets and one Basic plus one mala; whether a mala is optional or part of the plan price.
6. **Plan assortment:** exact committed inclusions for Value; seasonal substitutions; whether the “3–4 varieties” note applies to all plans or specifically to the Basic/Premium mix.
7. **Quality standards:** measurable standards and evidence behind any freshness/selection claim.
8. **Testimonials:** permission and verification for real quotations.
9. **Coverage:** pin codes live on launch day, how availability is updated, and whether a waitlist will exist.
10. **Support channel:** actual email/phone/WhatsApp details and response expectations.
11. **Payment/OTP provider:** provider, supported methods, errors, retry/rate limits, and privacy requirements.
12. **Legal:** privacy, consent, terms, cancellation and delivery policy review.

### Assumption register

| Assumption | Rationale | Confidence | Impact |
|---|---|---|---|
| Floro pink remains the primary conversion accent | Present in provided price reference and suits the vibrant package direction | Medium | Important |
| Warm ivory and near-black form the main neutral palette | Balances cultural warmth with strong neo-brutalist contrast | High | Important |
| Folk-art assets are original and reviewed for respectful use | Differentiation and cultural sensitivity require bespoke assets | High | Critical |
| All cities are aspiration, not guaranteed day-one coverage | Physical delivery requires operational serviceability | High | Critical |
| Real testimonials may not be available at MVP launch | User asks to use testimonials but has not supplied actual testimonials | Medium | Important |
| Auto-renew policy is unknown | Monthly price alone does not determine renewal mechanics | High | Critical |
| Subscription self-service actions depend on operational/backend capability | User approved the recommended account model but implementation specifics are not set | High | Critical |
| No specific framework, CMS, OTP or payment provider is selected | User specified MVP but no technology stack | High | Important |

## 16. Guardrails — Never Do These

- Never make an unverified pan-India serviceability promise; use pin-code confirmation.
- Never fabricate reviews, user counts, ratings, quality certifications, sourcing stories, or delivery statistics.
- Never make auto-renew, cancellation, refund, fee, or tax terms ambiguous.
- Never hide that flower varieties can vary seasonally and with weather.
- Never describe per-packet weights as monthly totals.
- Never silently change plan inclusions or Premium configuration in checkout.
- Never use sacred imagery as a decorative background for form fields or small-print text, distort it for a hover effect, or crop it carelessly.
- Never copy another brand's artwork or visual identity.
- Never fill every surface with folk patterns, gradients, or shadows.
- Never use color alone to communicate an error, selected plan, availability, or payment status.
- Never render dead buttons or promise account-management options not connected to working functionality.
- Never say payment succeeded until the payment/order backend confirms it.
- Never collect unnecessary sensitive information or expose a full mobile number in shared UI.
- Never compromise focus visibility, keyboard flow, contrast, readable plan details, or mobile form usability for visual effect.

## 17. Required Patterns

- Plan price and billing period are always adjacent.
- Packet weight is always labelled as a daily quantity.
- Every plan list includes an accessible statement of variation/substitution rules.
- Every checkout step provides progress context, a back path, and preserves recoverable state.
- Every unavailable or failed action explains the cause and a next step.
- Pin-code checking appears before payment and can be reached from the homepage.
- Every primary CTA uses action-specific text.
- All pages use the shared header, footer, type scale, spacing, border, and color tokens.
- Cultural illustrations use a coherent style and deliberate context.
- Testimonials are real and consented, or the testimonial module is omitted.

## 18. Implementation Notes for Developers and AI Code Generators

1. Treat the token block in Section 5 as the single design source of truth.
2. Build reusable components for header/navigation, buttons, plan cards, pin-code checker, form fields, OTP, alerts, FAQ accordion, testimonial, footer, account summary, and order review.
3. Keep commerce data (prices, quantities, ingredients, plan configuration, seasonality policy) separate from presentational components. Avoid hardcoding the same plan data across home, plans, checkout, and account pages.
4. Represent subscription checkout as explicit states: `plan_selected`, `details_entered`, `otp_pending`, `otp_verified`, `address_confirmed`, `serviceability_confirmed`, `order_review`, `payment_pending`, `payment_succeeded`, `payment_failed`, `order_confirmed`. Backend/provider events are authoritative for verification and payment transitions.
5. Store the selected plan/configuration during the checkout session; revalidate price and availability server-side before payment.
6. Do not treat city or pin code serviceability as a client-only assumption.
7. Use semantic HTML and accessible component primitives. The design specification does not mandate a framework or library.
8. Use responsive image sizes and lazy-load below-the-fold illustrations; avoid delaying the hero's main content.
9. Test plan cards and mixed Hindi/English text at actual target widths with longest expected content.
10. Test checkout with keyboard only, screen reader, 200% zoom, slow network, OTP failure, unavailable PIN, payment failure, and back-navigation.
11. Use original assets with recorded licenses/ownership. Preserve image focal points across responsive variants.
12. If implementation constraints force a deviation, document it and preserve hierarchy, clarity, cultural respect, and accessibility first.

## 19. Design QA Review

Scores evaluate specification readiness, not a finished, tested implementation.

| Area | Score | Notes |
|---|---:|---|
| Visual coherence | 9/10 | Strong relationship between folk-art imagery, restrained palette, and neo-brutalist structure. Depends on consistent artwork execution. |
| Product fit | 9/10 | Supports devotional context, freshness expectations, and recurring subscription decisions. Exact quality and subscription policies remain to be verified. |
| Visual differentiation | 9/10 | Original Indian folk-art-inspired brand language plus bold outlined UI should stand apart from generic ecommerce. |
| Information hierarchy | 9/10 | Product, daily quantity, price, substitution, and CTA are explicitly prioritized. |
| Usability | 8/10 | User journey is explicit; usability score depends on serviceability and checkout testing. |
| Accessibility | 8/10 | Clear WCAG target and patterns; final palette and components still require audit. |
| Responsive readiness | 9/10 | Concrete breakpoints and layout transformations are defined. |
| Component consistency | 9/10 | Shared tokens and states cover primary interface elements. |
| Implementation clarity | 9/10 | Detailed page, state, and integration requirements; stack is intentionally not prescribed. |
| Content resilience | 9/10 | Includes long labels, missing testimonials, unavailable locations, errors, and seasonal changes. |
| **Overall** | **8.8/10** | Ready as an implementation-oriented design contract. Production checkout must not launch before policy, pricing, coverage, and payment dependencies are confirmed. |

## 20. Final Acceptance Checklist

Before declaring the design implemented:

- [ ] All token values are centralized and reused.
- [ ] Homepage communicates Floro's purpose within the first viewport.
- [ ] Plans match approved final inclusions, prices, and daily packet quantities.
- [ ] Premium configuration is explicit and priced correctly.
- [ ] Seasonal substitution is explained before payment.
- [ ] Serviceability is checked with authoritative data.
- [ ] Signup and OTP flow works for new and returning users.
- [ ] Returning users can select a previously saved address or add another.
- [ ] Checkout shows the accurate total and approved renewal/cancellation terms.
- [ ] Payment and confirmation states are backend-authoritative.
- [ ] Account features expose only working management actions.
- [ ] Testimonials and quality claims are genuine and approved.
- [ ] Desktop, tablet, and mobile layouts have been tested with long content.
- [ ] Keyboard, screen reader, zoom, contrast, and reduced-motion checks pass.
- [ ] Sacred visual assets have been reviewed for cultural respect and rights.
- [ ] Privacy, terms, cancellation/refund, and delivery policies are approved.

---

**End of Floro design specification.**
