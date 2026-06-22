import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const scrolled = useScrolled(100);
  const activeSection = useActiveSection();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  // Focus trap
  useEffect(() => {
    if (!drawerOpen || !drawerRef.current) return;
    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    focusable[0]?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [drawerOpen]);

  // Restore focus on close
  useEffect(() => {
    if (!drawerOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [drawerOpen]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleLinkClick = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className="sticky top-0 z-sticky border-b transition-colors duration-250"
        style={{
          backgroundColor: scrolled
            ? "rgba(10, 10, 15, 0.95)"
            : "rgba(10, 10, 15, 0.7)",
          borderColor: scrolled ? "#1F1F2E" : "transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 1px 2px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <Container className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-lg font-semibold text-text-primary hover:text-primary-400 transition-colors duration-150"
          >
            Peter Emad
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-150 ${
                  activeSection === link.href.slice(1)
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-500 hover:bg-primary-400 rounded-sm-md transition-all duration-150 hover:-translate-y-px hover:shadow-sm-card"
            >
              Get in touch
            </a>

            <button
              ref={triggerRef}
              onClick={() => setDrawerOpen(true)}
              className="md:hidden flex items-center justify-center w-11 h-11 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="fixed inset-0 z-modal-backdrop bg-bg-base/80"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="fixed top-0 right-0 bottom-0 z-modal w-[280px] bg-surface-100 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border-subtle">
                <span className="font-display text-lg font-semibold text-text-primary">
                  Menu
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-11 h-11 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-2 p-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: EASE_OUT,
                    }}
                    className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "text-text-primary bg-primary-500/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-200"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: NAV_LINKS.length * 0.05,
                    ease: EASE_OUT,
                  }}
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-primary-500 hover:bg-primary-400 rounded-sm-md transition-colors"
                >
                  Get in touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
