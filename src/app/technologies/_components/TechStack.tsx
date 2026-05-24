import Image, { StaticImageData } from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import type {
    TechnologyGroup,
    TechnologyItem,
} from "@/content/technologies-data";

function TechCard({ item }: { item: TechnologyItem }) {
    return (
        <div className="cardbox group hover:border-malachite transi-base flex h-full flex-col items-center gap-3 p-4 text-center md:p-6">
            <div className="flex-center h-15 w-15">
                <Image
                    src={item.icon as StaticImageData}
                    alt={item.name}
                    width={35}
                    height={35}
                    className="object-contain"
                />
            </div>
            <p className="text-small transi-base group-hover:text-typocolor-secondary text-typocolor-muted leading-snug font-bold">
                {item.name}
            </p>
        </div>
    );
}

type Props = {
    groups: TechnologyGroup[];
};

export default function TechStack({ groups }: Props) {
    return (
        <SectionContainer width="lg">
            <div className="flex flex-col gap-24">
                {groups.map((group) => (
                    <div key={group.heading} className="flex flex-col gap-8">
                        <h3 className="text-h3 gradient-heading font-bold">
                            {group.heading}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {group.items.map((item) => (
                                <TechCard
                                    key={`${group.heading}-${item.name}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
