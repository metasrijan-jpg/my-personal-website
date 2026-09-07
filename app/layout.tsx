import type { Metadata } from "next";
import Script from "next/script";
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
    type: "website",
    images: [
      {
        url: "/images/srijan-gharti.png",
        width: 720,
        height: 720,
        alt: "Srijan Gharti - MetaSrijan AI marketing consultant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Marketing Portfolio`,
    description: "Premium AI-powered digital marketing consulting.",
    images: ["/images/srijan-gharti.png"]
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '28154646984199012');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=28154646984199012&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
