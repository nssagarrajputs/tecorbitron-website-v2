import Image from "next/image";

import type { ServiceIntroData } from "@/content/services-data";

type Props = { data: ServiceIntroData };

export default function ServiceIntro({ data }: Props) {
    return (
        <section className="bg-canvas-white">
            <div className="edge-light mx-auto max-w-7xl border-x">
                <div className="side-breathing py-24">
                    <h2 className="text-h2 text-ink-light-primary mb-12 font-serif">
                        {data.title}
                    </h2>
                    <p className="text-body text-ink-light-secondary whitespace-pre-line">
                        {data.description}
                    </p>
                </div>
                <div className="edge-light relative h-50 border-t sm:h-60 md:h-90 lg:h-110 xl:h-120">
                    <Image
                        src={data.image}
                        alt={data.imageAlt}
                        fill
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
