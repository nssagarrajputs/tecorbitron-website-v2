import Hero from "@/components/page/careers/Hero";
import WhyJoinUs from "@/components/page/careers/WhyJoinUs";
import OpenPositions from "@/components/page/careers/OpenPositions";
import HiringProcess from "@/components/page/careers/HiringProcess";
import CareersCTA from "@/components/page/careers/CareersCTA";

export default function CareersPage() {
    return (
        <main>
            <Hero />
            <WhyJoinUs />
            <OpenPositions />
            <HiringProcess />
            <CareersCTA />
        </main>
    );
}
