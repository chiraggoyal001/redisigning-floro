import React from "react";
import Link from "next/link";
import { FAQS } from "@/lib/constants";
import { Accordion } from "@/components/common/Accordion";
import { NeoButton } from "@/components/common/NeoButton";

export const FaqPreview: React.FC = () => {
  const topFaqs = FAQS.slice(0, 4);

  return (
    <section className="w-full py-16 md:py-24 bg-transparent border-b-2 border-floro-border">
      <div className="max-w-reading mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-muted">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-floro-secondary leading-relaxed">
            Everything you need to know about packet contents, deliveries, and subscriptions.
          </p>
        </div>

        <Accordion items={topFaqs} />

        <div className="mt-8 text-center">
          <Link href="/faq">
            <NeoButton variant="secondary" size="md">
              View All Questions & Answers →
            </NeoButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
