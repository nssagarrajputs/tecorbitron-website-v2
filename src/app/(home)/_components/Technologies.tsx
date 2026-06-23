import React from "@/assets/technology-icon/react.svg";
import Nextjs from "@/assets/technology-icon/next-js.svg";
import TypeScript from "@/assets/technology-icon/typescript.svg";
import Angular from "@/assets/technology-icon/angular.svg";
import Nodejs from "@/assets/technology-icon/nodejs.svg";
import Express from "@/assets/technology-icon/expressjs.svg";
import Laravel from "@/assets/technology-icon/laravel-2.svg";
import ReactNative from "@/assets/technology-icon/react-native.svg";
import Flutter from "@/assets/technology-icon/flutter.svg";
import Swift from "@/assets/technology-icon/swift-15.svg";
import SpringBoot from "@/assets/technology-icon/spring-3.svg";
import Java from "@/assets/technology-icon/java-14.svg";
import Cplusplus from "@/assets/technology-icon/c.svg";
import Python from "@/assets/technology-icon/python-5.svg";
import Go from "@/assets/technology-icon/go-lang.svg";
import PHP from "@/assets/technology-icon/php-4.svg";
import Figma from "@/assets/technology-icon/figma-icon.svg";
import PostgreSQL from "@/assets/technology-icon/postgresql.svg";
import MySQL from "@/assets/technology-icon/mysql-logo-pure.svg";
import MongoDB from "@/assets/technology-icon/mongodb-icon-1.svg";
import Redis from "@/assets/technology-icon/redis.svg";
import AWS from "@/assets/technology-icon/aws-2.svg";
import GCP from "@/assets/technology-icon/google-cloud-1.svg";
import Azure from "@/assets/technology-icon/azure-2.svg";
import Image from "next/image";

import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";

const technology = [
    { name: "React", icon: React },
    { name: "Next.js", icon: Nextjs },
    { name: "TypeScript", icon: TypeScript },
    { name: "Angular", icon: Angular },
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: Express },
    { name: "Laravel", icon: Laravel },
    { name: "React Native", icon: ReactNative },
    { name: "Flutter", icon: Flutter },
    { name: "Swift", icon: Swift },
    { name: "SpringBoot", icon: SpringBoot },
    { name: "Java", icon: Java },
    { name: "C++", icon: Cplusplus },
    { name: "Python", icon: Python },
    { name: "Go", icon: Go },
    { name: "PHP", icon: PHP },
    { name: "Figma", icon: Figma },
    { name: "PostgreSQL", icon: PostgreSQL },
    { name: "MySQL", icon: MySQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "AWS", icon: AWS },
    { name: "GCP", icon: GCP },
    { name: "Azure", icon: Azure },
];

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Technologies() {
    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="mx-auto max-w-7xl">
                <div className="edge-light border-x">
                    <SectionHeaderCentered
                        eyebrow="Tool & Tech"
                        heading="The Stack Behind Every Project"
                        href="/technologies"
                        hreflabel="View All Technologies"
                    />
                </div>

                <div className="edge-light grid grid-cols-3 border-l sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                    {technology.map((tech) => (
                        <div
                            key={tech.name}
                            className="edge-light flex flex-col items-center gap-4 border-t border-r py-8"
                        >
                            <div className="flex-center relative aspect-square w-12">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    sizes="50px"
                                    loading="lazy"
                                    className="object-contain select-none"
                                />
                            </div>
                            <p className="text-body text-ink-muted">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
