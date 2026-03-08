"use client";
// src/components/page/blog/BlogListing.tsx

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
    "All",
    "Web Development",
    "SEO",
    "UI/UX",
    "AI & Tech",
    "Business",
];

const posts = [
    {
        category: "Web Development",
        title: "Why Next.js is the Best Choice for Your Business Website in 2025",
        date: "Mar 01, 2025",
        readTime: "5 min read",
        slug: "nextjs-best-choice-2025",
        gradient: "from-deepspace to-deepspace-soft",
    },
    {
        category: "SEO",
        title: "10 SEO Strategies That Actually Work for Small Businesses in India",
        date: "Feb 22, 2025",
        readTime: "7 min read",
        slug: "seo-strategies-small-business-india",
        gradient: "from-deepspace-rich to-deepspace",
    },
    {
        category: "UI/UX",
        title: "How Good UI/UX Design Directly Impacts Your Business Revenue",
        date: "Feb 15, 2025",
        readTime: "6 min read",
        slug: "uiux-design-business-revenue",
        gradient: "from-deepspace to-deepspace-rich",
    },
    {
        category: "AI & Tech",
        title: "How Small Businesses Can Leverage AI Without a Big Budget",
        date: "Feb 08, 2025",
        readTime: "8 min read",
        slug: "ai-for-small-businesses",
        gradient: "from-deepspace-soft to-deepspace",
    },
    {
        category: "Business",
        title: "Why Your Business Needs a Website — Not Just a Social Media Page",
        date: "Jan 30, 2025",
        readTime: "5 min read",
        slug: "website-vs-social-media",
        gradient: "from-deepspace-rich to-deepspace-soft",
    },
    {
        category: "Web Development",
        title: "React vs Next.js — Which One Should You Choose for Your Project?",
        date: "Jan 22, 2025",
        readTime: "6 min read",
        slug: "react-vs-nextjs",
        gradient: "from-deepspace to-deepspace-rich",
    },
];

export default function BlogListing() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? posts : posts.filter((p) => p.category === active);

    return (
        <section id="all-articles" className="bg-surface px-4 py-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-10">
                {/* ── Heading ── */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-deepspace text-3xl font-black tracking-tight sm:text-4xl">
                        All <span className="text-malachite">Articles</span>
                    </h2>

                    {/* Category pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                                    active === cat
                                        ? "bg-malachite text-deepspace-deep shadow-sm"
                                        : "border-border text-muted hover:border-malachite/40 hover:text-deepspace border bg-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Grid ── */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group border-border hover:border-malachite hover:shadow-deepspace/10 flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Thumbnail */}
                                <div
                                    className={`relative h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                                >
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                            backgroundSize: "24px 24px",
                                        }}
                                    />
                                    <span className="relative z-10 text-5xl font-black text-white/10">
                                        {post.title.charAt(0)}
                                    </span>
                                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col gap-4 p-5">
                                    <h3 className="text-deepspace group-hover:text-malachite-rich text-base leading-snug font-black transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <div className="border-border mt-auto flex items-center justify-between border-t pt-3">
                                        <span className="text-muted text-xs font-medium">
                                            {post.date} · {post.readTime}
                                        </span>
                                        <span className="text-malachite-rich inline-flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2">
                                            Read <ArrowRight size={11} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 py-20 text-center">
                        <p className="text-deepspace/20 text-2xl font-black">
                            No articles yet
                        </p>
                        <p className="text-muted text-sm font-light">
                            Check back soon.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
