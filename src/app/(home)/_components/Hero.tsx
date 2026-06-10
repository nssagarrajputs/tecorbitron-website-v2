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
        <section className="relative min-h-screen">
            {/* Radial glow center */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.2) 0%, transparent 80%)",
                }}
            />

            <div className="edge-dark relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 border-x pt-16 text-center">
                <div className="edge-dark w-full border-b p-8">
                    <span className="text-body text-ink-dark-secondary font-mono">
                        FOR STARTUPS AND BUSINESS
                    </span>
                </div>

                <div className="flex-vertical w-full gap-12 p-4">
                    <h1 className="text-d1 leading-tight font-light tracking-tight">
                        Build your Web & App <br />{" "}
                        <span className="text-gradient font-bold">
                            Superfast
                        </span>
                    </h1>

                    <p className="text-body text-ink-dark-secondary mx-auto max-w-2xl text-center leading-relaxed">
                        From launch-ready websites to custom apps and e-commerce
                        stores — we design and build modern digital products
                        that help your business grow with confidence.
                    </p>

                    <Link
                        href={"/contact"}
                        className="bg-malachite text-ink-dark-primary text-16 hover:bg-primary active:bg-primary-active smooth-transition mx-auto w-fit px-12 py-4 font-bold"
                    >
                        Start Your Project
                    </Link>
                </div>

                <div className="edge-dark grid w-full grid-cols-1 border-t md:grid-cols-3">
                    {trustBadges.map(
                        ({ icon: Icon, text, iconClass }, index) => (
                            <div
                                key={text}
                                className={`flex-center gap-2 py-4 ${
                                    index === 1
                                        ? "edge-dark max-md:border-y md:border-x"
                                        : ""
                                }`}
                            >
                                <Icon size={15} className={iconClass} />
                                <span className="text-16 font-mono">
                                    {text}
                                </span>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
