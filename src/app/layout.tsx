import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
    variable: "--font-mulish",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Tecorbitron | Software consulting and Development",
        template: "%s | Tecorbitron",
    },
    description:
        "Tecorbitron Solutions Pvt. Ltd. is a global IT services company specializing in Web Development, App Development, Software Solutions, Cloud, AI/ML, and UI/UX design. We help businesses innovate and scale with technology-driven solutions.",
    keywords: [
        "Tecorbitron",
        "software development",
        "web development",
        "app development",
        "IT services",
        "cloud solutions",
        "AI/ML services",
        "technology consulting",
        "UI/UX design",
        "enterprise software",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${mulish.variable} antialiased`}>{children}</body>
        </html>
    );
}
