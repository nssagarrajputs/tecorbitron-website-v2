"use client";
import { Star, Verified } from "lucide-react";
import Image from "next/image";
import DefaultAvatar from "@/assets/other/default-avatar.png";

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
        <section className="bg-canvas-white">
            <div className="bg-canvas edge-dark mx-auto max-w-7xl border-x">
                <div className="flex-center side-breathing min-h-120">
                    <h2 className="hidden">What Our client Says</h2>
                    <div className="flex-vertical gap-8">
                        <div className="flex-ic-jb">
                            <span className="font-medium">
                                5.0 | Bark Verified
                            </span>
                            <span className="font-black">ThreadCo Name</span>
                        </div>
                        <blockquote className="text-h4 mx-auto line-clamp-3 max-w-3xl font-serif leading-relaxed">
                            {'"'}Honestly refreshing to work with a team that
                            actually gets design. They redesigned our entire
                            storefront and it just *looks* like money now.
                            {'"'}
                        </blockquote>
                    </div>
                </div>

                <div className="edge-dark side-breathing mx-auto border-t py-4">
                    <div className="flex-ic-jb mx-auto max-w-3xl">
                        <div className="flex-vertical">
                            <span className="text-body font-bold">
                                Name Surname
                            </span>
                            <span className="text-small font-medium">
                                Designation
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <button className="border-hairlight flex-center h-10 w-10 border-2 font-bold">
                                P
                            </button>
                            <button className="border-hairlight flex-center h-10 w-10 border-2 font-bold">
                                N
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
