import PageHero from "@/components/ui/PageHero";

import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForSeo,
    serviceSolutionsSeo,
    serviceSandMSeo,
    serviceIntroSeo,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
import { SeoServiceSchema } from "@/components/StructuredData";
export const metadata: Metadata = {
    title: "SEO Services Company — Tecorbitron",
    description:
        "We improve your search visibility with technical, on-page, and content SEO strategies that bring real, qualified traffic and measurable business results.",
    keywords: [
        // Primary
        "SEO services India",
        "SEO company India",
        "digital marketing services India",

        // Service-specific (very high intent)
        "technical SEO services India",
        "on-page SEO services India",
        "local SEO services India",
        "local SEO company Ghaziabad",
        "ecommerce SEO services India",
        "SEO audit services India",
        "Google Ads management India",
        "PPC services India",

        // Platform
        "Google Business Profile optimization India",
        "GA4 setup services India",

        // Persona
        "SEO for startups India",
        "SEO for small business India",
        "SEO company NCR India",
        "affordable SEO services India",

        // Intent
        "hire SEO expert India",
        "monthly SEO retainer India",
        "SEO services with monthly reporting",
    ],
    alternates: { canonical: "/solutions" },
    openGraph: {
        title: "SEO Services Company — Tecorbitron",
        description:
            "We improve your search visibility with technical, on-page, and content SEO strategies that bring real, qualified traffic and measurable business results.",
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
        title: "SEO Services Company — Tecorbitron",
        description:
            "We improve your search visibility with technical, on-page, and content SEO strategies that bring real, qualified traffic and measurable business results.",
        images: ["/og-image.png"],
    },
};

export default function page() {
    return (
        <main>
            <SeoServiceSchema />
            <PageHero
                eyebrow="SEO & Digital Growth"
                title="Search Visibility That Drives Real, Qualified Traffic"
                description="From technical SEO and on-page optimisation to local and e-commerce SEO — we build search strategies that bring the right people to your business."
            />
            <ServiceIntro data={serviceIntroSeo} />
            <div className="section-edge-light"></div>
            <ServiceWhatSolutions data={serviceSolutionsSeo} />

            <div className="section-edge-light"></div>
            <ServiceSandM data={serviceSandMSeo} />
            <div className="section-edge-light"></div>
            <ServiceWhyUs data={servicesWhyForSeo} />
            <div className="section-edge-light"></div>
            <ServiceLetsConnect />
        </main>
    );
}
