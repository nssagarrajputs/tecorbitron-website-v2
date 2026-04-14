import SectionHeader from "@/components/basic-ui/SectionHeader";

type Partner = { category: string; name: string; icon: string };

const partners: Partner[] = [
    {
        category: "Cloud",
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
    },
    {
        category: "Cloud",
        name: "Google Cloud",
        icon: "devicon-googlecloud-plain-wordmark colored",
    },
    {
        category: "Cloud",
        name: "Azure",
        icon: "devicon-azure-plain-wordmark colored",
    },
    {
        category: "Cloud",
        name: "DigitalOcean",
        icon: "devicon-digitalocean-original-wordmark colored",
    },

    {
        category: "Commerce",
        name: "Salesforce",
        icon: "devicon-salesforce-plain colored",
    },
    {
        category: "Commerce",
        name: "WooCommerce",
        icon: "devicon-woocommerce-plain colored",
    },
    {
        category: "Marketing",
        name: "Meta",
        icon: "devicon-facebook-plain colored",
    },
    {
        category: "Marketing",
        name: "Google Ads",
        icon: "devicon-google-plain colored",
    },
    {
        category: "Marketing",
        name: "LinkedIn",
        icon: "devicon-linkedin-plain colored",
    },
    {
        category: "Database",
        name: "Oracle",
        icon: "devicon-oracle-original colored",
    },
    {
        category: "DevOps",
        name: "Docker",
        icon: "devicon-docker-plain colored",
    },
    {
        category: "DevOps",
        name: "Kubernetes",
        icon: "devicon-kubernetes-plain colored",
    },
];

export default function TrustedPartners() {
    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Trusted Partners"
                    heading="Integration Across Platforms"
                    highlight="Platforms"
                    support="We proudly collaborate with globally recognized
                        partners, sharing expertise and resources to deliver
                        innovative, future-ready solutions. Together, we strive
                        to exceed expectations."
                />

                {/* ── FLAT GRID ── */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {partners.map((p) => (
                        <div
                            key={p.name}
                            className="bg-bkg-primary flex flex-col items-center gap-3 rounded-lg px-2 py-4"
                        >
                            {/* Category label */}
                            <span className="text-muted text-[10px] font-black tracking-widest uppercase">
                                {p.category}
                            </span>

                            {/* Logo */}
                            <i className={`${p.icon} text-6xl`} />

                            {/* Name */}
                            {/* <span className="text-muted/50 text-center text-xs font-bold">
                                {p.name}
                            </span> */}
                        </div>
                    ))}
                </div>

                <p className="text-muted mt-8 text-center text-xs font-medium">
                    Partnership network continuously growing — reach out to
                    explore collaboration opportunities.
                </p>
            </div>
        </section>
    );
}
