import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps = 5,
}) => {
  const steps = [
    { num: 1, label: "Details" },
    { num: 2, label: "OTP" },
    { num: 3, label: "Address" },
    { num: 4, label: "Review" },
    { num: 5, label: "Payment" },
  ];

  return (
    <div className="w-full py-4 border-b-2 border-floro-border bg-floro-surface">
      <div className="max-w-reading mx-auto px-4 flex items-center justify-between">
        {steps.map((st, idx) => {
          const isCompleted = st.num < currentStep;
          const isCurrent = st.num === currentStep;

          return (
            <React.Fragment key={st.num}>
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-floro-border flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isCompleted
                      ? "bg-floro-success text-white shadow-[1px_1px_0_#241D20]"
                      : isCurrent
                      ? "bg-floro-accent text-white shadow-neo scale-105"
                      : "bg-floro-canvas text-floro-muted border-floro-border/40"
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : st.num}
                </div>
                <span
                  className={`text-[11px] font-bold ${
                    isCurrent
                      ? "text-floro-primary"
                      : isCompleted
                      ? "text-floro-success"
                      : "text-floro-muted hidden sm:inline"
                  }`}
                >
                  {st.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 border-t-2 border-dashed ${
                    st.num < currentStep
                      ? "border-floro-success"
                      : "border-floro-border/30"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
