"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PlanTier, PremiumOption, Plan, CheckoutFormData } from "@/types";
import { FLORO_PLANS } from "@/lib/constants";

interface SubscriptionContextType {
  selectedPlan: PlanTier;
  setSelectedPlan: (plan: PlanTier) => void;
  premiumOption: PremiumOption;
  setPremiumOption: (option: PremiumOption) => void;
  currentPlan: Plan;
  planPrice: number;
  checkoutData: Partial<CheckoutFormData>;
  updateCheckoutData: (data: Partial<CheckoutFormData>) => void;
  resetCheckout: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

const STORAGE_KEY_SELECTION = "floro_plan_selection";
const STORAGE_KEY_CHECKOUT = "floro_checkout_state";

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedPlan, setSelectedPlanState] = useState<PlanTier>("basic");
  const [premiumOption, setPremiumOptionState] = useState<PremiumOption>(
    "packet_with_mala"
  );
  const [checkoutData, setCheckoutData] = useState<Partial<CheckoutFormData>>({
    name: "",
    phone: "",
    email: "",
    otp: "",
    paymentMethod: "upi",
  });

  // Load from session/localStorage
  useEffect(() => {
    try {
      const savedSelection = localStorage.getItem(STORAGE_KEY_SELECTION);
      if (savedSelection) {
        const parsed = JSON.parse(savedSelection);
        if (parsed.plan) setSelectedPlanState(parsed.plan);
        if (parsed.option) setPremiumOptionState(parsed.option);
      }

      const savedCheckout = sessionStorage.getItem(STORAGE_KEY_CHECKOUT);
      if (savedCheckout) {
        setCheckoutData(JSON.parse(savedCheckout));
      }
    } catch {
      // Fallback
    }
  }, []);

  const setSelectedPlan = (plan: PlanTier) => {
    setSelectedPlanState(plan);
    try {
      localStorage.setItem(
        STORAGE_KEY_SELECTION,
        JSON.stringify({ plan, option: premiumOption })
      );
    } catch {
      // ignore
    }
  };

  const setPremiumOption = (option: PremiumOption) => {
    setPremiumOptionState(option);
    try {
      localStorage.setItem(
        STORAGE_KEY_SELECTION,
        JSON.stringify({ plan: selectedPlan, option })
      );
    } catch {
      // ignore
    }
  };

  const updateCheckoutData = (data: Partial<CheckoutFormData>) => {
    setCheckoutData((prev) => {
      const updated = { ...prev, ...data };
      try {
        sessionStorage.setItem(STORAGE_KEY_CHECKOUT, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetCheckout = () => {
    setCheckoutData({
      name: "",
      phone: "",
      email: "",
      otp: "",
      paymentMethod: "upi",
    });
    try {
      sessionStorage.removeItem(STORAGE_KEY_CHECKOUT);
    } catch {
      // ignore
    }
  };

  const currentPlan =
    FLORO_PLANS.find((p) => p.id === selectedPlan) || FLORO_PLANS[1];
  const planPrice = currentPlan.monthlyPrice;

  return (
    <SubscriptionContext.Provider
      value={{
        selectedPlan,
        setSelectedPlan,
        premiumOption,
        setPremiumOption,
        currentPlan,
        planPrice,
        checkoutData,
        updateCheckoutData,
        resetCheckout,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider"
    );
  }
  return context;
};
