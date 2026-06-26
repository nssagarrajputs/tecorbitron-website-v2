import PageHero from "@/components/ui/PageHero";
import ByServices from "./_components/ByServices";
import ByIndustries from "./_components/ByIndustries";
import ByCloudAi from "./_components/ByCloudAi";
import CTAFormat from "@/components/templates/CTAFormat";
import ByThirdParty from "./_components/ByThirdParty";

import type { Metadata } from "next";
import { SolutionsPageSchema } from "@/components/StructuredData";
export const metadata: Metadata = {
    title: "Digital Solutions for Every Business — Tecorbitron",
    description:
        "From custom websites and web apps to CRM, ERP, LMS, and e-commerce — Tecorbitron builds digital solutions tailored to your business needs and goals.",

    keywords: [
        // Industry-specific solutions (from your data)
        "ERP software development India",
        "custom CRM development India",
        "LMS development company India",
        "hospital management system development",
        "school management system development",
        "real estate portal development India",

        // Cloud + AI (your differentiator)
        "AI chatbot development India",
        "AI integration for business India",
        "cloud application development India",
        "serverless app development India",

        // E-commerce solutions
        "multi-vendor marketplace development",
        "grocery delivery platform development",
        "headless commerce solution India",

        // General solution intent
        "custom digital solutions India",
        "business software development India",
        "industry-specific software India",
        "Tecorbitron solutions",
    ],
    alternates: { canonical: "/solutions" },
    openGraph: {
        title: "Digital Solutions for Every Business — Tecorbitron",
        description:
            "From custom websites and web apps to CRM, ERP, LMS, and e-commerce — Tecorbitron builds digital solutions tailored to your business needs and goals.",
        url: "https://www.tecorbitron.com/solutions",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Solutions — Custom Digital Systems",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Solutions for Every Business — Tecorbitron",
        description:
            "From custom websites and web apps to CRM, ERP, LMS, and e-commerce — Tecorbitron builds digital solutions tailored to your business needs and goals.",
        images: ["/og-image.png"],
    },
};

function Page() {
    return (
        <main>
            <SolutionsPageSchema />

            <PageHero
                eyebrow="Our Solutions"
                title="Right Solution for Every Business Need"
                description="From early-stage startups to established enterprises — we build web, app, e-commerce, and custom digital solutions that are scoped to your business and built to deliver results."
            />

            <ByServices />
            <div className="section-edge-light"></div>

            <ByIndustries />
            <div className="section-edge-light"></div>

            <ByCloudAi />
            <div className="section-edge-light"></div>
            <ByThirdParty />

            <CTAFormat
                eyebrow="Can't Find What You're Looking For?"
                heading="Build solution scoped to your business, budget, and timeline."
                primaryAction={{
                    text: "Build Your Own",
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

export default Page;
