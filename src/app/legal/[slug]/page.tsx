import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import { privacyPolicy, termsAndConditions } from "@/content/legal-data";

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
                highlight={doc.hero.highlight}
                description={doc.hero.description}
            />

            <SectionContainer width="md">
                {/* Intro note */}
                <p className="text-body leading-relaxed font-semibold italic">
                    {doc.intro}
                </p>

                {/* Sections */}
                <article className="flex flex-col gap-12">
                    {doc.sections.map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className="flex scroll-mt-28 flex-col gap-4"
                        >
                            <h2 className="text-typocolor-primary text-body border-base border-b pb-3 font-bold">
                                {section.title}
                            </h2>
                            <div className="text-typocolor-secondary text-small leading-relaxed whitespace-pre-line">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </article>

                {/* Bottom nav */}
                <div className="border-base flex-center flex-wrap gap-8 border-t pt-8 md:justify-between">
                    <p className="text-typocolor-muted text-small font-semibold">
                        Last Updated: {doc.meta.lastUpdated}
                    </p>
                    <BrandBtn href={doc.crossLink.href} variant="primary">
                        {doc.crossLink.label}
                    </BrandBtn>
                </div>
            </SectionContainer>
        </main>
    );
}
