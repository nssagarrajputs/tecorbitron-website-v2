import Link from "next/link";

type SectionHeaderProps = {
    eyebrow?: string;
    heading?: string;
    supportive?: string;
    href?: string;
    hreflabel?: string;
};

export function SectionHeaderLeftRight({
    eyebrow,
    heading,
    supportive,
    href,
    hreflabel,
}: SectionHeaderProps) {
    return (
        <div className="section-header-spacing grid grid-cols-1 gap-y-12 lg:grid-cols-[2fr_1fr]">
            <div className="side-breathing">
                {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}

                {heading && (
                    <h2 className="section-heading text-ink-primary">
                        {heading}
                    </h2>
                )}

                {supportive && (
                    <p className="text-18 text-ink-secondary mt-8">
                        {supportive}
                    </p>
                )}
            </div>
            <div className="flex-vertical side-breathing justify-end md:items-end">
                {href && hreflabel && (
                    <Link href={href} className="button-primary">
                        {hreflabel}
                    </Link>
                )}
            </div>
        </div>
    );
}

export function SectionHeaderLeftHanded({
    eyebrow,
    heading,
    supportive,
    href,
    hreflabel,
}: SectionHeaderProps) {
    return (
        <div className="section-header-spacing flex-vertical gap-y-12">
            <div className="side-breathing">
                {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}

                {heading && (
                    <h2 className="section-heading text-ink-primary max-w-2xl">
                        {heading}
                    </h2>
                )}

                {supportive && (
                    <p className="text-18 text-ink-secondary mt-8 max-w-xl">
                        {supportive}
                    </p>
                )}
            </div>
            {href && hreflabel && (
                <div className="side-breathing">
                    <Link href={href} className="button-primary">
                        {hreflabel}
                    </Link>
                </div>
            )}
        </div>
    );
}

export function SectionHeaderCentered({
    eyebrow,
    heading,
    supportive,
    href,
    hreflabel,
}: SectionHeaderProps) {
    return (
        <div className="section-header-spacing flex-vertical gap-y-12">
            <div className="side-breathing flex-vertical items-center text-center">
                {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}

                {heading && (
                    <h2 className="section-heading max-w-4xl">{heading}</h2>
                )}

                {supportive && (
                    <p className="text-ink-secondary text-18 mt-8 max-w-2xl">
                        {supportive}
                    </p>
                )}
            </div>
            {href && hreflabel && (
                <div className="side-breathing flex-center">
                    <Link href={href} className="button-primary">
                        {hreflabel}
                    </Link>
                </div>
            )}
        </div>
    );
}
