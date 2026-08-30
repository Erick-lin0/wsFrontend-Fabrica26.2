import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cake, Heart, MapPin, Shield } from "lucide-react";
import { buscarHeroiPorChave } from "@/services/overwatchApi";
import { ROLE_PRESENTATION, obterRotuloDaRole } from "@/utils/roles";
import { formatarAniversario } from "@/utils/text";

interface PaginaDeDetalhesProps {
  params: Promise<{ key: string }>;
}

export default async function PaginaDeDetalhes({ params }: PaginaDeDetalhesProps) {
  const { key } = await params;

  const heroi = await buscarHeroiPorChave(key).catch(() => null);
  if (!heroi) notFound();

  const apresentacao = ROLE_PRESENTATION[heroi.role];

  const informacoes = [
    { Icone: Shield, rotulo: "Função", valor: obterRotuloDaRole(heroi.role) },
    { Icone: MapPin, rotulo: "Base de operação", valor: heroi.location || "Desconhecida" },
    { Icone: Cake, rotulo: "Aniversário", valor: formatarAniversario(heroi.birthday) },
    {
      Icone: Heart,
      rotulo: "Vida total",
      valor: heroi.hitpoints ? `${heroi.hitpoints.total} pontos` : "Não informado",
    },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-surface transition-colors hover:text-flare"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[300px_1fr]">
        <div className="glass relative aspect-[3/4] overflow-hidden rounded-3xl">
          <Image
            src={heroi.portrait}
            alt={`Retrato de ${heroi.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 300px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-4xl font-extrabold uppercase text-surface sm:text-6xl">
            {heroi.name}
          </h1>

          {/* O texto vem da API como string simples e é renderizado por interpolação
              do React, que escapa o conteúdo. Nunca usar dangerouslySetInnerHTML aqui. */}
          <p className="mt-5 max-w-2xl leading-relaxed text-surface/75">
            {heroi.description}
          </p>

          <dl className="group mt-10 grid gap-4 sm:grid-cols-2">
            {informacoes.map(({ Icone, rotulo, valor }) => (
              <div
                key={rotulo}
                className={`glass flex items-center gap-4 rounded-2xl px-5 py-4 text-steel transition-colors ${apresentacao.accentClasses}`}
              >
                <Icone className="h-5 w-5 shrink-0" />
                <div>
                  <dt className="font-display text-xs uppercase tracking-widest">
                    {rotulo}
                  </dt>
                  <dd className="mt-0.5 text-base font-semibold text-surface">
                    {valor}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}