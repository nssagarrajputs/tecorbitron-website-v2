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
import SectionContainer from "@/components/basic-ui/SectionContainer";

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
        <SectionContainer
            eyebrow="Industries"
            heading="Wide Expertise Across Sectors"
            highlight="Sectors"
            support="We've built for clients across very different sectors — from early-stage startups to established enterprises."
        >
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-6">
                {industries.map(({ icon: Icon, name }) => (
                    <div
                        key={name}
                        className="cardbox group transi-base hover:border-malachite flex flex-col items-center gap-3 p-4"
                    >
                        <Icon
                            size={35}
                            strokeWidth={1.2}
                            className="text-typocolor-muted group-hover:text-malachite transi-base select-none"
                        />
                        <p className="text-xmall text-typocolor-secondary group-hover:text-malachite-rich transi-base text-center font-semibold">
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
        </SectionContainer>
    );
}

export default Industries;
