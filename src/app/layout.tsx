import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { siteConfig } from "../data/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Premium Software Developer`,
  description: "Portfolio of a Senior Full-Stack Engineer, Quantitative Researcher, and Product Builder.",
  keywords: ["Software Developer", "Quantitative Research", "Next.js", "Spring Boot", "Nairobi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-premium-black text-foreground antialiased selection:bg-premium-blue/30 selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}