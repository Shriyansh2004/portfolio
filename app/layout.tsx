import type { Metadata } from "next";
import { Inter, Outfit, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Anubhab Sahoo | SDE & Automation Portfolio",
  description: "Portfolio of Anubhab Sahoo - Software Developer & Electrical Engineering Graduate. Specializing in Next.js, Node.js, Spring Boot, Java backend systems.",
  keywords: [
    "Anubhab Sahoo",
    "Software Developer",
    "Full Stack Developer",
    "Java Backend Developer",
    "Spring Boot Developer",
    "B.Tech Electrical",
    "SCADA Enthusiast",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Anubhab Sahoo" }],
  creator: "Anubhab Sahoo",
  openGraph: {
    title: "Anubhab Sahoo | SDE & Automation Portfolio",
    description: "Full Stack Developer transitioning into Software Engineering. Building scalable Java Spring Boot backend systems and responsive frontends.",
    url: "https://anubhabsahoo.dev",
    siteName: "Anubhab Sahoo Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhab Sahoo | SDE & Automation Portfolio",
    description: "Full Stack Developer transitioning into Software Engineering. Building scalable Java Spring Boot backend systems and responsive frontends.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
