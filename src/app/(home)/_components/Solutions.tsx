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
            "Modern business websites built to inform, engage, and convert your audience.",
    },
    {
        icon: AppWindow,
        title: "Web Apps & PWA",
        description:
            "Fast, scalable applications for workflows, customer access, and daily operations.",
    },
    {
        icon: Smartphone,
        title: "Cross Platform Apps",
        description:
            "Mobile apps that work across devices with a consistent and reliable user experience.",
    },
    {
        icon: LayoutDashboard,
        title: "Web Portals",
        description:
            "Secure portals for customers, teams, vendors, and role-based access needs.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Platforms",
        description:
            "Online stores designed for product management, smooth checkout, and growth.",
    },
    {
        icon: Building2,
        title: "CRM & ERP Systems",
        description:
            "Connected systems to manage customers, operations, data, and core business processes.",
    },
    {
        icon: Users,
        title: "HR & Internal Tools",
        description:
            "Internal software that simplifies team workflows, approvals, records, and everyday tasks.",
    },
    {
        icon: GraduationCap,
        title: "Learning Platforms",
        description:
            "Training and education platforms with structured content, progress tracking, and user access.",
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
