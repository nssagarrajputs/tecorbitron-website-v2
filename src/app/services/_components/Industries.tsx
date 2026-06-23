import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow="Industries"
                        heading="Wide Expertise Across Sectors"
                        supportive="We've built for clients across very different
                            sectors — from early-stage startups to established
                            enterprises. No matter your industry, we know what
                            it takes to deliver."
                    />
                </div>

                <div className="edge-light grid grid-cols-2 border-l md:grid-cols-3 lg:grid-cols-6">
                    {industries.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="edge-light flex-vertical items-center gap-3 border-t border-r p-2 py-12"
                        >
                            <Icon
                                size={35}
                                strokeWidth={1.5}
                                className="text-malachite select-none"
                            />
                            <span className="text-14 text-ink-muted leading-snug font-medium">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;
