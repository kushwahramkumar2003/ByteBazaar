import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteBazaar",
  description: "Buy your bytes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`static h-full font-sans antialiased`, inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
          </Providers>
        </main>
      <Toaster position={'top-center'} richColors/>
      </body>
    </html>
  );
}
