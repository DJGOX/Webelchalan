"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import SocialIcons from "@/components/ui/SocialIcons";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location-hours", label: "Location & Hours" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#1A1A1A]/95 font-sans text-white backdrop-blur-md transition-all shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="z-50 flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={160}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((i) => {
            const isActive = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C4120D]",
                  isActive ? "text-[#C4120D]" : "text-white/80"
                )}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: redes + Order Now */}
        <div className="hidden items-center gap-4 pl-6 md:flex">
          <SocialIcons
            variant="social"
            className="flex-wrap gap-1.5 [&>a]:p-2 [&>a]:rounded-md"
          />
          <a
            href={`tel:${site.phones[0]}`}
            className="rounded-md bg-[#C4120D] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:!text-[#C4120D] hover:border-2 hover:border-[#C4120D] shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden active:bg-white/10"
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-5">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="absolute top-0 block h-0.5 w-full bg-white transition-transform"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-white transition-opacity"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="absolute bottom-0 block h-0.5 w-full bg-white transition-transform"
            />
          </div>
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-[#1A1A1A] px-4 pt-20 pb-8 md:hidden"
          >
            <div className="absolute left-4 top-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt={site.name}
                  width={140}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              {nav.map((i) => {
                const isActive = pathname === i.href;
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-black uppercase tracking-tight transition-colors",
                      isActive ? "text-[#C4120D]" : "text-white hover:text-[#C4120D]"
                    )}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-4 px-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/70">
                Síguenos
              </p>
              <SocialIcons variant="social" className="justify-center" />
              <a
                href={site.orderOnlineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-lg bg-[#C4120D] py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg transition-transform active:scale-95 hover:bg-white hover:!text-[#C4120D] hover:border hover:border-[#C4120D]"
              >
                Order Online
              </a>
              <a
                href={`tel:${site.phones[0]}`}
                className="flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 py-4 text-base font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-transform active:scale-95 active:bg-white/10"
              >
                Call {site.phones[0]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
