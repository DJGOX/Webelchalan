"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Carlos M.",
        role: "East Boston Local",
        text: "I've tried every rotisserie place in the city, but El Chalan is on another level. That green sauce? Pure magic. I've been a regular for 10 years and it never misses.",
        stars: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Food Blogger",
        text: "The Lomo Saltado here is the real deal. Smoky, savory, and huge portions. It’s authentic comfort food done right. The staff always makes you feel like family.",
        stars: 5,
    },
    {
        name: "David R.",
        role: "Verified Customer",
        text: "You can taste the charcoal in every bite of the chicken. Juicy, crispy skin, and perfect seasoning. It's my go-to spot for Sunday takeout.",
        stars: 5,
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1 text-[#F57C00]">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg">
                    {i < count ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <Section variant="accent" className="bg-[#1a1a1a]">
            <SectionHeading
                title="What Our Customers Say"
                subtitle="We take pride in serving our community with love and dedication."
                className="text-white [&_h2]:text-white [&_div]:text-white/70"
            />

            <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10"
                    >
                        <StarRating count={t.stars} />
                        <p className="mt-4 text-white/90 italic leading-relaxed">"{t.text}"</p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C62828] to-[#F57C00] flex items-center justify-center font-bold text-white text-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-white text-sm">{t.name}</div>
                                <div className="text-xs text-white/50">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
