import PageHero from "@/components/ui/PageHero";
import Intro from "@/app/about/_components/Intro";
import Founder from "@/app/about/_components/Founder";
import Credibility from "@/app/about/_components/Credibility";
import CTAFormat from "@/components/templates/CTAFormat";
import MissionVision from "./_components/MissionVision";
import PricingPolicy from "./_components/PricingPolicy";

import type { Metadata } from "next";
import { AboutPageSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "About Tecorbitron – Founder-Led Digital Solutions Company",
    description:
        "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",

    keywords: [
        // Brand discovery
        "Tecorbitron",
        "Tecorbitron Solutions Private Limited",
        "about Tecorbitron",

        // Founder searches
        "Sagar Chauhan founder",
        "Sagar Chauhan Tecorbitron",

        // Trust signals people search before hiring
        "founder-led IT company India",
        "registered software company India",
        "IT company Ghaziabad India",
        "MCA registered tech company India",
        "MSME registered IT company India",

        // People checking credibility
        "Tecorbitron reviews",
        "Tecorbitron team",
        "reliable software company India",
        "transparent IT company India",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
        type: "website",
        title: "About Tecorbitron – Founder-Led Digital Solutions Company",
        description:
            "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",
        url: "https://www.tecorbitron.com/about",
        images: [
            {
                url: "/public/opengraph/og-about.png",
                width: 1200,
                height: 630,
                alt: "About Tecorbitron Solutions Pvt Ltd",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Tecorbitron – Founder-Led Digital Solutions Company",
        description:
            "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",
        images: ["/public/opengraph/og-about.png"],
    },
};

export default function About() {
    return (
        <main>
            <AboutPageSchema />

            <PageHero
                eyebrow="who we are"
                title="About Tecorbitron"
                highlight="Tecorbitron"
                description="Discover our journey, mission, and the people behind every project — dedicated to building modern digital products that make a real difference."
            />

            <Intro />

            <MissionVision />

            <div className="section-edge-light"></div>
            <Founder />

            <div className="section-edge-light"></div>
            <Credibility />

            <div className="section-edge-light"></div>
            <PricingPolicy />

            <div className="section-edge-dark"></div>
            <CTAFormat
                eyebrow="Got a Project in Mind?"
                heading="Share your idea and we'll get back to you soon."
                highlight="your idea"
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
