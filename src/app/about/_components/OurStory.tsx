import SectionContainer from "@/components/basic-ui/SectionContainer";

export default function OurStory() {
    return (
        <SectionContainer
            width="sm"
            eyebrow="Our Story"
            heading="Why Tecorbitron Exists"
            highlight="Exists"
        >
            <div className="text-body flex flex-col gap-4 leading-relaxed">
                <p>
                    Tecorbitron was born out of frustration. Too many businesses
                    were being overcharged by agencies that didn&apos;t
                    communicate, underserved by freelancers who disappeared
                    after delivery, and left with products that looked good but
                    didn&apos;t work.
                </p>
                <p>
                    We started with a simple belief — that businesses of every
                    size deserve access to premium technology, transparent
                    pricing, and a team that genuinely cares about their growth.
                </p>
                <p>
                    Founded in August 2024 and incorporated as a Private Limited
                    company, Tecorbitron Solutions is built to be the technology
                    partner we always wished existed — fast, honest, and
                    results-driven.
                </p>
            </div>

            {/* Timeline */}
            <div className="border-base mt-2 flex flex-col gap-4 border-l-2 pl-4">
                {[
                    {
                        year: "Dec 2019",
                        event: "We started working as a freelancing",
                    },
                    {
                        year: "June 2024",
                        event: "Idea was blink to build Tecorbitron",
                    },
                    {
                        year: "Aug 2024",
                        event: "Incorporat Tecorbitron",
                    },
                    {
                        year: "Sep 2024",
                        event: "First client project delivered",
                    },
                    {
                        year: "Jan 2025",
                        event: "Expanding team & service offerings",
                    },
                ].map((item) => (
                    <div key={item.year} className="flex items-start gap-4">
                        <span className="bg-malachite-dim text-malachite-rich text-small shrink-0 rounded-full px-3 py-1 font-bold">
                            {item.year}
                        </span>
                        <span className="text-typocolor-secondary text-small pt-1 font-semibold">
                            {item.event}
                        </span>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
