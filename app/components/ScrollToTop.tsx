"use client";

import { useEffect, useState } from "react";
import { ArrowBigUpDash } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full bg-[#003f36] text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-[#006455] hover:scale-105 active:scale-95 cursor-pointer h-12 min-w-12 px-3 hover:px-5 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-30 group-hover:opacity-100 group-hover:mr-2 whitespace-nowrap">
        Back to top
      </span>
      <ArrowBigUpDash className="w-6 h-6 stroke-[2px] shrink-0" />
    </button>
  );
};
