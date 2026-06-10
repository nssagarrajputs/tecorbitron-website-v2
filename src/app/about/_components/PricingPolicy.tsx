import { Tag, Timer, ListChecks, RefreshCw } from "lucide-react";

const pricingModels = [
    {
        name: "Fixed Quote",
        icon: Tag,
        description:
            "Best when your project scope, features, and timeline are clearly defined. We assess your requirements, provide a fixed quote upfront, and deliver exactly what was agreed — no hidden charges, no last-minute surprises.",
    },
    {
        name: "Pay as You Go",
        icon: Timer,
        description:
            "Ideal for large or evolving projects where the scope changes as you grow. You pay only for the actual time and resources invested — giving you full flexibility without committing to a fixed budget upfront.",
    },
    {
        name: "Staged Delivery",
        icon: ListChecks,
        description:
            "Work is planned, delivered, and billed in agreed phases or milestones. Each stage is scoped and priced before it begins — so you always know what's coming next and stay in full control of your investment.",
    },
    {
        name: "Monthly Retainer",
        icon: RefreshCw,
        description:
            "Perfect for businesses that need ongoing support, maintenance, or continuous development. One fixed monthly fee covers everything — we stay available, proactive, and fully aligned with your business needs.",
    },
];

export default function PricingPolicy() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing flex-vertical items-center gap-8 border-x py-12 md:py-18 lg:py-24">
                    <div className="text-center">
                        <span className="text-12 font-mono">How We Charge</span>

                        <h2 className="text-h2 font-serif">
                            No Surprises. <br />
                            Just Clear Pricing.
                        </h2>
                    </div>
                </div>

                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {pricingModels.map((model) => {
                        const Icon = model.icon;

                        return (
                            <div
                                key={model.name}
                                className="edge-light flex h-full flex-col border-t border-r p-8 md:p-16"
                            >
                                <div className="bg-malachite/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Icon
                                        size={22}
                                        className="text-malachite"
                                    />
                                </div>

                                <h3 className="text-h4 text-ink-light-primary min-h-14 font-medium uppercase">
                                    {model.name}
                                </h3>

                                <p className="text-body text-ink-light-secondary mt-3 leading-relaxed">
                                    {model.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="edge-light flex-center border-x border-t py-8">
                    <span className="text-ink-light-muted text-center font-mono">
                        Fixed Pricing • Flexible Engagements • No Hidden Costs
                    </span>
                </div>
            </div>
        </section>
    );
}
