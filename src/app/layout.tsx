import type { Metadata } from "next";
import { Barlow, Oxanium } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fonteDeDestaque = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-oxanium",
});

const fonteDeTexto = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Heróis de Overwatch",
  description:
    "Explore o elenco completo de heróis de Overwatch: função, imagem e história de cada personagem.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fonteDeDestaque.variable} ${fonteDeTexto.variable} bg-ink font-body antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}