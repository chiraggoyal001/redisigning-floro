"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSubscription } from "@/context/SubscriptionContext";
import { useAuth } from "@/context/AuthContext";
import { DataService } from "@/lib/storage";
import { Order, DeliveryAddress } from "@/types";
import { StepIndicator } from "@/components/checkout/StepIndicator";
import { DetailsStep } from "@/components/checkout/DetailsStep";
import { OtpStep } from "@/components/checkout/OtpStep";
import { AddressStep } from "@/components/checkout/AddressStep";
import { OrderReviewStep } from "@/components/checkout/OrderReviewStep";
import { PaymentStep } from "@/components/checkout/PaymentStep";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    currentPlan,
    premiumOption,
    checkoutData,
    updateCheckoutData,
    resetCheckout,
  } = useSubscription();
  const { loginWithPhone } = useAuth();

  const [step, setStep] = useState(1);

  // Fallback demo address
  const [address, setAddress] = useState<DeliveryAddress>(
    checkoutData.address || {
      fullName: checkoutData.name || "Aarav Sharma",
      phone: checkoutData.phone || "9876543210",
      flatNo: "A-402, Magnolia Enclave",
      street: "14th Main, HSR Layout Sector 4",
      landmark: "Near Shiva Mandir",
      pincode: "560034",
      city: "Bengaluru",
      state: "Karnataka",
      deliveryInstructions: "Leave on puja shelf outside door",
    }
  );

  const handleDetailsComplete = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    updateCheckoutData(data);
    loginWithPhone(data.phone, data.name);
    setAddress((prev) => ({
      ...prev,
      fullName: data.name,
      phone: data.phone,
    }));
    setStep(2);
  };

  const handleOtpVerified = () => {
    updateCheckoutData({ otp: "1234" });
    setStep(3);
  };

  const handleAddressComplete = (addr: DeliveryAddress) => {
    setAddress(addr);
    updateCheckoutData({ address: addr });
    setStep(4);
  };

  const handleProceedToPayment = () => {
    setStep(5);
  };

  const handlePaymentSuccess = (method: "upi" | "card" | "netbanking") => {
    const orderRef = `FLR-${Math.floor(100000 + Math.random() * 900000)}`;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const startDateStr = tomorrow.toISOString().split("T")[0];

    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      orderReference: orderRef,
      planTier: currentPlan.id,
      premiumOption: currentPlan.id === "premium" ? premiumOption : undefined,
      amount: currentPlan.monthlyPrice,
      paymentStatus: "paid",
      paymentMethod: method,
      address,
      createdAt: new Date().toISOString(),
      deliveryStartDate: startDateStr,
    };

    DataService.saveOrder(newOrder);
    resetCheckout();

    router.push(`/confirmation?ref=${orderRef}`);
  };

  return (
    <main className="w-full flex-1 flex flex-col bg-transparent pb-20">
      <StepIndicator currentStep={step} />

      <div className="max-w-reading mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {step === 1 && (
          <DetailsStep
            initialData={{
              name: checkoutData.name,
              phone: checkoutData.phone,
              email: checkoutData.email,
            }}
            onComplete={handleDetailsComplete}
          />
        )}

        {step === 2 && (
          <OtpStep
            phone={checkoutData.phone || "9876543210"}
            onVerified={handleOtpVerified}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <AddressStep
            initialAddress={address}
            onComplete={handleAddressComplete}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <OrderReviewStep
            plan={currentPlan}
            premiumOption={premiumOption}
            address={address}
            onProceedToPayment={handleProceedToPayment}
            onBack={() => setStep(3)}
          />
        )}

        {step === 5 && (
          <PaymentStep
            amount={currentPlan.monthlyPrice}
            onPaymentSuccess={handlePaymentSuccess}
            onBack={() => setStep(4)}
          />
        )}
      </div>
    </main>
  );
}
