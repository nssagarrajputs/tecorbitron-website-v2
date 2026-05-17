import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/queries/blog";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";

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
                    <div
                        key={post.slug}
                        className="group cardbox hover:border-malachite transi-base flex flex-col overflow-hidden"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-60 overflow-hidden">
                            {post.coverImage ? (
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <Image
                                    src={DefBlogThumbnail}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="group-hover:text-typocolor-secondary text-h4 transi-base leading-snug font-bold tracking-tight">
                                {post.title}
                            </h3>
                            <p className="text-typocolor-secondary line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="action-btn"
                            >
                                View Blog
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
