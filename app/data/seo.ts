const seoMetadata = {
  title: "Miloš Stojanović — Full-Stack Developer | React, Next.js & Node.js",
  description:
    "Full-Stack Developer with 4+ years of professional experience building fast, accessible web applications with React, Next.js and TypeScript — and the APIs behind them with Node.js, Express and PostgreSQL.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://miloss98.dev"),
  openGraph: {
    title: "Miloš Stojanović — Full-Stack Developer",
    description:
      "Full-Stack Developer: React, Next.js, TypeScript · Node.js, Express, PostgreSQL. 4+ years building fast, accessible web apps. Open to remote & EU roles.",
    url: "https://miloss98.dev",
    siteName: "Miloš Stojanović Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miloš Stojanović — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miloš Stojanović — Full-Stack Developer",
    description:
      "Full-Stack Developer: React, Next.js, TypeScript · Node.js, Express, PostgreSQL.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export { seoMetadata };
