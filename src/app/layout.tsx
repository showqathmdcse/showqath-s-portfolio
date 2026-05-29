import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Showqath N | Backend Developer & AI Engineer",
  description:
    "Backend Developer specializing in Java Spring, Microservices, AI/ML, RAG, and Cloud-Native Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.className} h-full`}>
      <body className="min-h-full flex flex-col scanline">{children}</body>
    </html>
  );
}
