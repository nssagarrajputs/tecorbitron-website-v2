"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
    link?: string;
    linkText?: string;
};

type FAQSectionProps = {
    eyebrow: string;
    heading: string;
    items: FAQItem[];
    defaultOpenIndex?: number | null;
};

export default function FAQFormat({
    eyebrow,
    heading,
    items,
    defaultOpenIndex = null,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <section className="bg-canvas-surface">
            <div className="edge-light side-breathing mx-auto max-w-7xl border-x">
                <div className="mx-auto max-w-5xl">
                    <div className="text-ink-light-primary py-12 md:py-18 lg:py-24">
                        <div className="max-w-4xl">
                            <span className="text-12 font-mono">{eyebrow}</span>
                            <h2 className="text-h2 mb-8 font-serif">
                                {heading}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pb-24">
                        {items.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <article
                                    key={index}
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="edge-light border-b"
                                >
                                    <div className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left">
                                        <h4 className="text-h4 text-ink-light-primary">
                                            {faq.question}
                                        </h4>

                                        <div
                                            className={`text-ink-light-primary smooth-transition flex-center rounded-full ${
                                                isOpen
                                                    ? "rotate-45"
                                                    : "rotate-0"
                                            }`}
                                        >
                                            <Plus />
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="px-5 pb-5">
                                            <p className="text-ink-light-secondary text-body max-w-3xl leading-relaxed">
                                                {faq.answer}
                                            </p>

                                            {faq.link && faq.linkText ? (
                                                <div className="mt-3">
                                                    <Link
                                                        href={faq.link}
                                                        className="text-small text-malachite hover:text-malachite-rich transi-base inline-flex font-bold"
                                                    >
                                                        {faq.linkText}
                                                    </Link>
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
