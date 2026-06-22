import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <span className="text-2xs font-mono font-semibold text-primary-400 uppercase tracking-wider">
            ABOUT ME
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-text-primary">
            Building apps that ship.
          </h2>
        </FadeUp>

        {/* Content Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
          {/* Left - Text Content */}
          <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.08}>
            <StaggerItem>
              <p className="text-base text-text-secondary leading-relaxed max-w-[68ch]">
                I&apos;m Peter Emad, a mobile developer based in Dayrot Assuit,
                Egypt. I specialize in native iOS and Android development, with
                cross-platform expertise in React Native and Flutter.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base text-text-secondary leading-relaxed max-w-[68ch]">
                I care about clean architecture, smooth UX, and shipping things
                that don&apos;t break. From concept to app store launch, I build
                mobile experiences that users trust enough to keep on their home
                screen.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base text-text-secondary leading-relaxed max-w-[68ch]">
                Currently pursuing my B.Sc. in Computers and Information at
                Assuit University (2024&ndash;2028), I&apos;m actively building
                real-world projects alongside my studies.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Right - Bio Card */}
          <FadeUp delay={0.2}>
            <div className="bg-surface-100 border border-border-subtle rounded-lg-md p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-tertiary mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-sm text-text-secondary">
                    Dayrot Assuit, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-tertiary mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-sm text-text-secondary">
                    B.Sc. Computers &amp; Information, Assuit University
                  </p>
                  <p className="text-xs text-text-tertiary mt-1">
                    2024 &mdash; 2028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-tertiary mt-0.5 shrink-0"
                />
                <a
                  href="mailto:peteremad897@gmail.com"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  peteremad897@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-tertiary mt-0.5 shrink-0"
                />
                <a
                  href="tel:+201208789344"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  +20 12 08789344
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
