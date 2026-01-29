"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BestSellers from "@/components/home/BestSellers";
import StorySection from "@/components/home/StorySection";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />


      <BestSellers />
      <StorySection />
      <Testimonials />

      {/* Final CTA / Location Snippet */}
      <section className="relative py-24 bg-[#121212] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/menu/seafood.png" alt="Background" fill className="object-cover grayscale" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Taste the Tradition?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us at our East Boston location for a meal you won't forget.
            <span className="block mt-2 text-base opacity-60">405 Chelsea St, East Boston, MA 02128</span>
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pollos+A+La+Brasa+El+Chalan+East+Boston"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
