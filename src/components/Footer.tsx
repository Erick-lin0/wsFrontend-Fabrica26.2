import { SiGithub } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import type { ComponentType } from "react";

const URL_REPOSITORIO =
  "https://github.com/Erick-lin0/wsFrontend-Fabrica26.2";

const ESTILO_ICONE =
  "text-fade transition-colors duration-300 hover:text-flare";

const ESTILO_TITULO =
  "mb-3 font-display text-[0.7rem] font-bold uppercase italic " +
  "tracking-[0.2em] text-fade";

interface RedeSocial {
  nome: string;
  url: string;
  Icone: ComponentType<{ className?: string }>;
}

const REDES_SOCIAIS: RedeSocial[] = [
  { nome: "X", url: "https://x.com/PlayOverwatch", Icone: FaXTwitter },
  { nome: "YouTube", url: "https://www.youtube.com/@playoverwatch", Icone: FaYoutube },
  { nome: "Instagram", url: "https://www.instagram.com/playoverwatch/", Icone: FaInstagram },
  { nome: "Facebook", url: "https://www.facebook.com/PlayOverwatch/", Icone: FaFacebook },
  { nome: "Twitch", url: "https://www.twitch.tv/playoverwatch", Icone: FaTwitch },
];

export function Footer() {
  return (
    <footer className="border-t border-edge bg-void py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className={ESTILO_TITULO}>Repositório GitHub</h2>
            <a href={URL_REPOSITORIO} target="_blank" rel="noopener noreferrer"
              aria-label="Repositório do projeto no GitHub"
              className={`inline-block ${ESTILO_ICONE}`}
            >
              <SiGithub className="h-6 w-6" />
            </a>
          </div>

          <div>
            <h2 className={ESTILO_TITULO}>Contato</h2>
            <ul className="flex items-center gap-5">
              {REDES_SOCIAIS.map(({ nome, url, Icone }) => (
                <li key={nome}>
                  <a href={url} target="_blank" rel="noopener noreferrer"
                    aria-label={`Overwatch no ${nome}`}
                    className={ESTILO_ICONE}
                  >
                    <Icone className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-edge/50 pt-6 text-center text-sm leading-relaxed text-fade">
          <p>
            Overwatch é uma marca registrada da Blizzard Entertainment, Inc.
            Todas as imagens, nomes e demais materiais pertencem aos seus
            respectivos titulares.
          </p>
          <p className="mt-3">
            Projeto acadêmico sem fins comerciais e sem vínculo oficial com a
            Blizzard. Dados fornecidos pela OverFast API.
          </p>
        </div>
      </div>
    </footer>
  );
}