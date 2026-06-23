import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQFormat from "@/components/templates/FAQFormat";
import CTAFormat from "@/components/templates/CTAFormat";
import Industries from "./_components/Industries";
import MainServices from "./_components/MainServices";
import {
    ServicesPageSchema,
    WebServiceSchema,
    AppServiceSchema,
    EcommerceServiceSchema,
    SeoServiceSchema,
} from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Explore Our Services — Tecorbitron",
    description:
        "From websites and apps to e-commerce and SEO — built for startups and businesses. Fast delivery, transparent pricing, 3 months support included.",
    keywords: [
        // Core service intent
        "web and app development services India",
        "digital services for startups India",
        "IT services for small businesses India",
        "custom software development services India",

        // Buyer journey — comparison stage
        "best web development company India",
        "hire software development team India",
        "outsource web development India",
        "affordable IT services India",

        // Package/pricing searches
        "website development packages India",
        "web development pricing India",
        "fixed price web development India",

        // Location
        "IT services Ghaziabad",
        "digital agency NCR India",
        "web development company near me India",

        // Trust
        "Tecorbitron services",
        "post-launch support web development",
    ],
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Explore Our Services — Tecorbitron",

        description:
            "From websites and apps to e-commerce and SEO — built for startups and businesses. Fast delivery, transparent pricing, 3 months support included.",

        url: "https://www.tecorbitron.com/services",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Services — Web, App & Software Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Explore Our Services — Tecorbitron",
        description:
            "From websites and apps to e-commerce and SEO — built for startups and businesses. Fast delivery, transparent pricing, 3 months support included.",
        images: ["/og-image.png"],
    },
};

const faqdata = [
    {
        question: "How long does it take to build a website?",
        answer: "Most business websites take 2–4 weeks. E-commerce platforms or complex web apps take 4–8 weeks. We always give you a clear timeline before starting, and we stick to it.",
    },
    {
        question: "What is your pricing? Do you have fixed packages?",
        answer: "We offer three engagement models — Fixed Price (starting ₹25,000), Monthly Retainer (starting ₹15,000/mo), and Dedicated Resource (custom). All pricing is transparent with no hidden costs.",
    },
    {
        question: "How many revisions do I get?",
        answer: "All projects include at least 2 rounds of revisions. For design projects, we do revisions until you're happy — within the agreed scope. We want you to love what we build.",
    },
    {
        question: "What technologies do you use?",
        answer: "We primarily use Next.js, React, TypeScript, Node.js, and Tailwind CSS for web. React Native for mobile. Figma for design. We choose the best tool for each project — not just what we're comfortable with.",
    },
    {
        question: "Do you provide support after the project is delivered?",
        answer: "Yes. Every project includes 30 days of post-launch support. Beyond that, we offer AMC (Annual Maintenance Contracts) and monthly retainer plans to keep your product running smoothly.",
    },
    {
        question: "Can you work with our existing team or codebase?",
        answer: "Absolutely. We regularly work alongside in-house teams, integrate with existing codebases, and adapt to your tools and workflows. We're flexible.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes. We work with clients across India, USA, UK, UAE, and beyond. We're comfortable with different time zones and communicate in English. Payments in multiple currencies accepted.",
    },
    {
        question: "What if I'm not sure which service I need?",
        answer: "Book a free 30-minute discovery call. We'll understand your goals and recommend the right solution — honestly, even if that means telling you what you don't need.",
    },
    {
        question: "Are you a registered company?",
        answer: "Yes. We are Tecorbitron Solutions Pvt. Ltd., incorporated in August 2024, GST registered, and based in Ghaziabad, NCR, India. Full company details available on our About page.",
    },
    {
        question: "How do we communicate during the project?",
        answer: "We keep it simple — WhatsApp for quick updates, email for formal communication, and weekly video calls for project reviews. You always know what's happening.",
    },
];

export default function Services() {
    return (
        <main>
            <ServicesPageSchema />
            <WebServiceSchema />
            <AppServiceSchema />
            <EcommerceServiceSchema />
            <SeoServiceSchema />

            <PageHero
                eyebrow="What We OFFER"
                title="Explore Our Services"
                description="Technical services scoped to your business — not cookie-cutter packages. Work within your timeline and budget."
            />

            <MainServices />
            <div className="section-edge-light"></div>

            <Industries />
            <div className="section-edge-light"></div>

            <FAQFormat
                eyebrow="FAQ"
                heading="Frequently Asked Questions"
                items={faqdata}
            />

            <CTAFormat
                eyebrow="NOT SURE WHERE TO BEGIN?"
                heading="We'll help you figure out the best approach."
                primaryAction={{
                    text: "Start Your Project",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "Explore Our Work",
                    href: "/case-studies",
                }}
            />
        </main>
    );
}
