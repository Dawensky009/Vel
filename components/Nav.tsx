"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#evenement", id: "evenement", label: "L'événement" },
  { href: "#programme", id: "programme", label: "Programme" },
  { href: "#sponsors", id: "sponsors", label: "Sponsors" },
  { href: "#infos", id: "infos", label: "Infos" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Elevate the nav once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const cls = `nav${scrolled ? " nav--scrolled" : ""}${open ? " nav--open" : ""}`;

  return (
    <header className={cls} id="site-nav">
      <div className="nav__inner container">
        <a className="wordmark" href="#top" aria-label="Vacances en livres, accueil">
          V<em>el</em>
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true">☰</span> Menu
        </button>
        <nav className="nav__links" id="primary-nav" aria-label="Navigation principale">
          <ul>
            {LINKS.map(({ href, id, label }) => (
              <li key={id}>
                <a
                  href={href}
                  aria-current={activeId === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--cta nav__cta" href="#reserver">
          Réserver{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
