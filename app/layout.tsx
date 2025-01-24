import React from "react"; // Add this import
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { CartProvider } from "./context/CardContext";
import { WishlistProvider } from "../app/context/WishlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <CartProvider>
        <WishlistProvider>
            <Navbar />
            {children}
            <Footer />
        </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}






