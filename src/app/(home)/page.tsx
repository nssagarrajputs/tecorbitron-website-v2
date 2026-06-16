import Hero from "./_components/Hero";
import ClientLogoStripe from "./_components/ClientLogoStripe";
import CoreServices from "./_components/CoreServices";
import Solutions from "./_components/Solutions";
import Technologies from "./_components/Technologies";
import StatsBand from "./_components/StatsBand";
import FeaturedProjects from "./_components/FeaturedProjects";
import Testimonials from "./_components/Testimonials";
import FeaturedBlogs from "./_components/FeaturedBlogs";
import CTAFormat from "@/components/templetes/CTAFormat";
import StructuredData, { homePageSchema } from "@/components/StructuredData";
import FAQFormat from "@/components/templetes/FAQFormat";

const faqdata = [
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
];

export default function Home() {
    return (
        <main>
            <StructuredData data={homePageSchema()} />

            {/* <Hero />
            <ClientLogoStripe />
            <div className="section-edge-light"></div>
            <CoreServices />
            <div className="section-edge-light"></div>
            <Solutions />
            <div className="section-edge-light"></div>
            <Testimonials />
            <div className="section-edge-light"></div>
            <StatsBand />
            <div className="section-edge-light"></div>
            <FeaturedProjects />
            <div className="section-edge-light"></div>
            <Technologies />
            <div className="section-edge-light"></div>
            <FeaturedBlogs />
            <div className="section-edge-light"></div>
            <FAQFormat
                eyebrow="FAQS"
                heading="Before You Reach Out"
                items={faqdata}
            />
            <CTAFormat
                eyebrow="GET STARTED"
                heading="Ready to Build Something That Works?"
                primaryAction={{
                    text: "Start your project",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "Explore Services",
                    href: "/services",
                }}
            /> */}
        </main>
    );
}
