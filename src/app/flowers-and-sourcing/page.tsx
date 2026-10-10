import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FLOWER_GLOSSARY } from "@/lib/constants";
import { NeoCard } from "@/components/common/NeoCard";
import { NeoButton } from "@/components/common/NeoButton";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";
import { Leaf, Droplets, Sparkles, AlertCircle } from "lucide-react";
import HoverRevealCards, { CardItem } from "@/components/ui/cards";

export const metadata: Metadata = {
  title: "Flowers & Sourcing Standards — Floro",
  description:
    "Explore Floro's botanical glossary with Hindi script, deity associations, and our transparent seasonal sourcing standards.",
};

const DEVOTIONAL_FLOWER_ITEMS: CardItem[] = [
  {
    id: "genda",
    title: "Genda (Marigold)",
    subtitle: "Sun Deity & Vishnu Puja",
    imageUrl:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mogra",
    title: "Mogra (Jasmine)",
    subtitle: "Devi & Evening Aarti",
    imageUrl:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kamal",
    title: "Kamal (Sacred Lotus)",
    subtitle: "Mahalakshmi Blessing",
    imageUrl:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gudhal",
    title: "Gudhal (Hibiscus)",
    subtitle: "Lord Ganesha & Durga",
    imageUrl:
      "https://images.unsplash.com/photo-1550953153-9d0403cd2ab6?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FlowersAndSourcingPage() {
  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Header */}
      <section className="w-full py-12 md:py-16 border-b-2 border-floro-border bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Botanical Glossary & Quality
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            Flowers, Sacred Leaves & Sourcing
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            Every flower has a devotional story, a sacred deity association, and a natural season. Learn about what goes into your daily Floro packet.
          </p>
        </div>
      </section>

      {/* Interactive Visual Gallery */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Interactive Daily Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
            Fresh Flower Visual Gallery
          </h2>
          <p className="text-xs sm:text-sm text-floro-secondary">
            Hover over any petal below to reveal sacred bloom details and traditional puja associations.
          </p>
        </div>

        <div className="flex justify-center">
          <HoverRevealCards
            items={DEVOTIONAL_FLOWER_ITEMS}
            cardClassName="border-2 border-floro-border shadow-[4px_4px_0_#241D20]"
          />
        </div>
      </section>

      {/* Sourcing Principles */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-leaf">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">Pre-Dawn Harvest</h3>
            <p className="text-xs text-floro-secondary leading-relaxed">
              Harvested in pre-dawn hours while petals hold overnight natural dew. Inspected immediately to remove bruised or wilted heads.
            </p>
          </NeoCard>

          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-info">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">No Harmful Sprays</h3>
            <p className="text-xs text-floro-secondary leading-relaxed">
              Grown for devotional worship, not ornamental vase display. Free from harsh artificial chemical glazes or artificial fragrances.
            </p>
          </NeoCard>

          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-terracotta">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">Transparent Substitution</h3>
            <p className="text-xs text-floro-secondary leading-relaxed">
              When extreme monsoon or winter rains impact specific blooms, we substitute with equivalent traditional flowers and tell you upfront.
            </p>
          </NeoCard>
        </div>
      </section>

      {/* Botanical Glossary Cards */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
            Botanical Flower & Sacred Leaf Glossary
          </h2>
          <p className="text-xs sm:text-sm text-floro-secondary">
            Bilingual names, botanical classifications, and traditional deity offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLOWER_GLOSSARY.map((flower) => (
            <NeoCard
              key={flower.id}
              variant="white"
              hasShadow={true}
              padding="lg"
              className="flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2 border-b-2 border-floro-border/20 pb-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-floro-primary">
                      {flower.nameEnglish}
                    </h3>
                    <p className="text-sm font-bold text-floro-accent">
                      {flower.nameHindi}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono italic text-floro-muted">
                    {flower.botanicalName}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-floro-primary">Sacred Deity: </span>
                    <span className="text-floro-secondary">{flower.sacredDeity}</span>
                  </div>

                  <p className="text-floro-secondary leading-relaxed pt-1">
                    {flower.significance}
                  </p>

                  <div className="pt-2 p-2.5 rounded bg-floro-canvas border border-floro-border/40 text-[11px] text-floro-secondary">
                    <span className="font-bold text-floro-terracotta">Seasonality: </span>
                    {flower.availabilitySeason}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-floro-border/20 flex flex-wrap gap-1">
                {flower.includedIn.map((tier, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-floro-surface-soft border border-floro-border text-floro-primary"
                  >
                    {tier}
                  </span>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>

        <GarlandDivider className="pt-8" />

        <div className="text-center pt-4">
          <Link href="/subscriptions">
            <NeoButton variant="primary" size="lg">
              Explore Our Subscriptions
            </NeoButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
