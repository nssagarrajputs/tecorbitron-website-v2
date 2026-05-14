import SectionHeader from "@/components/basic-ui/SectionHeader";

type Props = {
    children: React.ReactNode;
    width?: "sm" | "md" | "lg" | "xl";
    eyebrow?: string;
    heading?: string;
    highlight?: string;
    support?: string;
};

const widthMap = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
};

export default function SectionContainer({
    children,
    width = "xl",
    eyebrow,
    heading,
    highlight,
    support,
}: Props) {
    return (
        <section className="h-breathing v-breathing">
            <div className={`section-vlex-gap mx-auto ${widthMap[width]}`}>
                {heading && (
                    <SectionHeader
                        eyebrow={eyebrow}
                        heading={heading}
                        highlight={highlight ?? ""}
                        support={support}
                    />
                )}

                {children}
            </div>
        </section>
    );
}
