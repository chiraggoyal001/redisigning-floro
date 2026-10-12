# Design Specification: Hero Looping Video & Plan Card Product Previews

> **Date:** 2026-10-13  
> **Status:** Draft / Ready for Implementation  
> **Target Components:** `src/components/home/HeroSection.tsx`, `src/components/home/PlanPreviewSection.tsx`  
> **Source Media:** `floro.mp4`, `Gemini_Generated_Image_hh0f0chh0f0chh0f.png`  

---

## 1. Overview & Objectives

This specification defines the integration of two visual upgrades into the Floro website:
1. **Hero Section Looping Video:** Replace the static hero concept image with a continuous, silent, looping video (`floro.mp4`) that behaves as a high-fidelity animated GIF without the quality degradation and large file overhead of traditional GIF formats.
2. **Subscription Plan Product Previews:** Introduce a realistic product package preview banner (`Gemini_Generated_Image_hh0f0chh0f0chh0f.png`) at the top of each subscription plan card (`Value`, `Basic`, `Premium`), giving customers an immediate, tangible visual expectation of the daily morning puja packet they will receive.

---

## 2. Technical Design & Architecture

### 2.1 Hero Section Video Loop (`HeroSection.tsx`)

#### Desired Behavior:
- Acts like a seamless GIF: auto-plays immediately upon mount, loops infinitely, has sound muted, and plays inline without opening a fullscreen player on iOS/Android.
- Preserves the existing Neo-Brutalist container styling: `border-2 border-floro-border shadow-neo-lg rounded-largeCard overflow-hidden bg-floro-surface`.
- Preserves the bottom floating info pill (`Daily Morning Puja Packet` + `LotusIcon` + `Fresh` badge).

#### Implementation:
```tsx
<div className="relative rounded-largeCard overflow-hidden border-2 border-floro-border shadow-neo-lg bg-floro-surface">
  <video
    src="/videos/floro.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto aspect-[16/9] object-cover"
    poster="/images/floro_hero_poster.jpg"
  />
  
  {/* Floating status pill */}
  <div className="absolute bottom-3 left-3 right-3 p-3 bg-floro-surface/95 backdrop-blur-sm border-2 border-floro-border rounded-control shadow-[2px_2px_0_#241D20] flex items-center justify-between">
    <div className="flex items-center gap-2">
      <LotusIcon size={24} />
      <div className="text-left">
        <p className="text-sm font-bold text-floro-primary">Daily Morning Puja Packet</p>
        <p className="text-xs text-floro-muted">Hand-inspected marigolds, hibiscus & tulsi</p>
      </div>
    </div>
    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-floro-marigold rounded border border-floro-border">
      Fresh
    </span>
  </div>
</div>
```

---

### 2.2 Subscription Plan Product Preview (`PlanPreviewSection.tsx`)

#### Desired Behavior:
- Displayed as a top card banner at the head of each plan card (`Value`, `Basic`, `Premium`), matching user selection.
- Sits below any floating badge (`★ Recommended` on Basic) and above the plan title.
- Contained within a dedicated preview block with a 2px border, rounded corners, subtle overflow containment, and smooth hover zoom effect matching the rest of the interactive cards.

#### Implementation:
```tsx
{/* Top Product Preview Banner */}
<div className="w-full mb-5 rounded-control overflow-hidden border-2 border-floro-border bg-floro-canvas relative aspect-[16/10] group/img">
  <Image
    src="/images/plans/floro_plan_product_preview.png"
    alt={`${plan.name} Daily Puja Flower Packet Preview`}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transition-transform duration-300 ease-out group-hover/img:scale-105"
  />
  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-floro-surface/90 border border-floro-border text-[11px] font-mono font-bold text-floro-primary shadow-[1px_1px_0_#241D20]">
    {plan.dailyWeightLabel}
  </div>
</div>
```

---

## 3. Asset Processing & Optimization

1. **Video Asset:**
   - Source: `floro.mp4` (28.7 MB, 1080p, 12s duration).
   - Generate web-optimized version to `public/videos/floro.mp4` using ffmpeg (H.264, web-optimized faststart, ~4 MB target size) to ensure instant, stutter-free playback on all connections.
   - Extract a crisp poster frame to `public/images/floro_hero_poster.jpg` for instant initial rendering before playback commences.

2. **Image Asset:**
   - Source: `Gemini_Generated_Image_hh0f0chh0f0chh0f.png` (7.0 MB).
   - Copy and optimize to `public/images/plans/floro_plan_product_preview.png` (losslessly compressed PNG or optimized WebP/PNG for high DPI screens).

---

## 4. Verification & Quality Gates

- **Type Checking:** Run `npx tsc --noEmit` to ensure zero compilation or type regressions.
- **Visual Verification:** Check `localhost:3000` (Homepage) and `localhost:3000/subscriptions`:
  - Hero video autoplays silently and loops smoothly without controls.
  - Floating pill overlay sits cleanly over the video.
  - All 3 plan cards render the top product preview image consistently and symmetrically.
  - Hover zoom animation is active on card / image hover.
  - Mobile responsiveness: card layout collapses cleanly on narrow viewports without clipping.
