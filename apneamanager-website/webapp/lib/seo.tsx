import type { Metadata } from "next";
import config from "@/config";

/**
 * Generates SEO metadata for Next.js pages
 * This function centralizes all SEO-related configurations
 * Import and use in layout.tsx as: export const metadata = getSEOTags();
 */
export const getSEOTags = (): Metadata => ({
  // Basic metadata
  title: {
    // Main title for your app - appears in search results and browser tabs
    default: `${config.appName} - Breath Hold Training & Freediving App`,
    // Template for other pages: "Page Name | Your App Name"
    template: `%s | ${config.appName}`
  },
  // Main description used for search results and social sharing
  // Optimized to be between 25-160 characters for better search engine display
  description: "Master breath holding with personalized CO2 and O2 tables. Track progress and enhance freediving performance with the ultimate training companion.",
  // Favicon and other icons
  icons: {
    icon: config.appIcon,
  },
  // Keywords help with SEO - add or remove based on your specific features
  keywords: [
    "freediving app",
    "breath hold training",
    "apnea training",
    "CO2 tables",
    "O2 tables",
    "freediving training",
    "spearfishing training",
    "static apnea",
    "empty lungs training",
    "diaphragmatic breathing",
    "pranayama exercises",
    "box breathing",
    "square breathing",
    "breath hold timer",
    "apnea tables",
    "freediving tables",
    "breath hold exercises",
    "freediving progress tracking",
    "apnea training app",
    "underwater training",
    "breath hold capacity",
    "freediving performance",
    "spearfishing preparation",
    "breathing exercises",
    "apnea training tables",
  ],
  // Author and creator information
  authors: [{ name: "Andy Oz" }],
  creator: "Andy Oz",
  // Base URL for all metadata - IMPORTANT: Update with your production domain
  metadataBase: new URL(`https://${config.domainName}`),

  // OpenGraph metadata (for social media sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${config.domainName}`,
    siteName: config.appName,
    title: `${config.appName} - Master Your Breath Hold Training`,
    description: "Master breath holding with personalized CO2 and O2 tables. Track progress and enhance freediving performance.",
    images: [
      {
        url: `https://${config.domainName}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${config.appName} - Advanced Breath Hold Training App`,
        type: 'image/png',
        secureUrl: `https://${config.domainName}/og-image.png`,
      },
    ],
  },

  // Twitter card metadata (for Twitter sharing)
  twitter: {
    card: 'summary_large_image',
    title: `${config.appName} - Professional Breath Hold Training`,
    description: "Master breath holding with personalized CO2 and O2 tables. Track progress and enhance freediving performance.",
    images: [`https://${config.domainName}/og-image.png`],
    creator: config.social.x,
    site: config.social.x,
  },

  // Search engine crawler settings
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

  // Search engine verification codes
  // Get these from Google Search Console, Bing Webmaster Tools, etc.
  // verification: {
  //   google: 'your-google-verification-code',
  // },
});

/**
 * Renders Schema.org structured data
 * This helps search engines better understand your content
 * Import and use in layout.tsx within the <body> tag: {renderSchemaTags()}
 */
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: "Professional breath hold training app featuring personalized CO2 and O2 tables, progress tracking, and comprehensive breathing exercises for freedivers and spearfishers.",
          image: `https://${config.domainName}/ApneaManagerIcon.ico`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Andy Oz",
          },
          // Update these values based on your application
          datePublished: "2024-01-24",
          applicationCategory: "SportsApplication",
          operatingSystem: "iOS",
          offers: [
            {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Pro Version",
              description: "Advanced features including customizable tables, additional breathing exercises, and training reminders",
              price: "4.99",
              priceCurrency: "USD",
            }
          ],
          keywords: "freediving, breath hold training, apnea training, CO2 tables, O2 tables, spearfishing",
          featureList: [
            "Personalized CO2 and O2 tables",
            "Empty lungs training",
            "Diaphragmatic breathing exercises",
            "Progress tracking and analytics",
            "Square breathing and pranayama",
            "Training reminders",
            "Customizable settings"
          ],
        }),
      }}
    ></script>
  );
};
