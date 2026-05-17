import SectionHeader from "@/components/basic-ui/SectionHeader";

import AWS from "@/assets/trusted-partner/aws-2.svg";
import GoogleCloud from "@/assets/trusted-partner/google-cloud-1.svg";
import Azure from "@/assets/trusted-partner/azure-2.svg";
import DigitalOcean from "@/assets/trusted-partner/digitalocean-icon-1.svg";
import Salesforce from "@/assets/trusted-partner/salesforce-2.svg";
import WooComerce from "@/assets/trusted-partner/woocommerce.svg";
import Meta from "@/assets/trusted-partner/meta-3.svg";
import GAds from "@/assets/trusted-partner/google-ads-2.svg";
import Ln from "@/assets/trusted-partner/linkedin-icon-3.svg";
import Oracle from "@/assets/trusted-partner/oracle-india.svg";
import Docker from "@/assets/trusted-partner/docker-4.svg";
import Kuber from "@/assets/trusted-partner/kubernets.svg";
import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";

const partners = [
    { category: "Cloud", name: "AWS", icon: AWS },
    { category: "Cloud", name: "Google Cloud", icon: GoogleCloud },
    { category: "Cloud", name: "Azure", icon: Azure },
    { category: "Cloud", name: "DigitalOcean", icon: DigitalOcean },
    { category: "Commerce", name: "Salesforce", icon: Salesforce },
    { category: "Commerce", name: "WooCommerce", icon: WooComerce },
    { category: "Marketing", name: "Meta", icon: Meta },
    { category: "Marketing", name: "Google Ads", icon: GAds },
    { category: "Marketing", name: "LinkedIn", icon: Ln },
    { category: "Database", name: "Oracle", icon: Oracle },
    { category: "DevOps", name: "Docker", icon: Docker },
    { category: "DevOps", name: "Kubernetes", icon: Kuber },
];

export default function TrustedPartners() {
    return (
        <SectionContainer
            eyebrow="TECHNOLOGY PARTNERS"
            heading="Integration Across Platforms"
            highlight="Platforms"
            support="We work with globally recognised platforms and cloud providers — giving every project enterprise-grade reliability from day one."
        >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {partners.map((p) => (
                    <div
                        key={p.name}
                        className="cardbox hover:border-malachite transi-base flex flex-col items-center gap-3 px-2 py-4"
                    >
                        {/* Category label */}
                        <span className="text-typocolor-muted text-xmall font-black tracking-widest uppercase">
                            {p.category}
                        </span>

                        {/* Logo */}
                        <Image
                            src={p.icon}
                            alt={p.name}
                            className="aspect-square w-[25%]"
                        />

                        {/* Name */}
                        <span className="text-typocolor-secondary text-small text-center font-bold">
                            {p.name}
                        </span>
                    </div>
                ))}
            </div>

            <p className="text-typocolor-muted text-small text-center font-medium">
                Partner network continues to grow — reach out to explore
                collaboration opportunities.
            </p>
        </SectionContainer>
    );
}
