import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/basic-ui/PageHero";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import type { Metadata } from "next";
import DefProjectThumbnail from "@/assets/other/default-thumbnail.webp";

export const revalidate = 21600;

export const metadata: Metadata = {
    title: "Case Studies — Real Projects by Tecorbitron",
    description:
        "See what we've built — real projects delivered for startups and businesses across industries. From websites and apps to e-commerce and custom digital solutions.",
    keywords: [
        "Tecorbitron case studies",
        "web development projects India",
        "app development projects",
        "digital solutions work",
        "client projects Tecorbitron",
    ],
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Case Studies — Real Projects by Tecorbitron",
        description:
            "See what we've built — real projects delivered for startups and businesses across industries. From websites and apps to e-commerce and custom digital solutions.",
        url: "https://www.tecorbitron.com/portfolio",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export type Project = {
    title: string;
    slug: string;
    thumbnail: string | null;
    techStack: string[];
};

const PORTFOLIO_LIST_QUERY = groq`
  *[_type == "project"] | order(completedAt desc) {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "techStack": techStack[]->name,
  }
`;

export default async function PortfolioPage() {
    const projects = await client.fetch<Project[]>(PORTFOLIO_LIST_QUERY);

    return (
        <main>
            {/* <PageHero
                eyebrow="Case Studies"
                title="Projects That Matter"
                description="A curated selection of our work across web, mobile, software, and AI — each project measured by real business outcomes."
            /> */}

            <section className="bg-canvas-white side-breathing py-24">
                <div className="mx-auto max-w-7xl">
                    {projects.length === 0 ? (
                        /* ── Empty state ── */
                        <div className="flex flex-col items-center gap-4 py-16 text-center">
                            <span className="text-5xl">🚧</span>
                            <h3 className="text-typocolor-primary text-h4 font-bold">
                                Projects Coming Soon
                            </h3>
                            <p className="text-typocolor-muted text-small max-w-sm font-light">
                                We&apos;re currently updating our portfolio.
                                Check back soon or{" "}
                                <Link
                                    href="/contact"
                                    className="text-malachite-rich font-semibold hover:underline"
                                >
                                    contact us
                                </Link>{" "}
                                to see our work directly.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                            {projects.map((proj) => (
                                <div
                                    key={proj.slug}
                                    className="group flex flex-col overflow-hidden"
                                >
                                    {/* Thumbnail */}
                                    <div className="rounded-2 border-hairlight relative h-48 overflow-hidden border sm:h-56 md:h-64 lg:h-72">
                                        <Image
                                            src={
                                                proj.thumbnail ||
                                                DefProjectThumbnail
                                            }
                                            alt={proj.title}
                                            fill
                                            className="smooth-transition h-full w-full scale-105 object-cover group-hover:scale-102"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col py-6">
                                        <h3 className="text-ink-light-primary text-h4 line-clamp-2 leading-snug font-medium">
                                            {proj.title}
                                        </h3>

                                        <div className="mt-auto flex flex-col gap-5 pt-6">
                                            {proj.techStack?.length > 0 && (
                                                <div className="border-base flex flex-wrap gap-2 border-t pt-5">
                                                    {proj.techStack.map(
                                                        (tech) => (
                                                            <span
                                                                key={tech}
                                                                className="bg-canvas-soft text-16 text-ink-light-muted px-2 py-0.5 font-semibold select-none"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}

                                            <Link
                                                href={`/case-studies/${proj.slug}`}
                                                className="border-hairdark text-ink-light-primary mt-6 w-fit border px-4 py-2 underline-offset-4 group-hover:underline"
                                            >
                                                View Case Study
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
