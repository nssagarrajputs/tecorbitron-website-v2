import type { Metadata } from "next";

import StructuredData, { contactSchema } from "@/components/StructuredData";
import PageHero from "@/components/basic-ui/PageHero";
import ProjectInquiry from "./_components/ProjectInquiry";
import WaysToConnect from "./_components/WaysToConnect";
import BookDiscoveryCall from "./_components/BookDiscoveryCall";
import FAQSection from "@/components/templetes/FAQFormat";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Have an idea or project in mind? Contact Tecorbitron for a free consultation. Get a clear plan, timeline, and cost within 24 hours. No commitment required.",
    keywords: [
        // High intent (VERY IMPORTANT)
        "hire web developer India",
        "hire app developer India",
        "contact software development company",
        "start a project web development",
        "book free consultation IT company",

        // Conversion intent
        "get website development quote",
        "app development consultation India",
        "custom software inquiry",
        "IT company contact India",

        // Local + brand
        "Tecorbitron contact",
        "IT company Ghaziabad contact",
        "software company NCR India",
    ],
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Start Your Project Today | Free Consultation | Tecorbitron",

        description:
            "Tell us about your idea and get a clear plan within 24 hours. Free consultation, transparent pricing, and expert guidance.",

        url: "https://www.tecorbitron.com/contact",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Tecorbitron — Start Your Project",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Tecorbitron | Start Your Project",
        description:
            "Book a free consultation and build your website, app, or software with experts.",
        images: ["/og-image.png"],
    },
};

const faqdata = [
    {
        question: "Do you offer free consultations?",
        answer: "Yes — book a free discovery call directly from our contact page. Choose a time that works for you and we'll have an honest conversation about your goals, requirements, and the best path forward. No sales pitch, no obligation.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely. We work with clients across India, UAE, UK, USA, and beyond. Communication is seamless — we adapt to your timezone and handle everything remotely without compromising on quality or responsiveness.",
    },
    {
        question: "Are you a registered company?",
        answer: "Yes. Tecorbitron Solutions Private Limited is a fully registered company — incorporated under MCA, GST registered, and MSME certified. We are based in Ghaziabad, NCR, India. Enterprise clients and international partners can verify our credentials through official channels.",
    },
    {
        question: "Can you take over a project that's already been started?",
        answer: "Yes. We regularly take on projects that are partially built or stalled midway. We'll review what exists, assess the codebase and scope, and continue from where things left off — cleanly and without starting from scratch.",
    },
    {
        question: "Do you provide support after the project is delivered?",
        answer: "Yes. Every project includes 45 days of free post-launch support covering anything within the agreed scope. After that, we offer flexible options — a subscription-based maintenance plan or per-scope scheduled work — whatever fits your needs best.",
    },
    {
        question: "How do I know if my project is a good fit for Tecorbitron?",
        answer: "If you're a startup, SMB, or founder looking to build or improve a digital product — website, app, software, or anything in between — you're likely a great fit. We work across industries and project sizes. The best way to find out is to book a free call. We'll tell you honestly whether we're the right team for your project, and if not, we'll point you in the right direction.",
    },
];

export default function Contact() {
    return (
        <main>
            <StructuredData data={contactSchema()} />

            <PageHero
                eyebrow="Get in Touch"
                title="Let's Connect"
                highlight="Connect"
                description="Tell us about your project and we'll get back to you within 24 hours. Free consultation, no strings attached."
            />

            <ProjectInquiry />
            <WaysToConnect />
            <BookDiscoveryCall />

            <FAQSection
                bg="bg-white"
                eyebrow="FAQS"
                heading="Before You Reach Out"
                highlight="Reach Out"
                support="Everything you need to know before getting in touch."
                items={faqdata}
            />
        </main>
    );
}
