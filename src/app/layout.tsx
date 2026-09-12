import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perry.studio"),
  title: "Perry — Websites, Games & Digital Work",
  description:
    "Perry designs and builds websites, games, and digital experiences with sharp craft and clear energy.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Perry — Websites, Games & Digital Work",
    description:
      "Perry designs and builds websites, games, and digital experiences with sharp craft and clear energy.",
    images: ["/logo.svg"],
    type: "website",
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
      className={`${inter.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Universal Sans stubs — drop licensed .woff2 into /public/fonts/ */}
        <link rel="stylesheet" href="/fonts/universal-sans.css" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
