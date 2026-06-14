import Image from "next/image";

import webDevelopmentIcon from "@/assets/specific-services/ssi/wi.png";
import appDevelopmentIcon from "@/assets/specific-services/ssi/ai.png";
import ecommerceIcon from "@/assets/specific-services/ssi/ei.png";
import seoIcon from "@/assets/specific-services/ssi/si.png";

import Link from "next/link";

export const servicesCardData = [
    {
        key: "web-development",
        icon: webDevelopmentIcon,
        name: "Web Development",
        tagline: "Fast, scalable websites built for performance and growth.",
        description:
            "From business websites and landing pages to complex web applications and portals — we design and build modern, SEO-ready web products using Next.js, React, and the right stack for your needs.",
        tags: [
            "Business & Landing Pages",
            "CMS & Web Apps",
            "Custom Web Solutions",
        ],
        href: "/services/web-development",
        hreflabel: "View Web Services",
    },
    {
        key: "app-development",
        icon: appDevelopmentIcon,
        name: "App Development",
        tagline:
            "Mobile apps for startups and growing businesses, built to perform.",
        description:
            "Android, iOS, or cross-platform — we build mobile apps that are fast, reliable, and ready to scale. From early-stage MVPs to full-featured apps for growing businesses.",
        tags: [
            "Android & iOS Apps",
            "Flutter & Cross-Platform",
            "PWA & Hybrid Apps",
        ],

        href: "/services/app-development",
        hreflabel: "View App Services",
    },
    {
        key: "ecommerce-development",
        icon: ecommerceIcon,
        name: "E-commerce Development",
        tagline:
            "Online stores built to sell — fast, conversion-focused, and easy to manage.",
        description:
            "Whether you're launching your first store or scaling an existing one — we build e-commerce experiences that load fast, convert well, and grow with your business.",
        tags: [
            "Shopify & WooCommerce",
            "Custom E-Commerce Builds",
            "Payment & Inventory Integration",
        ],

        href: "/services/ecommerce-development",
        hreflabel: "View E-Commerce Services",
    },
    {
        key: "seo-marketing",
        icon: seoIcon,
        name: "SEO & Digital Growth",
        tagline:
            "Search visibility that brings qualified traffic and real business results.",
        description:
            "We help your business rank higher, reach the right audience, and turn organic search into a consistent source of leads — with technical SEO, content strategy, and ongoing growth support.",
        tags: [
            "Technical & On-Page SEO",
            "Local & E-Commerce SEO",
            "Content & Growth SEO",
        ],

        href: "/services/seo-and-marketing",
        hreflabel: "View SEO Services",
    },
];

export default function CoreServices() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing grid grid-cols-1 gap-y-12 border-x py-12 md:py-18 lg:grid-cols-2 lg:py-24">
                    <div className="">
                        <span className="eyebrow-light">We Build Bold</span>
                        <h2 className="section-heading">
                            Digital Services Designed to Grow Your Business
                        </h2>
                    </div>
                    <div className="flex-vertical justify-end md:items-end">
                        <Link
                            href={"/services"}
                            className="button-primary-light"
                        >
                            Explore All Services
                        </Link>
                    </div>
                </div>

                <div className="edge-light grid grid-cols-1 border-x md:grid-cols-2">
                    {servicesCardData.map((service, index) => (
                        <div
                            key={service.name}
                            className={`text-ink-light-primary edge-light flex flex-col gap-4 border-t p-8 lg:p-14 ${index % 2 === 0 ? "md:border-r" : ""} `}
                        >
                            <div className="flex h-50 w-50 items-center justify-center select-none">
                                <Image
                                    src={service.icon}
                                    alt={service.name}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="text-ink-light-primary text-h4 font-medium">
                                {service.name}
                            </h3>

                            <p className="text-ink-light-secondary text-body mb-4 md:min-h-16">
                                {service.tagline}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-canvas-soft text-16 text-ink-light-muted px-2 py-0.5 font-semibold select-none"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={service.href}
                                className="text-16 mt-8 w-fit border px-4 py-2 font-medium underline-offset-4 hover:underline"
                            >
                                {service.hreflabel}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
