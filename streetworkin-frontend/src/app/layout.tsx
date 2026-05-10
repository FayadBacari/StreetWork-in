import type { Metadata } from "next";
import { SiteVideoBackground } from "@/components/site-video-background";
import "./globals.css";

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
    <html lang="fr">
      <body>
        <div className="site-shell">
          <SiteVideoBackground />
          <div className="site-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
