import { useState, useCallback, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Send, Check, Loader2 } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitState = "idle" | "loading" | "success";

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Please describe your project (min 20 characters)";
  }
  return errors;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = useCallback(
    (field: keyof FormData, value: string) => {
      const newData = { ...formData, [field]: value };
      setFormData(newData);

      if (touched[field] && field !== "projectType") {
        const newErrors = validateForm(newData);
        setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
      }
    },
    [formData, touched]
  );

  const handleBlur = useCallback(
    (field: keyof FormData) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (field !== "projectType") {
        const newErrors = validateForm(formData);
        setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
      }
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      // Mark all fields as touched
      setTouched({ name: true, email: true, message: true });

      const validationErrors = validateForm(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      // Simulate sending
      setSubmitState("loading");
      setTimeout(() => {
        setSubmitState("success");
        setTimeout(() => {
          setSubmitState("idle");
          setFormData({ name: "", email: "", projectType: "", message: "" });
          setTouched({});
          setErrors({});
        }, 2000);
      }, 1500);
    },
    [formData]
  );

  const inputClasses =
    "w-full h-12 bg-surface-100 border border-border-default rounded-sm-md px-4 text-base text-text-primary placeholder:text-text-tertiary transition-colors duration-150 focus:border-primary-500 focus:outline-none";

  const textareaClasses =
    "w-full min-h-[120px] bg-surface-100 border border-border-default rounded-sm-md px-4 py-3 text-base text-text-primary placeholder:text-text-tertiary transition-colors duration-150 resize-y focus:border-primary-500 focus:outline-none";

  return (
    <Section id="contact">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <span className="text-2xs font-mono font-semibold text-primary-400 uppercase tracking-wider">
            GET IN TOUCH
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.05}>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-text-primary">
            Let&apos;s build something.
          </h2>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.1}>
          <p className="mt-4 text-lg text-text-secondary">
            Have an app idea or need a mobile developer? I reply within 24
            hours.
          </p>
        </FadeUp>

        {/* Two Column Layout */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <StaggerContainer className="space-y-6" staggerDelay={0.08}>
            <StaggerItem>
              <a
                href="mailto:peteremad897@gmail.com"
                className="flex items-center gap-4 group"
              >
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-400 shrink-0"
                />
                <span className="text-base text-text-primary group-hover:underline transition-all">
                  peteremad897@gmail.com
                </span>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="tel:+201208789344"
                className="flex items-center gap-4"
              >
                <Phone
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-400 shrink-0"
                />
                <span className="text-base text-text-secondary">
                  +20 12 08789344
                </span>
              </a>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-400 shrink-0"
                />
                <span className="text-base text-text-secondary">
                  Dayrot Assuit, Egypt
                </span>
              </div>
            </StaggerItem>

            {/* Social Icons */}
            <StaggerItem>
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://github.com/peteremad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-surface-100 border border-border-default rounded-sm-md text-text-secondary hover:text-text-primary hover:bg-surface-200 transition-all duration-150"
                  aria-label="GitHub"
                >
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/in/peteremad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-surface-100 border border-border-default rounded-sm-md text-text-secondary hover:text-text-primary hover:bg-surface-200 transition-all duration-150"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </StaggerItem>

            {/* Book a call */}
            <StaggerItem>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-medium text-text-primary bg-surface-100 border border-border-default hover:border-border-strong hover:bg-surface-200 rounded-sm-md transition-all duration-150"
              >
                <Calendar size={16} strokeWidth={1.5} />
                Book a 15-min intro call
              </a>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column - Form */}
          <FadeUp delay={0.2}>
            {submitState === "success" ? (
              <div className="bg-surface-100 border border-success/30 rounded-lg-md p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <Check size={28} strokeWidth={2} className="text-success" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Your name"
                    className={inputClasses}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="your@email.com"
                    className={inputClasses}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      handleChange("projectType", e.target.value)
                    }
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="ios">iOS App</option>
                    <option value="android">Android App</option>
                    <option value="cross-platform">Cross-platform</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Describe your project, timeline, and goals..."
                    rows={5}
                    className={textareaClasses}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && touched.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs text-error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-medium text-white bg-primary-500 hover:bg-primary-400 disabled:opacity-70 disabled:cursor-not-allowed rounded-sm-md transition-all duration-150 hover:-translate-y-px hover:shadow-md-card"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2
                        size={18}
                        strokeWidth={1.5}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} strokeWidth={1.5} />
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-xs text-text-muted pt-1">
                  Your information stays private. No newsletters, no spam.
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
