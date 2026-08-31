import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative flex h-[68vh] min-h-[420px] items-end overflow-hidden bg-void">

      <Image
        src="/hero-overwatch.gif"
        alt=""
        fill
        unoptimized
        priority
        aria-hidden="true"
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/65 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6">
        <p className="font-display text-xs font-bold uppercase italic tracking-[0.35em] text-flare">
          O mundo precisa de heróis
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase italic leading-[0.95] tracking-tight text-paper sm:text-6xl">
          Escolha o seu lado da linha de frente
        </h1>
        <p className="mt-5 max-w-xl text-base text-fade">
          Tanques, atiradores e suportes de todo o planeta. Explore o elenco
          completo e descubra quem combina com o seu jeito de jogar.
        </p>
      </div>
    </section>
  );
}