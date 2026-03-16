import Hero from "@/components/page/portfolio/Hero";
import ProjectList from "@/components/page/portfolio/ProjectList";
import { client } from "@/sanity/client";
import { PORTFOLIO_LIST_QUERY } from "@/sanity/queries/portfolio";

export const revalidate = 21600;

export const metadata = {
    title: "Our Work",
    description:
        "Explore our featured projects — web development, mobile apps, SEO campaigns, and custom software solutions delivered for clients across India and beyond.",
};

type Project = {
    title: string;
    slug: string;
    thumbnail: string | null;
    industries: string[];
    techStack: string[];
    summary?: string;
    livePreview?: string;
};

export default async function PortfolioPage() {
    const { featured, rest } = await client.fetch<{
        featured: Project | null;
        rest: Project[];
    }>(PORTFOLIO_LIST_QUERY);

    return (
        <main>
            <Hero />
            <ProjectList featured={featured} rest={rest} />
        </main>
    );
}
