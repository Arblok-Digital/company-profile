import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper-2 border-t border-rule py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/#hero" className="flex items-center gap-2.5 no-underline mb-3">
              <div className="w-8 h-8 rounded overflow-hidden border border-rule">
                <img
                  src="/arblok_logo.webp"
                  alt="Logo Arblok Digital"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base text-ink tracking-tight">ARBLOK</span>
                <span className="font-mono text-[8px] text-accent tracking-[0.2em] uppercase">DIGITAL</span>
              </div>
            </Link>
            <p className="font-body text-xs sm:text-sm text-ink-2 leading-relaxed max-w-xs">
              {language === "id"
                ? "Studio rekayasa perangkat lunak dari Tasikmalaya. Satu fondasi kode untuk semua produk."
                : "A software engineering studio from Tasikmalaya. One codebase for every product."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body font-medium text-xs text-ink uppercase tracking-[0.15em] mb-4">
              {language === "id" ? "Navigasi" : "Navigate"}
            </div>
            <ul className="space-y-2">
              {[
                { to: "/#hero", label: language === "id" ? "Beranda" : "Home" },
                { to: "/#about", label: language === "id" ? "Visi & Misi" : "Vision & Mission" },
                { to: "/#services", label: language === "id" ? "Layanan" : "Services" },
                { to: "/#portfolio", label: language === "id" ? "Portofolio" : "Portfolio" },
                { to: "/articles", label: language === "id" ? "Artikel" : "Articles" },
                { to: "/consultant", label: "AI Consultant" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-ink-2 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body font-medium text-xs text-ink uppercase tracking-[0.15em] mb-4">
              {language === "id" ? "Kontak" : "Contact"}
            </div>
            <ul className="space-y-2 text-sm text-ink-2">
              <li className="font-body">Tasikmalaya, Jawa Barat</li>
              <li>
                <a
                  href="https://wa.me/6289508053795"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-ink-2 hover:text-accent transition-colors"
                >
                  +62 895-0805-3795
                </a>
              </li>
              <li>
                <a
                  href="mailto:ardiblokchine@gmail.com"
                  className="font-body text-ink-2 hover:text-accent transition-colors"
                >
                  ardiblokchine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-2">
          <p>&copy; {currentYear} Arblok Digital.</p>
          <div className="flex gap-6">
            <span className="hover:text-accent cursor-pointer transition-colors">
              {language === "id" ? "Syarat & Ketentuan" : "Terms"}
            </span>
            <span className="hover:text-accent cursor-pointer transition-colors">
              {language === "id" ? "Kebijakan Privasi" : "Privacy"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
