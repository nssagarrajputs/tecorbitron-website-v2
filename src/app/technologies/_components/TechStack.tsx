import Image, { StaticImageData } from "next/image";
import type { TechnologyGroup } from "@/content/technologies-data";

type Props = {
    groups: TechnologyGroup[];
};

export default function TechStack({ groups }: Props) {
    return (
        <>
            {groups.map((group) => (
                <section key={group.heading} className="bg-canvas-white">
                    <div className="flex-vertical edge-light mx-auto max-w-7xl gap-12 border-x pt-24 pb-12">
                        <h2 className="text-h3 text-ink-light-primary side-breathing">
                            {group.heading}
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                            {group.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex h-full flex-col items-center gap-3 p-4 text-center md:p-6"
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
                                    <p className="text-14 transi-base text-ink-light-muted font-mono leading-snug">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="section-edge-light"></div>
                </section>
            ))}
        </>
    );
}
