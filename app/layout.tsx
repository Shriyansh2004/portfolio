import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Home, User, Cpu, Briefcase, FolderGit2, Award } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Anubhab Sahoo | SDE & Automation Portfolio",
  description: "Portfolio of Anubhab Sahoo - Software Developer & Electrical Engineering Graduate. Specializing in Next.js, Node.js, PLC programming, SCADA, and EV charging infrastructure.",
  keywords: [
    "Anubhab Sahoo",
    "Software Developer",
    "Full Stack Developer",
    "Electrical Engineering Graduate",
    "B.Tech Electrical",
    "SCADA Enthusiast",
    "Automation Engineer",
    "PLC Programming",
    "OCPP EV Charging",
    "Bhubaneswar Portfolio",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Anubhab Sahoo" }],
  creator: "Anubhab Sahoo",
  openGraph: {
    title: "Anubhab Sahoo | SDE & Automation Portfolio",
    description: "Electrical Graduate transitioning into Software Development. Building industrial telemetry systems and premium web applications.",
    url: "https://anubhabsahoo.dev",
    siteName: "Anubhab Sahoo Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhab Sahoo | SDE & Automation Portfolio",
    description: "Electrical Graduate transitioning into Software Development. Building industrial telemetry systems and premium web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
  {
    name: "Milestones",
    link: "#achievements",
    icon: <Award className="h-4 w-4" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <CursorGlow />
        <FloatingNav navItems={navItems} />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
