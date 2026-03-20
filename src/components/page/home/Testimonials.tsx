"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder",
        company: "RetailNow",
        initial: "R",
        quote: "Tecorbitron delivered our entire e-commerce platform in under 30 days. The quality was exceptional and communication was seamless throughout. Highly recommend.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "CEO",
        company: "MedConnect",
        initial: "P",
        quote: "The mobile app they built for us exceeded our expectations. They understood our vision perfectly and the final product was exactly what we needed — maybe better.",
        rating: 5,
    },
    {
        name: "Arjun Kapoor",
        role: "Marketing Head",
        company: "GrowthBrands",
        initial: "A",
        quote: "Our organic traffic tripled in 6 months thanks to their SEO strategy. They don't just talk numbers — they deliver them. Best investment we made this year.",
        rating: 5,
    },
    {
        name: "Sneha Gupta",
        role: "CTO",
        company: "FinEdge",
        initial: "S",
        quote: "Their team integrated our legacy system with a modern dashboard flawlessly. The code quality and documentation were both top-notch. We'll be working with them again.",
        rating: 5,
    },
    {
        name: "Vikram Nair",
        role: "Director",
        company: "EduLaunch",
        initial: "V",
        quote: "From design to deployment, the entire process was smooth. They kept us updated at every step and delivered ahead of schedule. Exactly the partner we needed.",
        rating: 5,
    },
];

// ── Types ─────────────────────────────────────────────────────────────────────
type Testimonial = (typeof testimonials)[0];

// ── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-malachite"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

// ── Motion Variants ───────────────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 260, damping: 22 },
    },
};

// ── Card ──────────────────────────────────────────────────────────────────────
function TestimonialCard({ t, active }: { t: Testimonial; active: boolean }) {
    return (
        <motion.div
            animate={{
                scale: active ? 1 : 0.95,
                opacity: active ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className={`relative flex h-full flex-col gap-5 overflow-hidden rounded-md p-12 transition-colors duration-300 ${
                active
                    ? "border-malachite border-2 bg-white/10"
                    : "border border-white/10 bg-white/5"
            }`}
        >
            {/* Decorative quote mark */}
            <span
                className="pointer-events-none absolute -top-4 -right-2 leading-none font-black text-white/4 select-none"
                style={{ fontSize: "9rem" }}
                aria-hidden
            >
                &ldquo;
            </span>

            {/* Stars */}
            <Stars count={t.rating} />

            {/* Quote */}
            <p
                className={`relative flex-1 leading-relaxed ${
                    active ? "text-white" : "text-white/50"
                }`}
            >
                &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                        active
                            ? "bg-malachite text-deepspace-deep"
                            : "bg-white/10 text-white"
                    }`}
                >
                    {t.initial}
                </div>
                <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs font-medium text-white/40">
                        {t.role}, {t.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Testimonials() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
        },
        [autoplay.current],
    );

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
        autoplay.current.reset();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
        autoplay.current.reset();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            emblaApi?.scrollTo(index);
            autoplay.current.reset();
        },
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="bg-deepspace overflow-hidden px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* ── HEADER ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="mb-14 flex flex-col items-center gap-4 text-center"
                >
                    <motion.div variants={itemVariants}>
                        <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                            <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                            <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                                Testimonials
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-black tracking-tight text-white sm:text-5xl"
                    >
                        What Our{" "}
                        <span className="text-malachite">Clients Say</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-xl text-base leading-relaxed font-light text-white/50"
                    >
                        Their success is our greatest accomplishment.
                    </motion.p>
                </motion.div>

                {/* ── CAROUSEL ── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Embla viewport */}
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-4 px-4">
                            {testimonials.map((t, index) => (
                                <div
                                    key={t.name}
                                    className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_45%]"
                                >
                                    <TestimonialCard
                                        t={t}
                                        active={index === selectedIndex}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── CONTROLS ── */}
                    <div className="mt-10 flex items-center justify-center gap-6">
                        {/* Prev */}
                        <button
                            onClick={scrollPrev}
                            className="hover:border-malachite/40 hover:bg-malachite/10 hover:text-malachite flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollTo(i)}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === selectedIndex
                                            ? "bg-malachite h-2 w-6"
                                            : "h-2 w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={scrollNext}
                            className="hover:border-malachite/40 hover:bg-malachite/10 hover:text-malachite flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
