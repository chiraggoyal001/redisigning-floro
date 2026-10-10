import React from "react";
import type { Metadata } from "next";
import { PlanPreviewSection } from "@/components/home/PlanPreviewSection";
import { PlanComparisonTable } from "@/components/subscriptions/PlanComparisonTable";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";
import { NeoCard } from "@/components/common/NeoCard";
import { ShieldCheck, CloudSun, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Flower Subscription Plans — Floro",
  description:
    "Compare Floro's daily puja flower subscription plans: Value (₹450/mo), Basic (₹600/mo), and Premium (₹900/mo). Delivered fresh every morning.",
};

export default function SubscriptionsPage() {
  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Page Hero */}
      <section className="w-full pt-12 md:pt-16 pb-4 bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Devotional Flower Plans
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            Daily Puja Flower Subscriptions
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            Priced monthly, delivered fresh every morning before 7:30 AM.
          </p>
        </div>
      </section>

      {/* Plans Cards */}
      <PlanPreviewSection hideHeader={true} hideComparisonLink={true} />

      {/* Detailed Plan Matrix Table */}
      <section className="w-full py-16 max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
            Detailed Plan Comparison Matrix
          </h2>
          <p className="text-sm sm:text-base text-floro-secondary">
            Inspect exact inclusions, packet weights, and special day offerings across each tier.
          </p>
        </div>

        <PlanComparisonTable />

        {/* Folk-art Separator Band Between Table and Cards */}
        <GarlandDivider className="py-6" />

        {/* 3 Pillar Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 neo-card-group group/cards">
          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-accent">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">
              365-Day Daily Fulfillment
            </h3>
            <p className="text-sm text-floro-secondary leading-relaxed">
              We never take days off. Delivery happens reliably every single morning, including Sundays, Diwali, Navratri, and national holidays.
            </p>
          </NeoCard>

          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-marigold">
              <CloudSun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">
              Transparent Seasonal Policy
            </h3>
            <p className="text-sm text-floro-secondary leading-relaxed">
              Flower varieties adjust naturally with seasonal crops. Any substitute is clean, respectful, fresh, and communicated in advance.
            </p>
          </NeoCard>

          <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-2">
            <div className="p-2 rounded bg-floro-canvas border border-floro-border w-fit text-floro-success">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-floro-primary">
              Vacation Mode Flexibility
            </h3>
            <p className="text-sm text-floro-secondary leading-relaxed">
              Heading out of town? Simply pause your subscription from your account dashboard with 24 hours notice. Your days are saved.
            </p>
          </NeoCard>
        </div>
      </section>
    </main>
  );
}
