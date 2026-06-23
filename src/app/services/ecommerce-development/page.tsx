import PageHero from "@/components/ui/PageHero";
import ServiceIntro from "../_components/ServiceIntro";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import { serviceEcommerceDevelopment } from "@/content/services-data";
import type { Metadata } from "next";
import { EcommerceServiceSchema } from "@/components/StructuredData";
export const metadata: Metadata = {
    title: "E-Commerce Development Company — Tecorbitron",
    description:
        "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",

    keywords: [
        // Primary
        "ecommerce development company India",
        "online store development India",
        "ecommerce website development India",

        // Platform-specific (very high intent)
        "Shopify development company India",
        "Shopify store development India",
        "WooCommerce development India",
        "WooCommerce website development",
        "BigCommerce development India",
        "headless commerce development India",

        // Solution-specific
        "custom ecommerce development India",
        "ecommerce platform migration service",
        "multi-vendor marketplace development India",
        "B2B ecommerce development India",

        // Persona
        "ecommerce development for D2C brands India",
        "online store development for small business",
        "Shopify developer India",
        "hire ecommerce developer India",

        // Intent
        "build online store India",
        "ecommerce store with payment gateway India",
        "Tecorbitron ecommerce",
    ],
    alternates: { canonical: "/services/ecommerce-development" },
    openGraph: {
        title: "E-Commerce Development Company — Tecorbitron",
        description:
            "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",
        url: "https://www.tecorbitron.com/services/ecommerce-development",
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
            <EcommerceServiceSchema />

            <PageHero
                eyebrow="E-Commerce Development"
                title="Online Stores Built to Sell — Fast, Smart & Scalable"
                description="From Shopify and WooCommerce to fully custom stores — we build e-commerce solutions that convert visitors into customers and scale with your business."
            />

            <ServiceIntro data={serviceEcommerceDevelopment.intro} />
            <div className="section-edge-light"></div>

            <ServiceWhatSolutions
                data={serviceEcommerceDevelopment.whatSolutions}
            />
            <div className="section-edge-light"></div>

            <ServiceSandM data={serviceEcommerceDevelopment.sandm} />
            <div className="section-edge-light"></div>

            <ServiceWhyUs data={serviceEcommerceDevelopment.whyUs} />
            <div className="section-edge-light"></div>

            <ServiceLetsConnect />
        </main>
    );
}
