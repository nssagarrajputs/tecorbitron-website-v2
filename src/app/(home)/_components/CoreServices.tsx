import Image from "next/image";

import webDevelopmentIcon from "@/assets/specific-services/ssi/wi.png";
import appDevelopmentIcon from "@/assets/specific-services/ssi/ai.png";
import ecommerceIcon from "@/assets/specific-services/ssi/ei.png";
import seoIcon from "@/assets/specific-services/ssi/si.png";

import Link from "next/link";
import { SectionHeaderLeftRight } from "@/components/basic-ui/SectionHeaderType";
import { CircleCheck } from "lucide-react";

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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderLeftRight
                        eyebrow="We Build Bold"
                        heading="Digital Services Designed to Grow Your Business"
                        href="/services"
                        hreflabel="Explore All Services"
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-2">
                    {servicesCardData.map((service) => (
                        <div
                            key={service.name}
                            className="edge-light flex-vertical side-breathing justify-between border-t border-r pt-4 pb-12"
                        >
                            <div className="flex-center h-50 w-50 select-none">
                                <Image
                                    src={service.icon}
                                    alt={service.name}
                                    width={500}
                                    height={500}
                                    loading="eager"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="text-ink-primary text-h4 mb-8 font-medium">
                                {service.name}
                            </h3>

                            <p className="text-ink-secondary text-body mb-6 max-w-sm font-medium">
                                {service.tagline}
                            </p>

                            <ul className="flex-vertical mb-12 gap-4">
                                {service.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className="text-body text-ink-muted flex w-fit items-center gap-x-2"
                                    >
                                        <CircleCheck
                                            size={18}
                                            strokeWidth={1.5}
                                        />{" "}
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={service.href}
                                className="button-secondary"
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
