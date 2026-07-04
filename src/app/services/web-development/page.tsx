import PageHero from "@/components/ui/PageHero";
import ServiceIntro from "../_components/ServiceIntro";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import { serviceWebDevelopment } from "@/content/services-data";
import type { Metadata } from "next";
import { WebServiceSchema } from "@/components/StructuredData";
export const metadata: Metadata = {
    title: "Web Development Company — Tecorbitron",
    description:
        "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
    keywords: [
        // Primary — highest volume
        "web development company India",
        "custom website development India",
        "website development services India",

        // Solution-specific (from your page)
        "custom website design and development",
        "WordPress website development India",
        "landing page development service",
        "web application development India",
        "progressive web app development India",
        "admin dashboard development",
        "web portal development India",

        // Tech-specific buyer searches
        "Next.js website development company",
        "React web development company India",
        "TypeScript web development India",

        // Persona
        "website development for startups India",
        "business website development India",
        "website development company Ghaziabad",

        // Pricing/hiring intent
        "hire web developer India",
        "affordable website development India",
        "website development with support India",
        "Tecorbitron web development",
    ],
    alternates: { canonical: "/services/web-development" },
    openGraph: {
        type: "website",
        title: "Web Development Company — Tecorbitron",
        description:
            "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
        url: "https://www.tecorbitron.com/services/web-development",
        images: [
            {
                url: "/public/opengraph/og-web-service.png",
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
        images: ["/public/opengraph/og-web-service.png"],
    },
};

export default function page() {
    return (
        <main>
            <WebServiceSchema />

            <PageHero
                eyebrow="Web Development"
                title="Fast, Scalable Websites & Web Apps Built for Growth"
                highlight="Built for Growth"
                description="From landing pages and business websites to custom web apps and portals — we build modern, high-performance web solutions tailored to your goals and budget."
            />

            <ServiceIntro data={serviceWebDevelopment.intro} />
            <div className="section-edge-light"></div>

            <ServiceWhatSolutions data={serviceWebDevelopment.whatSolutions} />
            <div className="section-edge-light"></div>

            <ServiceSandM data={serviceWebDevelopment.sandm} />
            <div className="section-edge-light"></div>

            <ServiceWhyUs data={serviceWebDevelopment.whyUs} />
            <div className="section-edge-light"></div>

            <ServiceLetsConnect />
        </main>
    );
}
