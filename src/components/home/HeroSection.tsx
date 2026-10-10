import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoBadge } from "@/components/common/NeoBadge";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b-2 border-floro-border bg-transparent">
      {/* Decorative background subtle pattern */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <NeoBadge variant="marigold">
                <Sparkles className="w-3.5 h-3.5" />
                Daily Puja Flowers from ₹450/month
              </NeoBadge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-floro-primary leading-[1.08]">
              Stay close to your traditions.{" "}
              <span className="relative inline-block text-floro-accent">
                Every morning.
                <svg
                  className="absolute left-0 -bottom-1 w-full h-3 text-floro-marigold -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-floro-secondary max-w-xl font-normal leading-relaxed">
              Thoughtfully selected puja flowers, packed in daily morning packets and delivered fresh to your doorstep before your daily worship.
            </p>

            {/* Inclusions highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-lg text-xs font-bold text-floro-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-floro-success shrink-0" />
                <span>Delivered fresh by 7:30 AM daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-floro-success shrink-0" />
                <span>Sundays & holidays included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-floro-success shrink-0" />
                <span>Shiva Monday Belpatra in Basic & Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-floro-success shrink-0" />
                <span>Pause anytime for vacation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/subscriptions">
                <NeoButton variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Explore Subscriptions
                </NeoButton>
              </Link>
              <Link href="/how-it-works">
                <NeoButton variant="secondary" size="lg">
                  How Floro Works
                </NeoButton>
              </Link>
            </div>

            {/* Serviceability anchor link */}
            <div className="pt-2">
              <a
                href="#pincode-check"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-floro-secondary hover:text-floro-accent transition-colors underline underline-offset-4"
              >
                <MapPin className="w-4 h-4 text-floro-accent" />
                Check pin code serviceability in your city
              </a>
            </div>
          </div>

          {/* Right Column: Original Folk-Art Mandir Offering Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-largeCard overflow-hidden border-2 border-floro-border shadow-neo-lg bg-floro-surface">
                <Image
                  src="/images/floro_hero_concept.jpg"
                  alt="Devotional home mandir puja flower offering with marigolds and lotus"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-cover"
                />

                {/* Floating pill over image */}
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

              {/* Offset decorative stamp */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-2.5 rounded-full bg-floro-accent-soft border-2 border-floro-border shadow-neo items-center justify-center rotate-6">
                <span className="text-xs font-mono font-bold text-floro-accent tracking-normal uppercase">
                  365 Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
