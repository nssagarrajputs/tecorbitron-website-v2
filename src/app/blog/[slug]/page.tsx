import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/client";
import { BlogPostSchema } from "@/components/StructuredData";

import PageHero from "@/components/ui/PageHero";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";
import { ptComponents } from "@/components/PortableTextFormat";
import type { Metadata } from "next";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

type BlogPost = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    readTime: number;
    coverImage: string | null;
    category: string;
    tags: string[];
    author: {
        name: string;
        role: string;
        photo: string | null;
    };
    body: PortableTextBlock[];
};

type RelatedPost = {
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: string | null;
};

// ─── Queries ──────────────────────────────────────────────────────────────────

const BLOG_DETAIL_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    "coverImage": coverImage.asset->url,
    "category": categories[0]->name,
    tags,
    "author": author->{
      name,
      role,
      "photo": photo.asset->url,
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{url}
      }
    }
  }
`;

const BLOG_RELATED_QUERY = groq`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(
        groq`*[_type == "post"]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 86400;

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await props.params;
    const post: BlogPost = await client.fetch(BLOG_DETAIL_QUERY, { slug });
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.tecorbitron.com/blog/${slug}`,
            images: post.coverImage
                ? [{ url: post.coverImage, width: 1200, height: 630 }]
                : [{ url: "/og-image.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : ["/og-image.png"],
        },
    };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;

    const [post, related]: [BlogPost, RelatedPost[]] = await Promise.all([
        client.fetch(BLOG_DETAIL_QUERY, { slug }),
        client.fetch(BLOG_RELATED_QUERY, { slug }),
    ]);

    if (!post) notFound();

    return (
        <main>
            <BlogPostSchema post={post} />

            <section className="dark side-layout-spacing">
                <div className="edge-dark mx-auto max-w-7xl border-x py-24">
                    <div className="side-breathing flex-vertical mx-auto max-w-4xl gap-y-12">
                        <div className="flex-vertical flex-col-reverse gap-y-6">
                            <h1 className="text-ink-primary text-h2 font-bold">
                                {post.title}
                            </h1>
                            <Link
                                href="/blog"
                                className="button-text flex w-fit items-center gap-2"
                            >
                                <ArrowLeft size={18} strokeWidth={1.4} /> Back
                            </Link>
                        </div>

                        <span className="text-ink-muted">
                            {post.publishedAt}
                        </span>

                        <div className="edge-dark relative aspect-video w-full border">
                            <Image
                                src={post.coverImage || DefBlogThumbnail}
                                alt={post.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 900px"
                                className="w-full object-cover"
                                preload
                            />
                        </div>

                        {post.excerpt && (
                            <p className="text-ink-primary border-malachite text-18 mt-16 border-l-4 pl-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                        )}

                        <div className="flex-vertical gap-8">
                            <PortableText
                                value={post.body}
                                components={ptComponents}
                            />
                        </div>

                        <div className="section-edge-dark"></div>

                        {post.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-malachite border-primary text-16 border px-4 py-2 font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="section-edge-dark"></div>

                        <div>
                            <h2 className="text-ink-muted text-body mb-6 uppercase">
                                Share this article
                            </h2>
                            <div className="text-ink-muted **:hover:text-ink-primary text-16 **:active:text-ink-primary flex flex-wrap items-center gap-3 font-medium underline-offset-4 **:hover:underline **:active:underline">
                                <a
                                    href="https://www.linkedin.com/company/tecorbitrons"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Tecorbitron on LinkedIn"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.instagram.com/tecorbitron"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Tecorbitron on Instagram"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://www.facebook.com/tecorbitron"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Tecorbitron on Facebook"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://www.youtube.com/@Tecorbitron"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Tecorbitron Youtube Channel"
                                >
                                    Copy URL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-edge-dark"></div>

            {/* Related Posts */}
            {related?.length > 0 && (
                <section className="dark side-layout-spacing">
                    <div className="mx-auto max-w-7xl">
                        <div className="edge-dark border-x">
                            <SectionHeaderCentered heading="Related Articles" />
                            <div className="edge-dark grid grid-cols-1 border-l lg:grid-cols-3">
                                {related.map((rel) => (
                                    <div
                                        key={rel.slug}
                                        className="edge-dark side-breathing border-t border-r py-16"
                                    >
                                        <div className="edge-dark relative aspect-video w-full border">
                                            <Image
                                                src={
                                                    rel.coverImage ||
                                                    DefBlogThumbnail
                                                }
                                                alt={rel.title}
                                                fill
                                                loading="lazy"
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col-reverse gap-6 pt-8">
                                            <h3 className="text-ink-primary text-body leading-snug font-medium">
                                                {rel.title}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={`/blog/${rel.slug}`}
                                                    className="button-text"
                                                >
                                                    Read Article
                                                </Link>
                                                <span className="text-ink-muted text-14">
                                                    {formatDate(
                                                        rel.publishedAt,
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
