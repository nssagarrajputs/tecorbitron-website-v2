import servicesWhyUsWebBanner from "@/assets/other/why-us.webp";
import servicesWhyUsAppBanner from "@/assets/other/why-us.webp";
import servicesWhyUsEcommBanner from "@/assets/other/why-us.webp";
import servicesWhyUsSeoBanner from "@/assets/other/why-us.webp";

import servicesProcessWebAppImg1 from "@/assets/other/why-us.webp";
import servicesProcessWebAppImg2 from "@/assets/other/why-us.webp";
import servicesProcessWebAppImg3 from "@/assets/other/why-us.webp";
import servicesProcessWebAppImg4 from "@/assets/other/why-us.webp";
import servicesProcessWebAppImg5 from "@/assets/other/why-us.webp";

import servicesProcessEcommImg1 from "@/assets/other/why-us.webp";
import servicesProcessEcommImg2 from "@/assets/other/why-us.webp";
import servicesProcessEcommImg3 from "@/assets/other/why-us.webp";
import servicesProcessEcommImg4 from "@/assets/other/why-us.webp";
import servicesProcessEcommImg5 from "@/assets/other/why-us.webp";

import servicesProcessSeoImg1 from "@/assets/other/why-us.webp";
import servicesProcessSeoImg2 from "@/assets/other/why-us.webp";
import servicesProcessSeoImg3 from "@/assets/other/why-us.webp";
import servicesProcessSeoImg4 from "@/assets/other/why-us.webp";
import servicesProcessSeoImg5 from "@/assets/other/why-us.webp";

import defaultThumbnail from "@/assets/other/default-thumbnail.webp";

import {
    Globe,
    Layout,
    AppWindow,
    Smartphone,
    LayoutDashboard,
    BookOpen,
    Building2,
    Layers,
    ShoppingBag,
    ShoppingCart,
    Store,
    Code,
    ArrowRightLeft,
    ClipboardCheck,
    Settings,
    FileText,
    MapPin,
    BarChart2,
    MousePointerClick,
    Share2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

import { StaticImageData } from "next/image";

// ─── Home & Service page service card ─────────────────────────────────────────

// ─── Type ─────────────────────────────────────────────────────────────────────

export type WhyUsItem = {
    title: string;
    description: string;
};

export type WhyUsData = {
    heading: string;
    highlight: string;
    bannerImg: StaticImageData | string;
    li: WhyUsItem[];
};

export const servicesWhyForWeb: WhyUsData = {
    heading: "Why Tecorbitron Website Development?",
    highlight: "Website Development?",
    bannerImg: servicesWhyUsWebBanner,
    li: [
        {
            title: "Deep Domain Experience",

            description:
                "6+ years of building websites across 30+ industries means we understand your business context — not just the code behind it.",
        },
        {
            title: "Enterprise-Grade Stack",

            description:
                "We build on Next.js, TypeScript, and cloud-native infrastructure — the same stack used by companies handling millions of users.",
        },
        {
            title: "Safe, Scalable, Standard",

            description:
                "Every website we deliver is built secure by default — HTTPS, sanitised inputs, role-based access, and architecture that grows with your traffic.",
        },
        {
            title: "Flexible Engagement Models",

            description:
                "Fixed-price project, monthly retainer, or dedicated developer — choose what fits your stage and budget, and switch anytime as your needs change.",
        },
        {
            title: "No Hidden Surprises",

            description:
                "You get weekly progress updates, access to staging, and a clear timeline from day one. No scope creep, no surprise invoices.",
        },
        {
            title: "On-Time, Every Time",

            description:
                "We plan in sprints, track in real time, and flag risks early. 120+ projects delivered — and counting — without blowing a deadline.",
        },
    ],
};

export const servicesWhyForApp: WhyUsData = {
    heading: "Why Tecorbitron App Development?",
    highlight: "App Development?",
    bannerImg: servicesWhyUsAppBanner,
    li: [
        {
            title: "Deep Domain Experience",

            description:
                "We've shipped apps for healthcare, logistics, edtech, and retail — each with its own UX challenges, compliance needs, and performance demands.",
        },
        {
            title: "Enterprise-Grade Stack",

            description:
                "React Native and Flutter on a production-tested CI/CD pipeline — fast builds, automated testing, and App Store-ready releases from day one.",
        },
        {
            title: "Safe, Scalable, Standard",

            description:
                "Encrypted data storage, secure API communication, and architecture that handles 10 users or 100,000 — without a rewrite down the line.",
        },
        {
            title: "Flexible Engagement Models",

            description:
                "MVP in 6 weeks or a full product roadmap — we adapt our engagement model to your funding stage, timeline, and team structure.",
        },
        {
            title: "No Hidden Surprises",

            description:
                "You get a testable build every sprint, live crash monitoring post-launch, and full source code ownership. Nothing is locked behind us.",
        },
        {
            title: "On-Time, Every Time",

            description:
                "App Store rejections, OS compatibility issues, third-party API delays — we've handled them all. We plan for the unexpected so you don't have to.",
        },
    ],
};

export const servicesWhyForEcomm: WhyUsData = {
    heading: "Why Tecorbitron E-Commerce Development?",
    highlight: "E-Commerce Development?",
    bannerImg: servicesWhyUsEcommBanner,
    li: [
        {
            title: "Deep Domain Experience",

            description:
                "From D2C brands to B2B catalogues — we've built stores across Shopify, WooCommerce, and custom stacks, each optimised to sell.",
        },
        {
            title: "Enterprise-Grade Stack",

            description:
                "Headless commerce, custom checkout flows, payment gateway integrations, and inventory systems — built for performance under real traffic.",
        },
        {
            title: "Safe, Scalable, Standard",

            description:
                "PCI-DSS compliant checkout, SSL-secured transactions, and architecture that holds steady through sale spikes and seasonal surges.",
        },
        {
            title: "Flexible Engagement Models",

            description:
                "Launch a Shopify store in two weeks or build a fully custom platform over three months — we scope to your timeline and growth plan.",
        },
        {
            title: "No Hidden Surprises",

            description:
                "Staging environment before go-live, documented admin training, and a handover checklist — you're never left figuring things out alone.",
        },
        {
            title: "On-Time, Every Time",

            description:
                "Sale seasons don't wait. We build with your launch date as a hard constraint — not a suggestion — and we've never missed a go-live.",
        },
    ],
};

export const servicesWhyForSeo: WhyUsData = {
    heading: "Why Tecorbitron SEO & Marketing?",
    highlight: "SEO & Marketing?",
    bannerImg: servicesWhyUsSeoBanner,
    li: [
        {
            title: "Deep Domain Experience",

            description:
                "We've grown organic traffic for businesses in fintech, healthcare, retail, and SaaS — across India and international markets.",
        },
        {
            title: "Enterprise-Grade Stack",

            description:
                "Ahrefs, Semrush, Search Console, and GA4 — we use industry-standard tools to audit, track, and report with precision, not guesswork.",
        },
        {
            title: "Safe, Scalable, Standard",

            description:
                "No black-hat shortcuts. Every strategy we run is Google-compliant, built to compound over time — not spike and crash after an update.",
        },
        {
            title: "Flexible Engagement Models",

            description:
                "One-time technical audit, monthly retainer, or a full-funnel growth partnership — we structure our work around what your business actually needs.",
        },
        {
            title: "No Hidden Surprises",

            description:
                "Monthly reports with plain-English explanations, keyword movement tracking, and strategy calls — you always know exactly what we're doing and why.",
        },
        {
            title: "On-Time, Every Time",

            description:
                "Content calendars, technical fixes, and campaign launches — all delivered on the dates we commit to. No chasing, no delays, no excuses.",
        },
    ],
};

// ─── Type ─────────────────────────────────────────────────────────────────────

export type ServiceDevProcessItem = {
    title: string;
    img: StaticImageData | string;
    description: string;
};

export type ServiceDevProcess = {
    heading: string;
    highlight: string;
    li: ServiceDevProcessItem[];
};

export const serviceDevProcessWeb: ServiceDevProcess = {
    heading: "Our Website Development Process",
    highlight: "Process",
    li: [
        {
            title: "Discovery & Scoping",
            img: servicesProcessWebAppImg1,
            description:
                "We start by understanding your goals, target audience, and requirements. This phase defines project scope, timeline, and deliverables to ensure complete alignment before development begins.",
        },
        {
            title: "Design & Prototyping",
            img: servicesProcessWebAppImg2,
            description:
                "We craft wireframes and high-fidelity UI designs tailored to your brand. Interactive prototypes let you visualise the final product and provide feedback before any code is written.",
        },
        {
            title: "Development & Build",
            img: servicesProcessWebAppImg3,
            description:
                "Our developers bring designs to life using modern, scalable tech stacks. Every component is built for performance, responsiveness, and clean code structure from the ground up.",
        },
        {
            title: "Debugging & QA",
            img: servicesProcessWebAppImg4,
            description:
                "We run thorough testing across devices, browsers, and screen sizes. Bugs are identified and resolved, ensuring your website is stable, fast, and ready for real-world use.",
        },
        {
            title: "Deployment & Handover",
            img: servicesProcessWebAppImg5,
            description:
                "Your website is deployed to a live environment with full configuration. We handle domain, hosting setup, and provide complete handover documentation so you stay in control.",
        },
    ],
};

export const serviceDevProcessApp: ServiceDevProcess = {
    heading: "Our App Development Process",
    highlight: "Process",
    li: [
        {
            title: "Discovery & Scoping",
            img: servicesProcessWebAppImg1,
            description:
                "We deep-dive into your app idea, user flows, and business goals. This phase maps out features, platforms, and technical requirements to build a clear, actionable development roadmap.",
        },
        {
            title: "Design & Prototyping",
            img: servicesProcessWebAppImg2,
            description:
                "We design intuitive, mobile-first UI/UX with a focus on user experience. Clickable prototypes are shared for your feedback before committing to full-scale app development.",
        },
        {
            title: "Development & Build",
            img: servicesProcessWebAppImg3,
            description:
                "We build your app using industry-standard frameworks for iOS, Android, or cross-platform. Code is structured for scalability, speed, and easy future updates from day one.",
        },
        {
            title: "Debugging & QA",
            img: servicesProcessWebAppImg4,
            description:
                "The app undergoes rigorous testing on real devices and emulators. We check functionality, performance, and edge cases to ensure a smooth, crash-free experience for your users.",
        },
        {
            title: "Deployment & Handover",
            img: servicesProcessWebAppImg5,
            description:
                "We manage App Store and Play Store submissions, handling all configurations and compliance. Full source code and documentation are handed over so your team owns everything completely.",
        },
    ],
};

export const serviceDevProcessEcomm: ServiceDevProcess = {
    heading: "Our E-Commerce Development Process",
    highlight: "Process",
    li: [
        {
            title: "Requirements & Platform Fit",
            img: servicesProcessEcommImg1,
            description:
                "We analyse your business model, product catalogue, and goals to recommend the right platform — Shopify, WooCommerce, Headless, or Custom — before a single line of code is written.",
        },
        {
            title: "Store Design & UX",
            img: servicesProcessEcommImg2,
            description:
                "We design conversion-focused storefronts that reflect your brand. From product pages to checkout flows, every screen is crafted to maximise user trust and drive actual sales.",
        },
        {
            title: "Build & Integration",
            img: servicesProcessEcommImg3,
            description:
                "We develop your store and integrate payment gateways, inventory systems, shipping APIs, and third-party tools — ensuring everything works seamlessly across your entire commerce ecosystem.",
        },
        {
            title: "Testing & QA",
            img: servicesProcessEcommImg4,
            description:
                "Every user journey — browsing, cart, checkout, order confirmation — is tested thoroughly. We validate across devices and browsers to ensure a smooth, bug-free shopping experience.",
        },
        {
            title: "Go-Live & Handover",
            img: servicesProcessEcommImg5,
            description:
                "We manage the full launch including domain, hosting, and platform configuration. You receive complete handover documentation and training so you can manage your store independently.",
        },
    ],
};

export const serviceDevProcessSeo: ServiceDevProcess = {
    heading: "Our SEO Service Process",
    highlight: "Process",
    li: [
        {
            title: "Website Audit & Analysis",
            img: servicesProcessSeoImg1,
            description:
                "We conduct a full audit of your website — analysing current rankings, traffic, site health, and competitor positioning to identify exactly where the gaps and opportunities lie.",
        },
        {
            title: "Content & On-Page Setup",
            img: servicesProcessSeoImg2,
            description:
                "We optimise meta tags, headings, content structure, and internal linking across your pages. Every element is aligned with target keywords to improve relevance and search visibility.",
        },
        {
            title: "Technical SEO & Site Health",
            img: servicesProcessSeoImg3,
            description:
                "We fix crawl errors, improve site speed, implement schema markup, and ensure proper indexing. A technically sound website is the foundation every successful SEO strategy is built on.",
        },
        {
            title: "Off-Page SEO & Outreach",
            img: servicesProcessSeoImg4,
            description:
                "We build high-quality backlinks through ethical outreach and content strategies. Strengthening your domain authority signals trust to search engines and drives sustained ranking improvements over time.",
        },
        {
            title: "Analytics & Reporting",
            img: servicesProcessSeoImg5,
            description:
                "We track rankings, traffic, and conversions through clear, actionable reports. You always know what's working, what's improving, and where the next phase of growth is coming from.",
        },
    ],
};

// ─── Types ────────────────────────────────────────────────────────────────────

type SolutionIcon =
    | { type: "lucide"; icon: LucideIcon }
    | { type: "image"; src: StaticImageData | string };

export type SolutionItem = {
    icon: SolutionIcon;
    title: string;
    description: string;
};

export type ServiceSolutionsData = {
    heading: string;
    highlight: string;
    para: string;
    solutions: SolutionItem[];
};

export const serviceSolutionsWeb: ServiceSolutionsData = {
    heading: "What Web Solutions Do You Need?",
    highlight: "Web Solutions",
    para: "From simple landing pages to complex web portals — we build the right solution for your business stage, budget, and growth goals.",
    solutions: [
        {
            icon: { type: "lucide", icon: Globe },
            title: "Custom Website",
            description:
                "Fully bespoke websites designed and built from scratch — tailored to your brand, audience, and business objectives without template constraints.",
        },
        {
            icon: { type: "lucide", icon: Layout },
            title: "WordPress Website",
            description:
                "Content-managed WordPress sites with custom themes, plugins, and performance optimisation — easy for your team to update independently.",
        },
        {
            icon: { type: "lucide", icon: AppWindow },
            title: "Landing Page",
            description:
                "High-converting landing pages built for campaigns, product launches, or lead generation — fast to load and optimised for a single goal.",
        },
        {
            icon: { type: "lucide", icon: ShoppingCart },
            title: "E-Commerce Website",
            description:
                "Online stores with product management, secure checkout, and payment gateway integration — built to sell and scale from day one.",
        },
        {
            icon: { type: "lucide", icon: Smartphone },
            title: "Progressive Web App",
            description:
                "Web apps that work offline, install on mobile, and feel native — without the cost of building separate iOS and Android applications.",
        },
        {
            icon: { type: "lucide", icon: LayoutDashboard },
            title: "Admin Dashboard",
            description:
                "Custom dashboards and internal tools that centralise your data, automate workflows, and give your team real-time visibility.",
        },
        {
            icon: { type: "lucide", icon: BookOpen },
            title: "Blogging Platform",
            description:
                "SEO-ready blogging platforms with custom CMS integration — built for content teams that need speed, structure, and editorial control.",
        },
        {
            icon: { type: "lucide", icon: Building2 },
            title: "Web Portal",
            description:
                "Role-based web portals for customers, vendors, or internal teams — with secure login, dashboards, and workflow management built in.",
        },
    ],
};

export const serviceSolutionsApp: ServiceSolutionsData = {
    heading: "What App Solutions Do You Need?",
    highlight: "App Solutions",
    para: "iOS, Android, or cross-platform — we build mobile apps that perform, retain users, and scale with your business without platform compromise.",
    solutions: [
        {
            icon: { type: "lucide", icon: Smartphone },
            title: "iOS App",
            description:
                "Native Swift apps built to Apple's standards — optimised for performance, App Store approval, and the expectations of iOS users.",
        },
        {
            icon: { type: "lucide", icon: Smartphone },
            title: "Android App",
            description:
                "Native Kotlin apps designed for the Android ecosystem — tested across device sizes, OS versions, and Play Store requirements.",
        },
        {
            icon: { type: "lucide", icon: Layers },
            title: "Cross-Platform App",
            description:
                "One React Native or Flutter codebase, two platforms — significantly faster to build and maintain without sacrificing native feel.",
        },
        {
            icon: { type: "lucide", icon: ShoppingBag },
            title: "E-Commerce App",
            description:
                "Mobile shopping apps with product catalogues, cart, checkout, push notifications, and order tracking — built to drive repeat purchases.",
        },
        {
            icon: { type: "lucide", icon: AppWindow },
            title: "On-Demand App",
            description:
                "Service marketplace or on-demand apps with real-time booking, geolocation, payments, and multi-role dashboards for users and providers.",
        },
        {
            icon: { type: "lucide", icon: LayoutDashboard },
            title: "Enterprise App",
            description:
                "Internal mobile tools for field teams, managers, and operations — replacing manual processes with fast, offline-capable mobile apps.",
        },
        {
            icon: { type: "lucide", icon: BookOpen },
            title: "EdTech App",
            description:
                "Learning apps with course management, progress tracking, video streaming, quizzes, and certification — built for students and trainers.",
        },
        {
            icon: { type: "lucide", icon: Globe },
            title: "MVP App",
            description:
                "Lean, launch-ready MVPs in 4-8 weeks — enough to validate your idea, onboard early users, and raise your next round confidently.",
        },
    ],
};

export const serviceSolutionsEcomm: ServiceSolutionsData = {
    heading: "What E-Commerce Solutions Do You Need?",
    highlight: "E-Commerce Solutions",
    para: "From platform builds to full migrations — we cover every stage of your e-commerce journey with the right technology and strategy.",
    solutions: [
        {
            icon: { type: "lucide", icon: ShoppingBag },
            title: "Shopify Development",
            description:
                "Custom Shopify stores with bespoke themes, app integrations, and conversion-focused layouts — ready to launch and scale fast.",
        },
        {
            icon: { type: "lucide", icon: ShoppingCart },
            title: "WooCommerce Development",
            description:
                "Flexible WooCommerce stores on WordPress — fully customised with plugins, payment gateways, and performance optimisation built in.",
        },
        {
            icon: { type: "lucide", icon: Store },
            title: "BigCommerce Development",
            description:
                "Enterprise-grade BigCommerce stores for high-volume sellers — with custom storefronts, B2B features, and multi-channel selling.",
        },
        {
            icon: { type: "lucide", icon: Globe },
            title: "Drupal Commerce",
            description:
                "Complex, content-heavy e-commerce on Drupal — ideal for businesses needing deep content management alongside their online store.",
        },
        {
            icon: { type: "lucide", icon: Code },
            title: "Custom E-Commerce",
            description:
                "Fully bespoke e-commerce platforms built from scratch — when off-the-shelf solutions can't handle your catalogue, logic, or scale.",
        },
        {
            icon: { type: "lucide", icon: ArrowRightLeft },
            title: "E-Commerce Migration",
            description:
                "Seamless platform migrations with zero data loss — products, orders, customers, and SEO equity all transferred and verified.",
        },
        {
            icon: { type: "lucide", icon: ClipboardCheck },
            title: "E-Commerce Audit",
            description:
                "In-depth audits covering UX, performance, checkout flow, and SEO — with a prioritised fix list tied directly to revenue impact.",
        },
        {
            icon: { type: "lucide", icon: Layers },
            title: "Headless Commerce",
            description:
                "Decoupled front-end on Next.js with your commerce engine on the back — maximum performance, flexibility, and omnichannel capability.",
        },
    ],
};

export const serviceSolutionsSeo: ServiceSolutionsData = {
    heading: "What SEO & Marketing Solutions Do You Need?",
    highlight: "SEO & Marketing Solutions",
    para: "From technical audits to paid campaigns — we build and execute strategies that grow your visibility, traffic, and revenue over time.",
    solutions: [
        {
            icon: { type: "lucide", icon: Settings },
            title: "Technical SEO",
            description:
                "Core Web Vitals, crawlability, structured data, and site architecture — fixed at the code level for lasting ranking improvements.",
        },
        {
            icon: { type: "lucide", icon: FileText },
            title: "On-Page SEO",
            description:
                "Keyword strategy, content optimisation, meta data, and internal linking — every page built to rank for what your audience searches.",
        },
        {
            icon: { type: "lucide", icon: MapPin },
            title: "Local SEO",
            description:
                "Google Business Profile, local citations, and geo-targeted content — helping your business dominate local search and map results.",
        },
        {
            icon: { type: "lucide", icon: ShoppingCart },
            title: "E-Commerce SEO",
            description:
                "Product page optimisation, category SEO, schema markup, and site structure — built to rank and convert organic shoppers.",
        },
        {
            icon: { type: "lucide", icon: ClipboardCheck },
            title: "SEO Audit",
            description:
                "Comprehensive technical and content audit with a prioritised action plan — identify what's holding your rankings back and fix it fast.",
        },
        {
            icon: { type: "lucide", icon: BarChart2 },
            title: "Analytics & Reporting",
            description:
                "GA4, Search Console, and custom dashboards — clear monthly reports that tie SEO activity directly to traffic, leads, and revenue.",
        },
        {
            icon: { type: "lucide", icon: MousePointerClick },
            title: "Google Ads (PPC)",
            description:
                "Search and Performance Max campaigns managed for ROI — keyword research, ad copy, bid strategy, and conversion tracking included.",
        },
        {
            icon: { type: "lucide", icon: Share2 },
            title: "Social Media Integration",
            description:
                "Social profiles optimised and integrated with your website — consistent branding, pixel setup, and audience retargeting configured.",
        },
    ],
};

// ─── Type ─────────────────────────────────────────────────────────────────────

export type ServiceSandMData = {
    heading: string;
    highlight: string;
    description: string;
};

export const serviceSandMWeb: ServiceSandMData = {
    heading: "Website Support & Maintenance",
    highlight: "Support & Maintenance",
    description:
        "Every website we deliver comes with 3 months of free post-launch support — no questions asked. During this period, we handle bug fixes, performance issues, and minor adjustments at no extra cost. After that, we offer three flexible engagement models to keep your website fast, secure, and up to date. Choose a monthly retainer for ongoing care and regular updates, an annual plan for the best value and priority response, or a per-scope arrangement for one-off changes with no long-term commitment. All pricing is determined after project scoping. Terms and conditions apply.",
};

export const serviceSandMApp: ServiceSandMData = {
    heading: "App Support & Maintenance",
    highlight: "Support & Maintenance",
    description:
        "Every app we deliver comes with 3 months of free post-launch support — covering bug fixes, crash reports, performance issues, and minor UI adjustments at no extra cost. After that, we offer three flexible engagement models to keep your app running smoothly across platforms and OS updates. Choose a monthly retainer for continuous monitoring and updates, an annual plan for priority support and best value, or a per-scope arrangement for specific fixes or feature additions with no long-term commitment. All pricing is determined after project scoping. Terms and conditions apply.",
};

export const serviceSandMEcomm: ServiceSandMData = {
    heading: "E-Commerce Support & Maintenance",
    highlight: "Support & Maintenance",
    description:
        "Every online store we deliver comes with 3 months of free post-launch support — covering bug fixes, payment issues, product management queries, and minor store adjustments at no extra cost. After that, we offer three flexible engagement models to keep your store running, converting, and up to date. Choose a monthly retainer for ongoing store management and updates, an annual plan for priority support and best value, or a per-scope arrangement for one-off changes with no long-term commitment. All pricing is determined after project scoping. Terms and conditions apply.",
};

export const serviceSandMSeo: ServiceSandMData = {
    heading: "SEO & Marketing Support",
    highlight: "Marketing Support",
    description:
        "Every SEO engagement comes with 3 months of active support — covering strategy reviews, ranking monitoring, on-page adjustments, and reporting at no extra cost. After that, we offer three flexible engagement models to keep your search visibility growing. Choose a monthly retainer for continuous SEO management and content updates, an annual plan for consistent long-term growth and priority access, or a per-scope arrangement for specific audits or campaigns with no long-term commitment. All pricing is determined after project scoping. Terms and conditions apply.",
};

// ─── Type ─────────────────────────────────────────────────────────────────────

export type ServiceIntroData = {
    image: StaticImageData | string;
    imageAlt: string;
    title: string;
    description: string;
};

export const serviceIntroWeb: ServiceIntroData = {
    image: defaultThumbnail,
    imageAlt: "Web Development Services — Tecorbitron",
    title: "Our Web Development Expertise",
    description: `Your website is the first thing a potential client sees — and it has about three seconds to make an impression. Whether you need a clean business site, a high-converting landing page, or a full-scale web application, you deserve something that loads fast, looks sharp, and works exactly the way your business needs it to.

    We've spent 6+ years building web solutions across industries — from startups launching their first product to established businesses rebuilding outdated systems. Every project starts with understanding your goals, your audience, and your constraints. We don't just write code; we build products that solve real problems and deliver real results.
        `,
};

export const serviceIntroApp: ServiceIntroData = {
    image: defaultThumbnail,
    imageAlt: "Mobile App Development Services — Tecorbitron",
    title: "Our App Development Expertise",
    description: `Your app is often the most direct touchpoint between your business and your customers. It needs to be fast, intuitive, and reliable — because a poor mobile experience doesn't get a second chance. Whether you need an Android app, an iOS app, or a cross-platform solution that covers both, we build mobile products that users actually want to use.
    
    We've built apps across industries — from consumer-facing products and booking platforms to internal tools and enterprise solutions. Every app starts with a clear understanding of your users and business goals. We handle everything from UI/UX design to development, testing, and deployment — so you get a complete, production-ready product.`,
};

export const serviceIntroEcomm: ServiceIntroData = {
    image: defaultThumbnail,
    imageAlt: "E-Commerce Development Services — Tecorbitron",
    title: "Our E-Commerce Solutions Expertise",
    description: `Selling online is more competitive than ever — and your store needs to do more than just look good. It needs to load fast, guide users to checkout, handle payments smoothly, and work flawlessly on every device. Whether you're launching your first store or rebuilding an existing one, we build e-commerce solutions that are designed to convert and built to last.
    
    We work with Shopify, WooCommerce, and fully custom e-commerce builds — so you get the right platform for your product, your audience, and your budget. From product catalogues and payment integrations to inventory management and order tracking — we handle every part of the build so you can focus on growing your business.`,
};

export const serviceIntroSeo: ServiceIntroData = {
    image: defaultThumbnail,
    imageAlt: "SEO & Digital Marketing Services — Tecorbitron",
    title: "Our SEO & Optimization Expertise",
    description: `Ranking on Google isn't luck — it's a result of a well-structured website, the right content, and a consistent strategy. Most businesses either ignore SEO until it's too late or invest in tactics that don't move the needle. We do it differently — every SEO engagement starts with a thorough audit, a clear strategy, and measurable goals.
    
    We've helped startups get found online from day one and helped established businesses recover rankings, fix technical issues, and build long-term search authority. Whether you need local SEO, e-commerce SEO, or a full technical overhaul — we have the experience and the process to deliver results that last.`,
};
