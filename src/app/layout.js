import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Disha A Kewalramani | Luxury Interior Design & Quiet Luxury Studio",
  description: "Bespoke residential and commercial environments where functionality meets quiet luxury. Curating timeless spaces with warmth, elegance, and thoughtful materiality from Nagpur, India.",
  keywords: ["Disha A Kewalramani", "Disha Kewalramani", "Interior Designer Nagpur", "Luxury Interior Nagpur", "Bespoke Furniture", "Quiet Luxury Design", "Terracotta Haven", "Nagpur Interior Studio"],
  authors: [{ name: "Disha A Kewalramani" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-studio-beige text-studio-charcoal">
        {children}
      </body>
    </html>
  );
}
