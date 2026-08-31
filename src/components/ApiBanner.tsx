import Image from "next/image";
import { ExternalLink } from "lucide-react";

const URL_API = "https://overfast-api.tekrop.fr";

const ESTILO_BOTAO =
  "btn-angular bg-flare px-8 py-3 font-display text-sm font-extrabold " +
  "uppercase italic tracking-tight text-void hover:bg-paper";

export function ApiBanner() {
  return (
    <section className="relative mt-8 overflow-hidden border-y border-edge">
      <Image
        src="/api-banner.jpg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-void/75" />

      <div className="relative flex flex-col items-center gap-5 px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase italic tracking-tight text-paper sm:text-4xl">
          OverFast API
        </h2>

        <p className="max-w-xl text-fade">
          Uma API pública e gratuita com informações de todos os heróis, mapas e
          jogadores de Overwatch. Explore a documentação e veja o que mais dá
          para construir.
        </p>

        <a href={URL_API} target="_blank" rel="noopener noreferrer"
          className={ESTILO_BOTAO}
        >
          <span>
            Acessar a API
            <ExternalLink className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}