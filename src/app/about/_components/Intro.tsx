import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
import Image from "next/image";

import GoogleImg from "@/assets/rating-platform/google.svg";
import DesignRushImg from "@/assets/rating-platform/designrush.jpeg";
import TrustpilotImg from "@/assets/rating-platform/trustpilot.svg";
import ClutchImg from "@/assets/rating-platform/clutch.jpeg";

const ratings = [
    {
        platform: "Google",
        rating: 4.9,
        reviews: "12 reviews",
        logo: GoogleImg,
    },
    {
        platform: "Trustpilot",
        rating: 4.8,
        reviews: "8 reviews",
        logo: TrustpilotImg,
    },
    {
        platform: "Clutch",
        rating: 5.0,
        reviews: "6 reviews",
        logo: ClutchImg,
    },
    {
        platform: "DesignRush",
        rating: 5.0,
        reviews: "6 reviews",
        logo: DesignRushImg,
    },
];

const stats = [
    { title: "Govt. Registered", value: "MCA" },
    { title: "Years in Business", value: "6Y+" },
    { title: "Happy Clients", value: "100+" },
    { title: "Team Members", value: "15+" },
];

export default function Intro() {
    return (
        <section className="side-layout-spacing dark">
            <div className="edge-dark side-breathing mx-auto max-w-7xl border-x">
                <SectionHeaderCentered heading="A Company Built to Build" />
                <div className="mx-auto max-w-4xl">
                    <p className="text-18 text-ink-secondary mb-6 leading-relaxed">
                        {
                            "Tecorbitron was founded with one simple belief — great digital products shouldn't be reserved for big companies with big budgets. We're a founder-led digital solutions company based in Ghaziabad, India, building modern websites, apps, and digital systems for startups and growing businesses across India and internationally."
                        }
                    </p>
                    <p className="text-18 text-ink-secondary leading-relaxed">
                        {
                            "We started before we were officially registered — because the work came first. Since then, we've delivered 120+ projects, worked with 100+ clients, and covered 30+ industries. Every project we take on is treated with the same level of care, precision, and ambition."
                        }
                    </p>
                </div>

                <div className="mx-auto my-16 grid w-fit grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 lg:gap-8">
                    {ratings.map((r) => (
                        <div
                            key={r.platform}
                            className="edge-dark mx-auto flex w-70 items-center justify-between border px-4 py-2"
                        >
                            {/* Logo + name */}

                            <div className="flex-center aspect-square h-10 w-10">
                                <Image
                                    src={r.logo}
                                    alt={r.platform}
                                    width={24}
                                    height={24}
                                    loading="eager"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="flex w-full flex-col pl-6">
                                <span className="text-16 text-ink-secondary font-bold">
                                    {r.platform}
                                </span>
                                <span className="text-ink-muted text-12">
                                    {r.reviews}
                                </span>
                            </div>

                            <div className="">
                                <span className="text-h3 text-malachite leading-none tracking-tighter">
                                    {r.rating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto w-fit pb-16">
                    <a
                        href="https://global.showmelocal.com/39762168-tecorbitron-solutions-private-limited-website-designer-ghaziabad"
                        target="_blank"
                    >
                        <Image
                            src="https://www.showmelocal.com/showmelocal-member-39762168"
                            alt="Tecorbitron Solutions Private Limited,Website Designer,Ghaziabad,Uttar Pradesh"
                            width={100}
                            height={100}
                            loading="eager"
                        />
                    </a>
                </div>
            </div>

            <div className="edge-dark mx-auto grid max-w-7xl grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className={`edge-dark flex flex-col-reverse items-center gap-2 border-t border-r px-2 py-16 text-center`}
                    >
                        <h3 className="card-title">{stat.title}</h3>
                        <p className="text-malachite text-h2 font-black tracking-tight">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
