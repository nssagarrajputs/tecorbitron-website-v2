import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForApp,
    serviceDevProcessApp,
    serviceSolutionsApp,
    serviceSandMApp,
    serviceIntroApp,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "App Development Company — Tecorbitron",
    description:
        "We design and develop mobile apps that perform on every platform — Android, iOS, and cross-platform. Built for startups and businesses ready to go mobile.",
    keywords: [
        "app development company India",
        "mobile app development",
        "Flutter app development",
        "Android iOS app",
        "cross platform app",
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
            <PageHero
                eyebrow="App Development"
                title="Mobile Apps Built to Perform on Every Platform"
                description="From Android and iOS to cross-platform apps — we build mobile products that are fast, reliable, and built around your users and business goals."
            />
            <ServiceIntro data={serviceIntroApp} />
            <div className="section-edge-light"></div>
            <ServiceWhatSolutions data={serviceSolutionsApp} />
            <div className="section-edge-light"></div>
            <ServiceDevProcess data={serviceDevProcessApp} />
            <div className="section-edge-light"></div>
            <ServiceSandM data={serviceSandMApp} />
            <div className="section-edge-light"></div>
            <ServiceWhyUs data={servicesWhyForApp} />
            <div className="section-edge-light"></div>
            <ServiceLetsConnect />
        </main>
    );
}
