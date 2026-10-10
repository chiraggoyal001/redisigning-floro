"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface ServiceabilityContextType {
  isOpen: boolean;
  initialPincode: string;
  openServiceabilityModal: (pincode?: string) => void;
  closeServiceabilityModal: () => void;
}

const ServiceabilityContext = createContext<ServiceabilityContextType | undefined>(
  undefined
);

export const ServiceabilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPincode, setInitialPincode] = useState("");

  const openServiceabilityModal = useCallback((pincode?: string) => {
    if (pincode) {
      setInitialPincode(pincode);
    }
    setIsOpen(true);
  }, []);

  const closeServiceabilityModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ServiceabilityContext.Provider
      value={{
        isOpen,
        initialPincode,
        openServiceabilityModal,
        closeServiceabilityModal,
      }}
    >
      {children}
    </ServiceabilityContext.Provider>
  );
};

export const useServiceability = (): ServiceabilityContextType => {
  const context = useContext(ServiceabilityContext);
  if (!context) {
    throw new Error(
      "useServiceability must be used within a ServiceabilityProvider"
    );
  }
  return context;
};
