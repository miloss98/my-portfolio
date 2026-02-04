"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const ScrollHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return null;
};
