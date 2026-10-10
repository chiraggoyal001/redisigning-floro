import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PlanPreviewSection } from "@/components/home/PlanPreviewSection";
import { HowItWorksTeaser } from "@/components/home/HowItWorksTeaser";
import { FlowerCareSection } from "@/components/home/FlowerCareSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqPreview } from "@/components/home/FaqPreview";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";
import { NeoButton } from "@/components/common/NeoButton";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <TrustStrip />
      <PlanPreviewSection />
      <GarlandDivider className="py-6" />
      <HowItWorksTeaser />
      <GarlandDivider className="py-6" />
      <FlowerCareSection />
      <GarlandDivider className="py-6" />
      <TestimonialsSection />
      <GarlandDivider className="py-6" />
      <FaqPreview />

      {/* Final Action Banner */}
      <section className="w-full py-16 sm:py-20 bg-floro-accent text-white text-center border-b-2 border-floro-border">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-block p-2 rounded-full bg-white text-floro-accent shadow-[2px_2px_0_#241D20]">
            <LotusIcon size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            Begin Your Daily Puja Subscription Tomorrow Morning
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed">
            Choose your plan in under 2 minutes. Freshly plucked, hand-inspected puja flowers at your door by 7:30 AM.
          </p>
          <div className="pt-2">
            <Link href="/subscriptions">
              <NeoButton
                variant="secondary"
                size="lg"
                className="bg-floro-surface text-floro-primary hover:bg-floro-canvas"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Explore All Plans from ₹450/month
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
