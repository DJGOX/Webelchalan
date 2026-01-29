"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
    name: string;
    price?: number | null;
    description?: string;
    image: string;
    delay?: number;
}

export function ProductCard({
    name,
    price,
    description,
    image,
    delay = 0,
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#C4120D] transition-colors">
                        {name}
                    </h3>
                    <span className="shrink-0 rounded-md bg-[#C4120D] px-3 py-1 text-lg font-bold text-white shadow-md">
                        {formatPrice(price)}
                    </span>
                </div>

                {description && (
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {description}
                    </p>
                )}

                <button className="w-full rounded-md bg-[#C4120D] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#1A1A1A] hover:shadow-xl active:scale-95">
                    Add to Order
                </button>
            </div>
        </motion.div>
    );
}
