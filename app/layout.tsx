import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "CV de Hugo Richard, étudiant en BUT informatique à la recherche d'un stage de développement.";

export const metadata: Metadata = {
  title: "Hugo Richard — CV",
  description,
  icons: { icon: "data:," },
  openGraph: {
    title: "Hugo Richard — CV",
    description,
    locale: "fr_FR",
    type: "profile",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
