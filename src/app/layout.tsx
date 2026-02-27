import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tushar Saini | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Tushar Saini — Software Engineer specializing in React.js, Next.js, Node.js, and full-stack web development. Building scalable, user-centric applications.",
  keywords: [
    "Tushar Saini",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Tushar Saini" }],
  openGraph: {
    title: "Tushar Saini | Software Engineer",
    description:
      "Full-stack developer building scalable web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
