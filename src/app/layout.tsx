import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Velocar — Mecánica Rápida en Guápiles",
  description:
    "Taller de mecánica rápida en Guápiles, Costa Rica. Mantenimiento preventivo y correctivo para vehículos livianos. Calidad, rapidez y confianza.",
  keywords: [
    "mecánica rápida",
    "taller mecánico",
    "Guápiles",
    "Costa Rica",
    "mantenimiento vehicular",
    "cambio de aceite",
    "frenos",
    "alineación",
  ],
  openGraph: {
    title: "Velocar — Mecánica Rápida en Guápiles",
    description:
      "Mantenimiento preventivo y correctivo para vehículos livianos. Calidad, rapidez y confianza.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
