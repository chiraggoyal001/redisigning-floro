import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

export default function NotFoundPage() {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center bg-transparent py-20 px-4 text-center">
      <div className="max-w-reading mx-auto space-y-6">
        <div className="p-4 rounded-full bg-floro-surface border-2 border-floro-border shadow-neo w-fit mx-auto">
          <LotusIcon size={44} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
            Page Not Found • 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-floro-primary">
            This Path Does Not Lead to the Sanctum
          </h1>
          <p className="text-sm text-floro-secondary max-w-md mx-auto leading-relaxed">
            The page you are looking for has been moved, renamed, or is currently blooming elsewhere.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <NeoButton variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return to Home
            </NeoButton>
          </Link>

          <Link href="/subscriptions">
            <NeoButton variant="secondary" size="md" leftIcon={<Compass className="w-4 h-4" />}>
              Explore Subscription Plans
            </NeoButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
