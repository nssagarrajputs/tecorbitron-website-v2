import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow="How We Charge"
                        heading="No Surprises, Just Clear Pricing."
                    />
                </div>
                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {pricingModels.map((model) => {
                        const Icon = model.icon;

                        return (
                            <div
                                key={model.name}
                                className="edge-light side-breathing flex h-full flex-col border-t border-r py-16"
                            >
                                <div className="bg-malachite/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Icon
                                        size={22}
                                        className="text-malachite"
                                    />
                                </div>

                                <h3 className="card-heading capitalize md:min-h-14">
                                    {model.name}
                                </h3>

                                <p className="text-body text-ink-secondary mt-6 max-w-md leading-relaxed">
                                    {model.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="edge-light flex-center border-x border-t py-8">
                    <span className="section-endline">
                        Fixed Pricing • Flexible Engagements • No Hidden Costs
                    </span>
                </div>
            </div>
        </section>
    );
}
