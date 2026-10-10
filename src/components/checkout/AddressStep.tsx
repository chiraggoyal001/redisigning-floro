"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { DeliveryAddress } from "@/types";
import { DataService } from "@/lib/storage";
import { NeoButton } from "@/components/common/NeoButton";
import { InputField } from "@/components/common/InputField";
import { NeoCard } from "@/components/common/NeoCard";

interface AddressStepProps {
  initialAddress?: Partial<DeliveryAddress>;
  onComplete: (address: DeliveryAddress) => void;
  onBack: () => void;
}

export const AddressStep: React.FC<AddressStepProps> = ({
  initialAddress,
  onComplete,
  onBack,
}) => {
  const [flatNo, setFlatNo] = useState(initialAddress?.flatNo || "");
  const [street, setStreet] = useState(initialAddress?.street || "");
  const [landmark, setLandmark] = useState(initialAddress?.landmark || "");
  const [pincode, setPincode] = useState(initialAddress?.pincode || "560034");
  const [city, setCity] = useState(initialAddress?.city || "Bengaluru");
  const [state, setState] = useState(initialAddress?.state || "Karnataka");
  const [instructions, setInstructions] = useState(
    initialAddress?.deliveryInstructions || "Leave at door hook before 7:00 AM"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pincodeStatus, setPincodeStatus] = useState<
    "serviceable" | "unavailable" | "idle"
  >("serviceable");

  const handlePincodeChange = (val: string) => {
    const clean = val.replace(/\D/g, "");
    setPincode(clean);
    if (clean.length === 6) {
      const info = DataService.checkPincode(clean);
      if (info) {
        setCity(info.city);
        setState(info.state);
        setPincodeStatus("serviceable");
        setErrors((prev) => ({ ...prev, pincode: "" }));
      } else {
        setPincodeStatus("unavailable");
        setErrors((prev) => ({
          ...prev,
          pincode: "Sorry, this PIN code is outside our active delivery zones currently.",
        }));
      }
    } else {
      setPincodeStatus("idle");
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!flatNo.trim()) newErrors.flatNo = "Enter flat, house, or tower number.";
    if (!street.trim()) newErrors.street = "Enter society, street, or area.";
    if (!/^\d{6}$/.test(pincode)) newErrors.pincode = "Enter a valid 6-digit PIN code.";
    if (pincodeStatus === "unavailable") {
      newErrors.pincode = "Please provide an address within our serviceable areas.";
    }
    if (!city.trim()) newErrors.city = "City is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onComplete({
        fullName: initialAddress?.fullName || "Subscriber",
        phone: initialAddress?.phone || "9876543210",
        flatNo: flatNo.trim(),
        street: street.trim(),
        landmark: landmark.trim(),
        pincode: pincode.trim(),
        city: city.trim(),
        state: state.trim(),
        deliveryInstructions: instructions.trim(),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-floro-primary">
          Step 3: Delivery Address & Gate Access
        </h2>
        <p className="text-xs text-floro-secondary">
          Where should our delivery executive quietly deliver your morning flowers?
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="PIN Code"
            isRequired={true}
            maxLength={6}
            value={pincode}
            onChange={(e) => handlePincodeChange(e.target.value)}
            error={errors.pincode}
            leftAddon={<MapPin className="w-4 h-4 text-floro-accent" />}
          />

          <InputField
            label="City"
            isRequired={true}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={errors.city}
          />
        </div>

        {pincodeStatus === "serviceable" && (
          <div className="p-2.5 rounded bg-floro-success-soft text-floro-success text-xs font-bold border border-floro-success/40 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Active service zone! Morning deliveries arrive between 5:30 AM – 7:30 AM.</span>
          </div>
        )}

        <InputField
          label="Flat / House No., Floor, Tower / Society Name"
          isRequired={true}
          placeholder="e.g. Flat 402, Block B, Magnolia Woods"
          value={flatNo}
          onChange={(e) => setFlatNo(e.target.value)}
          error={errors.flatNo}
        />

        <InputField
          label="Street / Road / Area Name"
          isRequired={true}
          placeholder="e.g. 14th Main, HSR Layout Sector 4"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          error={errors.street}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Landmark (Optional)"
            placeholder="e.g. Near Ganesha Temple"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />

          <InputField
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-bold text-floro-primary">
            Quiet Morning Delivery Instructions
          </label>
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g. Hang on main door hook, or leave on temple shelf outside"
            className="w-full h-12 px-4 rounded-control border-2 border-floro-border bg-floro-surface text-sm font-medium focus:outline-none focus:ring-3 focus:ring-floro-info"
          />
          <p className="text-[11px] text-floro-muted">
            Our delivery partners arrive quietly before 7:30 AM to ensure your home is not disturbed.
          </p>
        </div>
      </div>

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
          type="submit"
          variant="primary"
          size="lg"
          className="flex-1"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Continue to Order Review
        </NeoButton>
      </div>
    </form>
  );
};
