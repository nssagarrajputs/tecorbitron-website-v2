import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";
import CTAFormat from "@/components/templetes/CTAFormat";
import { technologyGroups } from "@/content/technologies-data";
import TechStack from "./_components/TechStack";

export const metadata: Metadata = {
    title: "Technologies & Tech Stack",
    description:
        "Explore the technologies Tecorbitron works with — React, Next.js, Flutter, AWS, PostgreSQL, AI tools, and more. We choose the right stack for your product, not just what's trending.",
    keywords: [
        "Tecorbitron tech stack",
        "web development technologies",
        "app development technologies India",
        "React Next.js development company",
        "Flutter React Native agency",
        "AWS cloud development India",
        "AI development tools",
        "e-commerce tech stack",
    ],
    alternates: { canonical: "/technologies" },
    openGraph: {
        title: "Technologies We Work With | Tecorbitron",
        description:
            "From frontend frameworks to cloud, databases, CMS, and AI — see the tools we use to build scalable digital products.",
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
        title: "Technologies & Tech Stack | Tecorbitron",
        description:
            "React, Next.js, Flutter, AWS, PostgreSQL, OpenAI, and more — the stack behind our web, app, and software projects.",
        images: ["/og-image.png"],
    },
};

export default function TechnologiesPage() {
    return (
        <main className="bg-bkg-primary">
            <PageHero
                eyebrow="Tech Stack"
                title="Technologies We Work With"
                highlight="We Work With"
                description="We pick the right technology for the right problem — modern frameworks, proven backends, reliable cloud, and tools that scale with your business."
            />

            <TechStack groups={technologyGroups} />

            <CTAFormat
                eypill="START A PROJECT"
                heading="Need Help Choosing the Right Stack?"
                highlight="Right Stack?"
                bodyText="Tell us what you're building. We'll recommend a practical tech stack — scoped to your timeline, budget, and growth plans."
                primaryAction={{
                    text: "Start Your Project",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "View Our Services",
                    href: "/services",
                }}
            />
        </main>
    );
}
