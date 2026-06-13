import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";

import { privacyPolicy, termsAndConditions } from "@/content/legal-data";
import Link from "next/link";

type LegalSection = {
    id: string;
    title: string;
    content: string;
};

type LegalDocument = {
    meta: {
        title: string;
        description: string;
        canonical: string;
        lastUpdated: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        highlight: string;
        description: string;
    };
    intro: string;
    crossLink: {
        label: string;
        href: string;
    };
    sections: LegalSection[];
};

// ── Registry — add new legal docs here ───────────────────────────────────────
const legalDocs: Record<string, LegalDocument> = {
    "privacy-policy": privacyPolicy,
    terms: termsAndConditions,
};

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
    return Object.keys(legalDocs).map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await props.params;
    const doc = legalDocs[slug];
    if (!doc) return {};

    return {
        title: doc.meta.title,
        description: doc.meta.description,
        alternates: { canonical: doc.meta.canonical },
        robots: { index: false, follow: false },
    };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function LegalPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;
    const doc = legalDocs[slug];

    if (!doc) notFound();

    return (
        <main>
            <PageHero
                eyebrow={doc.hero.eyebrow}
                title={doc.hero.title}
                description={doc.hero.description}
            />

            <section className="edge-light bg-canvas-white side-breathing mx-auto max-w-7xl border-x py-24">
                <div className="mx-auto max-w-6xl">
                    {/* Intro note */}
                    <p className="text-body text-ink-light-primary mb-16 leading-relaxed italic">
                        {doc.intro}
                    </p>

                    {/* Sections */}
                    <article className="flex-vertical gap-16">
                        {doc.sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="flex-vertical gap-8"
                            >
                                <h2 className="text-ink-light-primary text-h4 edge-dark border-b pb-4 font-medium">
                                    {section.title}
                                </h2>

                                <p className="text-ink-light-secondary text-16 font-mono leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </article>

                    {/* Bottom nav */}
                    <div className="edge-dark flex-center mt-16 flex-wrap gap-8 border-t pt-16 md:justify-between">
                        <p className="text-ink-light-muted text-16 font-mono">
                            Last Updated: {doc.meta.lastUpdated}
                        </p>

                        <Link
                            href={doc.crossLink.href}
                            className="edge-dark text-ink-light-primary text-16 hover:bg-canvas-black hover:text-ink-dark-primary smooth-transition active:bg-canvas-black active:text-ink-dark-primary border px-4 py-2 font-medium"
                        >
                            {doc.crossLink.label}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
