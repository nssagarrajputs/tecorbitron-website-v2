import { Target, Eye } from "lucide-react";

const mv = [
    {
        title: "Mission",
        icon: Target,
        description:
            "To make high-quality digital products accessible to every startup and growing business — regardless of size or budget. We build with care, deliver with precision, and grow with our clients.",
    },
    {
        title: "Vision",
        icon: Eye,
        description:
            "To become the most trusted digital solutions partner for startups and SMBs across India and beyond — known for quality, transparency, and results that matter.",
    },
];

export default function MissionVision() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light grid grid-cols-1 border-l md:grid-cols-2">
                    {mv.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="edge-light border-r p-8 lg:p-16"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center">
                                        <Icon className="text-primary h-6 w-6" />
                                    </div>

                                    <h3 className="text-h4 text-ink-light-primary">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-ink-light-secondary leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
