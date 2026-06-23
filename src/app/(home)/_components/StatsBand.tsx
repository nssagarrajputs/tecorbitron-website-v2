"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

const stats = [
    { value: 6, suffix: "+", label: "Years of Expertise", decimal: false },
    { value: 120, suffix: "+", label: "Projects Delivered", decimal: false },
    { value: 100, suffix: "+", label: "Happy Clients", decimal: false },
    { value: 30, suffix: "+", label: "Industries Covered", decimal: false },
];

function CountUp({
    target,
    suffix,
    decimal,
}: {
    target: number;
    suffix: string;
    decimal: boolean;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1500;
                    const totalFrames = Math.round(duration / 16);
                    let frame = 0;

                    const timer = setInterval(() => {
                        frame++;
                        // easeOut curve
                        const progress =
                            1 - Math.pow(1 - frame / totalFrames, 3);
                        const current = target * progress;
                        setCount(
                            decimal
                                ? Math.round(current * 10) / 10
                                : Math.floor(current),
                        );

                        if (frame >= totalFrames) {
                            setCount(target);
                            clearInterval(timer);
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, decimal]);

    return (
        <span ref={ref}>
            {decimal ? count.toFixed(1) : count}
            {suffix}
        </span>
    );
}
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

export default function StatsBand() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="bg-canvas-white side-layout-spacing dark">
            <div className="bg-canvas mx-auto max-w-7xl">
                <div className="edge-dark border-x">
                    <SectionHeaderCentered heading="Real Work. Real Results." />
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="edge-dark grid grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className={`edge-dark flex flex-col items-center gap-2 border-t border-r px-2 py-16 text-center`}
                        >
                            <p className="text-malachite text-h1 font-mono font-black tracking-tight">
                                <CountUp
                                    target={stat.value}
                                    suffix={stat.suffix}
                                    decimal={stat.decimal}
                                />
                            </p>
                            <p className="text-ink-secondary text-body">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
