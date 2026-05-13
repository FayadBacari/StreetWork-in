import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { SiteVideoBackground } from "@/components/site-video-background";
import "@/components/ui/header.scss";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StreetWork'in",
  description:
    "Communauté et ressources autour du street workout et du training outdoor.",
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
