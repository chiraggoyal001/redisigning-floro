import { NextRequest, NextResponse } from "next/server";
import { SERVICEABLE_PINCODES } from "@/lib/constants";
import { DataService } from "@/lib/storage";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pincode = searchParams.get("pincode");

  if (!pincode || !/^\d{6}$/.test(pincode.trim())) {
    return NextResponse.json(
      { error: "Invalid PIN code. Please enter a valid 6-digit Indian PIN code." },
      { status: 400 }
    );
  }

  const cleanPin = pincode.trim();
  const found = SERVICEABLE_PINCODES.find((p) => p.pincode === cleanPin && p.isActive);

  if (found) {
    return NextResponse.json({
      serviceable: true,
      message: `Delivery is active at ${cleanPin}!`,
      pincode: found.pincode,
      city: found.city,
      state: found.state,
      hubName: found.hubName,
      deliverySlot: found.deliverySlot,
    });
  }

  return NextResponse.json({
    serviceable: false,
    message: `We're not delivering to ${cleanPin} just yet, but expanding rapidly.`,
    pincode: cleanPin,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact, pincode } = body;

    if (!contact || !pincode || !/^\d{6}$/.test(pincode.trim())) {
      return NextResponse.json(
        { error: "Valid contact and 6-digit PIN code required." },
        { status: 400 }
      );
    }

    await DataService.saveWaitlist(contact.trim(), pincode.trim());

    return NextResponse.json({
      success: true,
      message: `Thank you! We've noted your location (${pincode}). We'll notify you as soon as morning delivery launches in your area.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
