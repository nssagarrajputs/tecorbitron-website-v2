import { SectionHeaderCentered } from "@/components/basic-ui/SectionHeaderType";
import Link from "next/link";

export const metadata = {
    title: "404 — Page Not Found",
    description: "The page you are looking for does not exist.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main className="flex-center side-layout-spacing relative min-h-screen w-full flex-col">
            {/* Radial glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, #00d06050 0%, transparent 80%)",
                }}
            />

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage:
                        "linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Giant 404 background text */}
            <div
                className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center select-none"
                aria-hidden
            >
                <span
                    className="text-malachite/10 leading-none font-black"
                    style={{ fontSize: "clamp(180px, 40vw, 420px)" }}
                >
                    404
                </span>
            </div>

            {/* Content */}
            <div className="relative z-50 flex max-w-xl flex-col items-center gap-6 text-center">
                <div className="dark">
                    <SectionHeaderCentered
                        eyebrow="Error 404"
                        heading="Lost In Orbit"
                        supportive="The page you're looking for doesn't exist or has been moved. Lets get you back on track."
                    />
                </div>

                <div className="flex items-center gap-6 max-sm:flex-col">
                    <Link href={"/"} className="brand-btn-primary">
                        Back To Home
                    </Link>
                    <Link href={"/contact"} className="brand-btn-secondary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
