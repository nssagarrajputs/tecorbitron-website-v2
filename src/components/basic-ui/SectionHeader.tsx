import Eypill from "@/components/basic-ui/Eypill";

type Props = {
    eyebrow?: string;
    heading: string;
    highlight: string;
    support?: string;
};

export default function SectionHeader({
    eyebrow,
    heading,
    support,
    highlight,
}: Props) {
    const parts = heading.split(highlight);

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            {/* Eypill */}
            {eyebrow && <Eypill text={eyebrow} />}

            {/* Heading */}
            <h2 className="text-h2/tight font-black tracking-tight">
                {parts[0]} <span className="text-malachite">{highlight}</span>
                {parts[1]}
            </h2>

            {/* Support text */}
            {support && (
                <p className="text-typocolor-secondary text-body max-w-xl leading-relaxed">
                    {support}
                </p>
            )}
        </div>
    );
}
