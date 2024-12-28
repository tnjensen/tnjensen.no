import type { Metadata } from "next";
import "./globals.css";
import {Roboto} from 'next/font/google'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({weight:'400', subsets:['latin']})

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
      <body className={`${roboto.className} antialiased`}>
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
