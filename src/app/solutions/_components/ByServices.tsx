import Image, { StaticImageData } from "next/image";

import { byServices } from "@/content/solutions-item-data";

import type { SolutionItem } from "@/content/solutions-item-data";
import Link from "next/link";

// ─── Icon renderer ────────────────────────────────────────────────────────────

function SolutionIcon({
    icon,
    name,
}: {
    icon: SolutionItem["icon"];
    name: string;
}) {
    if (icon.type === "lucide") {
        const Icon = icon.icon;
        return <Icon size={35} strokeWidth={1.5} className="text-malachite" />;
    }
    return (
        <Image
            src={icon.src as StaticImageData}
            alt={name}
            width={35}
            height={35}
            className="object-contain"
        />
    );
}

function ByServices() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing border-x py-12 md:py-18 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-12 font-mono">By Services</span>
                        <h2 className="text-h2 mb-8 font-serif">
                            Browse Solutions by Development
                        </h2>
                        <p>
                            Explore tailored solutions across our four core
                            disciplines — Web Development, Mobile Apps,
                            E-Commerce, and SEO & Digital Growth.
                        </p>
                    </div>
                </div>

                <div className="edge-light border-x">
                    {byServices.map((group) => (
                        <div key={group.heading} className="">
                            {/* Group heading + optional button */}
                            <div className="edge-light side-breathing flex items-center justify-between gap-8 border-y py-12 max-sm:flex-col">
                                <h3 className="text-h3 text-ink-light-primary">
                                    {group.heading}
                                </h3>
                                {group.href && (
                                    <Link
                                        href={group.href}
                                        className="border-hairdark text-ink-light-primary text-16 border px-4 py-2 font-bold"
                                    >
                                        Explore {group.hreftext} Service
                                    </Link>
                                )}
                            </div>

                            {/* Cards grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex-vertical items-center gap-3 px-4 py-6 text-center"
                                    >
                                        <div className="flex-center h-15 w-15">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-small text-ink-light-muted font-mono">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ByServices;
