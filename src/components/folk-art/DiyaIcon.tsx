import React from "react";

export const DiyaIcon: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 32 }) => {
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
      {/* Brass Lamp Base */}
      <path
        d="M10 26C10 35 16 41 24 41C32 41 38 35 38 26C38 24 35 24 31 25C26 26.5 22 26.5 17 25C13 24 10 24 10 26Z"
        fill="#B84E36"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Diya Pedestal */}
      <path
        d="M19 41H29V44H19V41Z"
        fill="#B84E36"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Oil surface */}
      <ellipse
        cx="24"
        cy="26"
        rx="13"
        ry="3"
        fill="#F2B72F"
        stroke="#241D20"
        strokeWidth="1.5"
      />
      {/* Sacred Flame (Jyoti) */}
      <path
        d="M24 6C24 6 18 13 18 18C18 21.3 20.7 24 24 24C27.3 24 30 21.3 30 18C30 13 24 6 24 6Z"
        fill="#E9005B"
        stroke="#241D20"
        strokeWidth="2"
      />
      {/* Inner Golden Flame */}
      <path
        d="M24 12C24 12 21 16 21 19C21 20.7 22.3 22 24 22C25.7 22 27 20.7 27 19C27 16 24 12 24 12Z"
        fill="#F2B72F"
      />
    </svg>
  );
};
