import Image from "next/image";
import Link from "next/link";
import FounderImage from "@/assets/other/founder.png";

export default function Founder() {
    return (
        <section className="bg-canvas-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-ink-light-primary edge-light side-breathing border-x py-12 md:py-18 lg:py-24">
                    <div>
                        <span className="text-12 font-mono">
                            Meet the Founder
                        </span>
                        <h2 className="text-h2 mb-8 font-serif">
                            Sagar Chauhan
                        </h2>
                        <span>
                            Founder & CEO — Tecorbitron Solutions Pvt. Ltd.
                        </span>
                    </div>
                </div>

                <div className="edge-light border-t border-x grid grid-cols-1 lg:grid-cols-2">
                    <div className="text-ink-light-secondary text-body flex flex-col gap-8 leading-relaxed side-breathing py-8">
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
                            className="text-ink-light-primary hover:text-malachite smooth-transition w-fit font-bold"
                        >
                            LinkedIn
                        </Link>
                    </div>

                    <div className="mx-auto w-85 sm:w-100 lg:w-115 flex-vertical justify-end">
                        <Image
                            src={FounderImage}
                            alt="Sagar Chauhan — Founder & CEO, Tecorbitron"
                            className="h-auto w-full object-contain object-center drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
