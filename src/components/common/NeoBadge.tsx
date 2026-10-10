import React from "react";

export interface NeoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "marigold" | "success" | "warning" | "terracotta" | "indigo";
  size?: "sm" | "md";
}

export const NeoBadge: React.FC<NeoBadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const variantStyles = {
    default: "bg-floro-surface text-floro-primary",
    accent: "bg-floro-accent-soft text-floro-accent font-bold",
    marigold: "bg-[#FFF6DF] text-[#8A5200] font-bold",
    success: "bg-floro-success-soft text-floro-success font-bold",
    warning: "bg-floro-warning-soft text-floro-warning font-bold",
    terracotta: "bg-[#FBEBE8] text-floro-terracotta font-bold",
    indigo: "bg-floro-info-soft text-floro-indigo font-bold",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border-2 border-floro-border rounded-full font-mono uppercase tracking-wider select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
