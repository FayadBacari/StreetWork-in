import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { SiteVideoBackground } from "@/components/site-video-background";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://streetworkin.com"),
  title: "StreetWork'in",
  description:
    "Communauté et ressources autour du street workout et du training outdoor.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "StreetWork'in",
    description:
      "Communauté et ressources autour du street workout et du training outdoor.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={anton.variable}>
      <body>
        <div className="site-shell">
          <SiteVideoBackground />
          <div className="site-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
