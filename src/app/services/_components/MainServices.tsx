import Image from "next/image";
import { services } from "@/content/services-data";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import Link from "next/link";

export default function MainServices() {
    return (
        <SectionContainer width="lg">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="hover:border-malachite group cardbox transi-base flex flex-col gap-4 border p-12"
                    >
                        {/* Icon */}

                        <div className="flex h-14 w-14 items-center justify-center select-none">
                            <Image
                                src={service.icon}
                                alt={service.name}
                                className="h-full w-auto object-contain"
                            />
                        </div>

                        {/* Name + tagline */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-h4 text-malachite font-bold">
                                {service.name}
                            </h3>

                            <p className="text-body text-typocolor-primary font-bold">
                                {service.tagline}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-small text-typocolor-secondary leading-relaxed">
                            {service.description_service}
                        </p>

                        <Link href={service.href} className="action-btn">
                            Explore {service.name} Services
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mx-auto">
                <BrandBtn href="/contact" variant="secondary">
                    Start Your Project
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
