"use client";

import { useEffect, useState } from "react";

interface TypewriterOptions {
  frases: string[];
  velocidadeDigitacao?: number;
  velocidadeApagamento?: number;
  pausaAoCompletar?: number;
}

/**
 * Digita cada frase, pausa, apaga e passa para a próxima, em loop infinito.
 */
export function useTypewriter({
  frases,
  velocidadeDigitacao = 90,
  velocidadeApagamento = 45,
  pausaAoCompletar = 1400,
}: TypewriterOptions): string {
  const [indiceDaFrase, setIndiceDaFrase] = useState(0);
  const [textoVisivel, setTextoVisivel] = useState("");
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const fraseAtual = frases[indiceDaFrase] ?? "";

    if (!apagando && textoVisivel === fraseAtual) {
      const pausa = setTimeout(() => setApagando(true), pausaAoCompletar);
      return () => clearTimeout(pausa);
    }

        if (apagando && textoVisivel === "") {
      const troca = setTimeout(() => {
        setApagando(false);
        setIndiceDaFrase((indice) => (indice + 1) % frases.length);
      }, velocidadeApagamento);
      return () => clearTimeout(troca);
    }

    const proximoPasso = setTimeout(
      () => {
        setTextoVisivel((texto) =>
          apagando
            ? fraseAtual.slice(0, texto.length - 1)
            : fraseAtual.slice(0, texto.length + 1),
        );
      },
      apagando ? velocidadeApagamento : velocidadeDigitacao,
    );

    return () => clearTimeout(proximoPasso);
  }, [
    apagando,
    frases,
    indiceDaFrase,
    pausaAoCompletar,
    textoVisivel,
    velocidadeApagamento,
    velocidadeDigitacao,
  ]);

  return textoVisivel;
}