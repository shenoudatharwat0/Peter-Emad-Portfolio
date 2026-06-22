import { Smartphone, Layers, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface Skill {
  name: string;
  level: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Swift", level: "Expert" },
      { name: "Kotlin", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "Objective-C", level: "Proficient" },
      { name: "iOS SDK", level: "Advanced" },
      { name: "Android SDK", level: "Advanced" },
    ],
  },
  {
    title: "Cross-Platform",
    icon: Layers,
    skills: [
      { name: "Dart", level: "Proficient" },
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Advanced" },
      { name: "JavaScript / TypeScript", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: [
      { name: "RESTful APIs", level: "Expert" },
      { name: "Firebase", level: "Advanced" },
      { name: "MVVM Architecture", level: "Expert" },
    ],
  },
  {
    title: "Tools & Design",
    icon: Wrench,
    skills: [
      { name: "Xcode", level: "Expert" },
      { name: "Android Studio", level: "Expert" },
      { name: "Git", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "UI/UX Principles", level: "Advanced" },
      { name: "Figma", level: "Proficient" },
      { name: "Agile / Scrum", level: "Proficient" },
      { name: "Problem-solving", level: "Expert" },
    ],
  },
];

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon;

  return (
    <div className="bg-surface-100 border border-border-subtle rounded-lg-md p-6 transition-all duration-200 hover:border-primary-500/30 hover:scale-[1.02]">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <Icon size={24} strokeWidth={1.5} className="text-primary-400" />
        <h3 className="text-sm font-body font-semibold text-text-primary uppercase tracking-wider">
          {category.title}
        </h3>
      </div>

      {/* Skill List */}
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">{skill.name}</span>
            <span className="text-2xs font-mono font-semibold text-primary-400 bg-primary-500/10 rounded-full px-2 py-0.5">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" bg="subtle">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <span className="text-2xs font-mono font-semibold text-primary-400 uppercase tracking-wider">
            TECH STACK
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-text-primary">
            Skills &amp; Technologies
          </h2>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.1}>
          <p className="mt-4 text-lg text-text-secondary max-w-[600px]">
            Technologies I use to build production-ready mobile applications.
          </p>
        </FadeUp>

        {/* Skill Cards Grid */}
        <StaggerContainer
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          {SKILL_CATEGORIES.map((category) => (
            <StaggerItem key={category.title}>
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
