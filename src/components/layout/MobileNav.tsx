"use client";

import React from "react";
import Link from "next/link";
import { X, User, ArrowRight } from "lucide-react";
import { LotusIcon } from "@/components/folk-art/LotusIcon";
import { NeoButton } from "@/components/common/NeoButton";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-floro-canvas"
    >
      {/* Drawer Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b-2 border-floro-border bg-floro-surface">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-floro-primary"
        >
          <LotusIcon size={26} />
          <span>Floro</span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 border-2 border-floro-border rounded-control bg-floro-surface text-floro-primary shadow-[2px_2px_0_#241D20] active:translate-x-[1px] active:translate-y-[1px]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <Link
            href="/subscriptions"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>Flower Subscriptions</span>
            <ArrowRight className="w-5 h-5 text-floro-accent" />
          </Link>
          <Link
            href="/how-it-works"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>How It Works</span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
          <Link
            href="/flowers-and-sourcing"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>Flowers & Sourcing</span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
          <Link
            href="/rituals-and-festivals"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>Rituals & Festivals</span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
          <Link
            href="/faq"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>FAQs</span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display border-b border-floro-border/20 text-floro-primary hover:text-floro-accent"
          >
            <span>Contact & Support</span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
          <Link
            href="/account"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-lg font-bold font-display text-floro-primary hover:text-floro-accent"
          >
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-floro-accent" />
              My Account
            </span>
            <ArrowRight className="w-5 h-5 text-floro-muted" />
          </Link>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t-2 border-floro-border">
          <Link href="/subscriptions" onClick={onClose} className="block w-full">
            <NeoButton variant="primary" size="lg" className="w-full">
              Explore Subscriptions
            </NeoButton>
          </Link>
          <p className="mt-3 text-center text-xs text-floro-muted">
            Fresh puja flowers delivered daily by 7:30 AM
          </p>
        </div>
      </nav>
    </div>
  );
};
