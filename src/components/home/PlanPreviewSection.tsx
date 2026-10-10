"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Minus, ArrowRight, Sparkles } from "lucide-react";
import { FLORO_PLANS } from "@/lib/constants";
import { PlanTier, PremiumOption } from "@/types";
import { useSubscription } from "@/context/SubscriptionContext";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";
import { NeoBadge } from "@/components/common/NeoBadge";

export interface PlanPreviewSectionProps {
  hideHeader?: boolean;
  hideComparisonLink?: boolean;
  className?: string;
}

export const PlanPreviewSection: React.FC<PlanPreviewSectionProps> = ({
  hideHeader = false,
  hideComparisonLink = false,
  className = "",
}) => {
  const router = useRouter();
  const { setSelectedPlan, setPremiumOption } = useSubscription();
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [selectedPremiumConfig, setSelectedPremiumConfig] =
    useState<PremiumOption>("packet_with_mala");

  const handleSelectPlan = (tier: PlanTier) => {
    setSelectedPlan(tier);
    if (tier === "premium") {
      setPremiumModalOpen(true);
    } else {
      router.push("/checkout");
    }
  };

  const confirmPremiumSelection = () => {
    setPremiumOption(selectedPremiumConfig);
    setPremiumModalOpen(false);
    router.push("/checkout");
  };

  return (
    <section
      className={`w-full ${
        hideHeader ? "pt-2 pb-16 md:pb-20" : "py-16 md:py-24"
      } bg-transparent border-b-2 border-floro-border ${className}`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <NeoBadge variant="accent">30-Day Monthly Subscriptions</NeoBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-floro-primary">
              Choose Your Daily Puja Offering
            </h2>
            <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
              Priced monthly, delivered fresh every morning before 7:30 AM. No minimum lock-in; pause anytime for travel.
            </p>
          </div>
        )}

        {/* 3 Plan Cards Grid */}
        <div
          className={`${
            hideHeader ? "mt-4" : "mt-12"
          } grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch neo-card-group group/cards`}
        >
          {FLORO_PLANS.map((plan) => {
            const isBasic = plan.id === "basic";

            return (
              <NeoCard
                key={plan.id}
                variant="white"
                hasShadow={true}
                padding="lg"
                rounded="largeCard"
                className={`flex flex-col justify-between relative transition-all duration-200 ${
                  isBasic
                    ? "border-floro-accent shadow-neo-pink ring-2 ring-floro-accent/20"
                    : "border-floro-border"
                }`}
              >
                {/* Header Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-floro-accent text-white text-xs font-bold tracking-wider uppercase border-2 border-floro-border shadow-[2px_2px_0_#241D20]">
                      ★ {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold font-display text-floro-primary">
                      {plan.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-floro-secondary leading-relaxed min-h-[44px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Block */}
                  <div className="p-4 rounded-card bg-floro-canvas border-2 border-floro-border space-y-1.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display tabular-nums text-floro-primary">
                        ₹{plan.monthlyPrice}
                      </span>
                      <span className="text-sm font-bold text-floro-muted">/ month</span>
                    </div>
                    <div className="inline-block px-2.5 py-0.5 rounded bg-floro-surface border border-floro-border text-sm font-mono font-bold text-floro-primary">
                      {plan.dailyWeightLabel}
                    </div>
                    <p className="text-xs text-floro-muted pt-1 font-medium">
                      Daily delivery included (Sundays & holidays)
                    </p>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2.5 text-left">
                    <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-floro-muted">
                      Daily Packet Inclusions:
                    </p>
                    <ul className="space-y-2.5 text-sm text-floro-primary font-medium">
                      {plan.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-floro-success shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                      {plan.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-floro-muted">
                          <Minus className="w-4 h-4 text-floro-muted shrink-0 mt-0.5" />
                          <span className="line-through decoration-floro-muted/60">{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Special Note */}
                  {plan.specialNote && (
                    <div className="p-2.5 rounded bg-floro-accent-soft/50 border border-floro-accent/40 text-xs sm:text-sm text-floro-primary font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-floro-accent shrink-0" />
                      <span>{plan.specialNote}</span>
                    </div>
                  )}
                </div>

                {/* Card Bottom CTA & Disclaimer */}
                <div className="pt-6 space-y-3">
                  <NeoButton
                    variant={isBasic ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                    onClick={() => handleSelectPlan(plan.id)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Choose {plan.name}
                  </NeoButton>
                  <p className="text-xs text-floro-muted text-center leading-normal">
                    {plan.seasonalNote}
                  </p>
                </div>
              </NeoCard>
            );
          })}
        </div>

        {/* Detailed Comparison Link */}
        {!hideComparisonLink && (
          <div className="mt-10 text-center">
            <Link
              href="/subscriptions"
              className="inline-flex items-center gap-2 text-sm font-bold text-floro-primary hover:text-floro-accent transition-colors underline underline-offset-4"
            >
              Compare detailed plan matrix and varieties side-by-side →
            </Link>
          </div>
        )}
      </div>

      {/* Premium Configuration Selection Modal */}
      {premiumModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-floro-primary/60 backdrop-blur-sm"
        >
          <div className="w-full max-w-lg bg-floro-surface border-2 border-floro-border rounded-largeCard shadow-neo-lg p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
                Premium Plan Configuration
              </span>
              <h3 className="text-2xl font-bold font-display text-floro-primary">
                Select Your Daily Premium Setup
              </h3>
              <p className="text-sm text-floro-secondary">
                At ₹900/month, you can choose how your daily offering is composed:
              </p>
            </div>

            <div className="space-y-3">
              <label
                onClick={() => setSelectedPremiumConfig("packet_with_mala")}
                className={`p-4 rounded-card border-2 cursor-pointer flex items-start gap-3 transition-all ${
                  selectedPremiumConfig === "packet_with_mala"
                    ? "border-floro-accent bg-floro-accent-soft/30 shadow-[2px_2px_0_#241D20]"
                    : "border-floro-border bg-floro-surface hover:bg-floro-surface-soft"
                }`}
              >
                <input
                  type="radio"
                  name="premium-config"
                  checked={selectedPremiumConfig === "packet_with_mala"}
                  onChange={() => setSelectedPremiumConfig("packet_with_mala")}
                  className="mt-1 text-floro-accent focus:ring-floro-accent"
                />
                <div className="space-y-1 text-left">
                  <p className="text-sm sm:text-base font-bold text-floro-primary">
                    1x Basic Flower Packet + 1x Fresh Marigold Mala (Garland) Daily
                  </p>
                  <p className="text-sm text-floro-secondary leading-relaxed">
                    Approx. 100 g fresh mix flowers plus one hand-strung, fragrant fresh marigold garland every morning. Ideal for deity adornment.
                  </p>
                </div>
              </label>

              <label
                onClick={() => setSelectedPremiumConfig("two_packets")}
                className={`p-4 rounded-card border-2 cursor-pointer flex items-start gap-3 transition-all ${
                  selectedPremiumConfig === "two_packets"
                    ? "border-floro-accent bg-floro-accent-soft/30 shadow-[2px_2px_0_#241D20]"
                    : "border-floro-border bg-floro-surface hover:bg-floro-surface-soft"
                }`}
              >
                <input
                  type="radio"
                  name="premium-config"
                  checked={selectedPremiumConfig === "two_packets"}
                  onChange={() => setSelectedPremiumConfig("two_packets")}
                  className="mt-1 text-floro-accent focus:ring-floro-accent"
                />
                <div className="space-y-1 text-left">
                  <p className="text-sm sm:text-base font-bold text-floro-primary">
                    Two Basic Flower Packets Daily (Approx. 200 g Total)
                  </p>
                  <p className="text-sm text-floro-secondary leading-relaxed">
                    Double daily flowers without garland. Ideal for large multi-deity home mandirs, joint families, or elaborate morning aarti.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setPremiumModalOpen(false)}
                className="px-4 py-2 text-sm font-bold text-floro-secondary hover:text-floro-primary"
              >
                Cancel
              </button>
              <NeoButton variant="primary" size="md" onClick={confirmPremiumSelection}>
                Proceed to Checkout
              </NeoButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
