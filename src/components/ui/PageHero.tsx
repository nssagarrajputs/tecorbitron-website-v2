type PageHeroProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export default function PageHero({
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
                    <span className="display-headline">{eyebrow}</span>
                </div>

                <div className="edge-dark side-breathing border-x pt-16 pb-24">
                    <h1 className="display-heading mb-8 ">
                        {title}
                    </h1>
                    {description ? (
                        <p className="display-subtitle">{description}</p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
