import type { Metadata } from "next";
import "./globals.css";
import { Playfair, Lato } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const lato = Lato({
  weight: '400',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "tnjensen's portfolio",
  description: "Generated by tnjensen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable}`}>
        <div>
          <Header />
          <div className="mx-auto min-h-[calc(100vh-80px)] bg-stone-200 w-full max-w-7xl">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
