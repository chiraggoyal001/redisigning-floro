import React from "react";
import { Star, MapPin } from "lucide-react";
import { NeoCard } from "@/components/common/NeoCard";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Meenakshi Sundaram",
      city: "Bengaluru (Indiranagar)",
      plan: "Basic Plan Subscriber",
      quote:
        "Living in a high-rise apartment, finding fresh Bilva leaves for Monday puja used to mean waking up at 5 AM to search the market. Floro arrives quietly before 7 AM every day. The flowers are spotless and beautifully fresh.",
    },
    {
      name: "Rajesh & Vandana Sharma",
      city: "Noida (Sector 18)",
      plan: "Premium Plan (Packet + Mala)",
      quote:
        "The hand-strung marigold garland in the Premium plan is our favorite part. It fits our deity idols perfectly. Even on Sundays and festivals, our packet has never been late.",
    },
    {
      name: "Ananya Deshmukh",
      city: "Pune (Deccan Gymkhana)",
      plan: "Value Plan Subscriber",
      quote:
        "The packet size is just right for our compact home temple. There is zero flower wastage, and knowing I can pause deliveries whenever I travel makes it completely stress-free.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-floro-canvas border-b-2 border-floro-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-muted">
            Subscriber Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Trusted by Daily Devotees
          </h2>
          <p className="text-sm text-floro-secondary leading-relaxed">
            Real experiences from families maintaining daily worship across India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <NeoCard
              key={idx}
              variant="white"
              hasShadow={true}
              padding="md"
              rounded="card"
              className="flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-floro-marigold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-floro-primary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-floro-border/20">
                <p className="text-sm font-bold text-floro-primary">{t.name}</p>
                <div className="flex items-center gap-1.5 text-xs text-floro-muted mt-0.5">
                  <MapPin className="w-3 h-3 text-floro-accent" />
                  <span>{t.city}</span>
                </div>
                <span className="inline-block mt-2 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-floro-surface-soft border border-floro-border/40 text-floro-secondary">
                  {t.plan}
                </span>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
