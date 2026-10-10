"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User } from "lucide-react";
import { LotusIcon } from "@/components/folk-art/LotusIcon";
import { NeoButton } from "@/components/common/NeoButton";
import { MobileNav } from "./MobileNav";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Subscriptions", href: "/subscriptions" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Flowers & Sourcing", href: "/flowers-and-sourcing" },
    { label: "Rituals & Festivals", href: "/rituals-and-festivals" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-floro-surface/95 backdrop-blur-sm border-b-2 border-floro-border transition-all">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[76px] flex items-center justify-between">
          {/* Logo & Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-2xl md:text-3xl font-bold tracking-tight text-floro-primary group focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-floro-info rounded-md"
          >
            <div className="p-1 rounded-control bg-floro-canvas border-2 border-floro-border shadow-[2px_2px_0_#241D20] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform">
              <LotusIcon size={26} />
            </div>
            <span className="flex items-center">
              Floro
              <span className="text-floro-accent text-3xl leading-none">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-bold tracking-tight transition-all rounded-control ${
                    isActive
                      ? "text-floro-primary bg-floro-canvas border-2 border-floro-border shadow-[2px_2px_0_#241D20]"
                      : "text-floro-secondary hover:text-floro-primary hover:bg-floro-surface-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Account Icon / Link */}
            <Link
              href="/account"
              className={`p-2.5 rounded-control border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-[3px_3px_0_#241D20] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold text-floro-primary ${
                pathname === "/account" ? "bg-floro-accent-soft text-floro-accent" : ""
              }`}
              title="My Account"
            >
              <User className="w-4 h-4 text-floro-primary" />
              <span className="hidden sm:inline">My Account</span>
            </Link>

            {/* Primary Subscribe CTA */}
            <Link href="/subscriptions" className="hidden sm:inline-block">
              <NeoButton variant="primary" size="md">
                Subscribe
              </NeoButton>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="lg:hidden p-2.5 border-2 border-floro-border rounded-control bg-floro-surface shadow-[2px_2px_0_#241D20] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Menu className="w-5 h-5 text-floro-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
