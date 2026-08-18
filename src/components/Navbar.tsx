import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
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

  const navLabels = {
    home: language === "id" ? "Beranda" : "Home",
    process: language === "id" ? "Cara Kerja" : "How We Work",
    services: language === "id" ? "Solusi" : "Solutions",
    portfolio: language === "id" ? "Portofolio" : "Portfolio",
    articles: language === "id" ? "Artikel" : "Articles",
    referral: language === "id" ? "Referral" : "Referral",
    cta: language === "id" ? "Ceritakan Masalah" : "Tell Us Your Problem",
  };

  const navLinks = [
    { to: "/", label: navLabels.home, exact: true },
    { to: "/#about", label: navLabels.process },
    { to: "/#services", label: navLabels.services },
    { to: "/#portfolio", label: navLabels.portfolio },
    { to: "/articles", label: navLabels.articles, exact: true },
    { to: "/consultant", label: language === "id" ? "Konsultan Digital" : "Digital Consultant", exact: true },
    { to: "/referral", label: navLabels.referral, exact: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-rule"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="accent-line w-full" />
      <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
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
                className="w-full h-full object-cover logo-enter"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-body text-base font-semibold leading-none text-ink tracking-[-0.02em]">
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
                ? currentPath === link.to && location.hash === ""
                : currentPath === "/" && location.hash === link.to.substring(1);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm transition-colors border-b-2 pb-0.5 ${
                    isActive
                      ? "text-accent font-medium border-accent"
                      : "text-ink-2 hover:text-ink border-transparent"
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
              aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              {language === "id" ? "ID" : "EN"}
            </button>

            <a
              href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20kerja%20yang%20perlu%20dirapikan%20dengan%20sistem%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient min-h-11 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold"
            >
              {navLabels.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer border-none bg-transparent p-2"
            aria-label={language === "id" ? "Buka atau tutup menu" : "Open or close menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-px bg-ink transition-all ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden bg-paper border-t border-rule px-6 py-6 space-y-4">
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
              aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              {language === "id" ? "ID" : "EN"}
            </button>
            <a
              href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20kerja%20yang%20perlu%20dirapikan%20dengan%20sistem%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex min-h-11 items-center rounded-lg px-4 py-2 text-sm font-semibold"
            >
              {navLabels.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
