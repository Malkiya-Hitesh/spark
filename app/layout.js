import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "SPARC 2026 – Innovation Award | Sustainability Challenge",
  description:
    "SPARC 2026 is India’s biggest sustainability challenge for students. Showcase creativity, problem-solving, and innovation with projects in clean energy, health, mobility, and equality.",
  keywords: [
    "SPARC 2026",
    "Innovation Award",
    "Sustainability Challenge",
    "STEM Competition India",
    "Student Innovation",
    "Clean Energy",
    "Health and Wellbeing",
    "Sustainable Cities",
    "Inclusive Growth",
  ],
  authors: [{ name: "SPARC Team", url: process.env.NEXTAUTH_URL }],
  openGraph: {
    title: "SPARC 2026 – India’s Biggest Sustainability Challenge",
    description:
      "Join SPARC 2026 to showcase innovative projects in sustainability, clean energy, health, and inclusive growth. Win recognition, mentorship, and prizes.",
    url: process.env.NEXTAUTH_URL,
    siteName: "SPARC 2026",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARC 2026 Innovation Award",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARC 2026 – Innovation Award",
    description:
      "India s biggest sustainability challenge for students. Register now and showcase your ideas in clean energy, health, cities, and inclusive growth.",
    images: ["/image/hero1.png"],
    creator: "@spark_team", // replace with your Twitter handle if available
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Spark Team" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <title>{metadata.title}</title>
      </head>
      <body className="min-h-screen">
        <Navbar />
        <div className="max-w-[1200px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
