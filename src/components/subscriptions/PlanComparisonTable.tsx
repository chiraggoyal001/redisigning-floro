import React from "react";
import { Check, Minus } from "lucide-react";

export const PlanComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: "Monthly Price",
      value: "₹450 / month",
      basic: "₹600 / month",
      premium: "₹900 / month",
      isHighlight: true,
    },
    {
      feature: "Daily Fresh Packet Weight",
      value: "~50 g daily",
      basic: "~100 g daily",
      premium: "2x 100 g OR 100 g + Mala",
      isHighlight: true,
    },
    {
      feature: "Delivery Schedule",
      value: "Daily by 7:30 AM (365 days)",
      basic: "Daily by 7:30 AM (365 days)",
      premium: "Priority Daily by 7:30 AM (365 days)",
    },
    {
      feature: "Sundays & Public Holidays",
      value: "Included",
      basic: "Included",
      premium: "Included",
    },
    {
      feature: "Fresh Marigolds (Genda)",
      value: "Petals & Heads",
      basic: "Generous heads & petals",
      premium: "Abundant selection",
    },
    {
      feature: "Red Hibiscus (Gudhal)",
      value: "Included",
      basic: "Included",
      premium: "Included (Double)",
    },
    {
      feature: "Aparajita (Butterfly Pea)",
      value: "Seasonal inclusion",
      basic: "Included daily",
      premium: "Included daily",
    },
    {
      feature: "Jasmine / Fragrant Blooms",
      value: "Included",
      basic: "Included",
      premium: "Included",
    },
    {
      feature: "Sacred Tulsi & Durva Grass",
      value: "Included",
      basic: "Included",
      premium: "Included",
    },
    {
      feature: "Fresh Belpatra Every Monday",
      value: false,
      basic: true,
      premium: true,
      note: "Special Bilva patra offering for Lord Shiva",
    },
    {
      feature: "Hand-strung Marigold Mala (Garland)",
      value: false,
      basic: false,
      premium: "Optional Setup",
      note: "Choice between double flowers or daily fresh mala",
    },
    {
      feature: "Vacation Pause (Hold Deliveries)",
      value: "Yes (24 hr notice)",
      basic: "Yes (24 hr notice)",
      premium: "Yes (24 hr notice)",
    },
  ];

  return (
    <div className="w-full overflow-x-auto border-2 border-floro-border rounded-largeCard bg-floro-surface shadow-neo">
      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b-2 border-floro-border bg-floro-canvas">
            <th className="p-4 sm:p-5 text-sm sm:text-base font-bold font-display text-floro-primary w-1/4">
              Feature & Offerings
            </th>
            <th className="p-4 sm:p-5 text-sm sm:text-base font-bold font-display text-floro-primary w-1/4">
              Value Plan
              <span className="block text-xs sm:text-sm font-mono font-medium text-floro-muted">₹450/mo</span>
            </th>
            <th className="p-4 sm:p-5 text-sm sm:text-base font-bold font-display text-floro-accent w-1/4 bg-floro-accent-soft/40">
              Basic Plan (Recommended)
              <span className="block text-xs sm:text-sm font-mono font-bold text-floro-primary">₹600/mo</span>
            </th>
            <th className="p-4 sm:p-5 text-sm sm:text-base font-bold font-display text-floro-primary w-1/4">
              Premium Plan
              <span className="block text-xs sm:text-sm font-mono font-medium text-floro-muted">₹900/mo</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-floro-border/20 text-sm">
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`hover:bg-floro-surface-soft/60 transition-colors ${
                row.isHighlight ? "bg-floro-canvas/40 font-bold" : ""
              }`}
            >
              <td className="p-4 font-bold text-floro-primary">
                {row.feature}
                {row.note && (
                  <span className="block text-xs font-medium text-floro-muted mt-0.5">
                    {row.note}
                  </span>
                )}
              </td>

              {/* Value Plan Col */}
              <td className="p-4 text-floro-secondary">
                {typeof row.value === "boolean" ? (
                  row.value ? (
                    <Check className="w-5 h-5 text-floro-success" />
                  ) : (
                    <Minus className="w-5 h-5 text-floro-muted" />
                  )
                ) : (
                  <span>{row.value}</span>
                )}
              </td>

              {/* Basic Plan Col */}
              <td className="p-4 text-floro-primary bg-floro-accent-soft/20 font-semibold">
                {typeof row.basic === "boolean" ? (
                  row.basic ? (
                    <Check className="w-5 h-5 text-floro-success" />
                  ) : (
                    <Minus className="w-5 h-5 text-floro-muted" />
                  )
                ) : (
                  <span>{row.basic}</span>
                )}
              </td>

              {/* Premium Plan Col */}
              <td className="p-4 text-floro-secondary">
                {typeof row.premium === "boolean" ? (
                  row.premium ? (
                    <Check className="w-5 h-5 text-floro-success" />
                  ) : (
                    <Minus className="w-5 h-5 text-floro-muted" />
                  )
                ) : (
                  <span className="font-bold text-floro-terracotta">{row.premium}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
