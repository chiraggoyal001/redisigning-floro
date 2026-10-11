import React from "react";
import { Sun, CalendarCheck, Scale, Leaf } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: <Sun className="w-6 h-6 text-[#E86E25]" />,
      title: "Before Your Morning Puja",
      desc: "Delivered quietly to your door between 5:30 AM and 7:30 AM every day.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-floro-accent" />,
      title: "Sundays & Festivals Included",
      desc: "Worship never pauses, and neither do our daily deliveries — 365 days a year.",
    },
    {
      icon: <Scale className="w-6 h-6 text-floro-indigo" />,
      title: "Honest Daily Packet Weights",
      desc: "Weights describe your daily packet, not a monthly total. Weighed fresh every dawn.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-floro-leaf" />,
      title: "Transparent Seasonality",
      desc: "Clear notice on seasonal blooms. Pure, respectful substitutes when weather dictates.",
    },
  ];

  return (
    <section className="w-full bg-floro-surface border-b-2 border-floro-border py-8 sm:py-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-card border-2 border-floro-border bg-floro-surface shadow-[2px_2px_0_#241D20] hover:shadow-neo-hover transition-all flex flex-col gap-2"
            >
              <div className="p-2 w-fit rounded-control bg-floro-surface border-2 border-floro-border shadow-[1px_1px_0_#241D20]">
                {item.icon}
              </div>
              <h3 className="font-bold text-base font-display text-floro-primary">
                {item.title}
              </h3>
              <p className="text-sm text-floro-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
