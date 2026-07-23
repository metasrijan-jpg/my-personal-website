import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Navbar } from "@/components/navbar";
import { brand } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | AI-Powered Digital Marketing Consultant`,
    template: `%s | ${brand.name}`
  },
  description: "Premium AI marketing consulting, SEO, paid ads, automation, and growth strategy by Srijan Gharti in Kathmandu, Nepal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${brand.name} | AI Marketing Portfolio`,
    description: "Helping businesses grow with AI-powered digital marketing.",
    url: siteUrl,
    siteName: brand.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Marketing Portfolio`,
    description: "Premium AI-powered digital marketing consulting."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    founder: brand.owner,
    telephone: brand.phone,
    address: brand.address,
    url: siteUrl,
    areaServed: "Nepal",
    serviceType: "AI Marketing Consulting"
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
