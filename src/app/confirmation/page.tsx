"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { DataService } from "@/lib/storage";
import { Order } from "@/types";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const latest = DataService.getLatestOrder();
    if (latest) {
      setOrder(latest);
    }
  }, [refParam]);

  const orderRef = refParam || order?.orderReference || "FLR-782910";

  return (
    <div className="max-w-reading w-full space-y-8 text-center">
      {/* Celebration Header */}
      <div className="space-y-4">
        <div className="p-3 w-fit mx-auto rounded-full bg-floro-success-soft text-floro-success border-2 border-floro-border shadow-neo">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
            Subscription Confirmed & Active
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Your Daily Puja Delivery is Scheduled!
          </h1>
          <p className="text-xs sm:text-sm text-floro-secondary">
            Order Reference:{" "}
            <span className="font-mono font-bold text-floro-primary bg-floro-surface px-2 py-0.5 rounded border border-floro-border">
              {orderRef}
            </span>
          </p>
        </div>
      </div>

      {/* Schedule & Summary Card */}
      <NeoCard variant="white" hasShadow={true} padding="lg" className="text-left space-y-6">
        <div className="flex items-start justify-between border-b-2 border-floro-border/20 pb-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-muted">
              First Delivery
            </span>
            <p className="text-xl font-bold font-display text-floro-primary flex items-center gap-2">
              <Calendar className="w-5 h-5 text-floro-accent" />
              Tomorrow Morning
            </p>
            <p className="text-xs text-floro-secondary">
              Between 5:30 AM and 7:30 AM (before morning puja)
            </p>
          </div>
          <div className="p-2 rounded bg-floro-canvas border border-floro-border">
            <LotusIcon size={28} />
          </div>
        </div>

        {order && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="font-mono font-bold uppercase text-xs text-floro-muted">
                  Active Plan:
                </span>
                <p className="font-bold text-base text-floro-primary uppercase">
                  {order.planTier} Plan (₹{order.amount}/mo)
                </p>
                {order.premiumOption && (
                  <p className="text-floro-terracotta font-semibold text-sm">
                    {order.premiumOption === "two_packets"
                      ? "2x Basic Packets (~200 g Daily)"
                      : "1x Basic Packet + 1x Fresh Mala"}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <span className="font-mono font-bold uppercase text-xs text-floro-muted">
                  Payment Status:
                </span>
                <p className="font-bold text-base text-floro-success">
                  Paid via {order.paymentMethod.toUpperCase()} (₹{order.amount}.00)
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-floro-border/20 space-y-1">
              <span className="font-mono font-bold uppercase text-xs text-floro-muted flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-floro-accent" />
                Delivery Destination:
              </span>
              <p className="font-bold text-floro-primary text-base">
                {order.address.flatNo}, {order.address.street}
              </p>
              <p className="text-floro-secondary">
                {order.address.city}, {order.address.state} — {order.address.pincode}
              </p>
            </div>
          </div>
        )}

        {/* What to expect tomorrow morning */}
        <div className="p-4 rounded-card bg-floro-canvas border-2 border-floro-border space-y-2">
          <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-floro-primary flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-floro-marigold" />
            What to Expect Tomorrow Morning:
          </h4>
          <ul className="space-y-1.5 text-xs text-floro-secondary list-disc list-inside">
            <li>Your delivery partner will quietly place your fresh packet at your door by 7:30 AM.</li>
            <li>Lightly sprinkle clean cold water over the blossoms to refresh them for puja.</li>
            <li>You can pause or skip any day anytime from your account dashboard.</li>
          </ul>
        </div>
      </NeoCard>

      {/* Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/account" className="w-full sm:w-auto">
          <NeoButton variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Go to My Account Dashboard
          </NeoButton>
        </Link>
        <Link href="/" className="w-full sm:w-auto">
          <NeoButton variant="secondary" size="lg" className="w-full">
            Back to Home
          </NeoButton>
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center bg-transparent py-12 px-4 sm:px-6">
      <Suspense
        fallback={
          <div className="p-12 text-center text-sm font-bold text-floro-muted">
            Loading order confirmation...
          </div>
        }
      >
        <ConfirmationContent />
      </Suspense>
    </main>
  );
}
