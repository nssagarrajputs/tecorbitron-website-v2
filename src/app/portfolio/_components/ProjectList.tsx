import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/app/portfolio/page";
import SectionContainer from "@/components/basic-ui/SectionContainer";

type Props = {
    featured: Project | null;
    rest: Project[];
};

export default function ProjectList({ featured, rest }: Props) {
    if (!featured && rest.length === 0) {
        return (
            <section className="px-4 py-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 py-16 text-center">
                    <span className="text-5xl">🚧</span>
                    <h3 className="text-deepspace text-xl font-black">
                        Projects Coming Soon
                    </h3>
                    <p className="text-muted max-w-sm text-sm font-light">
                        We&apos;re currently updating our portfolio. Check back
                        soon or{" "}
                        <Link
                            href="/contact"
                            className="text-malachite-rich font-semibold hover:underline"
                        >
                            contact us
                        </Link>{" "}
                        to see our work directly.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <SectionContainer>
            {/* ── FEATURED PROJECT ── */}
            {featured && (
                <div>
                    <h4 className="text-typocolor-muted text-small mb-5 font-bold tracking-widest uppercase">
                        Featured Project
                    </h4>
                    <Link
                        href={`/portfolio/${featured.slug}`}
                        className="group hover:border-malachite hover:shadow-deepspace/10 cardbox transi-base grid grid-cols-1 overflow-hidden hover:shadow-xl lg:grid-cols-2"
                    >
                        {/* Thumbnail */}
                        <div className="bg-deepspace relative h-64 overflow-hidden lg:h-auto lg:min-h-80">
                            {featured.thumbnail ? (
                                <Image
                                    src={featured.thumbnail}
                                    alt={featured.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            ) : (
                                <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                                    <span className="text-7xl font-black text-white/10">
                                        {featured.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                            <div className="bg-malachite-dim absolute top-4 left-4 rounded-full px-3 py-1">
                                <span className="text-typocolor-heading text-xmall font-bold">
                                    Featured
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between gap-6 p-8">
                            <div className="flex flex-col gap-4">
                                {/* Industries */}
                                {featured.industries?.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {featured.industries.map((ind) => (
                                            <span
                                                key={ind}
                                                className="bg-malachite-dim text-malachite-rich text-xmall rounded-full px-3 py-0.5 font-bold"
                                            >
                                                {ind}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <h2 className="text-typocolor-primary group-hover:text-malachite-rich text-h4 font-bold transition-colors duration-200 lg:text-3xl">
                                    {featured.title}
                                </h2>

                                {featured.summary && (
                                    <p className="text-typocolor-secondary line-clamp-3 leading-relaxed">
                                        {featured.summary}
                                    </p>
                                )}

                                {/* Tech Stack */}
                                {featured.techStack?.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {featured.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-deepspace-dim text-typocolor-secondary text-xmall rounded-full px-3 py-0.5 font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-malachite-rich text-small transi-base inline-flex items-center gap-1.5 font-bold group-hover:gap-3">
                                    View Case Study <ArrowRight size={14} />
                                </span>
                                {featured.livePreview && (
                                    <span className="text-typocolor-muted text-xmall flex items-center gap-1 font-semibold">
                                        <ExternalLink size={11} /> Live
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* ── ALL PROJECTS GRID ── */}
            {rest.length > 0 && (
                <div>
                    <p className="text-muted mb-5 text-xs font-bold tracking-widest uppercase">
                        All Projects
                    </p>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                        {rest.map((proj) => (
                            <Link
                                key={proj.slug}
                                href={`/portfolio/${proj.slug}`}
                                className="group hover:border-malachite hover:shadow-deepspace/5 cardbox transi-base flex flex-col overflow-hidden"
                            >
                                {/* Thumbnail */}
                                <div className="bg-deepspace relative h-72 overflow-hidden">
                                    {proj.thumbnail ? (
                                        <Image
                                            src={proj.thumbnail}
                                            alt={proj.title}
                                            fill
                                            className="scale-102 object-cover transition-transform duration-500 group-hover:scale-104"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="from-deepspace to-deepspace-soft flex h-full w-full items-center justify-center bg-linear-to-br">
                                            <span className="text-5xl font-black text-white/10">
                                                {proj.title.charAt(0)}
                                            </span>
                                        </div>
                                    )}

                                    {/* Industry badge */}
                                    {proj.industries?.[0] && (
                                        <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 backdrop-blur-sm">
                                            <span className="text-xs font-bold text-white">
                                                {proj.industries[0]}
                                            </span>
                                        </div>
                                    )}

                                    {/* Arrow on hover */}
                                    <div className="group-hover:bg-malachite group-hover:text-deepspace-deep absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                                        <ArrowRight size={13} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col gap-3 p-5">
                                    <h3 className="text-typocolor-primary group-hover:text-malachite-rich text-h4 leading-relaxed font-bold transition-colors duration-200">
                                        {proj.title}
                                    </h3>

                                    {/* Tech Stack — max 3 + more */}
                                    {proj.techStack?.length > 0 && (
                                        <div className="border-base mt-auto flex flex-wrap gap-1.5 border-t pt-3">
                                            {proj.techStack
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="bg-bkg-secondary text-typocolor-muted text-xmall rounded-full px-2.5 py-0.5 font-semibold"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {proj.techStack.length > 3 && (
                                                <span className="bg-bkg-secondary text-typocolor-muted text-xmall rounded-full px-2.5 py-0.5 font-semibold">
                                                    +{proj.techStack.length - 3}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </SectionContainer>
    );
}
