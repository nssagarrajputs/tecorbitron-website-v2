import PageHero from "@/components/basic-ui/PageHero";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForWeb,
    serviceSolutionsWeb,
    serviceSandMWeb,
    serviceIntroWeb,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Web Development Company — Tecorbitron",
    description:
        "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
    keywords: [
        "web development company India",
        "custom website development",
        "web app development",
        "Nextjs development",
        "business website",
        "Tecorbitron web development",
    ],
    alternates: { canonical: "/solutions" },
    openGraph: {
        title: "Web Development Company — Tecorbitron",
        description:
            "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
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
        title: "Web Development Company — Tecorbitron",
        description:
            "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
        images: ["/og-image.png"],
    },
};

export default function page() {
    return (
        <main>
            <PageHero
                eyebrow="Web Development"
                title="Fast, Scalable Websites & Web Apps Built for Growth"
                description="From landing pages and business websites to custom web apps and portals — we build modern, high-performance web solutions tailored to your goals and budget."
            />

            <ServiceIntro data={serviceIntroWeb} />
            <div className="section-edge-light"></div>

            <ServiceWhatSolutions data={serviceSolutionsWeb} />
            <div className="section-edge-light"></div>

            <ServiceSandM data={serviceSandMWeb} />
            <div className="section-edge-light"></div>

            <ServiceWhyUs data={servicesWhyForWeb} />
            <div className="section-edge-light"></div>

            <ServiceLetsConnect />
        </main>
    );
}
