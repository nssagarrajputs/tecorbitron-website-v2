import Image from "next/image";

const ratings = [
    {
        platform: "Google",
        rating: 4.9,
        reviews: "12 reviews",
        color: "#4285F4",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                />
            </svg>
        ),
    },
    {
        platform: "Trustpilot",
        rating: 4.8,
        reviews: "8 reviews",
        color: "#00B67A",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                    fill="#00B67A"
                />
            </svg>
        ),
    },
    {
        platform: "Clutch",
        rating: 5.0,
        reviews: "6 reviews",
        color: "#EF4335",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#EF4335" />
                <path
                    d="M12 7a5 5 0 1 0 3.54 8.54l-1.42-1.42A3 3 0 1 1 12 9v2l3-3-3-3v2z"
                    fill="white"
                />
            </svg>
        ),
    },
];

const stats = [
    { title: "Govt. Registered", value: "MCA & GST" },
    { title: "Years in Business", value: "6Y+" },
    { title: "Happy Clients", value: "100+" },
    { title: "Team Members", value: "15+" },
];
export default function Intro() {
    return (
        <section>
            <div className="edge-dark side-breathing mx-auto max-w-7xl border-x py-12 md:py-18 lg:py-24">
                <div className="flex flex-col gap-6">
                    <h2 className="text-h2 text-ink-dark-primary mb-8 text-center font-serif">
                        A Company <br className="md:hidden" /> Built to Build
                    </h2>
                    <p className="text-body mx-auto max-w-4xl font-mono leading-relaxed">
                        {
                            "Tecorbitron was founded with one simple belief — great digital products shouldn't be reserved for big companies with big budgets. We're a founder-led digital solutions company based in Ghaziabad, India, building modern websites, apps, and digital systems for startups and growing businesses across India and internationally."
                        }
                    </p>
                    <p className="text-body mx-auto max-w-4xl font-mono leading-relaxed">
                        {
                            "We started before we were officially registered — because the work came first. Since then, we've delivered 120+ projects, worked with 100+ clients, and covered 30+ industries. Every project we take on is treated with the same level of care, precision, and ambition."
                        }
                    </p>
                </div>

                <div className="my-8 flex items-center justify-center gap-5 max-md:flex-col">
                    {ratings.map((r) => (
                        <div
                            key={r.platform}
                            className="cardbox flex w-fit items-center justify-between gap-6 p-2"
                        >
                            {/* Logo + name */}
                            <div className="flex items-center gap-4">
                                <div className="flex-center h-12 w-12">
                                    {r.logo}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-body font-bold">
                                        {r.platform}
                                    </span>
                                    <span className="text-typocolor-muted text-xmall">
                                        {r.reviews}
                                    </span>
                                </div>
                            </div>

                            {/* Rating number */}
                            <div className="flex shrink-0 flex-col items-end gap-1">
                                <span
                                    className="text-h4 leading-none font-black opacity-65"
                                    style={{ color: r.color }}
                                >
                                    {r.rating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto w-fit">
                    <a
                        href="https://global.showmelocal.com/39762168-tecorbitron-solutions-private-limited-website-designer-ghaziabad"
                        target="_blank"
                    >
                        <Image
                            src="https://www.showmelocal.com/showmelocal-member-39762168"
                            alt="Tecorbitron Solutions Private Limited,Website Designer,Ghaziabad,Uttar Pradesh"
                            width={100}
                            height={100}
                            // className="h-25 w-25"
                            priority
                        />
                    </a>
                </div>

                {/* Note */}
                <p className="text-ink-dark-muted text-small text-center font-medium">
                    Ratings reflect verified client feedback across platforms.
                </p>
            </div>

            <div className="edge-dark mx-auto grid max-w-7xl grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className={`edge-dark flex flex-col-reverse items-center gap-2 border-t border-r py-16 text-center`}
                    >
                        <h3 className="text-ink-dark-secondary text-body">
                            {stat.title}
                        </h3>
                        <p className="text-malachite text-h3 font-mono font-black tracking-tight">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
