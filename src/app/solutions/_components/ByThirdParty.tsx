import Image, { StaticImageData } from "next/image";

import { byPlatforms } from "@/content/solutions-item-data";

import type { SolutionItem } from "@/content/solutions-item-data";

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

function ByThirdParty() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing border-x py-12 md:py-18 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-12 font-mono">Third-Party</span>
                        <h2 className="text-h2 mb-8 font-serif">
                            Platforms & Integrations
                        </h2>
                        <p>
                            Out-of-the-box system integrations and headless
                            platform builds to extend the functionality of your
                            digital infrastructure.
                        </p>
                    </div>
                </div>

                <div className="edge-light border-x">
                    {byPlatforms.map((group) => (
                        <div key={group.heading} className="">
                            {/* Group heading + optional button */}
                            <div className="edge-light side-breathing flex items-center justify-between gap-8 border-y py-12 max-sm:flex-col">
                                <h3 className="text-h3 text-ink-light-primary">
                                    {group.heading}
                                </h3>
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

export default ByThirdParty;
