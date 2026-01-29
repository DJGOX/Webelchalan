"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1a0f0a]">
            {/* Background: pollos a la brasa al carbón */}
            <Image
                src="/images/hero-pollo-brasa.png"
                alt=""
                fill
                priority
                quality={95}
                className="object-cover object-center contrast-[1.05] saturate-[1.08]"
                sizes="100vw"
            />

            {/* Overlay para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center pt-20">
                <div className="mx-auto max-w-5xl px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex justify-center"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Pollos A La Brasa El Chalan"
                            width={280}
                            height={84}
                            className="h-20 w-auto object-contain drop-shadow-2xl sm:h-24 md:h-28"
                            priority
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mb-8 flex justify-center"
                    >
                        <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-bold tracking-[0.2em] text-white/90 backdrop-blur-md uppercase">
                            Est. 1995 • East Boston
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-fire-text mb-2 text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl"
                    >
                        Authentic Peruvian
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-fire-text mb-10 text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl"
                    >
                        Rotisserie
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mx-auto mb-12 max-w-2xl text-xl font-light text-gray-200 sm:text-2xl"
                    >
                        Experience the <span className="font-semibold text-white">smoky, juicy taste</span> of tradition.
                        <br className="hidden sm:block" />
                        Marinated for 24 hours, charcoal roasted to perfection.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col gap-5 sm:flex-row sm:justify-center"
                    >
                        <a
                            href="tel:6175679452"
                            className="relative flex items-center justify-center overflow-hidden rounded-md bg-primary px-10 py-5 text-lg font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 hover:brightness-110 hover:shadow-primary/50"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Call to Order
                            </span>
                        </a>

                        <Link
                            href="/order"
                            className="group relative flex items-center justify-center overflow-hidden rounded-md border-2 border-white/30 bg-white/5 px-10 py-5 text-lg font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:!text-[#C4120D] hover:border-white"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Order Online
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30"
            >
                <span className="sr-only">Scroll Down</span>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>
        </section>
    );
}
