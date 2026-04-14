import SectionHeader from "@/components/basic-ui/SectionHeader";

const details = [
    { label: "Legal Name", value: "Tecorbitron Solutions Pvt. Ltd." },
    { label: "CIN Number", value: "U62011UP2024PTC207353" },
    { label: "Head Office", value: "Ghaziabad, NCR, INDIA" },
    { label: "Official Email", value: "info@tecorbitron.com" },
];

export default function Credibility() {
    return (
        <section className="bg-bkg-primary h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Credibility"
                    heading="A Company You Can Trust"
                    highlight="Trust"
                    support="We are a fully registered Private Limited company — not
                        a freelancer or unregistered agency. Enterprise clients
                        and international partners can verify our credentials
                        through official channels."
                />

                <div className="border-border-strong mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-lg border">
                    <div className="border-border-strong border-b px-6 py-4">
                        <h3 className="text-body font-black">
                            Key Information Details
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        {details.map((detail, index) => (
                            <div
                                key={detail.label}
                                className={`border-border-strong flex items-start justify-between gap-4 border-b px-6 py-4 last:border-0 ${index % 2 === 0 ? "bg-white/2" : "bg-transparent"}`}
                            >
                                <span className="text-small shrink-0 pt-0.5 font-bold tracking-wider uppercase">
                                    {detail.label}
                                </span>
                                <span className="text-typocolor-secondary text-small text-right font-semibold">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-typocolor-muted mt-8 text-center text-sm leading-relaxed font-medium">
                    * CIN and full registration details available upon request
                    for enterprise clients and procurement teams.
                </p>
            </div>
        </section>
    );
}
