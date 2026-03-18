import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ExternalLink,
    ArrowRight,
    Calendar,
    Tag,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import {
    PORTFOLIO_DETAIL_QUERY,
    PORTFOLIO_RELATED_QUERY,
} from "@/sanity/queries/portfolio";
import type {
    PortableTextComponentProps,
    PortableTextBlock,
    PortableTextMarkComponentProps,
    PortableTextListComponent,
    PortableTextListItemComponent,
} from "@portabletext/react";
import StructuredData, {
    portfolioProjectSchema,
} from "@/components/StructuredData";


// ── Static Params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(
        groq`*[_type == "project"]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 21600;

// ── Portable Text Components ──────────────────────────────────────────────────
const ptComponents = {
    block: {
        normal: ({
            children,
        }: PortableTextComponentProps<PortableTextBlock>) => (
            <p className="text-muted text-base leading-relaxed font-light">
                {children}
            </p>
        ),
        h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h2 className="text-deepspace mt-8 mb-3 text-xl font-black">
                {children}
            </h2>
        ),
        h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h3 className="text-deepspace mt-6 mb-2 text-lg font-black">
                {children}
            </h3>
        ),
        h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h4 className="text-deepspace mt-4 mb-1 text-base font-black">
                {children}
            </h4>
        ),
    },
    list: {
        bullet: (({ children }) => (
            <ul className="flex flex-col gap-2 pl-5">{children}</ul>
        )) as PortableTextListComponent,
        number: (({ children }) => (
            <ol className="flex list-decimal flex-col gap-2 pl-5">
                {children}
            </ol>
        )) as PortableTextListComponent,
    },
    listItem: {
        bullet: (({ children }) => (
            <li className="text-muted list-disc text-base leading-relaxed font-light">
                {children}
            </li>
        )) as PortableTextListItemComponent,
        number: (({ children }) => (
            <li className="text-muted text-base leading-relaxed font-light">
                {children}
            </li>
        )) as PortableTextListItemComponent,
    },
    marks: {
        strong: ({ children }: PortableTextMarkComponentProps) => (
            <strong className="text-deepspace font-black">{children}</strong>
        ),
        em: ({ children }: PortableTextMarkComponentProps) => (
            <em className="italic">{children}</em>
        ),
        underline: ({ children }: PortableTextMarkComponentProps) => (
            <span className="underline">{children}</span>
        ),
    },
};

// ── Case Study Section ────────────────────────────────────────────────────────
function CaseStudySection({
    title,
    content,
    accent = false,
}: {
    title: string;
    content: PortableTextBlock[] | null;
    accent?: boolean;
}) {
    if (!content || content.length === 0) return null;
    return (
        <div
            className={`flex flex-col gap-4 rounded-2xl p-6 ${accent ? "bg-malachite-dim" : "bg-surface border-border border"}`}
        >
            <h2
                className={`text-sm font-black tracking-widest uppercase ${accent ? "text-malachite-rich" : "text-muted"}`}
            >
                {title}
            </h2>
            <div className="flex flex-col gap-3">
                <PortableText value={content} components={ptComponents} />
            </div>
        </div>
    );
}

// ── Format date ───────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
    });
}

// ── Format project type ───────────────────────────────────────────────────────
function formatType(type: string) {
    return type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;

    const [projData, related] = await Promise.all([
        client.fetch(PORTFOLIO_DETAIL_QUERY, { slug }),
        client.fetch(PORTFOLIO_RELATED_QUERY, { slug }),
    ]);

    if (!projData) notFound();

    const hasAnyCaseStudy =
        projData.problem ||
        projData.solution ||
        projData.process ||
        projData.challenges ||
        projData.result;

    const showClient =
        projData.showClientPublicly &&
        (projData.clientName || projData.testimonialQuote);

    return (
        <main>
            <StructuredData data={portfolioProjectSchema(projData)} />;
            {/* ── HERO ── */}
            <section className="relative w-full overflow-hidden pt-24">
                <div className="bg-deepspace relative h-72 w-full sm:h-96 lg:h-120">
                    {projData.thumbnail ? (
                        <Image
                            src={projData.thumbnail}
                            alt={projData.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                            <span className="text-9xl font-black text-white/10">
                                {projData.title.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(7,30,45,0.95) 0%, rgba(7,30,45,0.4) 50%, transparent 100%)",
                        }}
                    />

                    {/* Title overlay */}
                    <div className="absolute right-0 bottom-0 left-0 px-4 pb-8">
                        <div className="mx-auto flex max-w-7xl flex-col gap-3">
                            {projData.industries?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {projData.industries.map((ind: string) => (
                                        <span
                                            key={ind}
                                            className="border-malachite/30 bg-malachite/10 text-malachite rounded-full border px-3 py-0.5 text-xs font-bold backdrop-blur-sm"
                                        >
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <h1 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                                {projData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── CONTENT ── */}
            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
                        {/* ── MAIN ── */}
                        <div className="flex flex-col gap-8">
                            {/* Back */}
                            <Link
                                href="/portfolio"
                                className="text-muted hover:text-deepspace inline-flex w-fit items-center gap-1.5 text-xs font-bold transition-colors duration-200"
                            >
                                <ArrowLeft size={13} /> Back to Portfolio
                            </Link>

                            {/* Summary */}
                            {projData.summary && (
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-deepspace text-lg font-black">
                                        About This Project
                                    </h2>
                                    <p className="text-muted text-base leading-relaxed font-light">
                                        {projData.summary}
                                    </p>
                                </div>
                            )}

                            {/* ── Case Study Sections ── */}
                            {hasAnyCaseStudy && (
                                <div className="flex flex-col gap-5">
                                    <CaseStudySection
                                        title="The Problem"
                                        content={projData.problem}
                                    />
                                    <CaseStudySection
                                        title="Our Solution"
                                        content={projData.solution}
                                        accent
                                    />
                                    <CaseStudySection
                                        title="Our Process"
                                        content={projData.process}
                                    />
                                    <CaseStudySection
                                        title="Challenges"
                                        content={projData.challenges}
                                    />
                                    <CaseStudySection
                                        title="Results"
                                        content={projData.result}
                                        accent
                                    />
                                </div>
                            )}

                            {/* ── Screenshots ── */}
                            {projData.screenshots?.length > 0 && (
                                <div className="flex flex-col gap-5">
                                    <h2 className="text-deepspace text-lg font-black">
                                        Screenshots
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {projData.screenshots.map(
                                            (
                                                shot: {
                                                    url: string;
                                                    alt?: string;
                                                },
                                                idx: number,
                                            ) => (
                                                <div
                                                    key={idx}
                                                    className="border-border overflow-hidden rounded-2xl border shadow-sm"
                                                >
                                                    <Image
                                                        src={shot.url}
                                                        alt={
                                                            shot.alt ??
                                                            `${projData.title} — Screenshot ${idx + 1}`
                                                        }
                                                        width={1200}
                                                        height={800}
                                                        className="w-full object-cover"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ── Testimonial ── */}
                            {showClient && (
                                <div className="bg-deepspace flex flex-col gap-4 rounded-2xl p-6">
                                    {projData.testimonialQuote && (
                                        <p className="text-lg leading-relaxed font-light text-white/80 italic">
                                            &ldquo;{projData.testimonialQuote}
                                            &rdquo;
                                        </p>
                                    )}
                                    {projData.clientName && (
                                        <div className="flex flex-col gap-0.5 border-t border-white/10 pt-4">
                                            <span className="text-sm font-black text-white">
                                                {projData.clientName}
                                            </span>
                                            {projData.designation && (
                                                <span className="text-muted text-xs font-medium">
                                                    {projData.designation}
                                                    {projData.companyName &&
                                                        `, ${projData.companyName}`}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* ── Related Projects ── */}
                            {related?.length > 0 && (
                                <div className="border-border flex flex-col gap-5 border-t pt-6">
                                    <h2 className="text-deepspace text-lg font-black">
                                        More Projects
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {related.map(
                                            (proj: {
                                                slug: string;
                                                thumbnail: string | null;
                                                title: string;
                                                industries: string[];
                                            }) => (
                                                <Link
                                                    key={proj.slug}
                                                    href={`/portfolio/${proj.slug}`}
                                                    className="group border-border bg-surface hover:border-malachite flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                                                >
                                                    <div className="bg-deepspace relative h-36 overflow-hidden">
                                                        {proj.thumbnail ? (
                                                            <Image
                                                                src={
                                                                    proj.thumbnail
                                                                }
                                                                alt={proj.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                sizes="(max-width: 640px) 100vw, 33vw"
                                                            />
                                                        ) : (
                                                            <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                                                                <span className="text-3xl font-black text-white/10">
                                                                    {proj.title.charAt(
                                                                        0,
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 p-4">
                                                        {proj
                                                            .industries?.[0] && (
                                                            <span className="text-malachite-rich text-xs font-bold">
                                                                {
                                                                    proj
                                                                        .industries[0]
                                                                }
                                                            </span>
                                                        )}
                                                        <h3 className="text-deepspace group-hover:text-malachite-rich line-clamp-2 text-sm leading-snug font-black transition-colors duration-200">
                                                            {proj.title}
                                                        </h3>
                                                        <span className="text-malachite-rich mt-1 inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                                            View{" "}
                                                            <ArrowRight
                                                                size={11}
                                                            />
                                                        </span>
                                                    </div>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── SIDEBAR ── */}
                        <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:h-fit">
                            {/* Project Info */}
                            <div className="bg-surface border-border flex flex-col gap-4 rounded-2xl border p-5">
                                <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                    Project Info
                                </h3>

                                {/* Project Types */}
                                {projData.projectTypes?.length > 0 && (
                                    <div className="flex flex-col gap-2">
                                        <span className="text-deepspace flex items-center gap-1.5 text-xs font-black">
                                            <Tag size={11} /> Type
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {projData.projectTypes.map(
                                                (type: string) => (
                                                    <span
                                                        key={type}
                                                        className="border-border text-subtle rounded-full border bg-white px-2.5 py-0.5 text-xs font-semibold"
                                                    >
                                                        {formatType(type)}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Completed At */}
                                {projData.completedAt && (
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-deepspace flex items-center gap-1.5 text-xs font-black">
                                            <Calendar size={11} /> Completed
                                        </span>
                                        <span className="text-muted text-xs font-medium">
                                            {formatDate(projData.completedAt)}
                                        </span>
                                    </div>
                                )}

                                {/* Industries */}
                                {projData.industries?.length > 0 && (
                                    <div className="flex flex-col gap-2">
                                        <span className="text-deepspace text-xs font-black">
                                            Industry
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {projData.industries.map(
                                                (ind: string) => (
                                                    <span
                                                        key={ind}
                                                        className="bg-malachite-dim text-malachite-rich rounded-full px-2.5 py-0.5 text-xs font-bold"
                                                    >
                                                        {ind}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Tech Stack */}
                            {projData.techStack?.length > 0 && (
                                <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                    <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {projData.techStack.map(
                                            (tech: string) => (
                                                <span
                                                    key={tech}
                                                    className="border-border text-subtle rounded-full border bg-white px-3 py-1 text-xs font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Live Preview */}
                            {projData.livePreview && (
                                <a
                                    href={projData.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-malachite text-deepspace-deep hover:bg-malachite-soft flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <ExternalLink size={15} />
                                    View Live Project
                                </a>
                            )}
                            {/* CTA */}
                            <div className="bg-deepspace flex flex-col gap-3 rounded-2xl p-5">
                                <p className="text-malachite text-xs font-black tracking-wider uppercase">
                                    Like what you see?
                                </p>
                                <p className="text-sm leading-relaxed font-light text-white/50">
                                    We can build something like this for your
                                    business — or better.
                                </p>
                                <Link
                                    href="/contact"
                                    className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200"
                                >
                                    Start a Project <ArrowRight size={12} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
