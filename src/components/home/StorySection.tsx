"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function StorySection() {
    return (
        <Section>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        title="Our Story"
                        align="left"
                        className="mb-8"
                    />
                    <div className="space-y-6 text-lg text-[#555]">
                        <p>
                            Everything we serve starts with tradition. Since 1995, <strong>Pollos a la Brasa El Chalan</strong> has been bringing the vibrant flavors of Peru to East Boston, centering our menu around our pride and joy: <em>Pollo a la Brasa</em>.
                        </p>
                        <p>
                            Our chicken is marinated for 24 hours in a secret family recipe of Andean herbs and spices, then slow-roasted in our imported <strong>charcoal rotisserie ovens</strong>. The result? A flavor profile that is impossibly smoky, juicy, and crisp—a taste you can only get from real wood fire.
                        </p>
                        <p>
                            We believe food is memory. Whether you grew up eating Lomo Saltado or you're tasting Aji Verde for the first time, we invite you to share a meal that feels like home.
                        </p>
                    </div>
                </motion.div>

                {/* Image Composition */}
                <div className="relative h-[400px] w-full lg:h-[500px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }} // Removed delay
                        className="absolute right-0 top-0 h-[85%] w-[85%] overflow-hidden rounded-2xl shadow-xl"
                    >
                        <Image
                            src="/images/hero.jpg" // Reusing hero image for now
                            alt="Our Kitchen"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute bottom-10 left-0 h-[50%] w-[50%] overflow-hidden rounded-2xl shadow-2xl border-4 border-white"
                    >
                        <Image
                            src="/images/menu/chicken.png"
                            alt="Peruvian Spices"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
