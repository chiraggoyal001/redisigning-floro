import { Subscription, Order, DeliveryAddress, ServiceablePincode } from "@/types";
import { SERVICEABLE_PINCODES } from "./constants";
import { supabase, isSupabaseConfigured } from "./supabase";

const KEYS = {
  SUBSCRIPTION: "floro_active_subscription",
  ORDERS: "floro_orders",
  ADDRESSES: "floro_saved_addresses",
  WAITLIST: "floro_waitlist_leads",
  USER: "floro_active_user",
};

// Default sample active subscription so /account page is immediately previewable
const DEFAULT_DEMO_SUBSCRIPTION: Subscription = {
  id: "sub_demo_101",
  planTier: "basic",
  monthlyPrice: 600,
  status: "active",
  startDate: "2026-10-11",
  nextDeliveryDate: "Tomorrow, 5:30 AM - 7:30 AM",
  deliverySlot: "5:30 AM - 7:30 AM",
  address: {
    fullName: "Aarav Sharma",
    phone: "9876543210",
    flatNo: "A-402, Lotus Grand",
    street: "14th Main, 4th Sector, HSR Layout",
    landmark: "Near Hanuman Temple",
    pincode: "560034",
    city: "Bengaluru",
    state: "Karnataka",
    deliveryInstructions: "Ring doorbell twice, leave on puja shelf if door locked",
  },
  createdAt: "2026-10-10",
};

export const DataService = {
  // Serviceability lookup
  checkPincode(pincode: string): ServiceablePincode | null {
    const cleanPin = pincode.trim();
    const found = SERVICEABLE_PINCODES.find((p) => p.pincode === cleanPin && p.isActive);
    return found || null;
  },

  // Save waitlist lead
  async saveWaitlist(contact: string, pincode: string): Promise<boolean> {
    try {
      if (isSupabaseConfigured && supabase) {
        await supabase.from("waitlist_leads").insert({
          phone_or_email: contact,
          pincode,
        });
      }
      if (typeof window !== "undefined") {
        const existing = JSON.parse(localStorage.getItem(KEYS.WAITLIST) || "[]");
        existing.push({ contact, pincode, timestamp: new Date().toISOString() });
        localStorage.setItem(KEYS.WAITLIST, JSON.stringify(existing));
      }
      return true;
    } catch {
      return false;
    }
  },

  // Active Subscription
  getActiveSubscription(): Subscription | null {
    if (typeof window === "undefined") return DEFAULT_DEMO_SUBSCRIPTION;
    try {
      const stored = localStorage.getItem(KEYS.SUBSCRIPTION);
      if (stored) {
        return JSON.parse(stored);
      }
      // Seed initial demo subscription if first visit
      localStorage.setItem(KEYS.SUBSCRIPTION, JSON.stringify(DEFAULT_DEMO_SUBSCRIPTION));
      return DEFAULT_DEMO_SUBSCRIPTION;
    } catch {
      return DEFAULT_DEMO_SUBSCRIPTION;
    }
  },

  saveSubscription(subscription: Subscription): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(KEYS.SUBSCRIPTION, JSON.stringify(subscription));
      if (isSupabaseConfigured && supabase) {
        supabase.from("subscriptions").insert({
          id: subscription.id,
          plan_tier: subscription.planTier,
          premium_config: subscription.premiumOption,
          monthly_price: subscription.monthlyPrice,
          status: subscription.status,
          delivery_slot: subscription.deliverySlot,
        });
      }
    } catch (e) {
      console.error("Failed to save subscription", e);
    }
  },

  updateSubscriptionStatus(
    status: "active" | "paused" | "cancelled",
    pausedUntil?: string
  ): Subscription | null {
    if (typeof window === "undefined") return null;
    const current = this.getActiveSubscription();
    if (!current) return null;
    const updated: Subscription = {
      ...current,
      status,
      pausedUntil: status === "paused" ? pausedUntil : undefined,
    };
    this.saveSubscription(updated);
    return updated;
  },

  // Orders
  getOrders(): Order[] {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(KEYS.ORDERS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  getLatestOrder(): Order | null {
    const orders = this.getOrders();
    return orders.length > 0 ? orders[orders.length - 1] : null;
  },

  saveOrder(order: Order): void {
    if (typeof window === "undefined") return;
    try {
      const orders = this.getOrders();
      orders.push(order);
      localStorage.setItem(KEYS.ORDERS, JSON.stringify(orders));

      // Also create/update active subscription matching this order
      const newSub: Subscription = {
        id: `sub_${Date.now().toString().slice(-6)}`,
        planTier: order.planTier,
        premiumOption: order.premiumOption,
        monthlyPrice: order.amount,
        status: "active",
        startDate: order.deliveryStartDate,
        nextDeliveryDate: `Tomorrow, 5:30 AM - 7:30 AM`,
        deliverySlot: "5:30 AM - 7:30 AM",
        address: order.address,
        createdAt: new Date().toISOString(),
      };
      this.saveSubscription(newSub);
    } catch (e) {
      console.error("Failed to save order", e);
    }
  },

  // Saved Addresses
  getSavedAddresses(): DeliveryAddress[] {
    if (typeof window === "undefined") return [DEFAULT_DEMO_SUBSCRIPTION.address];
    try {
      const stored = localStorage.getItem(KEYS.ADDRESSES);
      return stored ? JSON.parse(stored) : [DEFAULT_DEMO_SUBSCRIPTION.address];
    } catch {
      return [DEFAULT_DEMO_SUBSCRIPTION.address];
    }
  },

  saveAddress(address: DeliveryAddress): void {
    if (typeof window === "undefined") return;
    try {
      const addresses = this.getSavedAddresses();
      addresses.push(address);
      localStorage.setItem(KEYS.ADDRESSES, JSON.stringify(addresses));
    } catch (e) {
      console.error("Failed to save address", e);
    }
  },
};
