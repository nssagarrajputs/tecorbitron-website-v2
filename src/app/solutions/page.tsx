import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

import PageHero from "@/components/basic-ui/PageHero";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import {
    byServices,
    byIndustries,
    byCloudAI,
    byPlatforms,
} from "@/content/solutions-item-data";

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

// Component to render icon (LucideIcon or StaticImageData)
function SolutionIcon({
    icon,
    name,
}: {
    icon: LucideIcon | StaticImageData;
    name: string;
}) {
    if (
        typeof icon === "function" ||
        (typeof icon === "object" && icon !== null && !("src" in icon))
    ) {
        const IconComponent = icon as LucideIcon;
        return (
            <IconComponent
                size={24}
                strokeWidth={1.5}
                className="text-malachite"
            />
        );
    }
    const imgData = icon as StaticImageData;
    return (
        <Image
            src={imgData}
            alt={name}
            width={24}
            height={24}
            className="object-contain"
        />
    );
}

function Page() {
    return (
        <main className="bg-bkg-primary">
            <PageHero
                eyebrow="Solutions Catalog"
                title="Solutions Built for Every Industry"
                highlight="Every Industry"
                description="From early-stage startups to established enterprises — we build web, app, e-commerce, and marketing solutions that deliver results."
            />

            {/* Section 1: By Services */}
            <SectionContainer
                eyebrow="By Services"
                heading="Solutions Mapped by Service Area"
                highlight="Service Area"
                support="Explore tailored solutions organized under our key expertise disciplines: Web, Mobile Apps, E-Commerce, and SEO."
            >
                <div className="flex flex-col gap-24">
                    {byServices.map((group) => (
                        <div
                            key={group.heading}
                            className="flex flex-col gap-6"
                        >
                            <div className="pb-4">
                                {group.href ? (
                                    <Link
                                        href={group.href}
                                        className="group/link text-typocolor-heading hover:text-malachite inline-flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <h3 className="text-h3 font-black tracking-tight">
                                            {group.heading}
                                        </h3>
                                        <ArrowRight
                                            size={22}
                                            className="text-typocolor-muted group-hover/link:text-malachite transition-all duration-300 group-hover/link:translate-x-1"
                                        />
                                    </Link>
                                ) : (
                                    <h3 className="text-h3 text-typocolor-heading font-black tracking-tight">
                                        {group.heading}
                                    </h3>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="cardbox group/card border-base hover:border-malachite hover:shadow-soft flex flex-col items-center gap-4 p-4 transition-all duration-300"
                                    >
                                        <div className="flex-center bg-deepspace-dim text-deepspace group-hover/card:bg-malachite-dim group-hover/card:text-malachite h-12 w-12 shrink-0 rounded-full transition-colors duration-300">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-small text-typocolor-primary group-hover/card:text-malachite-rich font-bold transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Section 2: By Industries */}
            <SectionContainer
                eyebrow="By Industries"
                heading="Industry-Specific Operations & Core Systems"
                highlight="Industries"
                support="Domain-specific applications designed to streamline industry operations, automate work processes, and ensure regulatory compliance."
            >
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
                    {byIndustries.map((group) => (
                        <div
                            key={group.heading}
                            className="flex flex-col gap-6"
                        >
                            <div className="border-surface border-b pb-4">
                                <h3 className="text-h3 text-typocolor-heading font-black tracking-tight">
                                    {group.heading}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="cardbox group/card border-base hover:border-malachite hover:shadow-soft flex items-center gap-4 p-4 transition-all duration-300"
                                    >
                                        <div className="flex-center bg-deepspace-dim text-deepspace group-hover/card:bg-malachite-dim group-hover/card:text-malachite h-12 w-12 shrink-0 rounded-full transition-colors duration-300">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-small text-typocolor-primary group-hover/card:text-malachite-rich font-bold transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Section 3: Cloud & AI Solutions */}
            <SectionContainer
                eyebrow="Cloud & AI"
                heading="Advanced Cloud Infrastructure & AI Capabilities"
                highlight="Cloud & AI"
                support="Future-proof your operations with optimized cloud architectures and integrations that leverage smart generative tools."
            >
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                    {byCloudAI.map((group) => (
                        <div
                            key={group.heading}
                            className="flex flex-col gap-6"
                        >
                            <div className="border-surface border-b pb-4">
                                <h3 className="text-h3 text-typocolor-heading font-black tracking-tight">
                                    {group.heading}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="cardbox group/card border-base hover:border-malachite hover:shadow-soft flex items-center gap-4 p-4 transition-all duration-300"
                                    >
                                        <div className="flex-center bg-deepspace-dim text-deepspace group-hover/card:bg-malachite-dim group-hover/card:text-malachite h-12 w-12 shrink-0 rounded-full transition-colors duration-300">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-small text-typocolor-primary group-hover/card:text-malachite-rich font-bold transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Section 4: Platforms & Tools */}
            <SectionContainer
                eyebrow="Platforms & Integrations"
                heading="Third-Party Platforms & Modern Developer Stacks"
                highlight="Platforms & Integrations"
                support="Out-of-the-box system integrations and headless platform builds to extend the functionality of your digital infrastructure."
            >
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {byPlatforms.map((group) => (
                        <div
                            key={group.heading}
                            className="flex flex-col gap-6"
                        >
                            <div className="border-surface border-b pb-4">
                                <h3 className="text-h4 text-typocolor-heading font-black tracking-tight">
                                    {group.heading}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="cardbox group/card border-base hover:border-malachite hover:shadow-soft flex items-center gap-3 p-3 transition-all duration-300"
                                    >
                                        <div className="flex-center bg-deepspace-dim text-deepspace group-hover/card:bg-malachite-dim group-hover/card:text-malachite h-10 w-10 shrink-0 rounded-full transition-colors duration-300">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-small text-typocolor-primary group-hover/card:text-malachite-rich font-bold transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </main>
    );
}

export default Page;
