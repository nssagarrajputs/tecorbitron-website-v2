type PageHeroProps = {
    width?: "sm" | "md" | "lg" | "xl";
    eyebrow: string;
    title: string;
    description?: string;
};

const widthMap = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
};

function PageHero({
    width = "sm",
    eyebrow,
    title,

    description,
}: PageHeroProps) {
    return (
        <section className="edge-dark dark side-layout-spacing relative border-b">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="edge-dark flex-center side-breathing w-full border-x border-b py-12">
                    <span className="text-body text-ink-secondary font-mono tracking-wider uppercase">
                        {eyebrow}
                    </span>
                </div>

                <div className="edge-dark side-breathing border-x pt-16 pb-24">
                    <h1 className="text-d1 text-ink-primary mb-8 text-center leading-tight font-light tracking-tight">
                        {title}
                    </h1>
                    {description ? (
                        <p className="text-18 text-ink-secondary mx-auto max-w-2xl text-center leading-relaxed">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default PageHero;
