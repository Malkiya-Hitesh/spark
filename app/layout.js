import Navbar from "./components/Navbar";
import Providers from "./components/Providers";

import "./globals.css";



export const metadata = {
  title: "Spark - Your App",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>
          <Navbar />
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
