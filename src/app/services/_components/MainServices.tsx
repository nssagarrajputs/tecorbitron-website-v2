import Image from "next/image";
import web from "@/assets/service-icon/web-development.png";
import app from "@/assets/service-icon/app-development.png";
import ecomm from "@/assets/service-icon/e-commerce.png";
import seo from "@/assets/service-icon/seo.png";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";

const services = [
    {
        icon: web,
        name: "Web Development",
        tagline: "Fast, scalable websites that rank and convert.",
        description:
            "We build high-performance websites and web applications using Next.js and React — optimised for speed, SEO, and user experience from day one.",
    },
    {
        icon: app,
        name: "App Development",
        tagline: "Mobile apps users love — on iOS and Android.",
        description:
            "Cross-platform mobile applications built with React Native. One codebase, two platforms — without compromising on performance or native feel.",
    },
    {
        icon: ecomm,
        name: "E-commerce Development",
        tagline: "Online stores built to sell, scale, and retain.",
        description:
            "From Shopify and WooCommerce to fully custom storefronts — we build e-commerce solutions with inventory, payments, and admin panels built in.",
    },
    {
        icon: seo,
        name: "SEO & Digital Growth",
        tagline: "Get found. Get leads. Get results.",
        description:
            "Data-driven SEO and marketing strategies that increase visibility, drive qualified traffic, and convert visitors into customers.",
    },
];

export default function MainServices() {
    return (
        <SectionContainer width="lg">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="hover:border-malachite cardbox transi-base flex flex-col gap-4 border p-12"
                    >
                        {/* Icon */}

                        <div className="flex h-14 w-14 items-center justify-center select-none">
                            <Image
                                src={service.icon}
                                alt={service.name}
                                className="h-full w-auto object-contain"
                            />
                        </div>

                        {/* Name + tagline */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-h4 text-malachite font-bold">
                                {service.name}
                            </h3>

                            <p className="text-body text-typocolor-primary font-bold">
                                {service.tagline}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-small text-typocolor-secondary leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto">
                <BrandBtn href="/contact" variant="secondary">
                    Start Your Project
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
