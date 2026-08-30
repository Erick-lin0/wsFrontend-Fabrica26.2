import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fontePrincipal = Anybody({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-anybody",
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
      <body className={`${fontePrincipal.variable} bg-void font-body antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}