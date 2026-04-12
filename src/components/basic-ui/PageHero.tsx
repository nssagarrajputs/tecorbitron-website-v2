type PageHeroProps = {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
};

function PageHero({ eyebrow, title, highlight, description }: PageHeroProps) {
    const parts =
        highlight && title.includes(highlight) ? title.split(highlight) : null;

    return (
        <section className="h-breathing-468 v-breathing-22 relative overflow-hidden">
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

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <div className="border-malachite-soft bg-malachite-opac flex items-center gap-2 rounded-full border px-4 py-1.5 select-none">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xmall font-bold tracking-wider uppercase">
                        {eyebrow}
                    </span>
                </div>

                <h1 className="text-h2 mx-auto mt-6 mb-5 max-w-4xl leading-tight font-black tracking-tight">
                    {parts ? (
                        <>
                            {parts[0]}
                            <span className="text-malachite">{highlight}</span>
                            {parts[1]}
                        </>
                    ) : (
                        title
                    )}
                </h1>

                {description ? (
                    <p className="text-typocolor-secondary text-body max-w-2xl leading-relaxed">
                        {description}
                    </p>
                ) : null}
            </div>
        </section>
    );
}

export default PageHero;
