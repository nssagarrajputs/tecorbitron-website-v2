import Image from "next/image";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import Link from "next/link";
import { services } from "@/content/services-data";

export default function CoreServices() {
    return (
        <SectionContainer
            width="lg"
            eyebrow="Core services"
            heading="Services Designed to Grow Your Business"
            highlight="Business"
            support="From idea to launch — we offer end-to-end services designed to help businesses launch, operate, and scale with confidence."
        >
            {/* service card */}
            <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="cardbox hover:border-malachite transi-base group flex flex-col justify-between gap-4 p-6 lg:p-8"
                    >
                        {/* Icon */}
                        <div className="flex h-18 w-18 items-center justify-center select-none">
                            <Image
                                src={service.icon}
                                alt={service.name}
                                width={100}
                                height={100}
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-typocolor-primary text-h4 font-bold">
                            {service.name}
                        </h3>

                        <p className="text-typocolor-secondary text-small mb-4">
                            {service.description_home}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-bkg-secondary shadow-soft text-typocolor-muted text-xmall border-base rounded-full border px-2 py-0.5 font-semibold select-none"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={service.href} className="action-btn">
                            Explore {service.name} Services
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mx-auto">
                <BrandBtn href="/services" variant="secondary">
                    View All Services
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
