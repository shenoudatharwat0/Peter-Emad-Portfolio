import { useState, useEffect } from "react";

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            // Update URL hash without jumping
            if (window.history.replaceState) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
