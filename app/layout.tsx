import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jane Doe | Portfolio",
  description: "Full Stack Developer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="py-6 border-t">
          <div className="container px-4 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Jane Doe. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
