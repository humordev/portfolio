import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Jonas Costa de Lima | Senior Software Engineer | AI Solutions";
const siteDescription =
  "Full-Stack & AI Engineer with 9+ years building scalable SaaS, microservices, and LLM-powered features. Python, FastAPI, React, Next.js, AWS, GCP, Kubernetes.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Jonas Costa de Lima" }],
  keywords: [
    "Jonas Costa de Lima",
    "Senior Software Engineer",
    "AI Solutions",
    "Full Stack Developer",
    "SaaS",
    "Microservices",
    "Python",
    "FastAPI",
    "Django",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "AWS",
    "GCP",
    "LLM",
    "OpenAI",
  ],
  creator: "Jonas Costa de Lima",
  icons: {
    icon: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/code-icon.svg"],
    apple: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Jonas Costa de Lima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CursorFollower />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
