import React from "react";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  isRequired?: boolean;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      error,
      leftAddon,
      rightAddon,
      isRequired = false,
      id,
      className = "",
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label
          htmlFor={inputId}
          className="text-sm font-bold text-floro-primary flex items-center justify-between"
        >
          <span>
            {label} {isRequired && <span className="text-floro-accent">*</span>}
          </span>
        </label>

        <div className="relative flex items-center">
          {leftAddon && (
            <div className="absolute left-3.5 z-10 flex items-center pointer-events-none text-floro-muted">
              {leftAddon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`w-full h-12 rounded-control bg-floro-surface text-floro-primary font-medium border-2 transition-all duration-150 placeholder:text-floro-muted/60 focus:outline-none focus:ring-3 focus:ring-floro-info focus:ring-offset-1 disabled:bg-floro-surface-muted disabled:cursor-not-allowed ${
              leftAddon ? "pl-11" : "pl-4"
            } ${rightAddon ? "pr-11" : "pr-4"} ${
              error
                ? "border-floro-error bg-floro-error-soft/20 text-floro-error"
                : "border-floro-border hover:border-floro-border/80 focus:border-floro-border"
            } ${className}`}
            {...props}
          />

          {rightAddon && (
            <div className="absolute right-3.5 z-10 flex items-center">
              {rightAddon}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-xs font-semibold text-floro-error flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="text-xs text-floro-muted">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
