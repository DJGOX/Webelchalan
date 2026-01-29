"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl"
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-lg text-[#666] max-w-2xl mx-auto" // mx-auto solo funciona si text-center
                >
                    {subtitle}
                </motion.div>
            )}

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                    "mt-6 h-1 w-24 bg-[#C62828]",
                    align === "center" ? "mx-auto" : "ml-0"
                )}
            />
        </div>
    );
}
