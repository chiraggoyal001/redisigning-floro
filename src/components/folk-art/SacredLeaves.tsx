import React from "react";

export const SacredLeaves: React.FC<{
  type?: "belpatra" | "tulsi" | "durva";
  size?: number;
  className?: string;
}> = ({ type = "belpatra", size = 32, className = "" }) => {
  if (type === "belpatra") {
    // Trifoliate Bilva Patra (Three sacred leaves of Shiva)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Central stem */}
        <path d="M24 24V44" stroke="#241D20" strokeWidth="2.5" strokeLinecap="round" />
        {/* Left leaf */}
        <path
          d="M24 24C16 23 8 18 10 9C19 9 23 18 24 24Z"
          fill="#758B32"
          stroke="#241D20"
          strokeWidth="2"
        />
        {/* Right leaf */}
        <path
          d="M24 24C32 23 40 18 38 9C29 9 25 18 24 24Z"
          fill="#758B32"
          stroke="#241D20"
          strokeWidth="2"
        />
        {/* Central top leaf */}
        <path
          d="M24 24C20 16 16 7 24 4C32 7 28 16 24 24Z"
          fill="#8CA33C"
          stroke="#241D20"
          strokeWidth="2"
        />
        {/* Leaf veins */}
        <path d="M24 20V8" stroke="#5E7026" strokeWidth="1.5" />
      </svg>
    );
  }

  // Durva / Tulsi
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 42V18" stroke="#241D20" strokeWidth="2" strokeLinecap="round" />
      {/* Blade 1 */}
      <path
        d="M24 32C18 30 14 22 18 14C23 18 24 26 24 32Z"
        fill="#758B32"
        stroke="#241D20"
        strokeWidth="1.5"
      />
      {/* Blade 2 */}
      <path
        d="M24 32C30 30 34 22 30 14C25 18 24 26 24 32Z"
        fill="#758B32"
        stroke="#241D20"
        strokeWidth="1.5"
      />
      {/* Blade 3 (center tip) */}
      <path
        d="M24 26C22 18 21 8 24 6C27 8 26 18 24 26Z"
        fill="#8CA33C"
        stroke="#241D20"
        strokeWidth="1.5"
      />
    </svg>
  );
};
