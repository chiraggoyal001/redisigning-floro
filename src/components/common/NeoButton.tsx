import React from "react";

export interface NeoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-control select-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-floro-info focus-visible:ring-offset-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-floro-accent text-white border-2 border-floro-border shadow-neo hover:shadow-neo-hover hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-floro-accent-hover",
      secondary:
        "bg-floro-surface text-floro-primary border-2 border-floro-border shadow-neo hover:shadow-neo-hover hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-floro-surface-soft",
      outline:
        "bg-transparent text-floro-primary border-2 border-floro-border hover:bg-floro-surface-muted",
      ghost:
        "bg-transparent text-floro-primary hover:bg-floro-surface-soft hover:text-floro-accent",
      destructive:
        "bg-floro-error text-white border-2 border-floro-border shadow-neo hover:shadow-neo-hover hover:translate-x-[-2px] hover:translate-y-[-2px]",
      gold:
        "bg-floro-marigold text-floro-primary border-2 border-floro-border shadow-neo hover:shadow-neo-hover hover:translate-x-[-2px] hover:translate-y-[-2px]",
    };

    const sizeStyles = {
      sm: "h-10 px-4 text-xs font-semibold gap-1.5",
      md: "h-12 px-6 text-sm font-bold gap-2",
      lg: "h-14 px-8 text-base font-bold gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

NeoButton.displayName = "NeoButton";
