import web from "@/assets/service-icon/web-development.png";
import app from "@/assets/service-icon/app-development.png";
import ecomm from "@/assets/service-icon/e-commerce.png";
import seo from "@/assets/service-icon/seo.png";

import Image from "next/image";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import Link from "next/link";

const services = [
    {
        icon: web,
        name: "Website Development",
        description:
            "We build fast, scalable, and conversion-focused websites that help businesses establish a strong online presence and grow with confidence.",
        tags: [
            "Business Websites",
            "Web Applications",
            "Landing Pages",
            "Dashboards",
            "Portals",
        ],
        href: "/services/website-development-company",
    },
    {
        icon: app,
        name: "Mobile App Development",
        description:
            "We design and develop cross-platform mobile applications for iOS and Android that deliver seamless user experiences and drive real business results.",
        tags: [
            "iOS Apps",
            "Android Apps",
            "Cross-Platform",
            "React Native",
            "Flutter",
        ],
        href: "/services/mobile-app-development-company",
    },
    {
        icon: ecomm,
        name: "E-Commerce Development",
        description:
            "We build powerful online stores with seamless checkout, inventory management, and growth-ready architecture to help your brand sell more online.",
        tags: [
            "Shopify",
            "WooCommerce",
            "Custom Stores",
            "Payment Integration",
            "Product Management",
        ],
        href: "/services/ecommerce-development-company",
    },
    {
        icon: seo,
        name: "SEO & Digital Growth",
        description:
            "We improve your search visibility, attract qualified traffic, and turn digital channels into measurable, sustainable business growth.",
        tags: [
            "Technical SEO",
            "Local SEO",
            "On-Page SEO",
            "Google Ads",
            "Performance Tracking",
        ],
        href: "/services/seo-digital-marketing-company",
    },
];

export default function CoreServices() {
    return (
        <SectionContainer
            width="lg"
            eyebrow="Core services"
            heading="Services Designed to Grow Your Business"
            highlight="Business"
            support="From idea to launch — we offer end-to-end services designed to help businesses launch, operate, and scale with confidence."
        >
            {/* service card */}
            <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="cardbox hover:border-malachite transi-base group flex flex-col justify-between gap-4 p-6 lg:p-8"
                    >
                        {/* Icon */}
                        <div className="flex h-18 w-18 items-center justify-center select-none">
                            <Image
                                src={service.icon}
                                alt={service.name}
                                width={100}
                                height={100}
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-typocolor-primary text-h4 font-bold">
                            {service.name}
                        </h3>

                        <p className="text-typocolor-secondary text-small mb-4">
                            {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-bkg-secondary shadow-soft text-typocolor-muted text-xmall border-base rounded-full border px-2 py-0.5 font-semibold select-none"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto">
                <BrandBtn href="/services" variant="secondary">
                    View All Services
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
