import {
  Playfair_Display,
  DM_Sans,
  Hind_Siliguri,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// English Heading
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// English Body & UI
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Bangla Text
const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SR Glow Beauty | Your Beauty, Your Glow",
  description:
    "Discover your beauty essentials with SR Glow Beauty. Explore skincare, makeup and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${playfair.variable}
        ${dmSans.variable}
        ${hindSiliguri.variable}
        h-full antialiased
      `}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
