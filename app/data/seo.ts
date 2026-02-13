const seoMetadata = {
  title: "Miloš Stojanović — Frontend Developer | React & Next.js",
  description:
    "Frontend Developer with 3.5 years of experience building modern, accessible web applications using React, Next.js, JavaScript, and TypeScript.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://miloss98.dev"),
  openGraph: {
    title: "Miloš Stojanović — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, JavaScript, and TypeScript. Focused on clean code and great user experience.",
    url: "https://miloss98.dev",
    siteName: "Miloš Stojanović Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miloš Stojanović — Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miloš Stojanović — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, JavaScript, and TypeScript.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export { seoMetadata };
