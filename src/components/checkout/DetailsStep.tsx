"use client";

import React, { useState } from "react";
import { ArrowRight, Phone, Mail, User } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { InputField } from "@/components/common/InputField";

interface DetailsStepProps {
  initialData: { name?: string; phone?: string; email?: string };
  onComplete: (data: { name: string; phone: string; email: string }) => void;
}

export const DetailsStep: React.FC<DetailsStepProps> = ({
  initialData,
  onComplete,
}) => {
  const [name, setName] = useState(initialData.name || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your full name.";
    const cleanPhone = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onComplete({
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
        email: email.trim(),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-floro-primary">
          Step 1: Subscriber Details
        </h2>
        <p className="text-xs text-floro-secondary">
          Enter your name and mobile number. We will send a quick verification code.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          label="Full Name"
          isRequired={true}
          placeholder="e.g. Radhika Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          leftAddon={<User className="w-4 h-4" />}
        />

        <InputField
          label="Mobile Number (for OTP & delivery SMS)"
          isRequired={true}
          placeholder="98765 43210"
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          error={errors.phone}
          leftAddon={<span className="text-xs font-mono font-bold text-floro-primary">+91</span>}
          helperText="We'll send an instant 4-digit code to verify your morning delivery."
        />

        <InputField
          label="Email Address (for receipts & order updates)"
          type="email"
          placeholder="radhika@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftAddon={<Mail className="w-4 h-4" />}
        />
      </div>

      <div className="pt-2">
        <NeoButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Verify Mobile via OTP
        </NeoButton>
      </div>
    </form>
  );
};
