import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIVAR S.A - Especialistas en Metalmecánica",
  description: "Más de 15 años de experiencia en metalmecánica de precisión, figurado de varillas de hierro y juntas de pilotes en Guayaquil, Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
