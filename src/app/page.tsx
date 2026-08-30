import { HeroBanner } from "@/components/HeroBanner";
import { HeroesExplorer } from "@/components/HeroesExplorer";
import { PlatformsBar } from "@/components/PlatformsBar";
import { buscarHerois } from "@/services/overwatchApi";
import type { Hero } from "@/types/hero";

export default async function PaginaInicial() {
  let herois: Hero[] = [];
  let falhouAoCarregar = false;

  try {
    herois = await buscarHerois();
  } catch (erro) {
    console.error("Falha ao carregar os herois:", erro);
    falhouAoCarregar = true;
  }

  return (
    <>
      <HeroBanner />
      <PlatformsBar />

      {falhouAoCarregar ? (
        <section className="mx-auto max-w-2xl px-4 py-32 text-center">
          <h2 className="font-display text-2xl font-bold uppercase italic text-paper">
            Não foi possível carregar os heróis
          </h2>
          <p className="mt-3 text-fade">
            A OverFast API não respondeu. Recarregue a página em alguns instantes.
          </p>
        </section>
      ) : (
        <HeroesExplorer herois={herois} />
      )}
    </>
  );
}