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

export default function Home() {
    return (
        <main>
            <StructuredData data={homePageSchema()} />

            <Hero />
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
            />
        </main>
    );
}
