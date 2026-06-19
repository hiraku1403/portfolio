import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Sartor Henn | Desenvolvedor Frontend & Especialista SEO",
  description: `Portfolio profissional de Matheus Sartor Henn. Especialista em React, Next.js, E-commerce e Otimização de Performance Web.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} bg-zinc-50 text-zinc-900 antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}