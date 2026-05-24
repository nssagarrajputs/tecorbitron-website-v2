import Image from "next/image";
import Link from "next/link";
import FounderImage from "@/assets/other/founder.png";
import Eypill from "@/components/basic-ui/Eypill";

export default function Founder() {
    return (
        <section className="h-breathing overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-8 pt-20">
                        {/* Name + Title */}
                        <div className="flex flex-col gap-2">
                            <div className="w-fit">
                                <Eypill text="The Founder" />
                            </div>
                            <h2 className="text-typocolor-primary text-h2 font-black tracking-tight">
                                Sagar{" "}
                                <span className="text-malachite">Chauhan</span>
                            </h2>
                            <p className="text-typocolor-muted text-small font-semibold">
                                Founder & CEO — Tecorbitron Solutions Pvt. Ltd.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="bg-malachite h-px w-16" />

                        {/* Bio */}
                        <div className="text-small flex flex-col gap-4 leading-relaxed">
                            <p>
                                Sagar founded Tecorbitron with a clear vision —
                                to build a technology company that prioritises
                                client outcomes over everything else. With
                                expertise spanning web development, digital
                                strategy, and product design, he leads every
                                project with a hands-on approach and an
                                obsession for quality.
                            </p>
                            <p>
                                Before starting Tecorbitron, Sagar worked across
                                multiple domains — building products, running
                                campaigns, and solving real business problems
                                with technology. That experience shaped the way
                                Tecorbitron operates: fast, transparent, and
                                always results-first.
                            </p>
                            <p className="font-semibold italic">
                                {
                                    "Let's drive the future of technology together!"
                                }
                            </p>
                        </div>

                        {/* Social links — text only */}

                        <Link
                            href="https://www.linkedin.com/in/nssagarrajput"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-typocolor-primary hover:text-malachite transi-base w-fit font-bold"
                        >
                            LinkedIn
                        </Link>
                    </div>

                    <div className="mx-auto w-85 sm:w-100 lg:w-115">
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
