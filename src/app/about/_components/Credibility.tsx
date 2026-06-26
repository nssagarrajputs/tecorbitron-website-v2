import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
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
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow="Credibility"
                        heading="Built on Trust. Backed by Results."
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {details.map((detail) => {
                        const Icon = detail.icon;

                        return (
                            <div
                                key={detail.label}
                                className="edge-light side-breathing flex-vertical h-full border-t border-r py-16"
                            >
                                {/* Icon */}
                                <div className="bg-malachite/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Icon
                                        size={22}
                                        className="text-malachite"
                                    />
                                </div>

                                {/* Fixed title area */}
                                <h3 className="card-heading capitalize">
                                    {detail.label}
                                </h3>

                                {/* Description */}
                                <p className="card-caption mt-6 max-w-md">
                                    {detail.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="edge-light flex-center side-breathing border-x border-t py-8">
                    <span className="section-endline">
                        MCA Approved | MSME Certified | GST Registered
                    </span>
                </div>
            </div>
        </section>
    );
}
