import Image from "next/image";
import Link from "next/link";
import { servicesCardData } from "@/app/(home)/_components/CoreServices";

export default function MainServices() {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light flex-center side-breathing border-x py-16">
                    <span className="section-endline">
                        Digital Services Designed to Grow Your Business
                    </span>
                </div>

                <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-2">
                    {servicesCardData.map((service) => (
                        <div
                            key={service.name}
                            className="edge-light side-breathing flex-vertical justify-between border-t border-r pt-16"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="card-heading">{service.name}</h2>
                                <Link
                                    href={service.href}
                                    className="button-primary"
                                >
                                    →
                                </Link>
                            </div>
                            <div className="flex-center mx-auto mt-16 mb-8 w-70 select-none">
                                <Image
                                    src={service.icon}
                                    alt={service.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
