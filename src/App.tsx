import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Articles from "./components/Articles";
import AiConsultant from "./components/AiConsultant";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";

function ProfilePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
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
        </Routes>
      </main>
      <Footer />
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
