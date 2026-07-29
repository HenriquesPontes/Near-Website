import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeue-Medium.woff2",
  variable: "--font-helvetica",
  weight: "500",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400"],
  subsets: ["latin"],
});

const retroByte = localFont({
  src: "./fonts/RetroByte.woff2",
  variable: "--font-retrobyte",
  weight: "500",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "Near Glasses — Detect Smart Glasses Around You",
  description:
    "Near is an iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity. Reclaim Your Privacy.",
  openGraph: {
    title: "Near Glasses — Detect Smart Glasses Around You",
    description:
      "Near is an iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity. Reclaim Your Privacy.",
    siteName: "Near Glasses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${helveticaNeue.variable} ${ibmPlexMono.variable} ${retroByte.variable}`}
    >
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
