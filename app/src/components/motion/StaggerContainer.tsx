import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  y = 24,
  duration = 0.5,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: EASE_OUT,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
