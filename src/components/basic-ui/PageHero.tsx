type PageHeroProps = {
    width?: "sm" | "md" | "lg" | "xl";
    eyebrow: string;
    title: string;
    highlight?: string;
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
    highlight,
    description,
}: PageHeroProps) {
    return (
        <section className="edge-dark dark side-layout-spacing relative overflow-hidden border-b">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-deepspace) 1px, transparent 1px), linear-gradient(90deg, var(--color-deepspace) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                }}
            />

            {/* <div className="tb1 mx-auto flex max-w-4xl flex-col items-center text-center"> */}
            <div className="edge-dark mx-auto max-w-7xl border-x py-16">
                <div className="edge-dark w-full border-b p-8 text-center">
                    <span className="header-disclaimer uppercase">
                        {eyebrow}
                    </span>
                </div>
                <div
                    className={`mx-auto flex ${widthMap[width]} side-breathing flex-col items-center text-center`}
                >
                    <h1 className="text-h1 text-ink-primary mx-auto mt-6 mb-5 leading-tight font-black tracking-tight">
                        {title}
                    </h1>

                    {description ? (
                        <p className="text-ink-muted text-body max-w-xl leading-relaxed font-medium">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default PageHero;
