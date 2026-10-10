import React from "react";
import Link from "next/link";
import { CheckCircle2, PhoneCall, Truck, Sparkles, PauseCircle } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";

export const HowItWorksTeaser: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <CheckCircle2 className="w-5 h-5 text-floro-accent" />,
      title: "Choose Your Plan",
      desc: "Select Value, Basic, or Premium based on your mandir size and offering needs.",
    },
    {
      num: "02",
      icon: <PhoneCall className="w-5 h-5 text-floro-marigold" />,
      title: "Instant Mobile Verification",
      desc: "Confirm your phone via a quick OTP and enter your address and morning gate instructions.",
    },
    {
      num: "03",
      icon: <Truck className="w-5 h-5 text-floro-indigo" />,
      title: "Daily Morning Delivery",
      desc: "Delivered fresh by 7:30 AM daily, including Sundays and public holidays, right to your doorstep.",
    },
    {
      num: "04",
      icon: <PauseCircle className="w-5 h-5 text-floro-leaf" />,
      title: "Pause Anytime for Travel",
      desc: "Going out of town? Pause your daily subscription from your account with 24 hours notice.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-floro-canvas border-b-2 border-floro-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-muted">
            Simple & Low Friction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            How Floro Works
          </h2>
          <p className="text-sm text-floro-secondary leading-relaxed">
            From local flower fields to your home sanctum in five simple steps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-card border-2 border-floro-border bg-floro-surface shadow-neo flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-floro-accent/30">
                    {st.num}
                  </span>
                  <div className="p-2 rounded-control bg-floro-canvas border border-floro-border">
                    {st.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold font-display text-floro-primary">
                  {st.title}
                </h3>
                <p className="text-xs text-floro-secondary leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/how-it-works">
            <NeoButton variant="secondary" size="md">
              Learn More About Our Quality Standards
            </NeoButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
