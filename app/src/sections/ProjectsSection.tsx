import { ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { TechChip } from "@/components/TechChip";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "FitTrack Pro",
    description:
      "A personal fitness application for iOS that allows users to track daily workouts, log nutrition, and monitor overall health metrics. Integrated Apple HealthKit for real-time data sync and CoreData for reliable offline storage. Built a responsive SwiftUI dashboard for visualizing weekly progress. Published to the Apple App Store with full provisioning and ASO handling.",
    tech: ["SWIFT", "HEALTHKIT", "SWIFTUI", "COREDATA"],
    image: "./assets/fittrack-pro.jpg",
  },
  {
    title: "TaskMaster",
    description:
      "A collaborative task manager for Android built with MVVM architecture for clean, testable, and maintainable code. Features Firebase Authentication for secure logins and Cloud Firestore for real-time data sync across devices. Optimized battery usage with Kotlin Coroutines for background task management.",
    tech: ["KOTLIN", "FIREBASE", "MVVM", "COROUTINES"],
    image: "./assets/taskmaster.jpg",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface-100 border border-border-subtle rounded-xl-md overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg-card hover:border-border-default">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-4">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:underline transition-colors"
            >
              Live
              <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:underline transition-colors"
            >
              Source
              <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          )}
          {!project.liveUrl && !project.sourceUrl && (
            <span className="inline-flex items-center gap-1.5 text-sm text-primary-400">
              Case study &rarr;
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <span className="text-2xs font-mono font-semibold text-primary-400 uppercase tracking-wider">
            FEATURED WORK
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-text-primary">
            Selected Projects
          </h2>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.1}>
          <p className="mt-4 text-lg text-text-secondary max-w-[600px]">
            Real applications built with modern technologies and shipped to
            production.
          </p>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer
          className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          staggerDelay={0.12}
        >
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title} y={30}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
