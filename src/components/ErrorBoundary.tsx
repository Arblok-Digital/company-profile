import { Component, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  declare props: Props;
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper text-ink flex items-center justify-center p-8">
          <div className="max-w-md text-center space-y-6">
            <div className="text-6xl">⚠️</div>
            <h1 className="font-display text-2xl text-ink">
              Ada yang tidak beres
            </h1>
            <p className="font-body text-sm text-ink-2 leading-relaxed">
              Sistem mengalami gangguan. Silakan hubungi kami via WhatsApp.
            </p>
            <a
              href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20mengalami%20error%20di%20website.%20Tolong%20bantu%20saya."
              target="_blank"
              rel="noreferrer"
              className="inline-block font-body text-sm px-5 py-2.5 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors"
            >
              Hubungi via WhatsApp
            </a>
            <button
              onClick={() => window.location.reload()}
              className="block mx-auto font-body text-sm text-ink-2 hover:text-ink bg-transparent border-none cursor-pointer mt-4"
            >
              Muat ulang halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
