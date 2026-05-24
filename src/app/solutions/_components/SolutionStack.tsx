import Image, { StaticImageData } from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import type {
    SolutionGroup,
    SolutionItem,
} from "@/content/solutions-item-data";

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

// ─── Card ─────────────────────────────────────────────────────────────────────

function SolutionCard({ item }: { item: SolutionItem }) {
    return (
        <div className="cardbox group hover:border-malachite transi-base flex h-full flex-col items-center gap-3 p-4 text-center md:p-6">
            <div className="flex-center h-15 w-15">
                <SolutionIcon icon={item.icon} name={item.name} />
            </div>
            <p className="text-small transi-base group-hover:text-typocolor-secondary text-typocolor-muted leading-snug font-bold">
                {item.name}
            </p>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

type Props = {
    eyebrow?: string;
    heading: string;
    highlight: string;
    support?: string;
    groups: SolutionGroup[];
};

export default function SolutionStack({
    eyebrow,
    heading,
    highlight,
    support,
    groups,
}: Props) {
    return (
        <SectionContainer
            width="lg"
            eyebrow={eyebrow}
            heading={heading}
            highlight={highlight}
            support={support}
        >
            <div className="flex flex-col gap-24">
                {groups.map((group) => (
                    <div key={group.heading} className="flex flex-col gap-8">
                        {/* Group heading + optional button */}
                        <div className="flex items-center justify-between gap-8 max-sm:flex-col">
                            <h3 className="text-h3 gradient-heading font-bold">
                                {group.heading}
                            </h3>
                            {group.href && (
                                <BrandBtn href={group.href} variant="secondary">
                                    Explore {group.hreftext} Service
                                </BrandBtn>
                            )}
                        </div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {group.items.map((item) => (
                                <SolutionCard key={item.name} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
