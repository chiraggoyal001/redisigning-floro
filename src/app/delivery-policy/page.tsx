import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery & Fulfillment Policy — Floro",
  description: "Floro daily morning fulfillment schedule, gate security instructions, and city coverage.",
};

export default function DeliveryPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-transparent py-16">
      <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-8 text-left">
        <div className="space-y-2 border-b border-floro-border/30 pb-6">
          <span className="text-xs font-mono font-bold uppercase text-floro-accent">Logistics</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Delivery Policy
          </h1>
          <p className="text-xs text-floro-muted">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-floro-secondary leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">1. Daily Morning Delivery Window</h2>
            <p>
              Deliveries are completed between 5:30 AM and 7:30 AM every morning. Our delivery personnel are trained in quiet morning deliveries to ensure your family is not disturbed while resting.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">2. Gated Communities & Security Access</h2>
            <p>
              Please ensure your community gate security is aware of daily morning delivery. You may provide permanent gate pass entry or instruct the guard to allow delivery to your door or designated tower mail lobby.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">3. Sundays, Festivals & Public Holidays</h2>
            <p>
              We deliver every single day of the year without holiday closures. On major festival days (e.g. Diwali, Ganesh Chaturthi, Shivratri), morning deliveries begin as early as 5:00 AM to ensure flowers arrive before early puja timings.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
