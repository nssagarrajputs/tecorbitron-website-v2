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

import Link from "next/link";

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
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing grid grid-cols-1 gap-y-12 border-x py-12 md:py-18 lg:grid-cols-2 lg:py-24">
                    <h2 className="text-h2 font-serif">
                        Solutions for Every Stage of Growth
                    </h2>

                    <div className="flex-vertical justify-end md:items-end">
                        <Link
                            href={"/solutions"}
                            className="text-16 border-hairdark hover:bg-canvas active:bg-canvas active:text-ink-dark-primary hover:text-ink-dark-primary smooth-transition w-fit border px-4 py-2 font-medium"
                        >
                            Explore All Solutions →
                        </Link>
                        <Link
                            href={"/contact"}
                            className="text-16 border-hairdark hover:bg-canvas active:bg-canvas active:text-ink-dark-primary hover:text-ink-dark-primary smooth-transition w-fit border px-4 py-2 font-medium"
                        >
                            Build Your Own →
                        </Link>
                    </div>
                </div>

                <div className="edge-light grid grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4">
                    {solution.map(({ title, icon: Icon, description }) => (
                        <div
                            key={title}
                            className="edge-light text-ink-light-secondary border-t border-r p-6"
                        >
                            <Icon size={40} strokeWidth={1} />

                            <h3 className="text-body text-ink-light-secondary my-4 font-semibold">
                                {title}
                            </h3>
                            <p className="text-small text-ink-light-muted">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
