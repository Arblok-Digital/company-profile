import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/#about", label: t("nav.vision") },
    { to: "/#services", label: t("nav.services") },
    { to: "/#portfolio", label: t("nav.portfolio") },
    { to: "/articles", label: t("nav.articles"), exact: true },
    { to: "/consultant", label: "AI Consultant", exact: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-rule"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/#hero"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 no-underline group"
          >
            <div className="w-9 h-9 rounded overflow-hidden border border-rule flex-shrink-0">
              <img
                src="/arblok_logo.webp"
                alt="Logo Arblok Digital"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg leading-none text-ink tracking-tight">
                ARBLOK
              </span>
              <span className="font-mono text-[9px] text-accent tracking-[0.2em] uppercase">
                DIGITAL
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.exact
                ? currentPath === link.to
                : currentPath === "/" && link.to.startsWith("/#");
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm transition-colors ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <span className="text-rule">|</span>

            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="font-mono text-xs text-ink-2 hover:text-accent transition-colors uppercase tracking-wider cursor-pointer border-none bg-transparent"
            >
              {language === "id" ? "EN" : "ID"}
            </button>

            <a
              href="https://wa.me/6289508053795"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-4 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors"
                >
                  {t("nav.cta")}
                </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer border-none bg-transparent p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-px bg-ink transition-all ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t border-rule px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block font-body text-base text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-rule flex items-center gap-4">
            <button
              onClick={() => { setLanguage(language === "id" ? "en" : "id"); setIsOpen(false); }}
              className="font-mono text-xs text-ink-2 hover:text-accent transition-colors uppercase tracking-wider cursor-pointer border-none bg-transparent"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <a
              href="https://wa.me/6289508053795"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-4 py-2 rounded border border-accent text-accent"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
