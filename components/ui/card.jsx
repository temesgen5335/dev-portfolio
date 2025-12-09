// components/ui/card.tsx
import * as React from "react";
import { cn } from "@/lib/utils/utils";

// export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode;
// }

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        // Base card styling using your space theme tokens
        "rounded-lg border border-space-blue bg-space-dark/40 p-6",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-nebula-pink/80 hover:shadow-glow-pink",

        // Allows custom overrides when used
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
