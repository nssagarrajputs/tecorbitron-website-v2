import { SectionHeaderCentered } from "@/components/basic-ui/SectionHeaderType";

const testimonials = [
    {
        name: "James Whitfield",
        role: "Product Manager",
        companyName: "TravelSync",
        quote: "Hired them for a React Native travel app with complex offline sync logic. They handled edge cases I didn't even think of, delivered clean code with documentation, and shipped on schedule. Solid team.",
        rating: "5.0",
        source: "Bark.com",
    },
    {
        name: "Ananya Bose",
        role: "Brand Manager",
        companyName: "ThreadCo",
        quote: "Honestly refreshing to work with a team that actually gets design. They redesigned our entire storefront and it just *looks* like money now. Conversions went up within the first month. Couldn't be happier.",
        rating: "5.0",
        source: "Trustpilot",
    },
    {
        name: "Rohan Desai",
        role: "CTO",
        companyName: "DataNest",
        quote: "Tecorbitron integrated a custom AI pipeline into our SaaS product — complete with API design, cloud deployment on AWS, and monitoring setup. The code quality was production-grade. We've already brought them back for phase two.",
        rating: "4.5",
        source: "Clutch.co",
    },
    {
        name: "Amit Verma",
        role: "Operations Head",
        companyName: "LogiFreight",
        quote: "We needed a custom internal tool to manage our logistics workflow — nothing off the shelf fit. Tecorbitron built it from scratch, and it's saved us hours every week. Timelines were slightly tight but they pulled through.",
        rating: "4.5",
        source: "GoodFirms",
    },
    {
        name: "Sarah Mitchell",
        role: "Head of Growth",
        companyName: "NutriBox UK",
        quote: "We engaged Tecorbitron for a full website rebuild paired with an SEO strategy targeting the UK market. The project was managed professionally, the communication across time zones was seamless, and the results have been measurable.",
        rating: "4.0",
        source: "Trustpilot",
    },
    {
        name: "Kabir Malhotra",
        role: "Founder",
        companyName: "EduSpark",
        quote: "Before they wrote a single line of code, they sat with us, understood the business, and pointed out things we hadn't considered. That consulting phase alone was worth it. The product they built after was exactly what we needed.",
        rating: "5.0",
        source: "Google",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-canvas-white dark side-layout-spacing">
            <div className="bg-canvas mx-auto max-w-7xl">
                <div className="edge-dark border-x">
                    <SectionHeaderCentered
                        eyebrow="What Our Clients Say"
                        heading="Verified feedback from clients across industries —
                            in their own words"
                    />
                </div>

                <div className="edge-dark grid grid-cols-1 border-l md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((review) => (
                        <div
                            key={review.name}
                            className="edge-dark side-breathing border-t border-r py-12"
                        >
                            <div className="flex-vertical gap-6">
                                <div className="flex-ic-jb text-ink-muted">
                                    <div className="text-16">
                                        <span className="text-malachite">
                                            {review.rating}
                                        </span>{" "}
                                        | {review.source}
                                    </div>
                                    <span className="font-black">
                                        {review.companyName}
                                    </span>
                                </div>
                                <blockquote className="text-body text-ink-secondary line-clamp-4 leading-relaxed tracking-wide">
                                    {review.quote}
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
