import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Floro",
  description: "Floro subscriber privacy policy, data security, and communication guidelines.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full flex flex-col bg-transparent py-16">
      <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-8 text-left">
        <div className="space-y-2 border-b-2 border-floro-border pb-6">
          <span className="text-xs font-mono font-bold uppercase text-floro-accent">Privacy & Data</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Privacy Policy
          </h1>
          <p className="text-xs text-floro-muted">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm text-floro-secondary leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">1. Information We Collect</h2>
            <p>
              We collect only the essential information necessary to fulfill daily morning deliveries: your name, contact phone number, delivery address (including floor/flat and apartment instructions), and optional email for receipts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">2. Mobile Number & OTP Verification</h2>
            <p>
              Your phone number is used exclusively for one-time password (OTP) authentication and critical delivery updates (e.g. gate entry issues). We do not sell or rent subscriber numbers to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">3. Payment Information Security</h2>
            <p>
              Floro does not store complete debit/credit card numbers or UPI MPINs on our servers. All financial transactions are processed securely through RBI-compliant, PCI-DSS certified payment gateways.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-floro-primary">4. Data Deletion Requests</h2>
            <p>
              Subscribers may request complete deletion of their account records upon cancellation by contacting care@floro.in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
