import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
    title: "404 — Page Not Found",
    description: "The page you are looking for does not exist.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
            style={{
                background:
                    "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            }}
        >
            {/* Radial glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
                }}
            />

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Giant 404 background text */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
                aria-hidden
            >
                <span
                    className="leading-none font-black text-white/3"
                    style={{ fontSize: "clamp(180px, 40vw, 420px)" }}
                >
                    404
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 text-center">
                {/* Eyebrow */}
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                        Error 404
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    Lost in <span className="text-malachite">Orbit?</span>
                </h1>

                {/* Description */}
                <p className=" leading-relaxed  text-white/80">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved. <br /> Let&apos;s get you back on track.
                </p>

                {/* CTAs */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center gap-4 rounded-full px-7 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <ArrowLeft size={15} />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                    >
                        Contact Us
                        <ArrowRight size={15} />
                    </Link>
                </div>

                {/* Quick links */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                    {[
                        { label: "About", href: "/about" },
                        { label: "Services", href: "/services" },
                        { label: "Portfolio", href: "/portfolio" },
                        { label: "Blog", href: "/blog" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-malachite text-xs font-semibold text-white/50 underline-offset-4 transition-colors duration-200 hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
