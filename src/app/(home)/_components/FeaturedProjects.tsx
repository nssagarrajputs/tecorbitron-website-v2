import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { SectionHeaderLeftRight } from "@/components/basic-ui/SectionHeaderType";
import DefProjectThumbnail from "@/assets/other/default-thumbnail.webp";

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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderLeftRight
                        eyebrow="Case Studies"
                        heading="Real Projects. Real Impact."
                        href="/case-studies"
                        hreflabel="View All Case Studies"
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="edge-light side-breathing flex-vertical gap-y-8 border-t border-r py-16"
                        >
                            {/* Thumbnail */}
                            <div className="edge-light relative aspect-4/2 border">
                                <Image
                                    src={
                                        project.thumbnail || DefProjectThumbnail
                                    }
                                    alt={project.projectName}
                                    fill
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="">
                                <h3 className="text-h4 text-ink-primary mb-6 font-medium tracking-tight">
                                    {project.projectName}
                                </h3>

                                <p className="text-ink-secondary mb-12 line-clamp-3 leading-relaxed">
                                    {project.summary}
                                </p>

                                <Link
                                    href={`/case-studies/${project.slug}`}
                                    className="button-secondary"
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
