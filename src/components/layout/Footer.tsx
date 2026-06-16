import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/logo-kit/logo-dark.svg";

type footerMenuItemLink = {
    label: string;
    href: string;
    external?: boolean;
};

type footerMenuItem = {
    title: string;
    links: footerMenuItemLink[];
};

const footerMenus: footerMenuItem[] = [
    {
        title: "Services",
        links: [
            {
                label: "Web Development",
                href: "/services/web-development",
            },
            {
                label: "App Development",
                href: "/services/app-development",
            },
            {
                label: "E-Commerce Store",
                href: "/services/ecommerce-development",
            },
            {
                label: "SEO & Digital Growth",
                href: "/services/seo-and-marketing",
            },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { label: "About", href: "/about" },
            { label: "Solutions", href: "/solutions" },
            { label: "Technologies", href: "/technologies" },
            { label: "Portfolio", href: "/portfolio" },
        ],
    },
    {
        title: "Importants",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Blogs", href: "/blog" },
            { label: "Privacy Policy", href: "/legal/privacy-policy" },
            { label: "Terms", href: "/legal/terms" },
        ],
    },
    {
        title: "Get In Touch",
        links: [
            {
                label: "908-480-0496",
                href: "tel:+919084800496",
                external: true,
            },
            {
                label: "info@tecorbitron.com",
                href: "mailto:info@tecorbitron.com",
                external: true,
            },
            {
                label: "Ghaziabad, NCR, India",
                href: "https://maps.app.goo.gl/DGjePxJRCTsRX3J56",
                external: true,
            },
            {
                label: "WhatsApp Us",
                href: "https://wa.me/919084800496",
                external: true,
            },
        ],
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="edge-dark dark side-layout-spacing border-y">
            <div className="edge-dark footer-spacing mx-auto max-w-7xl border-x">
                <div className="grid grid-cols-1 gap-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
                    {footerMenus.map((menu) => (
                        <div key={menu.title}>
                            <h3 className="text-ink-muted text-16 mb-6 font-bold">
                                {menu.title}
                            </h3>

                            <div className="flex flex-col gap-3">
                                {menu.links.map((link) =>
                                    link.external ? (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target={
                                                link.href.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                link.href.startsWith("http")
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="hover:text-malachite text-ink-secondary text-16 w-fit font-mono underline-offset-4 hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="hover:text-malachite text-ink-secondary text-16 w-fit font-mono underline-offset-4 hover:underline"
                                        >
                                            {link.label}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-24">
                    <p className="text-gradient text-center text-[11vw] leading-none font-bold lg:text-[10.5vw]">
                        #WeBuildBold
                    </p>
                </div>

                {/* Copyright */}
                <div className="flex justify-between gap-4 max-lg:flex-col">
                    <div className="flex gap-4 max-md:flex-col md:items-center">
                        <Link href="/">
                            <Image
                                src={logoDark}
                                alt="Tecorbitron Solutions"
                                width={180}
                                className="opacity-100 select-none"
                            />
                        </Link>
                        <small className="text-14 text-ink-muted font-medium">
                            {year} © All Rights Reserved.
                        </small>
                    </div>

                    <div className="text-ink-muted **:hover:text-ink-primary text-16 flex flex-wrap items-center gap-3 font-medium underline-offset-4 **:hover:underline">
                        <a
                            href="https://www.linkedin.com/company/tecorbitrons"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on LinkedIn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/tecorbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on Instagram"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/tecorbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on Facebook"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.facebook.com/tecorbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron Youtube Channel"
                        >
                            Youtube
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
