import {
    Wheat,
    Car,
    Sparkles,
    ShoppingCart,
    GraduationCap,
    Building2,
    Shirt,
    Landmark,
    UtensilsCrossed,
    HeartPulse,
    BedDouble,
    Scale,
    Factory,
    LayoutDashboard,
    House,
    Store,
    Truck,
    Plane,
} from "lucide-react";

const industries = [
    { icon: Wheat, name: "Agriculture" },
    { icon: Car, name: "Automotive" },
    { icon: Sparkles, name: "Beauty & Wellness" },
    { icon: ShoppingCart, name: "Retail & E-commerce" },
    { icon: GraduationCap, name: "Education" },
    { icon: Building2, name: "Enterprise & B2B" },
    { icon: Shirt, name: "Fashion" },
    { icon: Landmark, name: "Fintech" },
    { icon: UtensilsCrossed, name: "Restaurants" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: BedDouble, name: "Hospitality" },
    { icon: Scale, name: "Legal & Compliance" },
    { icon: Factory, name: "Manufacturing" },
    { icon: LayoutDashboard, name: "SaaS & Productivity" },
    { icon: House, name: "Real Estate" },
    { icon: Store, name: "Startups" },
    { icon: Truck, name: "Logistics" },
    { icon: Plane, name: "Travel & Tourism" },
];

function Industries() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing border-x py-12 md:py-18 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-12 font-mono">Industries</span>
                        <h2 className="text-h2 mb-8 font-serif">
                            Wide Expertise Across Sectors
                        </h2>
                        <p>
                            {"We've"} built for clients across very different
                            sectors — from early-stage startups to established
                            enterprises. No matter your industry, we know what
                            it takes to deliver.
                        </p>
                    </div>
                </div>

                <div className="grid edge-light border-l grid-cols-2 lg:grid-cols-6">
                    {industries.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="edge-light group flex flex-col items-center gap-3 border-t border-r p-4 py-8"
                        >
                            <Icon
                                size={35}
                                strokeWidth={1.2}
                                className="text-ink-light-muted select-none"
                            />
                            <p className="text-small text-ink-light-muted text-center">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;
