import Image from "next/image";
import { servicesCardData } from "@/app/(home)/_components/CoreServices";

import Link from "next/link";

export default function MainServices() {
    return (
        <section className="bg-canvas-white">
            <div className="edge-light mx-auto max-w-7xl border-x">
                <div className="text-ink-light-primary side-breathing grid grid-cols-1 gap-y-12 py-12 md:py-18 lg:grid-cols-2 lg:py-24">
                    <div className="">
                        <span className="text-12 font-mono">We Build Bold</span>
                        <h2 className="text-h2 font-serif">
                            Digital Services Designed to Grow Your Business
                        </h2>
                    </div>
                    <div className="flex-vertical justify-end md:items-end">
                        <Link
                            href={"/contact"}
                            className="text-16 border-hairdark hover:bg-canvas active:bg-canvas active:text-ink-dark-primary hover:text-ink-dark-primary smooth-transition w-fit border px-4 py-2 font-medium"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>

                <div className="">
                    {servicesCardData.map((service) => (
                        <div
                            key={service.name}
                            className="edge-light flex items-center justify-between gap-4 border-t p-12"
                        >
                            <div className="flex items-center gap-12">
                                <div className="flex h-24 w-24 items-center justify-center select-none">
                                    <Image
                                        src={service.icon}
                                        alt={service.name}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>

                                <h3 className="text-h3 text-ink-light-primary">
                                    {service.name}
                                </h3>
                            </div>

                            <Link
                                href={service.href}
                                className="border-hairdark text-ink-light-primary w-fit border px-4 py-2 font-medium underline-offset-4 hover:underline"
                            >
                                →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
