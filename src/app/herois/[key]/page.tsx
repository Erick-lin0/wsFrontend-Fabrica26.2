import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cake, MapPin, User } from "lucide-react";
import { buscarHeroiPorChave } from "@/services/overwatchApi";
import { ROLE_ICONS } from "@/utils/roleIcons";
import { obterCorDaRole, obterRotuloDaRole } from "@/utils/roles";
import { formatarAniversario } from "@/utils/text";

interface PaginaDeDetalhesProps {
  params: Promise<{ key: string }>;
}

const VIDA_MAXIMA_DO_ELENCO = 700;

export default async function PaginaDeDetalhes({ params }: PaginaDeDetalhesProps) {
  const { key } = await params;

  const heroi = await buscarHeroiPorChave(key).catch(() => null);
  if (!heroi) notFound();

  const corDaRole = obterCorDaRole(heroi.role);
  const IconeDaRole = ROLE_ICONS[heroi.role];
  const vida = heroi.hitpoints;

  const fichaTecnica = [
    { Icone: MapPin, rotulo: "Base de operação", valor: heroi.location || "Desconhecida" },
    { Icone: Cake, rotulo: "Aniversário", valor: formatarAniversario(heroi.birthday) },
    { Icone: User, rotulo: "Idade", valor: heroi.age ? `${heroi.age} anos` : "Desconhecida" },
  ];

  const barrasDeVida = vida
    ? [
        { rotulo: "Vida", valor: vida.health },
        { rotulo: "Armadura", valor: vida.armor },
        { rotulo: "Escudo", valor: vida.shields },
      ].filter((barra) => barra.valor > 0)
    : [];

  return (
    <article
      style={{ ["--cor-role" as string]: corDaRole }}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
    >
      <Link href="/"
        className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase italic text-paper transition-colors hover:text-flare"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[360px_1fr]">
        <aside className="glass-panel h-fit border-l-4 border-l-[var(--cor-role)] p-6">
          <h1 className="font-display text-4xl font-extrabold uppercase italic leading-none tracking-tight text-paper">
            {heroi.name}
          </h1>

          <p className="mt-2 flex items-center gap-2 font-display text-[0.7rem] font-bold uppercase italic tracking-[0.18em] text-[var(--cor-role)]">
            <IconeDaRole className="h-4 w-4" />
            {obterRotuloDaRole(heroi.role)}
          </p>

          <div className="relative mt-5 aspect-[3/4] w-full overflow-hidden border border-edge">
            <Image
              src={heroi.portrait}
              alt={`Retrato de ${heroi.name}`}
              fill
              priority
              sizes="360px"
              className="object-cover"
            />
          </div>

          {barrasDeVida.length > 0 && (
            <dl className="mt-5 space-y-3 border border-edge bg-void/50 p-4">
              {barrasDeVida.map(({ rotulo, valor }) => (
                <div key={rotulo}>
                  <div className="flex items-baseline justify-between font-display text-[0.7rem] font-bold uppercase italic tracking-[0.15em]">
                    <dt className="text-fade">{rotulo}</dt>
                    <dd className="text-paper">{valor}</dd>
                  </div>
                  <div className="mt-1.5 h-2 bg-edge/40">
                    <div className="h-full bg-[var(--cor-role)]"
                      style={{ width: `${(valor / VIDA_MAXIMA_DO_ELENCO) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>
          )}
        </aside>

        <div>
          <p className="leading-relaxed text-fade">{heroi.description}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {fichaTecnica.map(({ Icone, rotulo, valor }) => (
              <div key={rotulo}
                className="flex items-center gap-3 border border-edge bg-panel/60 px-4 py-3 text-fade transition-colors hover:border-[var(--cor-role)] hover:text-[var(--cor-role)]"
              >
                <Icone className="h-4 w-4 shrink-0" />
                <div className="min-w-0">
                  <dt className="font-display text-[0.6rem] font-bold uppercase italic tracking-[0.18em]">
                    {rotulo}
                  </dt>
                  <dd className="mt-0.5 truncate text-sm font-semibold text-paper">
                    {valor}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          {heroi.abilities.length > 0 && (
            <section className="mt-10">
              <h2 className="border-b border-edge pb-3 font-display text-2xl font-extrabold uppercase italic tracking-tight text-paper">
                Habilidades
              </h2>

              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {heroi.abilities.map((habilidade) => (
                  <li key={habilidade.name}
                    className="group flex gap-4 border border-edge bg-panel/60 p-4 transition-colors hover:border-[var(--cor-role)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-edge bg-void/60 transition-colors group-hover:border-[var(--cor-role)]">
                      <Image src={habilidade.icon} alt="" width={28} height={28}
                        className="h-7 w-7 object-contain"
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-extrabold uppercase italic tracking-tight text-paper transition-colors group-hover:text-[var(--cor-role)]">
                        {habilidade.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-fade">
                        {habilidade.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {heroi.story?.summary && (
            <section className="mt-10">
              <h2 className="border-b border-edge pb-3 font-display text-2xl font-extrabold uppercase italic tracking-tight text-paper">
                História
              </h2>
              <blockquote className="mt-5 border-l-4 border-l-[var(--cor-role)] bg-panel/60 p-5 leading-relaxed text-fade">
                {heroi.story.summary}
              </blockquote>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}