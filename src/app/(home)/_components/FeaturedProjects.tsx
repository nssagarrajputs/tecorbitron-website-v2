import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

type PortfolioPreviewProject = {
    projectName: string;
    slug: string;
    thumbnail: string | null;
    summary: string;
};

const PORTFOLIO_PREVIEW_QUERY = groq`
  *[_type == "project" && featured == true] | order(completedAt desc) [0...3] {
    projectName,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    summary,
  }
`;

export default async function FeaturedProjects() {
    const projects: PortfolioPreviewProject[] = await client.fetch(
        PORTFOLIO_PREVIEW_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing grid grid-cols-1 gap-y-12 border-x py-12 md:py-18 lg:grid-cols-2 lg:py-24">
                    <div className="">
                        <span className="text-12 font-mono">Case Studies</span>
                        <h2 className="text-h2 font-serif">
                            Real Projects. Real Impact.
                        </h2>
                    </div>
                    <div className="flex-vertical justify-end md:items-end">
                        <Link
                            href={"/case-studies"}
                            className="text-16 border-hairdark hover:bg-canvas active:bg-canvas active:text-ink-dark-primary hover:text-ink-dark-primary smooth-transition w-fit border px-4 py-2 font-medium"
                        >
                            View All Case Studies →
                        </Link>
                    </div>
                </div>
                <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="edge-light mx-auto flex flex-col overflow-hidden border-t border-r"
                        >
                            {/* Thumbnail */}
                            <div className="bg-deepspace relative h-52 overflow-hidden">
                                {project.thumbnail ? (
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.projectName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className="from-deepspace to-deepspace-soft absolute inset-0 bg-linear-to-br">
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                                backgroundSize: "24px 24px",
                                            }}
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/20">
                                            {project.projectName.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-evenly gap-8 p-6">
                                <h3 className="text-h4 text-ink-light-primary font-medium tracking-tight">
                                    {project.projectName}
                                </h3>

                                <p className="text-ink-light-secondary line-clamp-2">
                                    {project.summary}
                                </p>

                                <Link
                                    href={`/portfolio/${project.slug}`}
                                    className="border-hairdark text-ink-light-primary w-fit border px-4 py-2 underline-offset-4 hover:underline"
                                >
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
