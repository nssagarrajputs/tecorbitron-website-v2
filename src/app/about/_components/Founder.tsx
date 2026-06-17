import Image from "next/image";
import Link from "next/link";
import FounderImage from "@/assets/other/founder.png";
import { SectionHeaderLeftHanded } from "@/components/basic-ui/SectionHeaderType";

export default function Founder() {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderLeftHanded
                        eyebrow="Meet the Founder"
                        heading="Sagar Chauhan"
                        supportive="Founder & CEO — Tecorbitron Solutions Pvt. Ltd."
                    />
                </div>

                <div className="edge-light grid grid-cols-1 border-x border-t lg:grid-cols-[3fr_2fr]">
                    <div className="text-ink-secondary text-body side-breathing flex flex-col gap-8 py-8 leading-relaxed">
                        <p>
                            Sagar founded Tecorbitron with a clear vision — to
                            build a technology company that prioritises client
                            outcomes over everything else. With expertise
                            spanning web development, digital strategy, and
                            product design, he leads every project with a
                            hands-on approach and an obsession for quality.
                        </p>
                        <p>
                            Before starting Tecorbitron, Sagar worked across
                            multiple domains — building products, running
                            campaigns, and solving real business problems with
                            technology. That experience shaped the way
                            Tecorbitron operates: fast, transparent, and always
                            results-first.
                        </p>
                        <p>
                            He started Tecorbitron to build something different
                            — a company that combines technical depth with real
                            business thinking. Not just developers, but
                            strategic partners who care about outcomes, not just
                            deliverables.
                        </p>
                        <p>
                            He works directly with every client — no middlemen,
                            no account managers. Clients get a founder who
                            understands their business, their goals, and their
                            constraints.
                        </p>
                        <p className="font-medium italic">
                            {"Let's drive the future of technology together!"}
                        </p>

                        <Link
                            href="https://www.linkedin.com/in/nssagarrajput"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-text text-ink-primary w-fit font-bold"
                        >
                            LinkedIn
                        </Link>
                    </div>

                    <div className="flex-vertical mx-auto w-85 justify-end sm:w-100 lg:w-115">
                        <Image
                            src={FounderImage}
                            alt="Sagar Chauhan — Founder & CEO, Tecorbitron"
                            className="h-auto w-full object-contain object-center drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
