import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Container } from "@/components/Container";
import { StatusPill } from "@/components/StatusPill";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

function createItemVariants(shouldReduceMotion: boolean | null) {
  return {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT },
    },
  };
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.3, ease: EASE_OUT },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/peteremad", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/peteremad", label: "LinkedIn" },
  { icon: Mail, href: "mailto:peteremad897@gmail.com", label: "Email" },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = createItemVariants(shouldReduceMotion);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:min-h-[90vh] flex items-center noise-overlay hero-gradient"
    >
      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants}>
              <StatusPill />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 font-display text-display-lg md:text-display-xl lg:text-display-xl font-bold text-text-primary leading-tight"
            >
              Peter Emad
            </motion.h1>

            {/* Subheadline with gradient */}
            <motion.p
              variants={itemVariants}
              className="mt-3 font-display text-display-sm md:text-display-md font-semibold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
            >
              Mobile Developer
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-lg text-text-secondary max-w-[540px] leading-relaxed"
            >
              Results-driven Mobile Developer with a proven track record of
              designing, developing, and deploying high-performance native
              (iOS/Android) and cross-platform applications.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3.5 text-[15px] font-medium text-white bg-primary-500 hover:bg-primary-400 rounded-sm-md transition-all duration-150 hover:-translate-y-px hover:shadow-md-card"
              >
                View my work
              </a>
              <a
                href="./assets/PETER_EMAD_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-text-primary bg-surface-100 border border-border-default hover:border-border-strong hover:bg-surface-200 rounded-sm-md transition-all duration-150 hover:-translate-y-0.5"
              >
                <Download size={16} strokeWidth={1.5} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.4 },
                },
              }}
              className="mt-8 flex items-center gap-5"
            >
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  className="text-text-secondary hover:text-text-primary hover:-translate-y-0.5 transition-all duration-150"
                  aria-label={link.label}
                >
                  <link.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image (desktop only) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              <img
                src="./assets/hero-illustration.jpg"
                alt="Mobile development illustration"
                className="w-full h-auto rounded-xl-md object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
