import {
    BadgeCheck,
    UserCheck,
    ShieldCheck,
    ClipboardList,
} from "lucide-react";

const details = [
    {
        label: "Registered & Verified",
        value: "Tecorbitron is fully registered — legally compliant and professionally operated.",
        icon: BadgeCheck,
    },
    {
        label: "Founder-Led Delivery",
        value: "Every project is handled directly by the founder — no junior handoffs, no outsourcing.",
        icon: UserCheck,
    },
    {
        label: "3 Months Post-Launch Support",
        value: "Every project includes free support after delivery. We don't disappear after launch.",
        icon: ShieldCheck,
    },
    {
        label: "Transparent Process",
        value: "Fixed timelines, clear milestones, regular updates — you always know where your project stands.",
        icon: ClipboardList,
    },
];

export default function Credibility() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing flex-vertical items-center gap-8 border-x py-12 md:py-18 lg:py-24">
                    <div className="text-center">
                        <span className="text-12 font-mono">Credibility</span>
                        <h2 className="text-h2 font-serif">
                            Built on Trust. <br /> Backed by Results.
                        </h2>
                    </div>
                </div>

                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {details.map((detail) => {
                        const Icon = detail.icon;

                        return (
                            <div
                                key={detail.label}
                                className="edge-light flex h-full flex-col border-t border-r p-8 md:p-16"
                            >
                                {/* Icon */}
                                <div className="bg-malachite/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Icon
                                        size={22}
                                        className="text-malachite"
                                    />
                                </div>

                                {/* Fixed title area */}
                                <h3 className="text-h4 text-ink-light-primary font-medium uppercase md:min-h-14">
                                    {detail.label}
                                </h3>

                                {/* Description */}
                                <p className="text-body text-ink-light-secondary mt-3 leading-relaxed">
                                    {detail.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="edge-light flex-center border-x border-t py-8">
                    <span className="text-ink-light-muted font-mono">
                        MCA Approved | MSME Certified | GST Registered
                    </span>
                </div>
            </div>
        </section>
    );
}
