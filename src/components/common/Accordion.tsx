"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border-2 border-floro-border rounded-card bg-floro-surface overflow-hidden transition-all duration-150 shadow-[2px_2px_0_#241D20]"
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full min-h-[52px] px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-floro-primary hover:bg-floro-surface-soft transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-floro-info"
              >
                <span className="text-base sm:text-lg font-display">{item.question}</span>
                <span
                  className={`p-1 border border-floro-border rounded-md bg-floro-canvas transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 bg-floro-accent-soft" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-floro-primary" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-5 pt-1 text-sm sm:text-base text-floro-secondary border-t-2 border-floro-border/20 bg-floro-canvas/30 leading-relaxed"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
