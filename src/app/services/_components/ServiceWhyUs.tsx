import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { WhyUsData } from "@/content/services-data";

type Props = { data: WhyUsData };

export default function ServiceWhyUs({ data }: Props) {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <div className="text-ink-light-primary py-12 md:py-18 lg:py-24">
                        <div className="side-breathing mx-auto max-w-4xl text-center">
                            <h2 className="text-h2 font-serif">
                                {data.heading}
                            </h2>
                        </div>
                    </div>
                    <div className="relative h-40 md:h-50 lg:h-60 xl:h-70">
                        <Image
                            src={data.bannerImg as string}
                            alt={data.heading}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* List items */}
                <ul className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {data.li.map((item, i) => (
                        <li
                            key={item.title}
                            className="edge-light flex-vertical gap-6 border-t border-r p-12 py-16"
                        >
                            <div className="flex items-center gap-3">
                                <span className="bg-canvas-surface text-ink-light-muted text-14 flex-center h-10 w-10 rounded-full font-medium">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h4 className="text-h4 text-ink-light-primary">
                                    {item.title}
                                </h4>
                            </div>
                            <p className="text-body text-ink-light-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
