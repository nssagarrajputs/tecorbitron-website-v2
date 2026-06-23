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
        question: "What services does Tecorbitron offer?",
        answer: "We offer web development, app development, e-commerce development, and SEO services. From simple business websites to complex web apps, mobile apps, and online stores — we cover the full spectrum of digital product development.",
    },
    {
        question: "How long does it take to complete a project?",
        answer: "It depends on the scope and complexity of your project. A standard business website typically takes 2–4 weeks, while a custom web app or mobile app can take 6–16 weeks. We share a clear timeline before we begin so you always know what to expect.",
    },
    {
        question: "What is your pricing? Do you have fixed packages?",
        answer: "We don't offer one-size-fits-all packages. Every project is scoped and priced based on your specific requirements. We offer Fixed Quote, Pay as You Go, Staged Delivery, and Monthly Retainer models — so you always get a pricing structure that fits your project.",
    },
    {
        question: "What happens after the project is delivered?",
        answer: "Every project includes 3 months of free post-launch support. During this period, we handle bug fixes, minor adjustments, and technical issues at no extra cost. After that, we offer ongoing support and maintenance through our best pricing model plans.",
    },
    {
        question: "Can you work with our existing team or codebase?",
        answer: "Absolutely. We're comfortable jumping into existing projects, reviewing codebases, and collaborating with in-house teams. Whether you need extra development capacity or a fresh perspective on an ongoing project, we can plug in wherever needed.",
    },
    {
        question: "How do we communicate during the project?",
        answer: "We keep it simple — WhatsApp for quick updates, email for formal communication, and weekly video calls for project reviews. You always know what's happening.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes. We work with clients across India, USA, UK, UAE, and beyond. We're comfortable with different time zones and communicate in English. Payments in multiple currencies accepted.",
    },
    {
        question: "Are you a registered company?",
        answer: "Yes. We are Tecorbitron Solutions Pvt. Ltd., incorporated in August 2024, GST registered, and based in Ghaziabad, NCR, India.",
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
