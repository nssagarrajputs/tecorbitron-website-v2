import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type { WhyUsData } from "@/content/services-data";

type Props = { data: WhyUsData };

export default function ServiceWhyUs({ data }: Props) {
    return (
        <SectionContainer width="lg">
            {/* Heading */}
            <h2 className="text-h2 gradient-heading text-center font-bold">
                {data.heading}
            </h2>

            {/* Full width banner image */}
            <div className="rounded-4 relative h-100 w-full overflow-hidden">
                <Image
                    src={data.bannerImg as string}
                    alt={data.heading}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>

            {/* List items */}
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                {data.li.map((item, i) => (
                    <li
                        key={item.title}
                        className="rounded-4 group flex flex-col gap-2"
                    >
                        <div className="flex items-center gap-3">
                            <span className="bg-bkg-secondary text-typocolor-muted text-small flex-center group-hover:text-malachite transi-base h-10 w-10 shrink-0 rounded-full font-bold">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h4 className="text-body text-typocolor-primary transi-base group-hover:text-malachite font-bold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="text-small text-typocolor-muted pl-13 leading-relaxed">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    );
}
