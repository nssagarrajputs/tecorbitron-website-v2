"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";

type FAQItem = {
    question: string;
    answer: string;
    link?: string;
    linkText?: string;
};

type FAQSectionProps = {
    bg?: "bg-white" | "bg-bkg-primary";
    eyebrow: string;
    heading: string;
    highlight: string;
    support?: string;
    items: FAQItem[];
    defaultOpenIndex?: number | null;
};

export default function FAQFormat({
    bg = "bg-bkg-primary",
    eyebrow,
    heading,
    highlight,
    support,
    items,
    defaultOpenIndex = null,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <section className={`${bg} h-breathing-468 v-breathing-20`}>
            <div className="section-vlex-gap mx-auto max-w-3xl">
                <SectionHeader
                    eyebrow={eyebrow}
                    heading={heading}
                    highlight={highlight}
                    support={support}
                />

                <div className="flex flex-col gap-4">
                    {items.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <article
                                key={index}
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className="border-border-strong duration-normal ease-standard border-b transition-colors"
                            >
                                <div className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left">
                                    <h4 className="text-body font-bold">
                                        {faq.question}
                                    </h4>

                                    <div
                                        className={`text-typocolor-secondary duration-normal ease-standard flex-center rounded-full transition-transform ${
                                            isOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                    >
                                        <Plus />
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="px-5 pb-5">
                                        <p className="text-typocolor-muted text-small leading-relaxed">
                                            {faq.answer}
                                        </p>

                                        {faq.link && faq.linkText ? (
                                            <div className="mt-3">
                                                <Link
                                                    href={faq.link}
                                                    className="text-small text-malachite duration-fast ease-standard hover:text-malachite-rich inline-flex font-bold transition-colors"
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
        </section>
    );
}
