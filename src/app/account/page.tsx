"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Receipt,
  User,
  CheckCircle2,
} from "lucide-react";
import { DataService } from "@/lib/storage";
import { Subscription, Order } from "@/types";
import { NeoButton } from "@/components/common/NeoButton";
import { NeoCard } from "@/components/common/NeoCard";
import { NeoBadge } from "@/components/common/NeoBadge";
import { LotusIcon } from "@/components/folk-art/LotusIcon";

export default function AccountPage() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [modalType, setModalType] = useState<"pause" | "cancel" | null>(null);
  const [pauseDays, setPauseDays] = useState(3);
  const [actionNotice, setActionNotice] = useState("");

  useEffect(() => {
    const sub = DataService.getActiveSubscription();
    setSubscription(sub);
    const ords = DataService.getOrders();
    setOrders(ords);
  }, []);

  const handleTogglePause = () => {
    if (!subscription) return;

    if (subscription.status === "active") {
      setModalType("pause");
    } else {
      // Resume
      const updated = DataService.updateSubscriptionStatus("active");
      setSubscription(updated);
      setActionNotice("Subscription resumed! Deliveries will resume tomorrow morning at 5:30 AM.");
      setTimeout(() => setActionNotice(""), 4000);
    }
  };

  const confirmPause = () => {
    const resumeDate = new Date();
    resumeDate.setDate(resumeDate.getDate() + pauseDays);
    const dateStr = resumeDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });

    const updated = DataService.updateSubscriptionStatus("paused", dateStr);
    setSubscription(updated);
    setModalType(null);
    setActionNotice(`Deliveries paused for ${pauseDays} days (resuming ${dateStr}).`);
    setTimeout(() => setActionNotice(""), 4000);
  };

  const confirmCancel = () => {
    const updated = DataService.updateSubscriptionStatus("cancelled");
    setSubscription(updated);
    setModalType(null);
    setActionNotice("Subscription cancelled. Active until the end of your billing cycle.");
    setTimeout(() => setActionNotice(""), 4000);
  };

  if (!subscription) {
    return (
      <main className="p-12 text-center">
        <p className="text-sm font-bold text-floro-muted">Loading account data...</p>
      </main>
    );
  }

  const isPaused = subscription.status === "paused";
  const isCancelled = subscription.status === "cancelled";

  return (
    <main className="w-full flex-1 flex flex-col bg-floro-canvas pb-20">
      {/* Header */}
      <section className="w-full py-10 border-b-2 border-floro-border bg-floro-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-accent">
              Subscriber Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-floro-primary flex items-center gap-2">
              <User className="w-6 h-6 text-floro-accent" />
              {subscription.address.fullName || "Aarav Sharma"}
            </h1>
            <p className="text-xs text-floro-secondary">
              Linked Mobile:{" "}
              <span className="font-mono font-bold text-floro-primary">
                +91 {subscription.address.phone || "9876543210"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <NeoBadge
              variant={
                isCancelled ? "terracotta" : isPaused ? "warning" : "success"
              }
              size="md"
            >
              ● Status: {subscription.status.toUpperCase()}
            </NeoBadge>
          </div>
        </div>
      </section>

      {/* Action Notification Banner */}
      {actionNotice && (
        <div className="w-full bg-floro-success-soft border-b-2 border-floro-border py-3 px-4 text-center">
          <p className="text-xs font-bold text-floro-success flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {actionNotice}
          </p>
        </div>
      )}

      {/* Main Account Content */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Active Subscription Summary */}
          <div className="lg:col-span-7 space-y-6">
            <NeoCard variant="white" hasShadow={true} padding="lg" rounded="largeCard" className="space-y-6">
              <div className="flex items-start justify-between border-b-2 border-floro-border/20 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-muted">
                    Current Active Plan
                  </span>
                  <h2 className="text-2xl font-bold font-display text-floro-primary uppercase">
                    {subscription.planTier} Plan
                  </h2>
                  {subscription.premiumOption && (
                    <p className="text-xs font-bold text-floro-terracotta mt-0.5">
                      {subscription.premiumOption === "two_packets"
                        ? "2x Basic Packets (~200 g Daily)"
                        : "1x Basic Packet + 1x Fresh Mala"}
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black font-display text-floro-primary">
                    ₹{subscription.monthlyPrice}
                  </span>
                  <span className="block text-[11px] text-floro-muted">/ month</span>
                </div>
              </div>

              {/* Schedule Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded bg-floro-canvas border border-floro-border space-y-1">
                  <span className="font-bold text-floro-muted font-mono uppercase text-[10px] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-floro-accent" />
                    Delivery Window
                  </span>
                  <p className="font-bold text-sm text-floro-primary">
                    5:30 AM – 7:30 AM
                  </p>
                  <p className="text-[11px] text-floro-secondary">
                    365 days a year including Sundays & holidays
                  </p>
                </div>

                <div className="p-3.5 rounded bg-floro-canvas border border-floro-border space-y-1">
                  <span className="font-bold text-floro-muted font-mono uppercase text-[10px] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-floro-marigold" />
                    Next Scheduled Delivery
                  </span>
                  <p className="font-bold text-sm text-floro-primary">
                    {isPaused
                      ? `Paused until ${subscription.pausedUntil}`
                      : isCancelled
                      ? "None (Cancelled)"
                      : "Tomorrow Morning"}
                  </p>
                  <p className="text-[11px] text-floro-secondary">
                    {isPaused ? "Tap Resume anytime" : "Hand-selected fresh blooms"}
                  </p>
                </div>
              </div>

              {/* Self-service management buttons */}
              <div className="pt-2 border-t-2 border-floro-border/20 flex flex-wrap items-center gap-3">
                {!isCancelled && (
                  <NeoButton
                    variant={isPaused ? "primary" : "secondary"}
                    size="md"
                    onClick={handleTogglePause}
                    leftIcon={isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  >
                    {isPaused ? "Resume Deliveries" : "Vacation Pause (Hold)"}
                  </NeoButton>
                )}

                <Link href="/subscriptions">
                  <NeoButton variant="outline" size="md" leftIcon={<RotateCcw className="w-4 h-4" />}>
                    Change / Upgrade Plan
                  </NeoButton>
                </Link>

                {!isCancelled && (
                  <button
                    type="button"
                    onClick={() => setModalType("cancel")}
                    className="text-xs font-bold text-floro-muted hover:text-floro-error ml-auto"
                  >
                    Cancel Subscription
                  </button>
                )}
              </div>
            </NeoCard>

            {/* Inclusions summary for this plan */}
            <NeoCard variant="soft" padding="md" className="space-y-3 text-xs">
              <h3 className="font-bold text-sm text-floro-primary flex items-center gap-2">
                <LotusIcon size={20} />
                Daily Offering Composition
              </h3>
              <ul className="space-y-1 text-floro-secondary list-disc list-inside leading-relaxed">
                <li>Fresh marigolds, red hibiscus, holy basil (tulsi), and durva grass stems.</li>
                {subscription.planTier !== "value" && (
                  <li className="font-bold text-floro-primary">
                    Special Shiva Belpatra offering included every Monday.
                  </li>
                )}
                <li>Quiet doorstep delivery before 7:30 AM every day.</li>
              </ul>
            </NeoCard>
          </div>

          {/* Right: Delivery Address & Receipt Log */}
          <div className="lg:col-span-5 space-y-6">
            {/* Delivery Destination */}
            <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-3 text-left">
              <div className="flex items-center justify-between border-b border-floro-border/20 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-muted flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-floro-accent" />
                  Delivery Destination
                </span>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-floro-success-soft text-floro-success">
                  Verified Hub
                </span>
              </div>

              <div className="space-y-1 text-xs">
                <p className="font-bold text-sm text-floro-primary">
                  {subscription.address.flatNo}, {subscription.address.street}
                </p>
                <p className="text-floro-secondary">
                  {subscription.address.landmark ? `${subscription.address.landmark}, ` : ""}
                  {subscription.address.city}, {subscription.address.state} — {subscription.address.pincode}
                </p>
                {subscription.address.deliveryInstructions && (
                  <p className="text-floro-muted pt-2 border-t border-floro-border/10">
                    <span className="font-bold text-floro-primary">Gate Instructions: </span>
                    &ldquo;{subscription.address.deliveryInstructions}&rdquo;
                  </p>
                )}
              </div>
            </NeoCard>

            {/* Recent Orders Log */}
            <NeoCard variant="white" hasShadow={true} padding="md" className="space-y-3 text-left">
              <div className="flex items-center justify-between border-b border-floro-border/20 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-floro-muted flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-floro-indigo" />
                  Payment & Invoice Receipts
                </span>
              </div>

              <div className="space-y-2">
                {orders.length > 0 ? (
                  orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-3 rounded bg-floro-canvas border border-floro-border/40 text-xs flex items-center justify-between"
                    >
                      <div>
                        <p className="font-mono font-bold text-floro-primary">
                          {ord.orderReference}
                        </p>
                        <p className="text-[11px] text-floro-muted">
                          {new Date(ord.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-floro-primary">₹{ord.amount}</span>
                        <span className="block text-[10px] font-bold text-floro-success uppercase">
                          ● {ord.paymentStatus}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 rounded bg-floro-canvas text-xs text-floro-secondary">
                    <p className="font-mono font-bold">FLR-782910</p>
                    <p className="text-[11px] text-floro-muted">Active Monthly Subscription (₹{subscription.monthlyPrice})</p>
                  </div>
                )}
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Pause Confirmation Modal */}
      {modalType === "pause" && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-floro-primary/60 backdrop-blur-sm"
        >
          <div className="w-full max-w-md bg-floro-surface border-2 border-floro-border rounded-largeCard shadow-neo-lg p-6 space-y-5 text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-floro-primary">
                Pause Daily Deliveries (Vacation Mode)
              </h3>
              <p className="text-xs text-floro-secondary">
                Traveling or away from home? Pause deliveries for as many days as you need. Your billing validity is automatically extended.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-floro-primary">Pause Duration:</label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 5, 7].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setPauseDays(days)}
                    className={`py-2 rounded-control border-2 text-xs font-bold font-mono transition-all ${
                      pauseDays === days
                        ? "border-floro-accent bg-floro-accent-soft text-floro-accent shadow-[2px_2px_0_#241D20]"
                        : "border-floro-border bg-floro-surface text-floro-primary"
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-3 py-2 text-xs font-bold text-floro-secondary hover:text-floro-primary"
              >
                Cancel
              </button>
              <NeoButton variant="primary" size="md" onClick={confirmPause}>
                Confirm Vacation Pause
              </NeoButton>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {modalType === "cancel" && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-floro-primary/60 backdrop-blur-sm"
        >
          <div className="w-full max-w-md bg-floro-surface border-2 border-floro-border rounded-largeCard shadow-neo-lg p-6 space-y-5 text-left">
            <div className="p-2 rounded-full bg-floro-error-soft text-floro-error w-fit">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-floro-primary">
                Cancel Your Subscription?
              </h3>
              <p className="text-xs text-floro-secondary">
                Are you sure? You will stop receiving fresh daily puja flowers after your current cycle ends. You can pause anytime instead without losing days.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-3 py-2 text-xs font-bold text-floro-secondary hover:text-floro-primary"
              >
                Keep Subscription
              </button>
              <NeoButton variant="destructive" size="md" onClick={confirmCancel}>
                Confirm Cancellation
              </NeoButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
