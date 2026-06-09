import SectionHeader from "@/components/basic-ui/SectionHeader";
import BrandBtn from "../basic-ui/BrandBtn";

type CTAAction = {
    text: string;
    href: string;
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
    heading,

    bodyText,
    primaryAction,
    secondaryAction,
}: CTAFormatProps) {
    return (
        <section className="border-layout-dark border-y">
            <div className="border-layout-dark mx-auto flex max-w-7xl flex-col gap-8 border-x p-6 px-32 py-12 sm:py-20 lg:py-24">
                <h1 className="text-h1 max-w-4xl font-serif text-white">
                    {heading}
                </h1>

                {/* {bodyText ? (
                    <p className="text-body max-w-3xl leading-relaxed text-white">
                        {bodyText}
                    </p>
                ) : null} */}

                {primaryAction || secondaryAction ? (
                    <div className="mt-2 flex flex-col items-center gap-6 md:flex-row">
                        {primaryAction ? (
                            <BrandBtn
                                href={primaryAction.href}
                                variant="primary"
                            >
                                {primaryAction.text}
                            </BrandBtn>
                        ) : null}

                        {secondaryAction ? (
                            <BrandBtn
                                href={secondaryAction.href}
                                variant="secondary"
                            >
                                {secondaryAction.text}
                            </BrandBtn>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
