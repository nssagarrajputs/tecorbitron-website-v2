import Image from "next/image";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import Link from "next/link";
import { services } from "@/content/services-data";

export default function CoreServices() {
    return (
        <section className="layout-border-light bg-canvas-white border-y">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary layout-border-light grid grid-cols-1 border-x lg:grid-cols-2">
                    <div className="px-6 py-24">
                        <span className="text-eyebrow font-mono">
                            We Build Bold
                        </span>
                        <h2 className="text-heading-xl font-serif">
                            Digital Services Designed to Grow Your Business
                        </h2>
                    </div>
                    <div className="flex-vertical items-end justify-end px-6 py-24">
                        <Link
                            href={"/services"}
                            className="underline-offset-4 hover:underline"
                        >
                            Explore All Services
                        </Link>
                    </div>
                </div>
                {/*
                 */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="transi-base text-ink-light-primary layout-border-light flex flex-col justify-between gap-4 border p-6 lg:p-8"
                        >
                            {/* Name */}
                            <h3 className="text-typocolor-primary text-h4 font-bold">
                                {service.name}
                            </h3>

                            <p className="text-typocolor-secondary text-small mb-4">
                                {service.description_home}
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
                            {/* Icon */}
                            <div className="fle items-center justify-center select-none">
                                <Image
                                    src={service.icon}
                                    alt={service.name}
                                    width={100}
                                    height={100}
                                    className="h-full object-contain"
                                />
                            </div>

                            <Link href={service.href} className="">
                                View {service.name} Services
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
