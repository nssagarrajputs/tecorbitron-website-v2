"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { ServiceDevProcess } from "@/content/services-data";

type Props = { data: ServiceDevProcess };

export default function ServiceDevProcess({ data }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = data.li[activeIndex];

    return (
        <SectionContainer width="lg">
            {/* Heading */}
            <h2 className="text-h2 gradient-heading text-center font-bold">
                {data.heading}
            </h2>

            {/* ── MOBILE & TABLET — accordion ───────────────────────── */}
            <div className="flex flex-col gap-3 lg:hidden">
                {data.li.map((item, i) => {
                    const isOpen = activeIndex === i;
                    return (
                        <div
                            key={item.title}
                            className={`transi-base rounded-4 overflow-hidden border ${
                                isOpen ? "border-malachite" : "border-base"
                            }`}
                        >
                            {/* Accordion header */}
                            <button
                                onClick={() => setActiveIndex(i)}
                                className="flex w-full items-center gap-4 px-5 py-4 text-left"
                            >
                                <span
                                    className={`transi-base flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                                        isOpen
                                            ? "bg-malachite text-white"
                                            : "bg-bkg-secondary text-typocolor-muted"
                                    }`}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`transi-base text-small font-bold ${
                                        isOpen
                                            ? "text-malachite-rich"
                                            : "text-typocolor-primary"
                                    }`}
                                >
                                    {item.title}
                                </span>
                                <span
                                    className={`transi-base ml-auto text-lg font-light ${
                                        isOpen
                                            ? "text-malachite rotate-45"
                                            : "text-typocolor-muted"
                                    }`}
                                >
                                    +
                                </span>
                            </button>

                            {/* Accordion body */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="body"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-4 px-5 pb-5">
                                            {/* Image */}
                                            <div className="rounded-3 relative h-44 w-full overflow-hidden">
                                                <Image
                                                    src={item.img as string}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="100vw"
                                                />
                                            </div>
                                            {/* Description */}
                                            <p className="text-small text-typocolor-secondary leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* ── DESKTOP — 3 column ────────────────────────────────── */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-6">
                {/* LEFT — clickable titles */}
                <ul className="flex flex-col gap-2">
                    {data.li.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <li key={item.title}>
                                <button
                                    onClick={() => setActiveIndex(i)}
                                    className={`transi-base group rounded-4 flex w-full items-center gap-3 border px-5 py-4 text-left ${
                                        isActive
                                            ? "border-malachite bg-malachite/5"
                                            : "border-base hover:border-malachite/40"
                                    }`}
                                >
                                    <span
                                        className={`transi-base flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                                            isActive
                                                ? "bg-malachite text-white"
                                                : "bg-bkg-secondary text-typocolor-muted"
                                        }`}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className={`transi-base text-small font-bold ${
                                            isActive
                                                ? "text-malachite-rich"
                                                : "text-typocolor-primary"
                                        }`}
                                    >
                                        {item.title}
                                    </span>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="process-bar"
                                            className="bg-malachite ml-auto h-5 w-0.5 rounded-full"
                                        />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* CENTER — description */}
                <div className="border-base rounded-4 border p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                duration: 0.25,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                            className="flex h-full flex-col gap-6"
                        >
                            {/* Step number + title */}
                            <div className="flex flex-col gap-2">
                                <span className="text-xmall text-typocolor-muted font-bold tracking-widest uppercase">
                                    Step{" "}
                                    {String(activeIndex + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-h3 font-bold">
                                    {active.title}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div className="bg-malachite h-0.5 w-10 rounded-full" />

                            {/* Description */}
                            <p className="text-body text-typocolor-secondary leading-relaxed">
                                {active.description}
                            </p>

                            {/* Step progress dots */}
                            <div className="mt-auto flex gap-1.5">
                                {data.li.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`transi-base h-1.5 rounded-full ${
                                            i === activeIndex
                                                ? "bg-malachite w-6"
                                                : "bg-surface w-1.5"
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT — image */}
                <div className="rounded-4 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={active.img as string}
                                alt={active.title}
                                fill
                                className="object-cover"
                                sizes="25vw"
                                priority={activeIndex === 0}
                            />
                            {/* Bottom gradient overlay */}
                            <div className="from-deepspace-deep/70 pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t to-transparent" />
                            <p className="text-xmall absolute bottom-4 left-4 font-bold tracking-widest text-white/60 uppercase">
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(data.li.length).padStart(2, "0")}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
}
