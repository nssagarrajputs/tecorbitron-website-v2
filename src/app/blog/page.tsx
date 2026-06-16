import BlogListing from "@/app/blog/_components/BlogListing";
import { client } from "@/sanity/client";

import { groq } from "next-sanity";

import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";

export const metadata: Metadata = {
    title: "Insights — Tecorbitron",
    description:
        "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",
    keywords: [
        "tech blog India",
        "web development tips",
        "SEO guides",
        "AI trends",
        "software development insights",
        "Tecorbitron blog",
    ],
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Insights — Tecorbitron",
        description:
            "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",
        url: "https://www.tecorbitron.com/blog",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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
            {/* <PageHero
                eyebrow="Blogs & Insights"
                title="Stay Informed. Stay Ahead."
                description="Practical guides, expert articles, and industry updates on tech and businesses — written by the Tecorbitron team."
            />
            <BlogListing posts={posts} categories={categories} /> */}
        </main>
    );
}
