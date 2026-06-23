import Image, { StaticImageData } from "next/image";

import { byServices } from "@/content/solutions-item-data";

import type { SolutionItem } from "@/content/solutions-item-data";
import Link from "next/link";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

// ─── Icon renderer ────────────────────────────────────────────────────────────

export function SolutionIcon({
    icon,
    name,
}: {
    icon: SolutionItem["icon"];
    name: string;
}) {
    if (icon.type === "lucide") {
        const Icon = icon.icon;
        return <Icon size={40} strokeWidth={1.5} className="text-malachite" />;
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

export default function ByServices() {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow="By Services"
                        heading="Browse Solutions by Development"
                        supportive="Explore tailored solutions across our four core
                            disciplines — Web Development, Mobile Apps,
                            E-Commerce, and SEO & Digital Growth."
                    />
                </div>

                <div className="edge-light border-x">
                    {byServices.map((group) => (
                        <div key={group.heading} className="">
                            {/* Group heading + optional button */}
                            <div className="edge-light side-breathing grid grid-cols-1 gap-y-8 border-t py-16 lg:grid-cols-2">
                                <div>
                                    <h3 className="text-h3 text-ink-primary">
                                        {group.heading}
                                    </h3>
                                </div>
                                {group.href && (
                                    <div className="flex-vertical justify-center lg:items-end">
                                        <Link
                                            href={group.href}
                                            className="button-primary"
                                        >
                                            Explore {group.hreftext} Service
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Cards grid */}
                            <div className="grid grid-cols-2 gap-4 px-4 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex-vertical bg-canvas-surface/30 items-center gap-3 px-2 py-8 text-center"
                                    >
                                        <div className="flex-center h-15 w-15">
                                            <SolutionIcon
                                                icon={item.icon}
                                                name={item.name}
                                            />
                                        </div>
                                        <span className="text-14 text-ink-muted leading-snug font-medium">
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
