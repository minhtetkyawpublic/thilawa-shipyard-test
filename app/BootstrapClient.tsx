"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      if (link.matches(".dropdown-toggle,[data-bs-toggle='dropdown']")) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();

      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      window.history.pushState(null, "", hash);

      const toggle = document.querySelector<HTMLButtonElement>(".navbar-toggler[aria-expanded='true']");
      toggle?.click();
    };

    const scrollInitialHash = () => {
      if (!window.location.hash) return;
      const target = document.querySelector<HTMLElement>(window.location.hash);
      if (!target) return;
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    document.addEventListener("click", handleAnchorClick);
    window.setTimeout(scrollInitialHash, 120);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
