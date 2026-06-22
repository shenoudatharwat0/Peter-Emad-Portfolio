import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "./Container";

const SITEMAP_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/peteremad",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/peteremad",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="bg-bg-subtle pt-16 md:pt-24 pb-8">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-display-sm font-semibold text-text-primary">
              Peter Emad
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Mobile Developer &middot; Assuit, Egypt
            </p>
          </div>

          {/* Sitemap Column */}
          <div>
            <h4 className="text-2xs font-mono font-semibold text-text-tertiary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {SITEMAP_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-2xs font-mono font-semibold text-text-tertiary uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    <link.icon size={18} strokeWidth={1.5} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-2xs font-mono font-semibold text-text-tertiary uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:peteremad897@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  peteremad897@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201208789344"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  +20 12 08789344
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin size={16} strokeWidth={1.5} />
                  Dayrot Assuit, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Peter Emad. Built with care.
          </p>
          <a
            href="#"
            className="text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
}
