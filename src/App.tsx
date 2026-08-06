import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import RunsItself from "./components/RunsItself";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import AiConsultant from "./components/AiConsultant";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";

function ProfilePage() {
  return (
    <>
      <Hero />
      <Problems />
      <RunsItself />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
    </>
  );
}

function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previousRobots = robots?.content;

    document.title = "Halaman tidak ditemukan | Arblok Digital";
    robots?.setAttribute("content", "noindex, follow");

    return () => {
      document.title = previousTitle;
      if (robots && previousRobots) robots.content = previousRobots;
    };
  }, []);

  return (
    <section className="min-h-[70vh] border-b border-rule bg-paper px-6 pb-20 pt-36 sm:px-8">
      <div className="mx-auto max-w-3xl border border-rule bg-paper-2 p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">404 · Not found</p>
        <h1 className="mt-5 font-body text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">Halaman tidak ditemukan.</h1>
        <p className="mt-5 max-w-xl font-body text-base leading-7 text-ink-2">Alamat yang dibuka tidak tersedia. Kembali ke beranda atau lihat artikel Arblok Digital.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex min-h-11 items-center rounded border border-accent px-5 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-ink">Kembali ke beranda</Link>
          <Link to="/articles" className="inline-flex min-h-11 items-center rounded border border-rule px-5 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent">Lihat artikel</Link>
        </div>
      </div>
    </section>
  );
}

function ScrollToAnchor() {
  const { hash } = useLocation();
  const NAV_HEIGHT = 80; // h-16 sm:h-20 = 80px

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function OldHashRedirect() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "#articles") {
      navigate("/articles", { replace: true });
    } else if (hash === "#ai-consultant") {
      navigate("/consultant", { replace: true });
    } else if (pathname === "/articles" && hash.startsWith("#")) {
      // Legacy anchor article links -> real path routes for SEO
      const slug = hash.substring(1);
      if (slug) navigate(`/articles/${slug}`, { replace: true });
    }
  }, [navigate, pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased selection:bg-accent/30 selection:text-accent-ink">
      <OldHashRedirect />
      <ScrollToAnchor />
      <Navbar />
      <main className="transition-all duration-300">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Articles />} />
          <Route path="/consultant" element={<div className="pt-12"><AiConsultant /></div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}
