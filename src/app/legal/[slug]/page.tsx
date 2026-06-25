import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

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

            <section className="side-layout-spacing">
                <div className="edge-light bg-canvas-white side-breathing mx-auto max-w-7xl border-x py-24">
                    {/* Intro note */}
                    <p className="text-18 text-ink-primary mb-16 leading-relaxed italic">
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
                                <h2 className="text-ink-primary text-h4 edge-dark border-b pb-4 font-medium">
                                    {section.title}
                                </h2>

                                <p className="text-ink-secondary text-16 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </article>

                    {/* Bottom nav */}
                    <div className="edge-light flex-center mt-16 flex-wrap gap-8 border-t pt-16 md:justify-between">
                        <p className="text-ink-muted text-16">
                            Last Updated: {doc.meta.lastUpdated}
                        </p>

                        <Link
                            href={doc.crossLink.href}
                            className="button-primary"
                        >
                            {doc.crossLink.label}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
