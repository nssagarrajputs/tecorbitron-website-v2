import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";

type CTAAction = {
    text: string;
    href: string;
    icon?: "ArrowRight" | "MessageCircle";
};

type CTAFormatProps = {
    eypill: string;
    heading: string;
    highlight: string;
    bodyText?: string;
    primaryAction?: CTAAction;
    secondaryAction?: CTAAction;
    bgFrom?: string;
    bgTo?: string;
};

export default function CTAFormat({
    eypill,
    heading,
    highlight,
    bodyText,
    primaryAction,
    secondaryAction,
    bgFrom = "#DBFCFF",
    bgTo = "#E3FFF0",
}: CTAFormatProps) {
    return (
        <section className="h-breathing-6812 v-breathing-20">
            <div
                className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl p-6 py-12 text-center sm:py-20 lg:py-24"
                style={{
                    background: `linear-gradient(90deg, ${bgFrom}, ${bgTo})`,
                }}
            >
                <SectionHeader
                    eyebrow={eypill}
                    heading={heading}
                    highlight={highlight}
                />

                {bodyText ? (
                    <p className="text-body max-w-xl leading-relaxed">
                        {bodyText}
                    </p>
                ) : null}

                {primaryAction || secondaryAction ? (
                    <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                        {primaryAction ? (
                            <CTAButton
                                action={primaryAction}
                                variant="primary"
                            />
                        ) : null}

                        {secondaryAction ? (
                            <CTAButton
                                action={secondaryAction}
                                variant="secondary"
                            />
                        ) : null}
                    </div>
                ) : null}
            </div>
        </section>
    );
}

function CTAButton({
    action,
    variant,
}: {
    action: CTAAction;
    variant: "primary" | "secondary";
}) {
    const Icon = action.icon === "MessageCircle" ? MessageCircle : ArrowRight;

    return (
        <Link
            href={action.href}
            className={
                variant === "primary"
                    ? "bg-malachite-soft text-deepspace hover:bg-malachite-soft hover:shadow-malachite/20 border-malachite inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all duration-200 select-none hover:-translate-y-0.5 hover:shadow-lg"
                    : "text-typocolor-primary border-border-strong inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all duration-200 select-none hover:-translate-y-0.5 hover:bg-white/40"
            }
        >
            {variant === "secondary" ? <Icon size={15} /> : null}
            {action.text}
            {variant === "primary" ? <Icon size={15} /> : null}
        </Link>
    );
}
