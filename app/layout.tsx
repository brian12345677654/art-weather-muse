import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArtWeather Muse",
  description: "A museum-curated weather outfit advisor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={clsx(
          playfair.variable,
          inter.variable,
          notoSansTc.variable,
          "bg-museum-background text-museum-text antialiased"
        )}
        style={{ fontFamily: `var(--font-noto-sans-tc), var(--font-inter), system-ui, sans-serif` }}
      >
        {children}
      </body>
    </html>
  );
}
