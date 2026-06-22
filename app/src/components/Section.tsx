import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "base" | "subtle";
}

export function Section({ children, id, className, bg = "base" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        bg === "subtle" ? "bg-bg-subtle" : "bg-bg-base",
        className
      )}
    >
      {children}
    </section>
  );
}
