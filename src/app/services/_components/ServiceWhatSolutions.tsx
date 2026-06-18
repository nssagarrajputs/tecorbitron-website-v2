import Image from "next/image";

import type {
    ServiceSolutionsData,
    SolutionItem,
} from "@/content/services-data";
import { SectionHeaderCentered } from "@/components/basic-ui/SectionHeaderType";

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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow=""
                        heading={data.heading}
                        supportive={data.para}
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2 xl:grid-cols-4">
                    {data.solutions.map((item) => (
                        <div
                            key={item.title}
                            className="edge-light side-breathing flex flex-col gap-4 border-t border-r py-16"
                        >
                            <SolutionIcon item={item} />
                            <h3 className="text-body text-ink-primary font-medium">
                                {item.title}
                            </h3>
                            <p className="text-body text-ink-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
