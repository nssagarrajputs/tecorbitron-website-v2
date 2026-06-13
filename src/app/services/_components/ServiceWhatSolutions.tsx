import Image from "next/image";

import type {
    ServiceSolutionsData,
    SolutionItem,
} from "@/content/services-data";

// ─── Icon renderer ────────────────────────────────────────────────────────────

function SolutionIcon({ item }: { item: SolutionItem }) {
    if (item.icon.type === "lucide") {
        const Icon = item.icon.icon;
        return <Icon size={36} strokeWidth={1.5} className="text-malachite" />;
    }
    return (
        <Image
            src={item.icon.src as string}
            alt={item.title}
            width={36}
            height={36}
            className="object-contain"
        />
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

type Props = { data: ServiceSolutionsData };

export default function ServiceWhatSolutions({ data }: Props) {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing border-x py-12 md:py-18 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-h2 mb-8 font-serif">
                            {data.heading}
                        </h2>
                        <p>{data.para}</p>
                    </div>
                </div>

                <div className="edge-light grid grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4">
                    {data.solutions.map((item) => (
                        <div
                            key={item.title}
                            className="edge-light flex flex-col gap-3 border-t border-r p-12"
                        >
                            <SolutionIcon item={item} />
                            <h3 className="text-body text-ink-light-primary font-medium">
                                {item.title}
                            </h3>
                            <p className="text-small text-ink-light-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
