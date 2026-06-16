import { MapPin, Users, Star } from "lucide-react";
import Link from "next/link";

const trustBadges = [
    {
        icon: Users,
        text: "120+ Jobs done",
        iconClass: "text-malachite",
    },
    {
        icon: Star,
        text: "Trusted by 100+ clients",
        iconClass: "text-warning",
    },
    {
        icon: MapPin,
        text: "NCR Based",
        iconClass: "text-malachite",
    },
];

export default function Hero() {
    return (
        <section className="dark side-layout-spacing relative">
            {/* Radial glow center */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.2) 0%, transparent 80%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="edge-dark flex-center side-breathing w-full border-x border-b pt-24 pb-8">
                    <span className="header-disclaimer">
                        FOR STARTUPS AND BUSINESS
                    </span>
                </div>

                <div className="flex-vertical edge-dark side-breathing w-full items-center gap-12 border-x py-16">
                    <h1 className="text-d1 text-ink-primary text-center leading-tight font-light tracking-tight">
                        Build your Web & App <br />{" "}
                        <span className="text-gradient font-bold">
                            Superfast
                        </span>
                    </h1>

                    <p className="text-body text-ink-secondary mx-auto max-w-2xl text-center leading-relaxed">
                        From launch-ready websites to custom apps and e-commerce
                        stores — we design and build modern digital products
                        that help your business grow with confidence.
                    </p>

                    <Link
                        href={"/contact"}
                        className="brand-btn-primary mx-auto"
                    >
                        Start Your Project
                    </Link>
                </div>

                <div className="edge-dark grid w-full grid-cols-1 border-l lg:grid-cols-3">
                    {trustBadges.map(({ icon: Icon, text, iconClass }) => (
                        <div
                            key={text}
                            className="flex-center edge-dark gap-2 border-t border-r py-8"
                        >
                            <Icon size={15} className={iconClass} />
                            <span className="text-16 text-ink-primary font-mono">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
