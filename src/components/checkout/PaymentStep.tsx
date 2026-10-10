"use client";

import React, { useState } from "react";
import { ArrowLeft, ShieldCheck, QrCode, CreditCard, Building2, Lock } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";

interface PaymentStepProps {
  amount: number;
  onPaymentSuccess: (method: "upi" | "card" | "netbanking") => void;
  onBack: () => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({
  amount,
  onPaymentSuccess,
  onBack,
}) => {
  const [method, setMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [upiApp, setUpiApp] = useState("gpay");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(method);
    }, 900);
  };

  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-floro-primary">
          Step 5: Authorize Payment
        </h2>
        <p className="text-xs text-floro-secondary">
          Complete payment securely via your preferred Indian payment method.
        </p>
      </div>

      {/* Payment Method Selector */}
      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => setMethod("upi")}
          className={`p-3 rounded-card border-2 flex flex-col items-center gap-1.5 transition-all text-xs font-bold ${
            method === "upi"
              ? "border-floro-accent bg-floro-accent-soft/40 shadow-neo text-floro-primary"
              : "border-floro-border bg-floro-surface text-floro-secondary hover:bg-floro-surface-soft"
          }`}
        >
          <QrCode className="w-5 h-5 text-floro-accent" />
          <span>UPI / QR</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod("card")}
          className={`p-3 rounded-card border-2 flex flex-col items-center gap-1.5 transition-all text-xs font-bold ${
            method === "card"
              ? "border-floro-accent bg-floro-accent-soft/40 shadow-neo text-floro-primary"
              : "border-floro-border bg-floro-surface text-floro-secondary hover:bg-floro-surface-soft"
          }`}
        >
          <CreditCard className="w-5 h-5 text-floro-indigo" />
          <span>Cards</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod("netbanking")}
          className={`p-3 rounded-card border-2 flex flex-col items-center gap-1.5 transition-all text-xs font-bold ${
            method === "netbanking"
              ? "border-floro-accent bg-floro-accent-soft/40 shadow-neo text-floro-primary"
              : "border-floro-border bg-floro-surface text-floro-secondary hover:bg-floro-surface-soft"
          }`}
        >
          <Building2 className="w-5 h-5 text-floro-leaf" />
          <span>Net Banking</span>
        </button>
      </div>

      {/* Selected Payment Interface */}
      <NeoCard variant="white" hasShadow={true} padding="lg">
        {method === "upi" && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-floro-primary">Choose your UPI app:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: "gpay", label: "Google Pay" },
                { id: "phonepe", label: "PhonePe" },
                { id: "paytm", label: "Paytm" },
                { id: "bhim", label: "BHIM UPI" },
              ].map((app) => (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setUpiApp(app.id)}
                  className={`p-2.5 rounded-control border-2 text-xs font-bold transition-all ${
                    upiApp === app.id
                      ? "border-floro-accent bg-floro-accent-soft/50 text-floro-accent"
                      : "border-floro-border/40 hover:border-floro-border"
                  }`}
                >
                  {app.label}
                </button>
              ))}
            </div>

            <div className="p-3 rounded bg-floro-canvas border border-floro-border/40 text-center space-y-1">
              <p className="text-xs text-floro-secondary">
                You will be redirected to approve <span className="font-bold text-floro-primary">₹{amount}.00</span> securely.
              </p>
              <p className="text-[11px] text-floro-muted">UPI AutoPay / One-Time Authorization</p>
            </div>
          </div>
        )}

        {method === "card" && (
          <div className="space-y-3">
            <div className="p-3 rounded bg-floro-canvas border border-floro-border text-xs text-floro-secondary">
              <p className="font-bold text-floro-primary">All Major Indian Cards Supported</p>
              <p className="text-[11px] text-floro-muted mt-0.5">Visa, Mastercard, RuPay, and American Express.</p>
            </div>
            <input
              type="text"
              placeholder="Card Number (•••• •••• •••• ••••)"
              disabled
              value="4111 •••• •••• 1234 (Demo Mode)"
              className="w-full h-11 px-3 text-sm rounded-control border-2 border-floro-border bg-floro-surface-soft font-mono"
            />
          </div>
        )}

        {method === "netbanking" && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-floro-primary">Select Bank:</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="p-2 rounded border border-floro-border bg-floro-surface-soft">HDFC Bank</span>
              <span className="p-2 rounded border border-floro-border bg-floro-surface-soft">ICICI Bank</span>
              <span className="p-2 rounded border border-floro-border bg-floro-surface-soft">State Bank of India</span>
              <span className="p-2 rounded border border-floro-border bg-floro-surface-soft">Axis Bank</span>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-floro-border/20 flex items-center justify-center gap-2 text-[11px] text-floro-muted">
          <Lock className="w-3.5 h-3.5 text-floro-success" />
          <span>256-bit SSL encrypted • RBI PCI-DSS compliant checkout</span>
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
          isLoading={isProcessing}
          onClick={handlePay}
        >
          Authorize & Complete Payment (₹{amount})
        </NeoButton>
      </div>
    </div>
  );
};
