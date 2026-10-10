import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Floro",
  description: "Floro terms of service, subscription terms, renewal guidelines, and serviceability policies.",
};

export default function TermsPage() {
  return (
    <main className="w-full flex flex-col bg-floro-canvas py-16">
      <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-8 text-left">
        <div className="space-y-2 border-b-2 border-floro-border pb-6">
          <span className="text-xs font-mono font-bold uppercase text-floro-accent">Legal & Operational</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Terms of Service
          </h1>
          <p className="text-xs text-floro-muted">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-floro-secondary leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">1. Subscription Nature & Fulfillment</h2>
            <p>
              Floro operates a 30-day recurring daily fresh flower delivery subscription. Deliveries take place once daily between 5:30 AM and 7:30 AM Indian Standard Time (IST), 365 days a year including Sundays and public holidays.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">2. Packet Weights & Daily Quantities</h2>
            <p>
              Plan weights described on the website (e.g. approx. 50 g for Value, approx. 100 g for Basic) specify the daily individual packet delivered to your residence, not the monthly cumulative aggregate.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">3. Seasonal Bloom Variations & Substitutions</h2>
            <p>
              Because puja flowers are subject to local climate, weather anomalies, and natural bloom cycles, certain varieties (such as Aparajita, Mogra, or Belpatra) may be substituted with botanically appropriate devotional alternatives. Floro commits to honest advance communication regarding substitutions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">4. Serviceability & Geographical Limits</h2>
            <p>
              Delivery is restricted to verified serviceable postal PIN codes. An address must be confirmed as active by our operational hubs before regular deliveries commence.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">5. Vacation Pauses & Account Controls</h2>
            <p>
              Subscribers may pause deliveries through the My Account portal with a minimum of 24 hours advance notice prior to 8:00 PM on the day preceding the pause.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
