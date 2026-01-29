import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { site } from "@/data/site";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${site.name} | Peruvian Charcoal Chicken in East Boston, MA`,
  description:
    "Charcoal rotisserie chicken and Peruvian favorites. Call to order pickup or delivery. Order online through SkyTab.",
  metadataBase: new URL("https://pollosalabrasaelchalan.com"),
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-dvh bg-[#FFF4E0] text-[#121212] antialiased",
          fontSans.className
        )}
      >
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
