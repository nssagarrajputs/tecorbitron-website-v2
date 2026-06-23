import { CalendarClock, PackageCheck, ScanSearch } from "lucide-react";
import type { ServiceSandMData } from "@/content/services-data";
import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

// ─── Hardcoded engagement models ──────────────────────────────────────────────

const PLANS = [
    { icon: CalendarClock, title: "Monthly Package" },
    { icon: PackageCheck, title: "Annual Package" },
    { icon: ScanSearch, title: "Per Scope" },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

type Props = { data: ServiceSandMData };

export default function ServiceSandM({ data }: Props) {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered heading={data.heading} />
                </div>
                <div className="side-breathing edge-light border-x pb-24">
                    <p className="text-body text-ink-secondary mx-auto max-w-4xl text-justify leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="edge-light grid grid-cols-1 border-l lg:grid-cols-3">
                    {PLANS.map(({ icon: Icon, title }) => (
                        <div
                            key={title}
                            className="edge-light flex-center gap-3 border-t border-r px-4 py-12 text-center"
                        >
                            <Icon
                                size={25}
                                strokeWidth={1.5}
                                className="text-malachite"
                            />
                            <h3 className="text-16 text-ink-muted font-mono">
                                {title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
