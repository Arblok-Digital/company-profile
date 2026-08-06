import { useState, useEffect } from "react";

export function useInView<T extends HTMLElement>(ref: React.RefObject<T | null>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}
