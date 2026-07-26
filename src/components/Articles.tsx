import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Tag, ChevronDown, ChevronUp, User, Sparkles } from "lucide-react";
import { Article, FAQItem } from "../types";
import { getArticlesData } from "../data/articles";
import { useLanguage } from "../LanguageContext";

export default function Articles() {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const articlesData = getArticlesData(language);

  useEffect(() => {
    setActiveCategory(language === "id" ? "Semua" : "All");
  }, [language]);

  useEffect(() => {
    if (slug) {
      const found = articlesData.find((a) => a.slug === slug) || null;
      setSelectedArticle(found);
    }
  }, [slug, articlesData]);

  const categories = language === "id"
    ? ["Semua", ...new Set(articlesData.map((a) => a.category))]
    : ["All", ...new Set(articlesData.map((a) => a.category))];

  const filteredArticles = (activeCategory === "Semua" || activeCategory === "All")
    ? articlesData
    : articlesData.filter((a) => a.category === activeCategory);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
        year: "numeric", month: "short", day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  if (selectedArticle) {
    const faq = selectedArticle.faq || [];
    return (
      <section id="articles" className="py-20 sm:py-28 bg-paper border-t border-rule relative">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
          <button
            onClick={() => { setSelectedArticle(null); setOpenFaqIndex(null); navigate("/articles"); }}
            className="inline-flex items-center gap-2 text-ink-2 hover:text-accent font-mono text-xs uppercase tracking-wider bg-paper-2 border border-rule px-4 py-2 rounded transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {language === "id" ? "Kembali ke Blog" : "Back to Blog"}
          </button>

          <article className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.1em] bg-accent/5 border border-accent/20 px-2 py-0.5 rounded">
                  {selectedArticle.category}
                </span>
                <span className="font-mono text-[10px] text-ink-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(selectedArticle.publishedAt)}
                </span>
                <span className="font-mono text-[10px] text-ink-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl text-ink leading-[1.1] tracking-tight">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center gap-2.5 pt-3">
                <div className="w-9 h-9 rounded-full bg-paper-2 border border-rule flex items-center justify-center">
                  <User className="w-4 h-4 text-ink-2" />
                </div>
                <div>
                  <div className="font-body text-sm text-ink">{selectedArticle.author.name}</div>
                  <div className="font-mono text-[10px] text-ink-2">{selectedArticle.author.role}</div>
                </div>
              </div>
            </div>

            <div className="prose-custom font-body text-sm sm:text-base text-ink-2 leading-relaxed space-y-6">
              {selectedArticle.content.split("\n").map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith("### ")) {
                  return <h3 key={idx} className="font-display text-xl text-ink mt-8 mb-2">{trimmed.replace("### ", "")}</h3>;
                }
                if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                  return <p key={idx} className="font-body font-medium text-ink">{trimmed.replace(/\*\*/g, "")}</p>;
                }
                if (trimmed.startsWith("- ")) {
                  return (
                    <ul key={idx} className="space-y-1.5 my-2">
                      {trimmed.split("\n").filter(l => l.trim().startsWith("- ")).map((line, li) => (
                        <li key={li} className="flex items-start gap-2">
                          <span className="mt-[5px] w-1 h-1 rounded-full bg-accent shrink-0" />
                          <span>{line.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx}>{trimmed}</p>;
              })}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-rule">
              {selectedArticle.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-ink-2 bg-paper-2 border border-rule px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {faq.length > 0 && (
            <section className="bg-paper-2 border border-rule rounded-sm p-6 space-y-4">
              <h3 className="font-display text-lg text-ink flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                {language === "id" ? "Ringkasan Cerdas (FAQ)" : "Smart Summary (FAQ)"}
              </h3>
              {faq.map((item, idx) => (
                <div key={idx} className="border border-rule rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left px-5 py-3 flex items-center justify-between text-sm text-ink hover:bg-paper-2 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span className="font-body">{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-ink-2 shrink-0 transition-transform ${openFaqIndex === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaqIndex === idx && (
                    <p className="px-5 pb-4 text-xs sm:text-sm text-ink-2 leading-relaxed bg-paper-2 border-t border-rule">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          <div className="bg-paper-2 border border-rule p-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
            <div>
              <h4 className="font-display text-base text-ink">
                {language === "id" ? "Ada yang bisa kami bantu?" : "Can we help?"}
              </h4>
              <p className="font-body text-xs text-ink-2 mt-1">
                {language === "id"
                  ? "Diskusikan kebutuhan software Anda langsung via WhatsApp"
                  : "Discuss your software needs via WhatsApp"}
              </p>
            </div>
            <a
              href="https://wa.me/6289508053795"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-4 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors whitespace-nowrap"
            >
              {language === "id" ? "Konsultasi Gratis" : "Free Consultation"}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20 sm:py-28 bg-paper border-t border-rule relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
            {language === "id" ? "Edukasi & Wawasan" : "Education & Insights"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mt-3 tracking-tight">
            {language === "id" ? "Artikel & Wawasan Teknologi" : "Tech Articles & Insights"}
          </h2>
          <p className="font-body text-base text-ink-2 mt-4 leading-relaxed">
            {language === "id"
              ? "Pelajari strategi akselerasi digital, tips otomatisasi, dan wawasan teknologi."
              : "Learn digital acceleration strategies, automation tips, and tech insights."}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs px-3 py-1.5 rounded transition-colors cursor-pointer border ${
                activeCategory === cat
                  ? "bg-accent text-accent-ink border-accent"
                  : "bg-transparent text-ink-2 border-rule hover:border-ink-2"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="border border-rule rounded-sm overflow-hidden bg-paper group cursor-pointer"
              onClick={() => { setSelectedArticle(article); navigate(`/articles/${article.slug}`); }}
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-[0.1em]">
                    {article.category}
                  </span>
                  <span className="font-mono text-[10px] text-ink-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg text-ink leading-tight group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <div className="flex items-center gap-1.5 text-[10px] text-ink-2">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>

                {article.excerpt && (
                  <p className="font-body text-xs sm:text-sm text-ink-2 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                )}

                <div className="pt-3 border-t border-rule flex items-center justify-between">
                  <span className="font-body text-xs text-ink-2">{formatDate(article.publishedAt)}</span>
                  <span className="font-body text-xs text-accent group-hover:underline">
                    {language === "id" ? "Baca" : "Read"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
