import Image from "next/image";


const URL_SITE_OFICIAL = "https://overwatch.blizzard.com/pt-br/";


const ESTILO_JOGAR =
  "btn-angular bg-flare px-8 py-3 font-display text-sm font-extrabold " +
  "uppercase italic tracking-tight text-void hover:bg-paper";

const SKEW = { transform: "skewX(-15deg)" };
const CONTRA_SKEW = { transform: "skewX(15deg)" };

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-void/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" aria-label="Voltar ao início" className="flex items-center">
          <Image
            src="/logo-overwatch.png"
            alt="Overwatch"
            width={56}
            height={56}
            priority
            className="h-14 w-14"
          />
        </a>

        <div className="flex items-center gap-4">
          

          <a href={URL_SITE_OFICIAL} target="_blank" rel="noopener noreferrer"
            className={ESTILO_JOGAR}
          >
            <span>Jogar</span>
          </a>
        </div>
      </div>
    </header>
  );
}