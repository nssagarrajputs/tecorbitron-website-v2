import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForSeo,
    serviceDevProcessSeo,
    serviceSolutionsSeo,
    serviceSandMSeo,
    serviceIntroSeo,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "SEO Services Company — Tecorbitron",
    description:
        "We improve your search visibility with technical, on-page, and content SEO strategies that bring real, qualified traffic and measurable business results.",
    keywords: [
        "SEO services India",
        "technical SEO",
        "local SEO",
        "on-page SEO",
        "ecommerce SEO",
        "SEO company Ghaziabad",
        "Tecorbitron SEO",
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
            <PageHero
                eyebrow="SEO & Digital Growth"
                title="Search Visibility That Drives Real, Qualified Traffic"
                highlight="Services"
                description="From technical SEO and on-page optimisation to local and e-commerce SEO — we build search strategies that bring the right people to your business."
            />
            <ServiceIntro data={serviceIntroSeo} />
            <div className="section-edge-light"></div>
            <ServiceWhatSolutions data={serviceSolutionsSeo} />
            <div className="section-edge-light"></div>
            <ServiceDevProcess data={serviceDevProcessSeo} />
            <div className="section-edge-light"></div>
            <ServiceSandM data={serviceSandMSeo} />
            <div className="section-edge-light"></div>
            <ServiceWhyUs data={servicesWhyForSeo} />
            <div className="section-edge-light"></div>
            <ServiceLetsConnect />
        </main>
    );
}
