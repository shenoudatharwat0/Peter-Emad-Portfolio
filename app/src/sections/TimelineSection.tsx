import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { TechChip } from "@/components/TechChip";
import { FadeUp } from "@/components/motion/FadeUp";

interface TimelineEntry {
  date: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  side: "left" | "right";
}

const ENTRIES: TimelineEntry[] = [
  {
    date: "2024",
    title: "FitTrack Pro \u2014 Personal Fitness App",
    role: "iOS Developer \u00b7 Swift, SwiftUI, CoreData, HealthKit",
    description:
      "Developed and published a native iOS fitness tracking application to the Apple App Store. Integrated HealthKit for real-time biometric data sync and built an interactive SwiftUI dashboard for health visualization.",
    tags: ["SWIFT", "SWIFTUI", "COREDATA", "HEALTHKIT", "ASO"],
    side: "left",
  },
  {
    date: "2024",
    title: "TaskMaster \u2014 Collaborative Task Manager",
    role: "Android Developer \u00b7 Kotlin, Firebase, MVVM",
    description:
      "Built a production-ready Android productivity app using MVVM architecture. Implemented Firebase Auth and Cloud Firestore for real-time collaboration. Optimized battery usage with Kotlin Coroutines for background task management.",
    tags: ["KOTLIN", "FIREBASE", "MVVM", "COROUTINES"],
    side: "right",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function TimelineNode({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isLeft = entry.side === "left";

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: isLeft ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: EASE_OUT,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div
        className={`flex-1 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:text-right" : "md:text-left"
        }`}
      >
        <div className="bg-surface-100 border border-border-subtle rounded-lg-md p-6 transition-all duration-200 hover:border-l-2 hover:border-l-primary-500">
          {/* Date */}
          <span className="font-mono text-sm text-primary-400">
            {entry.date}
          </span>

          {/* Title */}
          <h3 className="mt-2 font-display text-lg font-semibold text-text-primary">
            {entry.title}
          </h3>

          {/* Role */}
          <p className="mt-1 text-sm text-text-secondary">{entry.role}</p>

          {/* Description */}
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            {entry.description}
          </p>

          {/* Tags */}
          <div
            className={`mt-4 flex flex-wrap gap-2 ${
              isLeft ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {entry.tags.map((tag) => (
              <TechChip key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Center Dot (desktop) */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-500/30" />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <Section id="experience" bg="subtle">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <span className="text-2xs font-mono font-semibold text-primary-400 uppercase tracking-wider">
            EXPERIENCE
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-text-primary">
            Development Milestones
          </h2>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.1}>
          <p className="mt-4 text-lg text-text-secondary">
            Key projects that shaped my development journey.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="mt-12 md:mt-16 relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-strong -translate-x-1/2" />

          {/* Vertical Line (mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-border-strong" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {ENTRIES.map((entry, index) => (
              <TimelineNode key={entry.title} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
