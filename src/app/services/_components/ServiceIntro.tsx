import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { ServiceIntroData } from "@/content/services-data";

type Props = { data: ServiceIntroData };

export default function ServiceIntro({ data }: Props) {
    return (
        <SectionContainer width="lg">
            {/* Full width image */}
            <div className="rounded-4 relative h-125 w-full overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Description */}
            <p className="text-body text-typocolor-secondary mx-auto max-w-3xl text-center leading-relaxed">
                {data.description}
            </p>
        </SectionContainer>
    );
}
