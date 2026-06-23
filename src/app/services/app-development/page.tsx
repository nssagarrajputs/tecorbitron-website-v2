import PageHero from "@/components/ui/PageHero";

import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForApp,
    serviceSolutionsApp,
    serviceSandMApp,
    serviceIntroApp,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
import { AppServiceSchema } from "@/components/StructuredData";
export const metadata: Metadata = {
    title: "App Development Company — Tecorbitron",
    description:
        "We design and develop mobile apps that perform on every platform — Android, iOS, and cross-platform. Built for startups and businesses ready to go mobile.",
    keywords: [
        // Primary
        "mobile app development company India",
        "app development services India",
        "Android iOS app development India",

        // Platform-specific
        "iOS app development India",
        "Android app development India",
        "cross-platform app development India",
        "React Native app development India",
        "Flutter app development India",

        // App type (from your solutions)
        "on-demand app development India",
        "e-commerce mobile app development",
        "enterprise mobile app development India",
        "EdTech app development India",
        "MVP app development India",

        // Persona
        "app development for startups India",
        "hire app developer India",
        "mobile app development company Ghaziabad",

        // Intent
        "build mobile app India",
        "app development with 3 months support",
        "affordable app development India",
        "Tecorbitron app development",
    ],
    alternates: { canonical: "/solutions" },
    openGraph: {
        title: "App Development Company — Tecorbitron",
        description:
            "We design and develop mobile apps that perform on every platform — Android, iOS, and cross-platform. Built for startups and businesses ready to go mobile.",
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
        title: "App Development Company — Tecorbitron",
        description:
            "We design and develop mobile apps that perform on every platform — Android, iOS, and cross-platform. Built for startups and businesses ready to go mobile.",
        images: ["/og-image.png"],
    },
};

export default function page() {
    return (
        <main>
            <AppServiceSchema />

            <PageHero
                eyebrow="App Development"
                title="Mobile Apps Built to Perform on Every Platform"
                description="From Android and iOS to cross-platform apps — we build mobile products that are fast, reliable, and built around your users and business goals."
            />
            <ServiceIntro data={serviceIntroApp} />
            <div className="section-edge-light"></div>
            <ServiceWhatSolutions data={serviceSolutionsApp} />

            <div className="section-edge-light"></div>
            <ServiceSandM data={serviceSandMApp} />
            <div className="section-edge-light"></div>
            <ServiceWhyUs data={servicesWhyForApp} />
            <div className="section-edge-light"></div>
            <ServiceLetsConnect />
        </main>
    );
}
