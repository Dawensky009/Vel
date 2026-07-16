"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/actualites", label: "Actualités" },
  { href: "/agenda", label: "Agenda" },
  { href: "/editions", label: "Éditions" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const cls = `nav${scrolled ? " nav--scrolled" : ""}${open ? " nav--open" : ""}`;

  return (
    <header className={cls} id="site-nav">
      <div className="nav__inner container">
        <Link className="wordmark" href="/" aria-label="Vacances en livres, accueil">
          <img
            className="wordmark__img"
            src="/Logo_vel.jpeg"
            alt="Vacances en livres"
            width={1080}
            height={1044}
            decoding="async"
          />
        </Link>
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
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn--cta nav__cta" href="/#reserver">
          Réserver{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
