import React from "react";

export const TempleArch: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 40 }) => {
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
      {/* Temple Mandir Shikhara Arch */}
      <path
        d="M6 44V24C6 24 14 24 16 16C18 8 24 4 24 4C24 4 30 8 32 16C34 24 42 24 42 24V44H6Z"
        fill="#FFF9F1"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Inner Arch Sanctum */}
      <path
        d="M14 44V28C14 28 18 28 20 22C21 19 24 16 24 16C24 16 27 19 28 22C30 28 34 28 34 28V44H14Z"
        fill="#FFE4EE"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Kalash on Shikhara Top */}
      <circle cx="24" cy="5" r="2.5" fill="#F2B72F" stroke="#241D20" strokeWidth="1.5" />
    </svg>
  );
};
