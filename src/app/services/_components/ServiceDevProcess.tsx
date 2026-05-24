"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { ServiceDevProcess } from "@/content/services-data";

type Props = { data: ServiceDevProcess };

export default function ServiceDevProcess({ data }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = data.li[activeIndex];
    const total = data.li.length;

    return (
        <SectionContainer width="lg">
            <h2 className="text-h2 gradient-heading text-center font-bold">
                {data.heading}
            </h2>

            {/* Step selector — desktop only */}
            <div className="scrollbar-none hidden -mx-1 overflow-x-auto px-1 pb-1 lg:block lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
                <ol className="flex min-w-max items-start gap-0 lg:min-w-0 lg:justify-center">
                    {data.li.map((item, i) => {
                        const isActive = activeIndex === i;
                        const isLast = i === total - 1;
                        return (
                            <li
                                key={item.title}
                                className="flex items-start"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(i)}
                                    className="group flex w-22 flex-col items-center gap-2.5 px-1 sm:w-28 lg:w-32"
                                >
                                    <span
                                        className={`transi-base flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-black sm:h-11 sm:w-11 ${
                                            isActive
                                                ? "bg-malachite text-white shadow-soft"
                                                : "border-base text-typocolor-muted border bg-bkg-secondary group-hover:border-malachite"
                                        }`}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className={`text-xmall transi-base text-center leading-snug font-semibold ${
                                            isActive
                                                ? "text-malachite-rich"
                                                : "text-typocolor-muted group-hover:text-typocolor-primary"
                                        }`}
                                    >
                                        {item.title}
                                    </span>
                                </button>
                                {!isLast && (
                                    <div
                                        className="bg-surface mt-5 hidden h-0.5 w-6 shrink-0 lg:block xl:w-10"
                                        aria-hidden
                                    />
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* Mobile accordion */}
            <div className="flex flex-col gap-3 lg:hidden">
                {data.li.map((item, i) => {
                    const isOpen = activeIndex === i;
                    return (
                        <div
                            key={item.title}
                            className={`transi-base rounded-4 overflow-hidden border ${
                                isOpen
                                    ? "border-malachite shadow-soft"
                                    : "border-base"
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                            >
                                <span
                                    className={`transi-base flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                                        isOpen
                                            ? "bg-malachite text-white"
                                            : "bg-bkg-secondary text-typocolor-muted"
                                    }`}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`text-small transi-base flex-1 font-bold ${
                                        isOpen
                                            ? "text-malachite-rich"
                                            : "text-typocolor-primary"
                                    }`}
                                >
                                    {item.title}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`text-typocolor-muted transi-base shrink-0 ${
                                        isOpen ? "text-malachite rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.28,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-4 px-4 pb-5 sm:px-5">
                                            <div className="rounded-3 relative aspect-video w-full overflow-hidden">
                                                <Image
                                                    src={item.img as string}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="100vw"
                                                />
                                            </div>
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

            {/* Desktop — unified detail card */}
            <div className="cardbox hidden overflow-hidden lg:block">
                <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-80 xl:min-h-96">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={active.img as string}
                                    alt={active.title}
                                    fill
                                    className="object-cover"
                                    sizes="50vw"
                                    priority={activeIndex === 0}
                                />
                                <div className="from-deepspace-deep/80 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
                                <p className="text-xmall absolute bottom-5 left-5 font-bold tracking-widest text-white/70 uppercase">
                                    Step {String(activeIndex + 1).padStart(2, "0")}{" "}
                                    of {String(total).padStart(2, "0")}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-center gap-6 p-8 xl:p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{
                                    duration: 0.28,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="flex flex-col gap-5"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-xmall text-malachite-rich font-bold tracking-widest uppercase">
                                        Step{" "}
                                        {String(activeIndex + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>
                                    <h3 className="text-h3 text-typocolor-primary font-bold">
                                        {active.title}
                                    </h3>
                                </div>

                                <div className="bg-malachite h-1 w-12 rounded-full" />

                                <p className="text-body text-typocolor-secondary leading-relaxed">
                                    {active.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex items-center gap-2 pt-2">
                            {data.li.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Go to step ${i + 1}`}
                                    className={`transi-base h-1.5 rounded-full ${
                                        i === activeIndex
                                            ? "bg-malachite w-8"
                                            : "bg-surface hover:bg-malachite/40 w-1.5"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
