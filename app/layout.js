import Navbar from "./components/Navbar";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

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
  authors: [{ name:"malkiya hitesh , Rishu Rishav ", url: process.env.NEXTAUTH_URL }],
  openGraph: {
    title: "SPARC 2026 – India’s Biggest Sustainability Challenge",
    description:
      "Join SPARC 2026 to showcase innovative projects in sustainability, clean energy, health, and inclusive growth. Win recognition, mentorship, and prizes.",
    url: "https://spark-fp6r.vercel.app/",
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
    images: ["/image/logo.png"],
    creator: "@spark_team", // replace with your Twitter handle if available
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/image/logo.png" sizes="32x32" />
      <link rel="icon"  href="/image/logo.png"   />
   
        <title>{metadata.title}</title>
      </head>
      <body className="min-h-screen">
        <Navbar />
        <div className="max-w-[1200px] mx-auto">
          {children}
 
        </div>

        
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
