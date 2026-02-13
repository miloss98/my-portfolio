import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ScrollHandler, ScrollToTop } from "./components";
import { seoMetadata, structuredData } from "./data";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ScrollHandler />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
