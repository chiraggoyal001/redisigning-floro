import React from "react";

export interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "soft" | "accent-soft" | "canvas";
  hasShadow?: boolean;
  isHoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  rounded?: "card" | "largeCard";
}

export const NeoCard: React.FC<NeoCardProps> = ({
  children,
  variant = "white",
  hasShadow = true,
  isHoverable = true,
  padding = "md",
  rounded = "card",
  className = "",
  ...props
}) => {
  const variantStyles = {
    white: "bg-floro-surface",
    soft: "bg-floro-surface-soft",
    "accent-soft": "bg-floro-accent-soft",
    canvas: "bg-floro-canvas",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const roundedStyles = {
    card: "rounded-card",
    largeCard: "rounded-largeCard",
  };

  const shadowStyles = hasShadow ? "shadow-neo" : "";
  const hoverStyles = isHoverable
    ? "neo-card-reveal hover:shadow-neo-hover"
    : "";

  return (
    <div
      className={`border-2 border-floro-border ${variantStyles[variant]} ${roundedStyles[rounded]} ${paddingStyles[padding]} ${shadowStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
