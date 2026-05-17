import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/queries/blog";
import SectionContainer from "@/components/basic-ui/SectionContainer";

type RecentPost = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    category: string;
    coverImage: string | null;
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default async function RecentBlogs() {
    const posts: RecentPost[] = await client.fetch(
        RECENT_BLOGS_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <SectionContainer
            width="md"
            heading="Recently Published"
            highlight="Published"
        >
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group cardbox hover:border-malachite transi-base flex flex-col overflow-hidden"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-60 overflow-hidden">
                            {post.coverImage ? (
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="transi-base object-cover group-hover:scale-[1.05]"
                                    sizes=""
                                />
                            ) : (
                                <div className="from-deepspace to-deepspace-soft absolute inset-0 bg-linear-to-br" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                            <h3 className="group-hover:text-typocolor-secondary text-h4 transi-base leading-snug font-bold tracking-tight">
                                {post.title}
                            </h3>
                            <p className="text-typocolor-secondary line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                <span className="text-xmall font-semibold">
                                    {formatDate(post.publishedAt)}
                                </span>
                                <span className="text-malachite text-xmall transi-base inline-flex items-center gap-1 font-bold opacity-0 group-hover:gap-2 group-hover:opacity-100">
                                    Read <ArrowRight size={10} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </SectionContainer>
    );
}
