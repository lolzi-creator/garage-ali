import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { contactInfo } from "@/data/contact";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: `${contactInfo.businessName} - Professionelle Autowerkstatt in Lengnau`,
  description: "Expertenwartung und Autoreparaturen in Lengnau. Qualifizierte Mechaniker, transparente Preise und Qualitätsarbeit. Ölwechsel, Bremsenservice, Diagnose und mehr.",
  keywords: "Autowerkstatt, Autoreparatur, Ölwechsel, Bremsenservice, Getriebe, Motorreparatur, Diagnose, Auto, Mechaniker, Lengnau, Schweiz",
  authors: [{ name: contactInfo.businessName }],
  openGraph: {
    title: `${contactInfo.businessName} - Professionelle Autowerkstatt in Lengnau`,
    description: "Expertenwartung und Autoreparaturen mit transparenten Preisen und Qualitätsarbeit.",
    type: "website",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${contactInfo.businessName} - Professionelle Autowerkstatt in Lengnau`,
    description: "Expertenwartung und Autoreparaturen mit transparenten Preisen und Qualitätsarbeit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
