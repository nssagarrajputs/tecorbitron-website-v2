import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/client";
import StructuredData, { blogPostSchema } from "@/components/StructuredData";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import PageHero from "@/components/basic-ui/PageHero";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";
import { ptComponents } from "@/components/PortableTextFormat";
import type { Metadata } from "next";

// ─── Types ────────────────────────────────────────────────────────────────────

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
            <StructuredData data={blogPostSchema(post)} />

            <PageHero width="lg" eyebrow="Blog Post" title={post.title} />

            <SectionContainer width="md">
                {/* Cover Image */}
                <div className="border-base rounded-4 shadow-soft overflow-hidden border">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={2000}
                            height={2000}
                            className="h-120 w-full object-cover"
                            priority
                        />
                    ) : (
                        <Image
                            src={DefBlogThumbnail}
                            alt={post.title}
                            width={2000}
                            height={2000}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    )}
                </div>

                {/* Back + Excerpt */}
                <div className="flex flex-col gap-8">
                    <Link
                        href="/blog"
                        className="action-btn flex w-fit items-center gap-2 hover:text-white"
                    >
                        <ArrowLeft size={13} strokeWidth={3} />
                        Back to Blog
                    </Link>

                    {post.excerpt && (
                        <p className="text-typocolor-primary border-malachite text-body border-l-4 pl-5 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}
                </div>

                {/* Body */}
                <div className="flex flex-col gap-5">
                    <PortableText value={post.body} components={ptComponents} />
                </div>

                <hr />

                {/* Tags */}
                {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-bkg-primary border-base text-typocolor-muted text-xmall shadow-soft rounded-full border px-4 py-2 font-semibold"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Author Card */}
                {post.author && (
                    <div className="cardbox mx-auto flex w-fit items-start gap-6 p-6 px-12">
                        {post.author.photo ? (
                            <Image
                                src={post.author.photo}
                                alt={post.author.name}
                                width={52}
                                height={52}
                                className="h-auto shrink-0 rounded-full object-cover"
                            />
                        ) : (
                            <div className="bg-deepspace flex h-13 w-13 shrink-0 items-center justify-center rounded-full text-lg font-black text-white">
                                {post.author.name.charAt(0)}
                            </div>
                        )}
                        <div className="flex flex-col gap-1">
                            <span className="text-typocolor-primary text-small font-bold">
                                {post.author.name}
                            </span>
                            <span className="text-typocolor-secondary text-xmall font-semibold">
                                {post.author.role}
                            </span>
                        </div>
                    </div>
                )}

                <hr />

                {/* Related Posts */}
                {related?.length > 0 && (
                    <div className="section-vlex-gap">
                        <SectionHeader
                            heading="Related Article"
                            highlight="Article"
                        />
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {related.map((rel) => (
                                <div
                                    key={rel.slug}
                                    className="group hover:border-malachite cardbox flex flex-col overflow-hidden"
                                >
                                    <div className="bg-deepspace relative h-32 overflow-hidden">
                                        {rel.coverImage ? (
                                            <Image
                                                src={rel.coverImage}
                                                alt={rel.title}
                                                width={500}
                                                height={500}
                                                className="h-auto w-full object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src={DefBlogThumbnail}
                                                alt={rel.title}
                                                width={500}
                                                height={500}
                                                className="h-auto w-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-6 p-4">
                                        <h3 className="text-typocolor-primary text-small line-clamp-2 leading-snug font-bold">
                                            {rel.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={`/blog/${rel.slug}`}
                                                className="action-btn"
                                            >
                                                View Blog
                                            </Link>
                                            <span className="text-typocolor-muted text-xmall">
                                                {formatDate(rel.publishedAt)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </main>
    );
}
