import { Inter } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leandro Bernal | Full Stack Web Developer",
  description: "Leandro Bernal Portfolio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-900 antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
