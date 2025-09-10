import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Seyi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header/>
        {children}
          <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
