import React from "react";
import Link from "next/link";
import { LotusIcon } from "@/components/folk-art/LotusIcon";
import { GarlandDivider } from "@/components/folk-art/GarlandDivider";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-floro-surface border-t-2 border-floro-border mt-auto">
      {/* Visual Garland Accent */}
      <GarlandDivider className="pt-6 pb-2" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-floro-primary">
              <div className="p-1 rounded-control bg-floro-canvas border-2 border-floro-border shadow-[2px_2px_0_#241D20]">
                <LotusIcon size={24} />
              </div>
              <span>Floro.</span>
            </Link>
            <p className="text-sm text-floro-secondary max-w-sm leading-relaxed">
              A contemporary cultural lifestyle brand rooted in ritual. Fresh, hand-selected puja flowers delivered to your home every morning across India.
            </p>
            <div className="p-3.5 border-2 border-floro-border rounded-card bg-floro-canvas text-xs text-floro-primary shadow-[2px_2px_0_#241D20]">
              <span className="font-bold text-floro-terracotta">🌸 Seasonal Note:</span> Flower varieties adapt gracefully with monsoon, winter, and summer bloom seasons. Every substitute is pure, fresh, and communicated transparently.
            </div>
          </div>

          {/* Subscriptions Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-floro-primary">
              Subscriptions
            </h4>
            <ul className="space-y-2 text-sm text-floro-secondary font-medium">
              <li>
                <Link href="/subscriptions" className="hover:text-floro-accent transition-colors">
                  Value Plan (₹450/mo)
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="hover:text-floro-accent transition-colors">
                  Basic Plan (₹600/mo)
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="hover:text-floro-accent transition-colors">
                  Premium Plan (₹900/mo)
                </Link>
              </li>
              <li>
                <Link href="/#pincode-check" className="hover:text-floro-accent transition-colors">
                  Check Serviceable PIN Codes
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-floro-accent transition-colors">
                  Subscriber Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Traditions & Learning Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-floro-primary">
              Traditions & Care
            </h4>
            <ul className="space-y-2 text-sm text-floro-secondary font-medium">
              <li>
                <Link href="/how-it-works" className="hover:text-floro-accent transition-colors">
                  How Floro Works
                </Link>
              </li>
              <li>
                <Link href="/flowers-and-sourcing" className="hover:text-floro-accent transition-colors">
                  Botanical Flower Glossary
                </Link>
              </li>
              <li>
                <Link href="/rituals-and-festivals" className="hover:text-floro-accent transition-colors">
                  Daily Rituals & Festivals
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-floro-accent transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-floro-primary">
              Support & Policies
            </h4>
            <ul className="space-y-2 text-sm text-floro-secondary font-medium">
              <li>
                <Link href="/contact" className="hover:text-floro-accent transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/delivery-policy" className="hover:text-floro-accent transition-colors">
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-floro-accent transition-colors">
                  Cancellations & Refunds
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-floro-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-floro-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-floro-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-floro-muted">
          <p>© {new Date().getFullYear()} Floro. Delivered with devotion and care every morning.</p>
          <div className="flex items-center gap-4">
            <span>Delivered 365 Days a Year</span>
            <span>•</span>
            <span>Sundays & Holidays Included</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
