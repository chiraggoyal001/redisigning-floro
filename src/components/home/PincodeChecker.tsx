"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, AlertCircle, Bell, ArrowRight } from "lucide-react";
import { DataService } from "@/lib/storage";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<
    "idle" | "checking" | "serviceable" | "unavailable" | "error"
  >("idle");
  const [result, setResult] = useState<{
    city?: string;
    state?: string;
    hubName?: string;
    deliverySlot?: string;
  } | null>(null);
  const [waitlistContact, setWaitlistContact] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPin = pincode.trim();
    if (!/^\d{6}$/.test(cleanPin)) {
      setStatus("error");
      return;
    }

    setStatus("checking");
    setTimeout(() => {
      const info = DataService.checkPincode(cleanPin);
      if (info) {
        setResult(info);
        setStatus("serviceable");
      } else {
        setResult(null);
        setStatus("unavailable");
      }
    }, 250);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistContact) return;
    await DataService.saveWaitlist(waitlistContact, pincode);
    setWaitlistSubmitted(true);
  };

  const samplePins = [
    { code: "110001", city: "Delhi" },
    { code: "560034", city: "Bengaluru" },
    { code: "400050", city: "Mumbai" },
    { code: "500001", city: "Hyderabad" },
    { code: "221001", city: "Varanasi" },
  ];

  return (
    <section id="pincode-check" className="w-full py-12 md:py-16 bg-transparent border-b-2 border-floro-border">
      <div className="max-w-reading mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary">
          Check Delivery Serviceability
        </h2>
        <p className="mt-2 text-sm text-floro-secondary">
          Enter your 6-digit postal PIN code to confirm daily morning delivery at your address.
        </p>

        {/* Input Form */}
        <form onSubmit={handleCheck} className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch justify-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value.replace(/\D/g, ""));
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="e.g. 560034 or 110001"
              aria-label="Enter 6-digit postal PIN code"
              className="w-full h-12 px-4 rounded-control border-2 border-floro-border bg-floro-surface text-floro-primary font-mono text-base font-bold placeholder:font-sans placeholder:font-normal placeholder:text-floro-muted/60 focus:outline-none focus:ring-3 focus:ring-floro-info"
            />
          </div>
          <NeoButton
            type="submit"
            variant="primary"
            size="md"
            isLoading={status === "checking"}
            leftIcon={<Search className="w-4 h-4" />}
          >
            Check PIN Code
          </NeoButton>
        </form>

        {/* Sample click-to-fill chips */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-floro-muted">
          <span>Try popular hubs:</span>
          {samplePins.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setPincode(item.code);
                setStatus("checking");
                setTimeout(() => {
                  const info = DataService.checkPincode(item.code);
                  if (info) {
                    setResult(info);
                    setStatus("serviceable");
                  }
                }, 150);
              }}
              className="px-2 py-0.5 rounded border border-floro-border bg-floro-surface font-mono font-bold text-floro-primary hover:bg-floro-accent-soft hover:text-floro-accent transition-colors"
            >
              {item.city} ({item.code})
            </button>
          ))}
        </div>

        {/* Feedback states */}
        {status === "error" && (
          <div className="mt-6 p-4 rounded-card border-2 border-floro-error bg-floro-error-soft text-floro-error text-sm font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Please enter a valid 6-digit Indian PIN code.</span>
          </div>
        )}

        {status === "serviceable" && result && (
          <NeoCard variant="white" hasShadow={true} padding="md" className="mt-6 text-left border-floro-success">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-floro-success-soft text-floro-success shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-base font-bold text-floro-success">
                  Morning delivery is active at PIN {pincode}!
                </p>
                <p className="text-xs text-floro-secondary">
                  Serviced via <span className="font-bold text-floro-primary">{result.hubName}</span> ({result.city}, {result.state}).
                </p>
                <p className="text-xs font-mono font-bold text-floro-primary bg-floro-surface-soft p-1.5 rounded border border-floro-border/30 w-fit">
                  Morning delivery slot: {result.deliverySlot} daily
                </p>
              </div>
            </div>
          </NeoCard>
        )}

        {status === "unavailable" && (
          <NeoCard variant="soft" hasShadow={true} padding="md" className="mt-6 text-left">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-floro-warning-soft text-floro-warning shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-base font-bold text-floro-primary">
                    We aren&apos;t delivering to PIN {pincode} just yet.
                  </p>
                  <p className="text-xs text-floro-secondary mt-0.5">
                    We are expanding rapidly across tier 1 & 2 cities. Leave your contact to get notified the day your area goes live.
                  </p>
                </div>

                {!waitlistSubmitted ? (
                  <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={waitlistContact}
                      onChange={(e) => setWaitlistContact(e.target.value)}
                      placeholder="Enter mobile or email"
                      required
                      className="flex-1 h-10 px-3 rounded-control border-2 border-floro-border bg-floro-surface text-sm focus:outline-none focus:ring-2 focus:ring-floro-info"
                    />
                    <NeoButton type="submit" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Join Area Waitlist
                    </NeoButton>
                  </form>
                ) : (
                  <div className="p-2.5 bg-floro-success-soft text-floro-success text-xs font-bold rounded border border-floro-success flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <span>Thank you! We will alert you the moment morning deliveries launch at {pincode}.</span>
                  </div>
                )}
              </div>
            </div>
          </NeoCard>
        )}
      </div>
    </section>
  );
};
