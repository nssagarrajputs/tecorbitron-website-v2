"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-kit/logo-dark.svg";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { full: "LinkedIn", href: "https://www.linkedin.com/company/tecorbitrons" },
    { full: "Instagram", href: "https://www.instagram.com/tecorbitron" },
    { full: "Facebook", href: "https://www.facebook.com/tecorbitron" },
    { full: "WhatsApp", href: "https://wa.me/919084800496" },
    { full: "YouTube", href: "https://www.youtube.com/@Tecorbitron" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-deepspace-soft relative overflow-hidden">
            {/* ── GIANT BACKGROUND TEXT ── */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden select-none"
                aria-hidden
            >
                <span
                    className="leading-none font-black whitespace-nowrap text-white/3 uppercase"
                    style={{
                        fontSize: "clamp(80px, 18vw, 220px)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    TECORBITRON
                </span>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-10">
                {/* ── TOP ROW — Logo + Nav ── */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    {/* Logo + tagline */}
                    <div className="flex max-w-xs flex-col gap-5">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Tecorbitron Solutions"
                                width={180}
                            />
                        </Link>
                        <p className="text-white">
                            Next-Gen IT Solutions, Powered by AI.
                        </p>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-5">
                        <p className="text-sm font-black tracking-widest text-white/50">
                            NAVIGATION
                        </p>
                        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group hover:text-malachite flex items-center gap-2 font-semibold text-white transition-all duration-200"
                                >
                                    <span className="bg-malachite h-px w-0 transition-all duration-300 group-hover:w-4" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ── SOCIAL LINKS ── */}
                <div className="my-16 flex flex-wrap gap-8 md:justify-between">
                    {socialLinks.map((s) => (
                        <Link
                            key={s.full}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.full}
                            title={s.full}
                            className="hover:text-malachite inline-flex w-fit gap-4 font-black text-white/80 underline underline-offset-8 transition-all duration-200 hover:scale-[1.1]"
                        >
                            {s.full} <ArrowUpRight />
                        </Link>
                    ))}
                </div>

                {/* ── CONTACT STRIP ── */}
                <div className="my-12 grid grid-cols-1 gap-6 border-t border-white/5 pt-10 sm:grid-cols-3">
                    <a
                        href="mailto:info@tecorbitron.com"
                        className="group flex w-fit flex-col gap-1"
                    >
                        <span className="group-hover:text-malachite text-sm font-black tracking-widest text-white/40 transition-colors duration-200">
                            EMAIL
                        </span>
                        <span className="font-bold text-white/80 transition-colors duration-200 group-hover:text-white">
                            info@tecorbitron.com
                        </span>
                    </a>

                    <a
                        href="tel:+919084800496"
                        className="group flex w-fit flex-col gap-1"
                    >
                        <span className="group-hover:text-malachite text-sm font-black tracking-widest text-white/40 transition-colors duration-200">
                            PHONE
                        </span>
                        <span className="font-bold text-white/80 transition-colors duration-200 group-hover:text-white">
                            +91 908 480 0496
                        </span>
                    </a>

                    <div className="group flex w-fit flex-col gap-1">
                        <span className="group-hover:text-malachite text-sm font-black tracking-widest text-white/40 transition-colors duration-200">
                            OFFICE
                        </span>
                        <span className="font-bold text-white/80 transition-colors duration-200 group-hover:text-white">
                            Ghaziabad, NCR, India
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <div className="flex justify-between gap-6 text-sm font-semibold text-white/80 max-md:flex-col">
                        <div className="flex flex-col items-center justify-center gap-x-2 sm:flex-row">
                            <p>© {year} Tecorbitron Solutions Pvt. Ltd.</p>
                            <p>All rights reserved.</p>
                        </div>

                        <div className="flex items-center justify-center gap-3">
                            <Link
                                href="/privacy-policy"
                                className="transition-colors duration-200 hover:text-white hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <span className="block h-1 w-1 rounded-full bg-white/50" />
                            <Link
                                href="/terms"
                                className="transition-colors duration-200 hover:text-white hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
