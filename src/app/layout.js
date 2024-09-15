import { Inter } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/app/components/Cursor";

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
    <html lang="en">
      <body className={`${inter.className} cursor-none bg-black antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
