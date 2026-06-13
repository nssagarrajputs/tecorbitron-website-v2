
import PageHero from "@/components/basic-ui/PageHero";
import ByServices from "./_components/ByServices";
import ByIndustries from "./_components/ByIndustries";
import ByCloudAi from "./_components/ByCloudAi";
import CTAFormat from "@/components/templetes/CTAFormat";
import ByThirdParty from "./_components/ByThirdParty";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Digital Solutions for Every Business — Tecorbitron",
    description:
        "From custom websites and web apps to CRM, ERP, LMS, and e-commerce — Tecorbitron builds digital solutions tailored to your business needs and goals.",
    keywords: [
        "business ERP and CRM solutions",
        "healthcare medical billing systems",
        "real estate booking software",
        "e-learning LMS platform development",
        "AI integrations for business",
        "cloud database setup",
        "payment gateway integrations",
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
        <main className="bg-bkg-primary">
            <PageHero
                eyebrow="Our Solutions"
                title="Right Solution for Every Business Need"
                highlight="Every Industry"
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
                heading="Tell us what you need and we'll build a solution around it — scoped to your business, your budget, and your timeline."
                primaryAction={{
                    text: "Build Your Own →",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "Explore Our Services →",
                    href: "/services",
                }}
            />
        </main>
    );
}

export default Page;
