import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";

// Type
type BlogTeaserPost = {
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: string | null;
};

const BLOG_TEASER_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

// Format date helper
function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default async function FeaturedBlogs() {
    const posts: BlogTeaserPost[] = await client.fetch(
        BLOG_TEASER_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing grid grid-cols-1 gap-y-12 border-x py-12 md:py-18 lg:grid-cols-2 lg:py-24">
                    <div className="">
                        <span className="text-12 font-mono">Insights</span>
                        <h2 className="text-h2 font-serif">From Our Experts</h2>
                    </div>
                    <div className="flex-vertical justify-end md:items-end">
                        <Link
                            href={"/case-studies"}
                            className="text-16 border-hairdark hover:bg-canvas active:bg-canvas active:text-ink-dark-primary hover:text-ink-dark-primary smooth-transition w-fit border px-4 py-2 font-medium"
                        >
                            Read All Insights →
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 edge-light border-l">
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            className="edge-light flex flex-col overflow-hidden border-t border-r"
                        >
                            {/* Thumbnail */}
                            <div className="bg-deepspace relative h-44 overflow-hidden">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
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
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-vertical p-6">
                                <h3 className="text-h4 text-ink-light-primary line-clamp-3 h-30 font-medium tracking-tight">
                                    {post.title}
                                </h3>

                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="border-hairdark text-ink-light-primary w-fit border px-4 py-2 underline-offset-4 hover:underline"
                                    >
                                        Read Article
                                    </Link>

                                    <p className="text-ink-light-muted">
                                        {formatDate(post.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
