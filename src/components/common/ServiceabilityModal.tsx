"use client";

import React, { useState, useEffect } from "react";
import { X, Search, CheckCircle2, AlertCircle, Bell, ArrowRight } from "lucide-react";
import { DataService } from "@/lib/storage";
import { useServiceability } from "@/context/ServiceabilityContext";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

export const ServiceabilityModal: React.FC = () => {
  const { isOpen, closeServiceabilityModal, initialPincode } = useServiceability();
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

  // Sync initialPincode if provided
  useEffect(() => {
    if (initialPincode) {
      setPincode(initialPincode);
    }
  }, [initialPincode]);

  // Lock scroll and handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeServiceabilityModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeServiceabilityModal]);

  if (!isOpen) return null;

  const handleCheck = (e?: React.FormEvent, overridePin?: string) => {
    if (e) e.preventDefault();
    const pinToCheck = (overridePin || pincode).trim();
    if (!/^\d{6}$/.test(pinToCheck)) {
      setStatus("error");
      return;
    }

    setStatus("checking");
    setTimeout(() => {
      const info = DataService.checkPincode(pinToCheck);
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="serviceability-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241D20]/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeServiceabilityModal();
      }}
    >
      <div className="relative w-full max-w-lg bg-floro-surface border-2 border-floro-border shadow-neo-lg rounded-card sm:rounded-largeCard p-6 sm:p-8 space-y-5 text-center my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeServiceabilityModal}
          aria-label="Close serviceability check modal"
          className="absolute top-4 right-4 p-1.5 rounded-control border-2 border-floro-border bg-floro-canvas hover:bg-floro-surface text-floro-primary shadow-[2px_2px_0_#241D20] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Icon Header */}
        <div className="space-y-2 pt-2">
          <div className="inline-flex p-2 rounded-full bg-floro-accent-soft text-floro-accent border-2 border-floro-border shadow-[2px_2px_0_#241D20]">
            <LotusIcon size={24} />
          </div>
          <h2
            id="serviceability-modal-title"
            className="text-2xl sm:text-3xl font-bold font-display text-floro-primary"
          >
            Check Delivery Serviceability
          </h2>
          <p className="text-sm text-floro-secondary max-w-sm mx-auto leading-relaxed">
            Enter your 6-digit postal PIN code to confirm daily morning delivery at your home mandir.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-2.5 items-stretch justify-center">
          <div className="relative flex-1">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              autoFocus
              onChange={(e) => {
                setPincode(e.target.value.replace(/\D/g, ""));
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="e.g. 560034 or 110001"
              aria-label="Enter 6-digit postal PIN code"
              className="w-full h-12 px-4 rounded-control border-2 border-floro-border bg-floro-canvas text-floro-primary font-mono text-base font-bold placeholder:font-sans placeholder:font-normal placeholder:text-floro-muted/60 focus:outline-none focus:ring-2 focus:ring-floro-accent"
            />
          </div>
          <NeoButton
            type="submit"
            variant="primary"
            size="md"
            isLoading={status === "checking"}
            leftIcon={<Search className="w-4 h-4" />}
          >
            Check PIN
          </NeoButton>
        </form>

        {/* Sample click-to-fill chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-floro-muted pt-1">
          <span>Popular hubs:</span>
          {samplePins.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setPincode(item.code);
                handleCheck(undefined, item.code);
              }}
              className="px-2 py-0.5 rounded border border-floro-border bg-floro-canvas font-mono font-bold text-floro-primary hover:bg-floro-accent-soft hover:text-floro-accent transition-colors cursor-pointer"
            >
              {item.city} ({item.code})
            </button>
          ))}
        </div>

        {/* Feedback states */}
        {status === "error" && (
          <div className="p-3.5 rounded-card border-2 border-floro-error bg-floro-error-soft text-floro-error text-sm font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Please enter a valid 6-digit Indian PIN code.</span>
          </div>
        )}

        {status === "serviceable" && result && (
          <NeoCard variant="white" hasShadow={true} isHoverable={false} padding="md" className="text-left border-floro-success">
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
          <NeoCard variant="soft" hasShadow={true} isHoverable={false} padding="md" className="text-left">
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
                      className="flex-1 h-10 px-3 rounded-control border-2 border-floro-border bg-floro-surface text-sm focus:outline-none focus:ring-2 focus:ring-floro-accent"
                    />
                    <NeoButton type="submit" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Join Waitlist
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
    </div>
  );
};
