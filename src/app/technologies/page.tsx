import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTAFormat from "@/components/templates/CTAFormat";
import { technologyGroups } from "@/content/technologies-data";
import TechStack from "./_components/TechStack";

export const metadata: Metadata = {
    title: "The Stack Behind Every Project — Tecorbitron",
    description:
        "Explore the tech stack behind every Tecorbitron project — from frontend frameworks and backend systems to cloud, AI, and e-commerce platforms.",
    keywords: [
        // Tech stack — people looking for specific expertise
        "Next.js development company India",
        "React developer India",
        "TypeScript development company",
        "Node.js development India",
        "Flutter developer India",
        "React Native developer India",

        // Cloud
        "AWS development company India",
        "Google Cloud development India",
        "Firebase development India",

        // AI/LLM
        "OpenAI integration services India",
        "LangChain development India",
        "AI development company India",

        // CMS
        "Sanity CMS development",
        "WordPress development India",
        "headless CMS development India",

        // General
        "modern tech stack web development India",
        "Tecorbitron technologies",
        "full stack development company India",
    ],
    alternates: { canonical: "/technologies" },
    openGraph: {
        title: "The Stack Behind Every Project — Tecorbitron",
        description:
            "Explore the tech stack behind every Tecorbitron project — from frontend frameworks and backend systems to cloud, AI, and e-commerce platforms.",
        url: "https://www.tecorbitron.com/technologies",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Technologies & Tech Stack",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Stack Behind Every Project — Tecorbitron",
        description:
            "Explore the tech stack behind every Tecorbitron project — from frontend frameworks and backend systems to cloud, AI, and e-commerce platforms.",
        images: ["/og-image.png"],
    },
};

export default function TechnologiesPage() {
    return (
        <main className="bg-bkg-primary">
            <PageHero
                eyebrow="Tools & Tech"
                title="Stack Behind Every Project"
                description="We pick the right technology for the right problem — modern frameworks, proven backends, reliable cloud infrastructure, and tools that are built to scale with your business. No unnecessary complexity, no outdated stacks."
            />

            <TechStack groups={technologyGroups} />

            <CTAFormat
                eyebrow="Have a Specific Tech Requirement?"
                heading="Tell us or let us recommend the right one — we'll build around what works best for your project."
                primaryAction={{
                    text: "Start Your Project",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "Explore Our Services",
                    href: "/services",
                }}
            />
        </main>
    );
}
