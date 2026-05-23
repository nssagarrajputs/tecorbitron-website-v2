import { Astroid, CalendarClock, PackageCheck, ScanSearch } from "lucide-react";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { ServiceSandMData } from "@/content/services-data";

// ─── Hardcoded engagement models ──────────────────────────────────────────────

const PLANS = [
    { icon: CalendarClock, title: "Monthly Package" },
    { icon: PackageCheck, title: "Annual Package" },
    { icon: ScanSearch, title: "Per Scope" },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

type Props = { data: ServiceSandMData };

export default function ServiceSandM({ data }: Props) {
    const [before, after] = data.heading.split(data.highlight);

    return (
        <SectionContainer width="sm">
            {/* Heading + description */}
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-h2 font-bold">
                    {before}
                    <span className="gradient-heading">{data.highlight}</span>
                    {after}
                </h2>
                <p className="text-body text-typocolor-secondary leading-relaxed">
                    {data.description}
                </p>
            </div>

            {/* 3 engagement model cards */}
            <div className="flex-center flex-wrap gap-4 *:w-65">
                {PLANS.map(({ icon: Icon, title }) => (
                    <div
                        key={title}
                        className="cardbox hover:border-malachite transi-base flex-center gap-3 p-8 text-center"
                    >
                        <Icon
                            size={36}
                            strokeWidth={1.5}
                            className="text-malachite"
                        />
                        <h3 className="text-small text-typocolor-secondary font-bold">
                            {title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Stripe */}
            <div className="border-base rounded-4 flex-center *:text-typocolor-muted *:text-small flex-wrap gap-x-8 gap-y-3 border px-4 py-4 lg:rounded-full">
                <span className="flex items-center gap-2">
                    <Astroid size={14} strokeWidth={2.5} /> 60 Days Free
                    Post-Deploy Support
                </span>
                <span className="flex items-center gap-2">
                    <Astroid size={14} strokeWidth={2.5} /> Pricing Based on
                    Project Scope
                </span>
                <span className="flex items-center gap-2">
                    <Astroid size={14} strokeWidth={2.5} /> Terms & Conditions
                    Apply
                </span>
            </div>
        </SectionContainer>
    );
}
