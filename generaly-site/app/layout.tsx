import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GENERALY GROUPE",
  description:
    "GENERALY GROUPE réunit des sociétés spécialisées dans plusieurs secteurs stratégiques afin de développer des activités complémentaires et créer une valeur durable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}