import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HoverRevealCardsDemo } from "@/components/ui/demo";
import { NeoButton } from "@/components/common/NeoButton";

export default function CardsDemoPage() {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-6xl w-full space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <NeoButton variant="secondary" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </NeoButton>
          </Link>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
            Component Demo • Hover Reveal Cards
          </span>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            Hover Reveal Cards Animation
          </h1>
          <p className="text-sm text-floro-secondary max-w-xl mx-auto">
            Hover over any card below to see it scale up and sharpen, while peer cards de-emphasize with subtle scale reduction, blur, and opacity reduction.
          </p>
        </div>

        {/* Demo container */}
        <div className="w-full flex justify-center py-6">
          <HoverRevealCardsDemo />
        </div>
      </div>
    </main>
  );
}
