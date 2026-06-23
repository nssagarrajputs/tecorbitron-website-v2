import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";
import { ptComponents } from "@/components/PortableTextFormat";
import { CaseStudySchema } from "@/components/StructuredData";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTAFormat from "@/components/templates/CTAFormat";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

type TechStack = {
    name: string;
    category: string;
};

type RelatedProject = {
    projectName: string;
    title: string;
    slug: string;
    thumbnail: string | null;
};

// ─── Queries ──────────────────────────────────────────────────────────────────

const PORTFOLIO_DETAIL_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    projectName,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    "techStack": techStack[]->{name, category},
    projectTypes,
    completedAt,
    livePreview,
    summary,
    problem,
    solution,
    result,
    "screenshots": screenshots[]{
      "url": asset->url,
      alt
    },
  }
`;

const PORTFOLIO_RELATED_QUERY = groq`
  *[_type == "project" && slug.current != $slug] | order(completedAt desc) [0...3] {
    projectName,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
  }
`;

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(
        groq`*[_type == "project"]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 86400;

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await props.params;
    const proj = await client.fetch(PORTFOLIO_DETAIL_QUERY, { slug });
    if (!proj) return {};
    return {
        title: proj.projectName,
        description: proj.summary
            ? proj.summary.slice(0, 155)
            : `${proj.projectName} — A project by Tecorbitron Solutions`,
        alternates: { canonical: `/portfolio/${slug}` },
        openGraph: {
            title: `${proj.projectName} — Tecorbitron Portfolio`,
            description: proj.summary?.slice(0, 155) ?? "",
            url: `https://www.tecorbitron.com/portfolio/${slug}`,
            images: proj.thumbnail
                ? [{ url: proj.thumbnail, width: 1200, height: 630 }]
                : [{ url: "/og-image.png", width: 1200, height: 630 }],
        },
    };
}

// ─── Case Study Section ───────────────────────────────────────────────────────

function CaseStudySection({
    title,
    content,
}: {
    title: string;
    content: PortableTextBlock[] | null;
}) {
    if (!content || content.length === 0) return null;
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif">{title}</h2>
            <div className="flex flex-col gap-3">
                <PortableText value={content} components={ptComponents} />
            </div>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;

    const [projData, related] = await Promise.all([
        client.fetch(PORTFOLIO_DETAIL_QUERY, { slug }),
        client.fetch(PORTFOLIO_RELATED_QUERY, { slug }),
    ]);

    if (!projData) notFound();

    return (
        <main>
            <CaseStudySchema project={projData} />

            <PageHero eyebrow="Case Study" title={projData.title} />

            {/* Breadcrumb */}
            <section className="bg-canvas-white side-layout-spacing">
                <div className="side-breathing edge-light mx-auto max-w-7xl border-x py-6">
                    <nav className="text-ink-muted text-14 flex items-center gap-1.5">
                        <Link href="/" className="button-text">
                            Home
                        </Link>
                        <ChevronRight size={12} />
                        <Link href="/case-studies" className="button-text">
                            Portfolio
                        </Link>
                        <ChevronRight size={12} />
                        <span className="line-clamp-1">
                            {projData.projectName}
                        </span>
                    </nav>
                </div>
            </section>

            <div className="section-edge-light"></div>

            {/* Thumbnail */}
            <section className="bg-canvas-white side-layout-spacing">
                <div className="edge-light mx-auto max-w-7xl border-x">
                    <div className="relative aspect-video w-full">
                        <Image
                            src={projData.thumbnail || DefBlogThumbnail}
                            alt={projData.projectName}
                            fill
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            <div className="section-edge-light"></div>

            {/* Industries + Tech Stack */}
            <section className="bg-canvas-white side-layout-spacing">
                <div className="mx-auto max-w-7xl">
                    <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                        {projData.industries?.length > 0 && (
                            <div className="edge-light side-breathing border-r py-16">
                                <h3 className="text-ink-secondary text-18 mb-6 font-medium">
                                    Industry
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {projData.industries.map((ind: string) => (
                                        <span
                                            key={ind}
                                            className="bg-canvas-soft text-ink-muted px-4 py-2 font-medium capitalize"
                                        >
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {projData.techStack?.length > 0 && (
                            <div className="edge-light side-breathing border-r py-16 max-md:border-t">
                                <h3 className="text-ink-secondary text-18 mb-6 font-medium">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {projData.techStack.map(
                                        (tech: TechStack) => (
                                            <span
                                                key={tech.name}
                                                className="bg-canvas-soft text-ink-muted px-4 py-2 font-medium capitalize"
                                            >
                                                {tech.name}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="section-edge-light"></div>

            <section className="bg-canvas-white side-layout-spacing">
                <div className="mx-auto max-w-7xl">
                    {projData.summary && (
                        <div className="side-breathing edge-light flex flex-col gap-3 border-x py-16">
                            <h2 className="text-h3 font-serif">Summary</h2>
                            <p className="text-body text-ink-secondary leading-relaxed">
                                {projData.summary}
                            </p>
                        </div>
                    )}

                    <div className="section-edge-light"></div>

                    {projData.problem && (
                        <div className="side-breathing edge-light flex flex-col gap-3 border-x py-16">
                            <CaseStudySection
                                title="The Problem"
                                content={projData.problem}
                            />
                        </div>
                    )}

                    <div className="section-edge-light"></div>

                    {projData.solution && (
                        <div className="side-breathing edge-light flex flex-col gap-3 border-x py-16">
                            <CaseStudySection
                                title="Our Solution"
                                content={projData.solution}
                            />
                        </div>
                    )}
                </div>
            </section>

            <div className="section-edge-light"></div>

            {/* Screenshots */}
            {projData.screenshots?.length > 0 && (
                <section className="side-layout-spacing dark">
                    <div className="edge-dark side-breathing mx-auto max-w-7xl border-x py-16">
                        <h2 className="text-h3 text-ink-primary mb-16 font-serif">
                            Screenshots
                        </h2>
                        <div className="flex-vertical mx-auto max-w-5xl gap-12">
                            {projData.screenshots.map(
                                (
                                    shot: { url: string; alt?: string },
                                    idx: number,
                                ) => (
                                    <div
                                        key={idx}
                                        className="edge-dark w-full border"
                                    >
                                        <Image
                                            src={shot.url}
                                            alt={
                                                shot.alt ??
                                                `${projData.projectName} — Screenshot ${idx + 1}`
                                            }
                                            width={1200}
                                            height={1000}
                                            className="h-full w-full"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </section>
            )}

            <div className="section-edge-light"></div>

            {/* Case Study — Results */}
            <section className="bg-canvas-white side-layout-spacing">
                <div className="mx-auto max-w-7xl">
                    {projData.result && (
                        <div className="side-breathing edge-light flex flex-col gap-3 border-x py-16">
                            <CaseStudySection
                                title="Results & Outcome"
                                content={projData.result}
                            />
                        </div>
                    )}
                </div>
            </section>

            <div className="section-edge-light"></div>

            {/* Related Projects */}
            {related?.length > 0 && (
                <section className="bg-canvas-white side-layout-spacing">
                    <div className="mx-auto max-w-7xl">
                        <div className="edge-light border-x">
                            <SectionHeaderCentered heading="Related Projects" />
                        </div>
                        <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-3">
                            {related.map((proj: RelatedProject) => (
                                <div
                                    key={proj.slug}
                                    className="edge-light side-breathing border-t border-r py-16"
                                >
                                    <div className="edge-light relative aspect-video w-full border">
                                        <Image
                                            src={
                                                proj.thumbnail ||
                                                DefBlogThumbnail
                                            }
                                            alt={proj.projectName}
                                            fill
                                            loading="lazy"
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-ink-primary text-body my-8 line-clamp-4 leading-snug font-medium">
                                        {proj.title}
                                    </h3>
                                    <Link
                                        href={`/portfolio/${proj.slug}`}
                                        className="button-primary"
                                    >
                                        View Case Study
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTAFormat
                eyebrow="YOUR TURN"
                heading="Want Results Like This?"
                primaryAction={{
                    text: "Start Your Project",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "Browse Portfolio",
                    href: "/portfolio",
                }}
            />
        </main>
    );
}
