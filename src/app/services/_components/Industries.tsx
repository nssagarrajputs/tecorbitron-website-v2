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
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionHeader from "@/components/basic-ui/SectionHeader";

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
        <section className="h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Industries"
                    heading="Wide Expertise Across Industries"
                    highlight="Industries"
                    support="We've built for clients across very different sectors — from early-stage startups to established enterprises."
                />

                <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
                    {industries.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="hover:border-malachite group bg-bkg-primary flex flex-col items-center gap-3 rounded-xl border border-transparent p-4 transition-all duration-200"
                        >
                            <Icon
                                size={24}
                                strokeWidth={1.5}
                                className="text-typocolor-muted group-hover:text-malachite transition-colors duration-200 select-none"
                            />
                            <p className="text-xmall text-typocolor-secondary group-hover:text-malachite-rich text-center font-semibold transition-colors duration-200">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto">
                    <BrandBtn href="/contact" variant="secondary">
                        Start Your Project
                    </BrandBtn>
                </div>
            </div>
        </section>
    );
}

export default Industries;
