import React from "react";

export const LotusIcon: React.FC<{
  className?: string;
  size?: number;
  petalColor?: string;
  centerColor?: string;
}> = ({
  className = "",
  size = 32,
  petalColor = "#E9005B",
  centerColor = "#F2B72F",
}) => {
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
      {/* Outer base leaves */}
      <path
        d="M8 36C14 36 20 32 24 38C28 32 34 36 40 36C36 41 28 42 24 42C20 42 12 41 8 36Z"
        fill="#758B32"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Left side petal */}
      <path
        d="M24 34C18 30 11 24 9 17C14 17 20 22 24 34Z"
        fill={petalColor}
        fillOpacity="0.85"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Right side petal */}
      <path
        d="M24 34C30 30 37 24 39 17C34 17 28 22 24 34Z"
        fill={petalColor}
        fillOpacity="0.85"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Intermediate left petal */}
      <path
        d="M24 34C20 27 15 17 17 11C23 13 24 23 24 34Z"
        fill={petalColor}
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Intermediate right petal */}
      <path
        d="M24 34C28 27 33 17 31 11C25 13 24 23 24 34Z"
        fill={petalColor}
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Center central petal */}
      <path
        d="M24 34C21 24 20 12 24 6C28 12 27 24 24 34Z"
        fill={petalColor}
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Lotus Pollen Core */}
      <circle
        cx="24"
        cy="26"
        r="3"
        fill={centerColor}
        stroke="#241D20"
        strokeWidth="1.5"
      />
    </svg>
  );
};
