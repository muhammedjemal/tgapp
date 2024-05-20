import Script from "next/script";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          <ThemeProvider>
            {children}
            <Script
              src="https://telegram.org/js/telegram-web-app.js"
              strategy="beforeInteractive"
            />
          </ThemeProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}

// check also strategy="afterInteractive" for faster initial load
