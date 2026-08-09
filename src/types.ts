export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "AI & Automation" | "Web Application" | "Web3 & Blockchain";
  description: string;
  features: string[];
  badge: string;
  status: "Production-ready" | "Active Development" | "Featured" | "Top 100 Global" | "Top 100 — Google Solution Challenge";
  techStack: string[];
  link?: string;
  image?: string;
  imageLabel?: string;
  certificateUrl?: string;
  credentialId?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  /** Tanggal modifikasi terakhir (untuk schema dateModified). Fallback: publishedAt. */
  dateModified?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  readTime: string;
  tags: string[];
  faq?: FAQItem[]; // Membantu AEO (Answer Engine Optimization) agar mudah diringkas oleh chatbot/AI search
}

