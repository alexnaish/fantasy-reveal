import type { Metadata } from "next";
import { Faculty_Glyphic } from 'next/font/google'
import "./globals.css";

const faculty = Faculty_Glyphic({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Fantasy Reveal",
  description: "Unveil your journey.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${faculty.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
