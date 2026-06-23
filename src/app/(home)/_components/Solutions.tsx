import { SectionHeaderLeftRight } from "@/components/ui/SectionHeaderType";
import {
    Globe,
    AppWindow,
    Smartphone,
    LayoutDashboard,
    Building2,
    ShoppingCart,
    Users,
    GraduationCap,
} from "lucide-react";

const solution = [
    {
        icon: Globe,
        title: "Custom Websites",
        description:
            "A professional website built from scratch — tailored to your brand, goals, and audience.",
    },
    {
        icon: AppWindow,
        title: "Web Apps & PWA",
        description:
            "Fast, browser-based applications that work seamlessly across all devices — no app store needed.",
    },
    {
        icon: Smartphone,
        title: "Cross Platform Apps",
        description:
            "One codebase, every platform — Android and iOS apps built with Flutter for speed and consistency.",
    },
    {
        icon: LayoutDashboard,
        title: "Web Portal",
        description:
            "Secure, role-based portals for clients, vendors, or teams — built for real business workflows.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Store",
        description:
            "Online stores built to sell — fast, conversion-focused, and easy to manage at any scale.",
    },
    {
        icon: Building2,
        title: "CRM & ERP",
        description:
            "Connected systems to manage customers, operations, data, and core business processes.",
    },
    {
        icon: Users,
        title: "HR & Internal Tools",
        description:
            "Internal dashboards and HR tools that save time, reduce manual work, and keep teams aligned.",
    },
    {
        icon: GraduationCap,
        title: "Learning & LMS",
        description:
            "Custom learning platforms and LMS solutions built for schools, trainers, and growing teams.",
    },
];

export default function Solutions() {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderLeftRight
                        heading="Solutions for Every Stage of Growth"
                        href={"/solutions"}
                        hreflabel="Explore All Solutions"
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-l sm:grid-cols-2 xl:grid-cols-4">
                    {solution.map(({ title, icon: Icon, description }) => (
                        <div
                            key={title}
                            className="edge-light side-breathing border-t border-r py-12"
                        >
                            <Icon
                                size={32}
                                strokeWidth={1}
                                className="text-ink-secondary"
                            />

                            <h3 className="text-body text-ink-secondary my-4 font-medium">
                                {title}
                            </h3>
                            <p className="text-body text-ink-muted">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
