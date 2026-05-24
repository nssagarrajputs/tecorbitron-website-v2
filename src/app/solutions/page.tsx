import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

import PageHero from "@/components/basic-ui/PageHero";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import {
    byServices,
    byIndustries,
    byCloudAI,
    byPlatforms,
    type SolutionItem,
} from "@/content/solutions-item-data";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SolutionStack from "./_components/SolutionStack";

export const metadata: Metadata = {
    title: "Industry & Business Solutions",
    description:
        "Explore Tecorbitron's comprehensive suite of digital solutions — customized ERPs, CRM systems, mobile apps, e-commerce, AI implementations, and cloud integrations built to scale.",
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
        title: "Digital Solutions for Startups & Enterprises | Tecorbitron",
        description:
            "From ERPs and CRMs to AI capabilities and e-commerce platforms, we build customized software architectures tailored to your business operations.",
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
        title: "Industry & Business Solutions | Tecorbitron",
        description:
            "ERPs, CRMs, mobile applications, cloud infrastructures, and AI tools customized for your business. View our solutions catalog.",
        images: ["/og-image.png"],
    },
};

function Page() {
    return (
        <main className="bg-bkg-primary">
            <PageHero
                eyebrow="Solutions Catalog"
                title="Solutions Built for Every Industry"
                highlight="Every Industry"
                description="From early-stage startups to established enterprises — we build web, app, e-commerce, and marketing solutions that deliver results."
            />

            <SolutionStack
                eyebrow="By Services"
                heading="Solutions Mapped by Service Area"
                highlight="Service Area"
                support="Explore tailored solutions organized under our key expertise disciplines: Web, Mobile Apps, E-Commerce, and SEO."
                groups={byServices}
            />

            <SolutionStack
                eyebrow="By Industries"
                heading="Industry-Specific Systems"
                highlight="Systems"
                support="Domain-specific applications designed to streamline industry operations, automate work processes, and ensure regulatory compliance."
                groups={byIndustries}
            />

            <SolutionStack
                eyebrow="Cloud & AI"
                heading="Add-On. Cloud and Ai Integrations"
                highlight="Integrations"
                support="Future-proof your operations with optimized cloud architectures and integrations that leverage smart generative tools."
                groups={byCloudAI}
            />

            <SolutionStack
                eyebrow="Platforms & Integrations"
                heading="Third-Party Platforms & Integrations"
                highlight="Platforms & Integrations"
                support="Out-of-the-box system integrations and headless platform builds to extend the functionality of your digital infrastructure."
                groups={byPlatforms}
            />
        </main>
    );
}

export default Page;
