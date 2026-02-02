import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Hichem in Cyber",
    template: "%s | Hichem in Cyber"
  },
  description: "Portfolio de Hichem AOUANE - Analyste en cybersécurité. Spécialisé en tests d'intrusion, sécurité cloud et opérations de sécurité.",
  keywords: ["Cybersécurité", "Tests d'intrusion", "Sécurité cloud", "Opérations de sécurité", "Hichem AOUANE", "InfoSec", "Ethical Hacking"],
  authors: [{ name: "Hichem AOUANE" }],
  creator: "Hichem AOUANE",
  openGraph: {
    title: "Hichem in Cyber",
    description: "Portfolio de Hichem AOUANE - Analyste en cybersécurité. Spécialisé en tests d'intrusion, sécurité cloud et opérations de sécurité.",
    url: "/",
    siteName: "Hichem in Cyber",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hichem AOUANE - Expert en cybersécurité",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hichem AOUANE",
    jobTitle: "Analyste en cybersécurité",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      "https://github.com/HichemAouane",
      "https://www.linkedin.com/in/hichem-aouane/",
    ],
    description: "Analyste en cybersécurité, spécialisé en tests d'intrusion, sécurité cloud et opérations de sécurité.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
    knowsAbout: ["Tests d'intrusion", "Sécurité cloud", "Opérations de sécurité", "Splunk", "Azure", "AWS"],
  };

  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Microsoft Clarity Analytics */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
