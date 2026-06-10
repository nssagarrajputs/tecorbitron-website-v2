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
        <section className="">
            <div className="edge-dark mx-auto max-w-7xl border-x pt-24">
                <div className="side-breathing">
                    <span className="text-14 font-mono">{eyebrow}</span>
                    <h2 className="text-h1 font-serif tracking-tighter">
                        {heading}
                    </h2>
                    <div className="mt-16 flex gap-4">
                        <Link
                            href={primaryAction.href}
                            className="border-hairlight text-16 bg-canvas-white text-ink-light-primary w-fit border px-4 py-2 font-medium"
                        >
                            {primaryAction.text}
                        </Link>
                        <Link
                            href={secondaryAction.href}
                            className="border-hairlight text-16 w-fit border px-4 py-2 font-medium"
                        >
                            {secondaryAction.text}
                        </Link>
                    </div>
                </div>

                <div className="mt-28">
                    <Image src={ctaBottomGraphic} alt="cta bottom" />
                </div>
            </div>
        </section>
    );
}
