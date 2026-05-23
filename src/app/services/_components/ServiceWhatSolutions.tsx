import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
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

// ─── Card ─────────────────────────────────────────────────────────────────────

function SolutionCard({ item }: { item: SolutionItem }) {
    return (
        <div className="cardbox transi-base hover:border-malachite flex flex-col gap-3 p-6">
            <SolutionIcon item={item} />
            <h3 className="text-small text-typocolor-primary font-bold">
                {item.title}
            </h3>
            <p className="text-xmall text-typocolor-muted leading-relaxed">
                {item.description}
            </p>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

type Props = { data: ServiceSolutionsData };

export default function ServiceWhatSolutions({ data }: Props) {
    return (
        <SectionContainer width="lg">
            {/* Heading */}
            <h2 className="text-h2 gradient-heading text-center font-bold">
                {data.heading}
            </h2>

            {/* Paragraph */}
            <p className="text-body text-typocolor-secondary mx-auto max-w-2xl text-center leading-relaxed">
                {data.para}
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.solutions.map((item) => (
                    <SolutionCard key={item.title} item={item} />
                ))}
            </div>
        </SectionContainer>
    );
}
