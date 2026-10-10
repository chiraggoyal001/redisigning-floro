import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/lib/constants";
import { Accordion } from "@/components/common/Accordion";
import { NeoButton } from "@/components/common/NeoButton";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Floro",
  description:
    "Find answers to common questions about Floro flower subscriptions, morning delivery hours, Sunday fulfillments, and vacation pauses.",
};

export default function FaqPage() {
  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Header */}
      <section className="w-full pt-12 md:pt-16 pb-4 bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            Transparent answers to everything about daily packet weights, deliveries, billing, and subscription management.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-reading mx-auto px-4 sm:px-6 py-16 space-y-10">
        <Accordion items={FAQS} allowMultiple={true} />

        {/* Still have questions block */}
        <div className="p-6 sm:p-8 rounded-card border-2 border-floro-border bg-floro-surface shadow-neo text-center space-y-4">
          <h3 className="text-xl font-bold font-display text-floro-primary">
            Still have questions about your home mandir needs?
          </h3>
          <p className="text-xs sm:text-sm text-floro-secondary max-w-md mx-auto">
            Our team is available every morning to assist you with special deity offerings or delivery customization.
          </p>
          <div className="pt-2 flex justify-center">
            <Link href="/contact">
              <NeoButton variant="secondary" size="md" leftIcon={<MessageCircle className="w-4 h-4" />}>
                Talk to Floro Support
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
