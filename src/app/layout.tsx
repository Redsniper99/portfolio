import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeRegistry } from "@/lib/registry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedBackground from "@/components/background/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashandev | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Building scalable, beautiful web applications.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Prashandev" }],
  creator: "Prashandev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Prashandev | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
    siteName: "Prashandev Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prashandev - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashandev | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <AnimatedBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeRegistry>
      </body>
    </html>
  );
}
