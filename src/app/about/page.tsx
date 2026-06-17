import PageHero from "@/components/basic-ui/PageHero";
import Intro from "@/app/about/_components/Intro";
import Founder from "@/app/about/_components/Founder";
import Credibility from "@/app/about/_components/Credibility";
import CTAFormat from "@/components/templetes/CTAFormat";
import MissionVision from "./_components/MissionVision";
import PricingPolicy from "./_components/PricingPolicy";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Tecorbitron – Founder-Led Digital Solutions Company",
    description:
        "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",

    keywords: [
        "About Tecorbitron",
        "founder-led digital agency India",
        "Sagar chauhan",
        "Tecorbitron",
        "Tecorbitron Solutions Pvt Ltd",
        "IT company Ghaziabad",
        "Sagar Chauhan founder",
        "software development company India",
        "web development company NCR",
        "app development company Ghaziabad",
        "technology partner for startups",
        "digital product development company",
        "custom software company India",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Tecorbitron – Founder-Led Digital Solutions Company",
        description:
            "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",
        url: "https://www.tecorbitron.com/about",
        images: [
            {
                url: "/og-image.png",
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
        images: ["/og-image.png"],
    },
};

export default function About() {
    return (
        <main>
            <PageHero
                eyebrow="who we are"
                title="About Tecorbitron"
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
                heading="Share your idea and we'll get back to you within 24 hours."
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
