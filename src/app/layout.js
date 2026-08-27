import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://patilassociates.com"),
  title: {
    default: "Patil Associates | Luxury Interior Design & Quiet Luxury Studio Nagpur",
    template: "%s | Patil Associates",
  },
  description: "Nagpur's premier luxury interior design studio. Specializing in bespoke residential and commercial spaces, quiet luxury architecture, custom furniture, and tactile spatial planning.",
  keywords: [
    "Patil Associates",
    "Interior Designer Nagpur",
    "Luxury Interior Design Nagpur",
    "Best Interior Designers in Nagpur",
    "Quiet Luxury Interior Design",
    "Bespoke Furniture Nagpur",
    "Commercial Interior Designer Nagpur",
    "Residential Interior Architecture",
    "Modern Minimalist Interior",
    "Terracotta Haven Interior",
    "Architectural Interior Studio Nagpur",
    "Living Room Design Nagpur",
    "Luxury Home Decor India"
  ],
  authors: [{ name: "Patil Associates", url: "https://patilassociates.com" }],
  creator: "Patil Associates",
  publisher: "Patil Associates",
  category: "Interior Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patil Associates | Luxury Interior Design & Quiet Luxury Studio",
    description: "Bespoke residential and commercial environments where functionality meets quiet luxury. Curating timeless spaces in Nagpur, India.",
    url: "https://patilassociates.com",
    siteName: "Patil Associates",
    images: [
      {
        url: "/images/hero-interior.png",
        width: 1200,
        height: 630,
        alt: "Patil Associates — Luxury Interior Design Studio Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patil Associates | Luxury Interior Design Studio",
    description: "Creating timeless spaces with warmth, elegance, and thoughtful details in Nagpur, India.",
    images: ["/images/hero-interior.png"],
    creator: "@patilassociates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#F4EFEA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://patilassociates.com/#website",
      "url": "https://patilassociates.com",
      "name": "Patil Associates",
      "description": "Nagpur's premier luxury interior design studio specializing in bespoke residential, commercial, and quiet luxury spaces.",
      "publisher": {
        "@id": "https://patilassociates.com/#studio"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": ["InteriorDesignStudio", "LocalBusiness", "ProfessionalService"],
      "@id": "https://patilassociates.com/#studio",
      "name": "Patil Associates",
      "alternateName": ["Patil Associates Interior Design", "Studio Patil Associates Nagpur"],
      "image": "https://patilassociates.com/images/hero-interior.png",
      "logo": "https://patilassociates.com/images/hero-interior.png",
      "description": "Bespoke residential and commercial interior design studio in Nagpur, Maharashtra. Specializing in quiet luxury, spatial harmony, custom handcrafted furniture, and tactile materiality.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nagpur Studio",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1458,
        "longitude": 79.0882
      },
      "url": "https://patilassociates.com",
      "telephone": "+91 9823577149",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
      "areaServed": [
        {
          "@type": "City",
          "name": "Nagpur"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Maharashtra"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "knowsAbout": [
        "Quiet Luxury Interior Design",
        "Bespoke Residential Architecture",
        "Commercial Workspace Planning",
        "Tactile Plaster and Natural Materials",
        "Custom Handcrafted Furniture",
        "Turnkey Interior Execution"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/showw_up/",
        "https://linkedin.com"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Interior Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Interior Design",
              "description": "Bespoke residential design, spatial planning, and luxury home curation in Nagpur."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial & Workspace Design",
              "description": "Sophisticated commercial environments balancing productivity with quiet luxury."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Furniture & Tactile Styling",
              "description": "Handcrafted bespoke furniture, material curation, and complete interior execution."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://patilassociates.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What interior design services does Patil Associates offer in Nagpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patil Associates offers comprehensive luxury interior architecture, bespoke residential design, commercial workspace planning, custom handcrafted furniture design, and complete turnkey interior curation in Nagpur, Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a design consultation with Patil Associates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a consultation directly through our website by submitting an inquiry form or contacting our Nagpur studio via WhatsApp at +91 98235 77149."
          }
        },
        {
          "@type": "Question",
          "name": "What is the design philosophy of Patil Associates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our philosophy centers on quiet luxury, spatial harmony, and authentic materiality. We balance warm organic textures, natural light, and refined craftsmanship to create timeless environments."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        
        {/* Geo meta tags for Local SEO in Nagpur */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458, 79.0882" />

        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-studio-beige text-studio-charcoal">
        {children}
      </body>
    </html>
  );
}
