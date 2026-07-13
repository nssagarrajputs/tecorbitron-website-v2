import BlogListing from "@/app/blog/_components/BlogListing";
import { client } from "@/sanity/client";

import { groq } from "next-sanity";

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { BlogPageSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Insights — Tecorbitron",
    description:
        "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",

    keywords: [
        // Topical authority
        "web development blog India",
        "app development insights",
        "SEO tips for businesses India",
        "tech guides for startups India",

        // Content discovery
        "Tecorbitron blog",
        "Tecorbitron insights",
        "digital marketing tips India",
        "Next.js tutorials",
        "how to build a website India",

        // Awareness → conversion path
        "website development cost India",
        "how to hire a web developer India",
        "startup tech blog India",
    ],
    alternates: { canonical: "/blog" },
    openGraph: {
        type: "website",
        title: "Insights — Tecorbitron",
        description:
            "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",
        url: "https://www.tecorbitron.com/blog",
        images: [
            {
                url: "/opengraph/og-insights.png",
                width: 1200,
                height: 630,
                alt: "Insights — Tecorbitron",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Insights — Tecorbitron",
        description:
            "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",
        images: ["/opengraph/og-insights.png"],
    },
};

const BLOG_LISTING_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

const BLOG_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(name asc) {
    name,
    "slug": slug.current,
  }
`;

export default async function Blog() {
    const [posts, categories] = await Promise.all([
        client.fetch(BLOG_LISTING_QUERY),
        client.fetch(BLOG_CATEGORIES_QUERY),
    ]);

    return (
        <main>
            <BlogPageSchema />

            <PageHero
                eyebrow="Blogs & Insights"
                title="Stay Informed. Stay Ahead."
                highlight="Stay Ahead."
                description="Practical guides, expert articles, and industry updates on tech and businesses — written by the Tecorbitron team."
            />

            <BlogListing posts={posts} categories={categories} />
        </main>
    );
}
