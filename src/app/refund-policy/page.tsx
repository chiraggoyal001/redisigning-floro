import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellations & Refund Policy — Floro",
  description: "Floro cancellation, pause, and refund policies for devotional flower subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-transparent py-16">
      <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-8 text-left">
        <div className="space-y-2 border-b border-floro-border/30 pb-6">
          <span className="text-xs font-mono font-bold uppercase text-floro-accent">Policies</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Cancellations & Refunds
          </h1>
          <p className="text-xs text-floro-muted">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-floro-secondary leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">1. Subscription Cancellation</h2>
            <p>
              You may cancel your monthly subscription at any point from your subscriber dashboard. Since flower subscriptions involve daily perishable inventory procured in advance, cancellations take effect at the conclusion of your current 30-day billing cycle.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">2. Missed or Delayed Deliveries</h2>
            <p>
              If our delivery partner fails to deliver your packet before the 7:30 AM morning worship cut-off due to an operational issue, you are eligible for an immediate day-credit added to your account or an automatic extension of your subscription validity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">3. Damaged or Unsatisfactory Flowers</h2>
            <p>
              While every packet is hand-inspected, adverse weather can occasionally affect tender petals. If your delivery is damaged, report it via our support WhatsApp within 3 hours with a photo, and a replacement or credit will be issued promptly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
