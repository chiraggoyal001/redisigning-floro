import React from "react";
import Link from "next/link";
import { Droplets, Sparkles, Recycle, ArrowRight } from "lucide-react";
import { SacredLeaves } from "@/components/folk-art/SacredLeaves";

export const FlowerCareSection: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-transparent">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Botanical Care standards */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
              Freshness & Respect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
              Cared For With Devotion, From Vine to Mandir
            </h2>
            <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
              Puja flowers are sacred offerings. We never treat them like ordinary commodity produce. Each stem is inspected for cleanliness, freshness, and pest-free purity before packing in eco-conscious wraps.
            </p>

            <div className="space-y-4 pt-2 neo-card-group group/cards">
              <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
                <div className="p-2 rounded bg-floro-surface border border-floro-border text-floro-info shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-floro-primary">Sprinkle & Breathe</h4>
                  <p className="text-xs text-floro-secondary mt-0.5">
                    Upon morning arrival, lightly sprinkle cold water over the blossoms. Place them in your thali or brass bowl to keep them vibrant until aarti.
                  </p>
                </div>
              </div>

              <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
                <div className="p-2 rounded bg-floro-surface border border-floro-border text-floro-leaf shrink-0">
                  <SacredLeaves type="tulsi" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-floro-primary">Sacred Leaves Handled with Sanctity</h4>
                  <p className="text-xs text-floro-secondary mt-0.5">
                    Tulsi, Durva, and Bilva leaves are packed unbruised so each leaf retains its sacred three-blade form for Lord Shiva and Lord Ganesha.
                  </p>
                </div>
              </div>

              <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
                <div className="p-2 rounded bg-floro-surface border border-floro-border text-floro-terracotta shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-floro-primary">Respectful Nirmalya Care</h4>
                  <p className="text-sm text-floro-secondary mt-0.5 leading-relaxed">
                    After daily worship, return offering flowers (nirmalya) to plant soil or garden compost rather than general waste.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/flowers-and-sourcing"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-floro-primary hover:text-floro-accent transition-colors underline underline-offset-4"
              >
                Explore our full Botanical Flower Glossary & Seasonal Policy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Cultural Storytelling Block */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-largeCard border-2 border-floro-border bg-[#FFF6DF] shadow-neo-lg space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-floro-marigold border border-floro-border text-xs font-mono font-bold text-floro-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Rooted in Ritual
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold font-display text-floro-primary leading-snug">
                &ldquo;Daily puja isn&apos;t just a task. It is the steady anchor that brings stillness and sanctity to busy modern mornings.&rdquo;
              </blockquote>

              <p className="text-sm text-floro-secondary leading-relaxed">
                In rapidly growing Indian cities, finding clean, devotional-grade flowers every morning before work requires rushed market visits or uncertain local vendors. Floro bridges tradition and modern life so your home sanctum never goes without fresh flowers.
              </p>

              <div className="pt-4 border-t-2 border-floro-border/30 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-floro-primary">Floro Cultural Commitment</p>
                  <p className="text-xs text-floro-muted">Devotional integrity in every daily packet</p>
                </div>
                <Link
                  href="/rituals-and-festivals"
                  className="text-sm font-bold font-mono text-floro-accent hover:underline"
                >
                  Read Festival Guides →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
