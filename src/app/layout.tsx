import type { Metadata } from "next";
import { Mulish, Noto_Serif_JP, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GlobalSchema } from "@/components/StructuredData";

// ── Noto Serif Japanese — accent ──
const serif = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-serif",
    display: "swap",
});

// ── IBM Plex Mono — code ──
const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-mono",
    display: "swap",
});

const sans = Mulish({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Tecorbitron – Web, App & Digital Solutions for Startups and SMBs",
    description:
        "Build bold with Tecorbitron. We deliver high-performance apps & websites with AI and Cloud integration as standard. Transparent pricing + 3 months support.",
    keywords: [
        // Primary brand + category
        "Tecorbitron",
        "Tecorbitron Solutions Pvt Ltd",

        // High-intent service queries
        "web development company India",
        "app development company India",
        "custom software development company India",
        "digital product development company India",

        // Persona-specific (your ICP)
        "tech partner for startups India",
        "IT company for SMBs India",
        "software development company for startups",

        // Location-specific
        "IT company Ghaziabad",
        "software company NCR India",
        "web development company Ghaziabad",

        // Stack-specific (developer searches)
        "Next.js development company India",
        "React development company India",

        // Trust/credibility
        "MCA registered IT company India",
        "affordable web development company India",
    ],

    // ── AUTHOR & PUBLISHER ─────────────────────────────
    authors: [{ name: "Tecorbitron Solutions Pvt. Ltd." }],
    creator: "Tecorbitron Solutions Pvt. Ltd.",
    publisher: "Tecorbitron Solutions Pvt. Ltd.",

    // ── CANONICAL & BASE URL ───────────────────────────
    metadataBase: new URL("https://www.tecorbitron.com"),
    alternates: {
        canonical: "/",
    },

    // ── FAVICON & ICONS ────────────────────────────────
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.tecorbitron.com",
        siteName: "Tecorbitron",
        title: "Tecorbitron – Web, App & Digital Solutions for Startups and SMBs",

        description:
            "Premium digital solutions for startups and SMBs. Websites, apps, e-commerce, and SEO — built to launch fast and scale well.",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Solutions — Next-Gen IT Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tecorbitron – Web, App & Digital Solutions for Startups and SMBs",
        description:
            "Premium digital solutions for startups and SMBs. Websites, apps, e-commerce, and SEO — built to launch fast and scale well.",
        images: ["/og-image.png"],
    },

    // ── EXTRA SEO BOOST ────────────────────────────
    category: "technology",

    // ── WEB MANIFEST ───────────────────────────────────
    manifest: "/site.webmanifest",

    // ── ROBOTS ─────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            {process.env.NEXT_PUBLIC_GTM_ID && (
                <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
            )}
            <body
                className={`${sans.variable} ${serif.variable} ${mono.variable}`}
            >
                <GlobalSchema />
                <SpeedInsights />
                <Analytics />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
