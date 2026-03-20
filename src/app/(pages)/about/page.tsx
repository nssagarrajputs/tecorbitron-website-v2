import Hero from "@/components/page/about/Hero";
import MissionVision from "@/components/page/about/MissionVision";
import OurStory from "@/components/page/about/OurStory";
import Founder from "@/components/page/about/Founder";
import Credibility from "@/components/page/about/Credibility";
import CTA from "@/components/page/about/CTA";
import Intro from "@/components/page/about/Intro";
import TrustedPartners from "@/components/page/about/TrustedPartners";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Tecorbitron is a fast-growing IT company helping startups and businesses build high-performance websites, scalable apps, and custom software solutions. Founded by Sagar Chauhan, Based in Ghaziabad, NCR, India, serving clients worldwide.",

    keywords: [
        "About Tecorbitron",
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
        title: "About Tecorbitron | Building Digital Products That Drive Growth",
        description:
            "Founded in 2024, Tecorbitron helps businesses turn ideas into powerful digital products — from websites and apps to custom software and AI solutions.",
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
        title: "About Tecorbitron | Web & App Development Company",
        description:
            "Learn how Tecorbitron helps startups and businesses build scalable digital solutions.",
        images: ["/og-image.png"],
    },
};

export default function About() {
    return (
        <main>
            <Hero />
            <Intro />
            <OurStory />
            <MissionVision />
            <Founder />
            <Credibility />
            <TrustedPartners />
            <CTA />
        </main>
    );
}
