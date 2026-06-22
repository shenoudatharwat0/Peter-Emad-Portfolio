import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-wide mx-auto px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
