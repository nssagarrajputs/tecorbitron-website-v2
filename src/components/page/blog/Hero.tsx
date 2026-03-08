export default function Hero() {
    return (
        <section className="bg-white px-4 pt-32 pb-16">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                {/* Eyebrow */}
                <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                        Our Blog
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-deepspace text-5xl font-black tracking-tight sm:text-6xl">
                    The Knowledge <span className="text-malachite">Nexus</span>
                </h1>

                {/* Quote */}
                <p className="max-w-md text-base leading-relaxed">
                    Ideas, Insights & Tech Deep-Dives
                </p>
            </div>
        </section>
    );
}
