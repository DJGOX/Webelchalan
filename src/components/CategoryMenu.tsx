"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuCategories } from "@/data/menu";
import { formatPrice, cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function CategoryMenu() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");
  const [openId, setOpenId] = useState<string | null>(menuCategories[0]?.id ?? null);

  const active = useMemo(
    () => menuCategories.find((c) => c.id === activeId) ?? menuCategories[0],
    [activeId]
  );

  return (
    <div className="space-y-4">
      {/* Sticky Categories Header */}
      <div className="sticky top-[98px] z-40 -mx-4 border-y border-black/5 bg-[#FFF4E0] px-4 py-2 md:top-[64px]">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {menuCategories.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveId(c.id);
                  setOpenId(c.id);
                }}
                className={cn(
                  "whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-[#C62828] text-white shadow-md scale-105"
                    : "bg-white text-[#121212] hover:bg-black/5"
                )}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="text-sm text-[#8E8E8E]">
          Some items may be marked as “Price varies”. Prices may change without notice.
        </div>
      </div>

      <div className="space-y-4">
        {menuCategories.map((cat) => {
          const isOpen = openId === cat.id;
          return (
            <div
              key={cat.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : cat.id)}
                className="flex w-full items-center justify-between px-4 py-4 text-left focus:outline-none"
              >
                <div className="text-lg font-bold">{cat.title}</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xl font-medium text-black/60">
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-black/5">
                      <div className="relative h-48 w-full">
                        <Image
                          src={cat.image}
                          alt={`${cat.title} category`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="rounded-lg bg-[#C62828] px-3 py-1 text-sm font-bold text-white shadow-sm">
                            {cat.title}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <ul className="grid gap-6 sm:grid-cols-2">
                          {cat.items.map((i) => (
                            <li key={i.name} className="flex flex-col gap-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="font-bold text-[#121212]">{i.name}</div>
                                <div
                                  className={cn(
                                    "shrink-0 font-bold",
                                    i.price === null || i.price === undefined
                                      ? "text-sm text-[#8E8E8E] italic"
                                      : "text-[#C62828]"
                                  )}
                                >
                                  {formatPrice(i.price)}
                                </div>
                              </div>
                              {i.description && (
                                <div className="text-sm leading-relaxed text-[#555]">
                                  {i.description}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl bg-white p-4 text-sm text-[#8E8E8E] shadow-sm">
        Prices may change without notice.
      </div>
    </div>
  );
}
