"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { Plan, PremiumOption, DeliveryAddress } from "@/types";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";

interface OrderReviewStepProps {
  plan: Plan;
  premiumOption?: PremiumOption;
  address: DeliveryAddress;
  onProceedToPayment: () => void;
  onBack: () => void;
}

export const OrderReviewStep: React.FC<OrderReviewStepProps> = ({
  plan,
  premiumOption,
  address,
  onProceedToPayment,
  onBack,
}) => {
  // Format tomorrow date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-floro-primary">
          Step 4: Review Subscription & Schedule
        </h2>
        <p className="text-sm text-floro-secondary">
          Confirm your daily offering details before initiating payment.
        </p>
      </div>

      {/* Plan Details Card */}
      <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-4">
        <div className="flex items-start justify-between border-b-2 border-floro-border/20 pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
              Selected Subscription
            </span>
            <h3 className="text-xl font-bold font-display text-floro-primary">
              {plan.name}
            </h3>
            {plan.id === "premium" && (
              <p className="text-sm font-bold text-floro-terracotta mt-0.5">
                {premiumOption === "two_packets"
                  ? "Config: 2x Basic Flower Packets (~200 g Daily)"
                  : "Config: 1x Basic Packet + 1x Fresh Marigold Mala Daily"}
              </p>
            )}
          </div>
          <div className="text-right">
            <span className="text-2xl font-black font-display text-floro-primary">
              ₹{plan.monthlyPrice}
            </span>
            <span className="block text-xs text-floro-muted">per month</span>
          </div>
        </div>

        {/* Schedule & Inclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <span className="font-bold text-floro-muted uppercase font-mono text-xs">
              Daily Packet Weight:
            </span>
            <p className="font-bold text-floro-primary">
              {plan.id === "premium"
                ? premiumOption === "two_packets"
                ? "~200 g daily (2 packets)"
                : "~100 g packet + 1x hand-strung mala"
                : plan.dailyWeightLabel}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-floro-muted uppercase font-mono text-xs">
              Deliveries Commence:
            </span>
            <p className="font-bold text-floro-accent flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedTomorrow}
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded bg-floro-canvas border border-floro-border text-sm text-floro-secondary space-y-1">
          <p className="font-bold text-floro-primary flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-floro-marigold" />
            365-Day Daily Morning Fulfillment
          </p>
          <p className="text-xs text-floro-secondary leading-relaxed">
            Delivered fresh every morning between 5:30 AM and 7:30 AM, including Sundays and public holidays.
          </p>
        </div>

        <div className="text-xs text-floro-muted italic border-t border-floro-border/20 pt-2">
          {plan.seasonalNote}
        </div>
      </NeoCard>

      {/* Address Card */}
      <NeoCard variant="soft" padding="md" className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="font-bold font-mono text-xs uppercase tracking-wider text-floro-muted flex items-center gap-1">
            <MapPin className="w-4 h-4 text-floro-accent" />
            Delivery Destination:
          </span>
          <button
            type="button"
            onClick={onBack}
            className="font-bold text-floro-accent hover:underline text-xs"
          >
            Edit Address
          </button>
        </div>
        <p className="font-bold text-floro-primary text-base">
          {address.flatNo}, {address.street}
        </p>
        <p className="text-floro-secondary">
          {address.landmark ? `${address.landmark}, ` : ""}
          {address.city}, {address.state} — {address.pincode}
        </p>
        {address.deliveryInstructions && (
          <p className="text-floro-muted pt-1 text-xs sm:text-sm">
            <span className="font-bold text-floro-primary">Instructions:</span> &ldquo;
            {address.deliveryInstructions}&rdquo;
          </p>
        )}
      </NeoCard>

      {/* Pricing Summary */}
      <div className="p-4 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] space-y-2">
        <div className="flex items-center justify-between text-xs text-floro-secondary">
          <span>Monthly Subscription Fee (30 Days)</span>
          <span>₹{plan.monthlyPrice}.00</span>
        </div>
        <div className="flex items-center justify-between text-xs text-floro-secondary">
          <span>Morning Doorstep Delivery Fee</span>
          <span className="text-floro-success font-bold">FREE</span>
        </div>
        <div className="flex items-center justify-between text-xs text-floro-secondary">
          <span>Applicable Taxes</span>
          <span>Included</span>
        </div>
        <div className="pt-2 border-t-2 border-floro-border flex items-baseline justify-between">
          <span className="font-bold text-base text-floro-primary">Total Amount Due Now:</span>
          <span className="text-2xl font-black font-display text-floro-accent">
            ₹{plan.monthlyPrice}.00
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <NeoButton
          type="button"
          variant="outline"
          size="md"
          onClick={onBack}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Back
        </NeoButton>

        <NeoButton
          type="button"
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={onProceedToPayment}
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Proceed to Secure Payment (₹{plan.monthlyPrice})
        </NeoButton>
      </div>
    </div>
  );
};
