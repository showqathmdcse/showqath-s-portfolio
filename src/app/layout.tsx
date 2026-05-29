import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
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
    <html lang="en" className={`${plusJakarta.className} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
