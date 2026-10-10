export type PlanTier = "value" | "basic" | "premium";

export type PremiumOption = "two_packets" | "packet_with_mala";

export interface Plan {
  id: PlanTier;
  name: string;
  tagline: string;
  monthlyPrice: number;
  dailyWeightGrams: number;
  dailyWeightLabel: string;
  dailyUnitDescription: string;
  inclusions: string[];
  exclusions: string[];
  specialNote?: string;
  seasonalNote: string;
  badge?: string;
  accentColor: string;
}

export interface DeliveryAddress {
  id?: string;
  fullName: string;
  phone: string;
  flatNo: string;
  street: string;
  landmark?: string;
  pincode: string;
  city: string;
  state: string;
  deliveryInstructions?: string;
}

export interface ServiceablePincode {
  pincode: string;
  city: string;
  state: string;
  hubName: string;
  deliverySlot: string;
  isActive: boolean;
}

export interface Subscription {
  id: string;
  planTier: PlanTier;
  premiumOption?: PremiumOption;
  monthlyPrice: number;
  status: "active" | "paused" | "cancelled";
  startDate: string;
  nextDeliveryDate: string;
  deliverySlot: string;
  address: DeliveryAddress;
  pausedUntil?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderReference: string;
  planTier: PlanTier;
  premiumOption?: PremiumOption;
  amount: number;
  paymentStatus: "pending" | "paid" | "failed";
  paymentMethod: "upi" | "card" | "netbanking";
  address: DeliveryAddress;
  createdAt: string;
  deliveryStartDate: string;
}

export interface FlowerGlossaryItem {
  id: string;
  nameEnglish: string;
  nameHindi: string;
  botanicalName: string;
  sacredDeity: string;
  significance: string;
  availabilitySeason: string;
  includedIn: string[];
  imageUrl?: string;
}

export interface FaqItem {
  id: string;
  category: "subscriptions" | "delivery" | "seasonality" | "payments" | "account";
  question: string;
  answer: string;
}

export interface CheckoutFormData {
  name: string;
  phone: string;
  email: string;
  otp: string;
  address: DeliveryAddress;
  paymentMethod: "upi" | "card" | "netbanking";
}
