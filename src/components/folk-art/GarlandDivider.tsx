import React from "react";

export const GarlandDivider: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center gap-1.5 py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="h-[2px] flex-1 bg-floro-border/30 max-w-xs" />
      <div className="flex items-center gap-2 px-3">
        {/* Flower 1 - Yellow Marigold */}
        <div className="w-5 h-5 rounded-full bg-floro-marigold border-2 border-floro-border shadow-[1px_1px_0_#241D20] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-floro-terracotta" />
        </div>
        {/* Leaf */}
        <div className="w-2.5 h-2.5 rotate-45 bg-floro-leaf border border-floro-border" />
        {/* Flower 2 - Orange / Red Marigold */}
        <div className="w-6 h-6 rounded-full bg-[#E86E25] border-2 border-floro-border shadow-[1px_1px_0_#241D20] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-floro-marigold" />
        </div>
        {/* Leaf */}
        <div className="w-2.5 h-2.5 rotate-45 bg-floro-leaf border border-floro-border" />
        {/* Central Lotus */}
        <div className="w-7 h-7 rounded-full bg-floro-accent-soft border-2 border-floro-border shadow-[2px_2px_0_#241D20] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-floro-accent" />
        </div>
        {/* Leaf */}
        <div className="w-2.5 h-2.5 rotate-45 bg-floro-leaf border border-floro-border" />
        {/* Flower 4 - Orange / Red Marigold */}
        <div className="w-6 h-6 rounded-full bg-[#E86E25] border-2 border-floro-border shadow-[1px_1px_0_#241D20] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-floro-marigold" />
        </div>
        {/* Leaf */}
        <div className="w-2.5 h-2.5 rotate-45 bg-floro-leaf border border-floro-border" />
        {/* Flower 5 - Yellow Marigold */}
        <div className="w-5 h-5 rounded-full bg-floro-marigold border-2 border-floro-border shadow-[1px_1px_0_#241D20] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-floro-terracotta" />
        </div>
      </div>
      <div className="h-[2px] flex-1 bg-floro-border/30 max-w-xs" />
    </div>
  );
};
