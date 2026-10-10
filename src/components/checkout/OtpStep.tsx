"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";

interface OtpStepProps {
  phone: string;
  onVerified: () => void;
  onBack: () => void;
}

export const OtpStep: React.FC<OtpStepProps> = ({
  phone,
  onVerified,
  onBack,
}) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (otp.length !== 4) {
      setError("Please enter the 4-digit code.");
      return;
    }

    setIsVerifying(true);
    setError("");

    // Simulate verification (any 4-digit code or 1234 passes)
    setTimeout(() => {
      setIsVerifying(false);
      onVerified();
    }, 400);
  };

  const handleFillDemoCode = () => {
    setOtp("1234");
    setError("");
  };

  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-floro-primary">
          Step 2: Verify Your Mobile Number
        </h2>
        <p className="text-xs text-floro-secondary">
          We sent a 4-digit code to{" "}
          <span className="font-bold font-mono text-floro-primary">
            +91 {phone.slice(0, 5)} {phone.slice(5)}
          </span>
          .
        </p>
      </div>

      <NeoCard variant="soft" padding="md" className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-floro-primary">
            Enter 4-Digit Verification Code
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              maxLength={4}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, ""));
                setError("");
              }}
              placeholder="1234"
              className="w-48 h-12 px-4 rounded-control border-2 border-floro-border bg-floro-surface text-center font-mono text-2xl font-bold tracking-[0.5em] focus:outline-none focus:ring-3 focus:ring-floro-info"
            />
            <button
              type="button"
              onClick={handleFillDemoCode}
              className="px-3 py-2 text-xs font-mono font-bold rounded border border-floro-border bg-floro-marigold text-floro-primary hover:bg-floro-marigold/80 transition-colors"
            >
              Quick Test (Use 1234)
            </button>
          </div>
          {error && <p className="text-xs font-bold text-floro-error">{error}</p>}
        </div>

        <div className="flex items-center justify-between text-xs text-floro-muted pt-2 border-t border-floro-border/20">
          {timer > 0 ? (
            <span>Resend code in {timer}s</span>
          ) : (
            <button
              type="button"
              onClick={() => setTimer(30)}
              className="font-bold text-floro-accent hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Resend Code
            </button>
          )}

          <button
            type="button"
            onClick={onBack}
            className="font-bold text-floro-primary hover:underline"
          >
            Change number
          </button>
        </div>
      </NeoCard>

      <div className="flex items-center justify-between gap-4 pt-2">
        <NeoButton
          type="button"
          variant="outline"
          size="md"
          onClick={onBack}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Back
        </NeoButton>

        <NeoButton
          type="button"
          variant="primary"
          size="lg"
          className="flex-1"
          isLoading={isVerifying}
          onClick={() => handleVerify()}
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Confirm & Continue to Address
        </NeoButton>
      </div>
    </div>
  );
};
