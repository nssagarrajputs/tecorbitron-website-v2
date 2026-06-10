"use client";

import { useState } from "react";
import Link from "next/link";
import { groq } from "next-sanity";

import Image from "next/image";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";

type Post = {
    title: string;
    slug: string;
    publishedAt: string;
    readTime: number;
    category: string;
    coverImage: string | null;
};

type Category = {
    name: string;
    slug: string;
};

type Props = {
    posts: Post[];
    categories: Category[];
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function BlogListing({ posts, categories }: Props) {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? posts : posts.filter((p) => p.category === active);

    return (
        <section className="py-24">
            <div className="flex-vertical side-breathing mx-auto max-w-7xl gap-24">
                <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 gap-y-4">
                    <button
                        onClick={() => setActive("All")}
                        className={`text-14 smooth-transition cursor-pointer rounded-full px-6 py-2 font-mono ${
                            active === "All"
                                ? "bg-primary border-primary text-ink-dark-primary border text-white"
                                : "hover:border-primary border-secondary-active text-ink-dark-secondary border bg-white"
                        }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => setActive(cat.name)}
                            className={`text-14 smooth-transition cursor-pointer rounded-full px-6 py-2 font-mono ${
                                active === cat.name
                                    ? "bg-primary border-primary text-ink-dark-primary border text-white"
                                    : "hover:border-primary border-secondary-active text-ink-dark-secondary border bg-white"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 gap-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug}>
                                <div className="group flex-vertical overflow-hidden">
                                    {/* Thumbnail */}
                                    <div className="bg-deepspace rounded-2 relative h-44 overflow-hidden">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover grayscale-75 transition-transform duration-500 group-hover:scale-103 group-hover:grayscale-0"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                    <div className="flex flex-col-reverse gap-4 py-4">
                                        <h3 className="text-ink-dark-primary text-body leading-snug font-medium">
                                            {post.title}
                                        </h3>
                                        <div className="text-14 mt-auto flex items-center gap-4 pt-3">
                                            <span className="text-primary smooth-transition group-hover:text-malachite font-mono underline-offset-4 group-hover:underline">
                                                Read Article
                                            </span>
                                            <span className="text-ink-dark-muted font-mono">
                                                {formatDate(post.publishedAt)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 py-32 text-center">
                        <p className="text-ink-dark-muted text-h4 font-medium">
                            No articles found in the category
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
