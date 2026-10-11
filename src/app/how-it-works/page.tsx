import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Sun, HeartHandshake } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";

export const metadata: Metadata = {
  title: "How Floro Works — Daily Devotional Flower Deliveries",
  description:
    "Learn how Floro selects, hand-packs, and delivers fresh puja flowers to your home every morning before 7:30 AM across India.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "1",
      title: "Explore & Select Your Plan",
      desc: "Choose between the Value Plan (approx. 50 g daily), Basic Plan (approx. 100 g daily with Monday Belpatra), or Premium Plan (double flowers or daily fresh garland).",
    },
    {
      num: "2",
      title: "Quick Mobile Verification",
      desc: "Verify your phone number with a fast 4-digit code. No complex passwords required.",
    },
    {
      num: "3",
      title: "Set Delivery Address & Gate Details",
      desc: "Enter your home address, apartment tower details, and quiet morning delivery instructions (e.g. hang on door hook or place on sanctum shelf).",
    },
    {
      num: "4",
      title: "Review & Pay Securely",
      desc: "Inspect your monthly total, daily packet weights, and commencement date. Pay via UPI, Debit/Credit Card, or Net Banking.",
    },
    {
      num: "5",
      title: "Awaken to Fresh Flowers Daily",
      desc: "Your daily packet arrives between 5:30 AM and 7:30 AM every morning — 365 days a year without exception.",
    },
  ];

  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Header */}
      <section className="w-full pt-12 md:pt-16 pb-4 bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            The Floro Process
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            How Floro Works
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            Delivering devotional purity to your morning puja routine, seamlessly and dependably.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="max-w-reading mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="space-y-6">
          {steps.map((st) => (
            <NeoCard key={st.num} variant="white" hasShadow={true} padding="lg" className="flex items-start gap-5">
              <span className="w-10 h-10 rounded-control bg-floro-accent text-white border-2 border-floro-border shadow-[2px_2px_0_#241D20] text-lg font-display font-extrabold flex items-center justify-center shrink-0">
                {st.num}
              </span>
              <div className="space-y-1.5 text-left">
                <h3 className="text-lg font-bold font-display text-floro-primary">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-floro-secondary leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </NeoCard>
          ))}
        </div>

        <GarlandDivider />

        {/* Operational Guarantees */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold font-display text-floro-primary text-center">
            Our Operational Commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
              <Clock className="w-5 h-5 text-floro-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-floro-primary">Morning Fulfillment (5:30 – 7:30 AM)</h4>
                <p className="text-xs text-floro-secondary mt-0.5">
                  Quiet early delivery so your flowers are ready before morning surya namaskar and prayer.
                </p>
              </div>
            </div>

            <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
              <Sun className="w-5 h-5 text-floro-marigold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-floro-primary">Sundays & Festivals Without Fail</h4>
                <p className="text-xs text-floro-secondary mt-0.5">
                  Worship is even more important on auspicious days. Deliveries continue 365 days a year.
                </p>
              </div>
            </div>

            <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-floro-success shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-floro-primary">Hand-Sorted Purity</h4>
                <p className="text-xs text-floro-secondary mt-0.5">
                  Only intact petals and whole heads are packed. Wilting or damaged stems are gently composted.
                </p>
              </div>
            </div>

            <div className="neo-card-reveal p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-floro-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-floro-primary">Vacation Holds with 1 Click</h4>
                <p className="text-xs text-floro-secondary mt-0.5">
                  Travelling? Pause deliveries from your account with 24 hours notice. No missed value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <Link href="/subscriptions">
            <NeoButton variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Started with Floro
            </NeoButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
