import { useState, useEffect } from "react";

export function useScrolled(threshold: number = 100): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY) {
          setScrolled(currentScrollY > threshold);
          lastScrollY = currentScrollY;
        }
        rafId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
}
