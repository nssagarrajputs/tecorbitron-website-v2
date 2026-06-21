import ctaBottomGraphic from "@/assets/other/cells.svg";
import Image from "next/image";
import Link from "next/link";

type CTAAction = {
    text: string;
    href: string;
};

type CTAFormatProps = {
    eyebrow: string;
    heading: string;
    primaryAction: CTAAction;
    secondaryAction: CTAAction;
};

export default function CTAFormat({
    eyebrow,
    heading,
    primaryAction,
    secondaryAction,
}: CTAFormatProps) {
    return (
        <section className="dark side-layout-spacing">
            <div className="edge-dark mx-auto max-w-7xl border-x">
                <div className="side-breathing section-header-spacing">
                    <span className="eyebrow">{eyebrow}</span>
                    <h2 className="text-h1 text-ink-primary max-w-2xl font-serif tracking-tighter">
                        {heading}
                    </h2>
                    <div className="mt-16 flex gap-4 max-sm:flex-col">
                        <Link
                            href={primaryAction.href}
                            className="brand-btn-primary"
                        >
                            {primaryAction.text}
                        </Link>
                        <Link
                            href={secondaryAction.href}
                            className="brand-btn-secondary"
                        >
                            {secondaryAction.text}
                        </Link>
                    </div>
                </div>

                <div className="">
                    <Image src={ctaBottomGraphic} alt="" />
                </div>
            </div>
        </section>
    );
}
