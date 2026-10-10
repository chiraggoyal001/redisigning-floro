"use client";

import React from "react";
import { usePathname } from "next/navigation";

export interface KalamkariMotif {
  id: string;
  name: string;
  folkloreTitle: string;
  folkloreDescription: string;
  image: string;
  tileSize: string;
}

export const KALAMKARI_MOTIFS: Record<string, KalamkariMotif> = {
  home: {
    id: "home",
    name: "Kalpavriksha & Kamadhenu",
    folkloreTitle: "Kalpavriksha & Kamadhenu (Wishing Tree & Sacred Cow)",
    folkloreDescription:
      "Traditional Andhra Kalamkari pen-and-ink linework depicting the wish-fulfilling tree Kalpavriksha and Kamadhenu, surrounded by holy floral creepers, peacocks, and temple bells.",
    image: "/images/kalamkari/kalpavriksha_kamadhenu.jpg",
    tileSize: "540px",
  },
  subscriptions: {
    id: "subscriptions",
    name: "Gaja Lakshmi & Padmavana",
    folkloreTitle: "Gaja Lakshmi & The Sacred Lotus Grove",
    folkloreDescription:
      "Goddess Lakshmi bathed by royal elephants with holy nectar amidst blooming sacred lotuses, invoking daily abundance and auspicious blessings.",
    image: "/images/kalamkari/gaja_lakshmi_lotus.jpg",
    tileSize: "540px",
  },
  "how-it-works": {
    id: "how-it-works",
    name: "Surya Deva & Dawn Chariot",
    folkloreTitle: "Surya Deva & The Dawn Awakening",
    folkloreDescription:
      "Lord Surya riding his celestial seven-horse chariot across the morning sky, heralding morning puja offerings delivered before 7:30 AM.",
    image: "/images/kalamkari/surya_dawn_awakening.jpg",
    tileSize: "540px",
  },
  "flowers-and-sourcing": {
    id: "flowers-and-sourcing",
    name: "Vrindavan Kadamba Grove",
    folkloreTitle: "Vrindavan Kadamba Grove & Sacred Flute",
    folkloreDescription:
      "Young Krishna amidst gentle calves, Parijata blossoms, and blooming lotus ponds in the groves of Vrindavan, celebrating floral purity and farmer partnerships.",
    image: "/images/kalamkari/vrindavan_kadamba_grove.jpg",
    tileSize: "540px",
  },
  "rituals-and-festivals": {
    id: "rituals-and-festivals",
    name: "Shiva-Parvati on Kailash",
    folkloreTitle: "Shiva-Parvati Beneath The Sacred Bilva",
    folkloreDescription:
      "Lord Shiva and Goddess Parvati seated beneath the sacred Bilva tree on Mount Kailash, with Ganga descent, Nandi bull, and trident offering ritual reverence.",
    image: "/images/kalamkari/shiva_parvati_kailash.jpg",
    tileSize: "540px",
  },
  faq: {
    id: "faq",
    name: "Saraswati & Hamsa Swan",
    folkloreTitle: "Goddess Saraswati & The Discerning Hamsa",
    folkloreDescription:
      "Goddess of wisdom and inquiry with the divine Veena, sacred palm-leaf pothis, and the discerning Hamsa swan, guiding subscriber inquiries with clarity.",
    image: "/images/kalamkari/saraswati_hamsa_wisdom.jpg",
    tileSize: "540px",
  },
  contact: {
    id: "contact",
    name: "Hanuman Carrying Sanjeevani",
    folkloreTitle: "Hanuman & The Healing Sanjeevani Mountain",
    folkloreDescription:
      "Lord Hanuman soaring through celestial skies carrying the sacred medicinal mountain, representing selfless devotion, customer care, and dependable service.",
    image: "/images/kalamkari/hanuman_sanjeevani_seva.jpg",
    tileSize: "540px",
  },
  checkout: {
    id: "checkout",
    name: "Mangal Kalash & Auspicious Motifs",
    folkloreTitle: "Mangal Kalash & Auspicious Completion",
    folkloreDescription:
      "The sacred brass pot with coconut, mango leaves, diyas, and temple conch shell, signifying the auspicious fruition of your daily puja ritual.",
    image: "/images/kalamkari/mangal_kalash_auspicious.jpg",
    tileSize: "540px",
  },
};

export function getMotifForPathname(pathname: string): KalamkariMotif {
  if (!pathname || pathname === "/") return KALAMKARI_MOTIFS.home;
  if (pathname.startsWith("/subscriptions")) return KALAMKARI_MOTIFS.subscriptions;
  if (pathname.startsWith("/how-it-works")) return KALAMKARI_MOTIFS["how-it-works"];
  if (pathname.startsWith("/flowers-and-sourcing")) return KALAMKARI_MOTIFS["flowers-and-sourcing"];
  if (pathname.startsWith("/rituals-and-festivals")) return KALAMKARI_MOTIFS["rituals-and-festivals"];
  if (pathname.startsWith("/faq")) return KALAMKARI_MOTIFS.faq;
  if (pathname.startsWith("/contact")) return KALAMKARI_MOTIFS.contact;
  if (
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/account") ||
    pathname.startsWith("/confirmation")
  ) {
    return KALAMKARI_MOTIFS.checkout;
  }
  return KALAMKARI_MOTIFS.home;
}

/**
 * KalamkariBackground renders a subtle, monochromatic pen-and-ink Hindu folklore
 * background inspired by WhatsApp doodle chat wallpaper. Tiled seamlessly behind all
 * pages with soft multiply blending against the cream (#FFF9F1) canvas.
 */
export const KalamkariBackground: React.FC = () => {
  const pathname = usePathname();
  const motif = getMotifForPathname(pathname);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      <div
        key={motif.id}
        className="w-full h-full opacity-[0.065] sm:opacity-[0.08] mix-blend-multiply grayscale contrast-125 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${motif.image})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${motif.tileSize} ${motif.tileSize}`,
          backgroundPosition: "top center",
        }}
      />
    </div>
  );
};

/**
 * FolkloreFooterNote displays an authentic cultural citation of the current page's motif.
 */
export const FolkloreFooterNote: React.FC = () => {
  const pathname = usePathname();
  const motif = getMotifForPathname(pathname);

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-floro-secondary py-2 px-3 rounded-control border border-floro-border/40 bg-floro-surface/70 backdrop-blur-xs">
      <span className="inline-block w-2 h-2 rounded-full bg-floro-terracotta shrink-0 animate-pulse" />
      <span className="font-mono text-[11px] text-floro-muted">Page Background Folklore:</span>
      <span className="font-bold text-floro-primary font-display">{motif.folkloreTitle}</span>
      <span className="text-[11px] text-floro-secondary/80 hidden md:inline">— {motif.folkloreDescription}</span>
    </div>
  );
};
