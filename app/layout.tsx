import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZHH Group Holding | Building Value Across Industries",
  description: "ZHH Group Holding stands as a proud symbol of Emirati ambition and excellence — operating across construction, real estate, global trading, and precious metals.",
  keywords: "ZHH Group, Construction, Real Estate, Trading, Precious Metals, UAE, Abu Dhabi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: 'hidden' }}>
      <body className={`${inter.variable} font-sans antialiased`} style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
        <ScrollProgressBar />
        <Header />
        <main className="min-h-screen" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
