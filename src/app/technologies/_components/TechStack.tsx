import Image, { StaticImageData } from "next/image";
import type { TechnologyGroup } from "@/content/technologies-data";

type Props = {
    groups: TechnologyGroup[];
};

export default function TechStack({ groups }: Props) {
    return (
        <>
            {groups.map((group) => (
                <section
                    key={group.heading}
                    className="bg-canvas-white side-layout-spacing"
                >
                    <div className="flex-vertical edge-light mx-auto max-w-7xl border-x border-t">
                        <h2 className="text-h3 text-ink-primary side-breathing mt-24 mb-12">
                            {group.heading}
                        </h2>

                        <div className="grid grid-cols-2 gap-4 px-4 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                            {group.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="bg-canvas-surface/30 flex-vertical h-full items-center gap-3 px-2 py-6 text-center"
                                >
                                    <div className="flex-center h-15 w-15">
                                        <Image
                                            src={item.icon as StaticImageData}
                                            alt={item.name}
                                            width={35}
                                            height={35}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-14 text-ink-muted leading-snug font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
