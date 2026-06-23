import Image from "next/image";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
import type { WhyUsSection } from "@/content/services-data";

type Props = { data: WhyUsSection };

export default function ServiceWhyUs({ data }: Props) {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered heading={data.heading} />
                </div>
                <div className="edge-light relative aspect-16/7 border lg:aspect-16/4">
                    <Image
                        src={data.bannerImg as string}
                        alt={data.heading}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        loading="lazy"
                        className="object-cover"
                    />
                </div>

                {/* List items */}
                <ul className="edge-light grid grid-cols-1 border-l md:grid-cols-2 xl:grid-cols-3">
                    {data.li.map((item, i) => (
                        <li
                            key={item.title}
                            className="edge-light flex-vertical side-breathing gap-6 border-t border-r py-16"
                        >
                            <div className="flex-vertical gap-3">
                                <span className="bg-canvas-surface text-ink-light-muted text-14 flex-center h-10 w-10 rounded-full font-medium">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-h4 text-ink-primary">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-body text-ink-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
