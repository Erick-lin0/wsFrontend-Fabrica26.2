import Image from "next/image";
import { Button } from "@/components/ui/button";

const URL_SITE_OFICIAL = "https://overwatch.blizzard.com/pt-br/";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* O briefing pede recarregar a página ao clicar na logo, então usamos
            <a> em vez de <Link>, que faz navegação sem recarregar. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" aria-label="Voltar ao início" className="flex items-center gap-3">
          <Image
            src="/logo-overwatch.png"
            alt="Overwatch"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
          />
        </a>

        <Button
          asChild
          className="rounded-full bg-flare px-6 font-display text-sm font-bold tracking-wide text-ink shadow-[0_6px_20px_-6px_rgba(255,134,64,0.9)] transition hover:brightness-110"
        >
          <a href={URL_SITE_OFICIAL} target="_blank" rel="noopener noreferrer">
            Jogue já
          </a>
        </Button>
      </div>
    </header>
  );
}