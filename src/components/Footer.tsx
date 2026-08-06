import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useInView } from "../hooks/useInView";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { threshold: 0.1 });

  return (
    <footer ref={ref} className={`border-t border-rule bg-paper py-14 sm:py-18 animate-fade-up ${visible ? "visible" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/#hero" className="flex items-center gap-3 no-underline">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-rule bg-paper-2 overflow-hidden">
                <img
                  src="/arblok_logo.webp"
                  alt="Logo Arblok Digital"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-body text-lg font-bold tracking-tight text-ink">ARBLOK</span>
                <span className="font-mono text-[10px] text-accent tracking-[0.24em] uppercase">DIGITAL</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm font-body text-sm leading-6 text-ink-2">
              {language === "id"
                ? "Studio perangkat lunak dari Tasikmalaya untuk usaha, sekolah, dan instansi."
                : "A software studio from Tasikmalaya for businesses, schools, and public organizations."}
            </p>
            <p className="badge-chip mt-6">
              {language === "id" ? "Masalah → Ruang lingkup → Uji" : "Problem → Scope → Test"}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <div className="font-body font-semibold text-xs text-ink uppercase tracking-[0.15em] mb-5">
              {language === "id" ? "Navigasi" : "Navigate"}
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                { to: "/#hero", label: language === "id" ? "Beranda" : "Home" },
                { to: "/#problems", label: language === "id" ? "Masalah" : "Problems" },
                { to: "/#runs-itself", label: language === "id" ? "Berjalan sendiri" : "Runs itself" },
                { to: "/#about", label: language === "id" ? "Cara kerja" : "How we work" },
                { to: "/#services", label: language === "id" ? "Solusi" : "Solutions" },
                { to: "/#portfolio", label: language === "id" ? "Portofolio" : "Portfolio" },
                { to: "/#faq", label: "FAQ" },
                { to: "/articles", label: language === "id" ? "Artikel" : "Articles" },
                { to: "/consultant", label: language === "id" ? "Konsultan digital" : "Digital consultant" },
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
          <div className="lg:col-span-3">
            <div className="font-body font-semibold text-xs text-ink uppercase tracking-[0.15em] mb-5">
              {language === "id" ? "Kontak" : "Contact"}
            </div>
            <ul className="space-y-3 text-sm text-ink-2">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="font-body">Tasikmalaya, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20sistem."
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-ink-2 hover:text-accent transition-colors"
                >
                  +62 895-0805-3795
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:ardiblokchine@gmail.com"
                  className="font-body text-ink-2 hover:text-accent transition-colors"
                >
                  ardiblokchine@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20kerja%20yang%20perlu%20dirapikan%20dengan%20sistem%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2.5 font-body text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {language === "id" ? "Mulai dari WhatsApp" : "Start on WhatsApp"}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-ink-2">
            &copy; {currentYear} Arblok Digital. {language === "id" ? "Semua hak dilindungi." : "All rights reserved."}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2">
            {language === "id" ? "Dibuat di Tasikmalaya, Indonesia" : "Built in Tasikmalaya, Indonesia"}
          </p>
        </div>
      </div>
    </footer>
  );
}
