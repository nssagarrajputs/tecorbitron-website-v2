import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";
import CTAFormat from "@/components/templetes/CTAFormat";
import { technologyGroups } from "@/content/technologies-data";
import TechStack from "./_components/TechStack";

export const metadata: Metadata = {
    title: "The Stack Behind Every Project — Tecorbitron",
    description:
        "Explore the tech stack behind every Tecorbitron project — from frontend frameworks and backend systems to cloud, AI, and e-commerce platforms.",
    keywords: [
        "Tecorbitron tech stack",
        "web development technologies",
        "app development technologies India",
        "React Next.js development company",
        "AWS cloud development India",
        "AI development tools",
        "e-commerce tech stack",

        "technologies used by Tecorbitron",
        "Next.js development",
        "Flutter app development",
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
