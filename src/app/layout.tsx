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
  title: "Nearby Glasses | Detect Smart Glasses Around You",
  description:
    "Nearby Glasses is an iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity. Reclaim your privacy today at nearglasses.com.",
  keywords: ["NearbyGlasses", "Nearby Glasses", "nearglasses.com", "detect smart glasses", "privacy app", "bluetooth scanner"],
  openGraph: {
    title: "Nearby Glasses | Detect Smart Glasses Around You",
    description:
      "Nearby Glasses is an iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity. Reclaim your privacy today at nearglasses.com.",
    siteName: "Nearby Glasses (nearglasses.com)",
    url: "https://nearglasses.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearby Glasses | Detect Smart Glasses Around You",
    description: "Detect Smart Glasses Around You. Reclaim your privacy today at nearglasses.com.",
  },
  alternates: {
    canonical: "https://nearglasses.com",
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
