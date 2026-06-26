import Image from "next/image";

import type { IntroSection } from "@/content/services-data";

type Props = { data: IntroSection };

export default function ServiceIntro({ data }: Props) {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="edge-light mx-auto max-w-7xl border-x pt-24">
                <div className="side-breathing mb-16">
                    <h2 className="section-heading mb-16">{data.title}</h2>
                    <p className="text-18 text-ink-secondary whitespace-pre-line">
                        {data.description}
                    </p>
                </div>
                <div className="edge-light relative aspect-16/8 w-full border-t">
                    <Image
                        src={data.image}
                        alt={data.imageAlt}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
}
