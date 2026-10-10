-- =========================================================================
-- Floro Devotional Flower Subscriptions — PostgreSQL / Supabase Schema
-- =========================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (Users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone VARCHAR(15) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(180),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Delivery Addresses Table
CREATE TABLE IF NOT EXISTS public.addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  full_name VARCHAR(120) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  flat_no VARCHAR(100) NOT NULL,
  street TEXT NOT NULL,
  landmark TEXT,
  pincode VARCHAR(6) NOT NULL,
  city VARCHAR(60) NOT NULL,
  state VARCHAR(60) NOT NULL,
  delivery_instructions TEXT,
  is_default BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Subscriptions Table
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  address_id UUID REFERENCES public.addresses(id),
  plan_tier VARCHAR(20) NOT NULL CHECK (plan_tier IN ('value', 'basic', 'premium')),
  premium_config VARCHAR(50) CHECK (premium_config IN ('two_packets', 'packet_with_mala', NULL)),
  monthly_price NUMERIC(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled')),
  start_date DATE NOT NULL DEFAULT CURRENT_DATE + INTERVAL '1 day',
  next_delivery_date DATE NOT NULL DEFAULT CURRENT_DATE + INTERVAL '1 day',
  delivery_slot VARCHAR(50) DEFAULT '5:30 AM - 7:30 AM',
  paused_until DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Orders / Transactions Table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_reference VARCHAR(50) UNIQUE NOT NULL,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES public.subscriptions(id) ON DELETE SET NULL,
  plan_tier VARCHAR(20) NOT NULL,
  premium_config VARCHAR(50),
  amount NUMERIC(10, 2) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'paid' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  payment_method VARCHAR(50) NOT NULL,
  delivery_start_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Serviceable PIN Codes Table
CREATE TABLE IF NOT EXISTS public.serviceable_pincodes (
  pincode VARCHAR(6) PRIMARY KEY,
  city VARCHAR(60) NOT NULL,
  state VARCHAR(60) NOT NULL,
  hub_name VARCHAR(120) NOT NULL,
  delivery_slot VARCHAR(50) DEFAULT '5:30 AM - 7:30 AM',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Waitlist Leads Table (for unserved pin codes)
CREATE TABLE IF NOT EXISTS public.waitlist_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone_or_email VARCHAR(180) NOT NULL,
  pincode VARCHAR(6) NOT NULL,
  city VARCHAR(60),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_addresses_profile_id ON public.addresses(profile_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_profile_id ON public.subscriptions(profile_id);
CREATE INDEX IF NOT EXISTS idx_orders_profile_id ON public.orders(profile_id);
CREATE INDEX IF NOT EXISTS idx_orders_reference ON public.orders(order_reference);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.serviceable_pincodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Public read access for serviceable pincodes
CREATE POLICY "Public read for serviceable pincodes"
  ON public.serviceable_pincodes FOR SELECT
  USING (is_active = true);

-- Public insert for waitlist
CREATE POLICY "Public insert for waitlist"
  ON public.waitlist_leads FOR INSERT
  WITH CHECK (true);
