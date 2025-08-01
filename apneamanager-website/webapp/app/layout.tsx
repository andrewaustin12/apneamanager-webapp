import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { getSEOTags } from "@/lib/seo";
import { Providers } from "./providers/authproviders";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

// Generates metadata for the entire application
// This includes:
// - Basic meta tags (title, description)
// - Open Graph tags for social sharing
// - Twitter Card tags for Twitter sharing
// - Favicon and other icon declarations
// - Alternate language versions (if any)
// - Robots directives
// - Canonical URL
export const metadata = {
  ...getSEOTags(),
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
};


// Root layout component
// The bricolage font is set up as the default font - you can change this in globals.css & tailwind.config.ts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} font-bricolage antialiased`}>
        <Providers>
      
          {/* Main container for all pages */}
          <Header />
          <div>
            {children}
            <Analytics />
          </div>
          
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
