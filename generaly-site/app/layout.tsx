import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generaly Groupe",
  description: "Développer durablement.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Generaly Groupe",
    description: "Développer durablement.",
    url: "https://www.generaly.net",
    siteName: "Generaly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Generaly",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
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