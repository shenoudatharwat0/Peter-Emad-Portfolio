import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
  once?: boolean;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  y = 24,
  once = true,
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
