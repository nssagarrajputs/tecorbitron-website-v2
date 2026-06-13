import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForEcomm,
    serviceDevProcessEcomm,
    serviceSolutionsEcomm,
    serviceSandMEcomm,
    serviceIntroEcomm,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "E-Commerce Development Company — Tecorbitron",
    description:
        "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",
    keywords: [
        "ecommerce development company India",
        "Shopify development",
        "WooCommerce development",
        "custom ecommerce store",
        "online store development",
        "Tecorbitron ecommerce",
    ],
    alternates: { canonical: "/solutions" },
    openGraph: {
        title: "E-Commerce Development Company — Tecorbitron",
        description:
            "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",
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
        title: "E-Commerce Development Company — Tecorbitron",
        description:
            "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",
        images: ["/og-image.png"],
    },
};

export default function page() {
    return (
        <main>
            <PageHero
                eyebrow="E-Commerce Development"
                title="Online Stores Built to Sell — Fast, Smart & Scalable"
                highlight="Services"
                description="From Shopify and WooCommerce to fully custom stores — we build e-commerce solutions that convert visitors into customers and scale with your business."
            />
            <ServiceIntro data={serviceIntroEcomm} />
             <div className="section-edge-light"></div>
            <ServiceWhatSolutions data={serviceSolutionsEcomm} />
             <div className="section-edge-light"></div>
            <ServiceDevProcess data={serviceDevProcessEcomm} />
             <div className="section-edge-light"></div>
            <ServiceSandM data={serviceSandMEcomm} />
             <div className="section-edge-light"></div>
            <ServiceWhyUs data={servicesWhyForEcomm} />
             <div className="section-edge-light"></div>
            <ServiceLetsConnect />
        </main>
    );
}
