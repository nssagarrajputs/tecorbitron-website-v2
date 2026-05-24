import {
    // Web Development
    Briefcase,
    Newspaper,
    LayoutDashboard,
    Settings2,
    UserCircle,
    BadgeCheck,
    FolderOpen,
    CalendarDays,
    List,
    MousePointerClick,
    Globe,
    Smartphone,
    Languages,
    // App Development
    Heart,
    UtensilsCrossed,
    ShoppingBasket,
    Home,
    Tv2,
    Stethoscope,
    Dumbbell,
    GraduationCap,
    Car,
    Building2,
    PackageSearch,
    ClipboardPlus,
    Scissors,
    Share2,
    Rss,
    Zap,
    // E-Commerce
    Store,
    RefreshCcw,
    ShoppingCart,
    KeyRound,
    Layers,
    Handshake,
    SmartphoneNfc,
    // SEO
    Code2,
    FileText,
    Link,
    MapPin,
    ShoppingBag,
    PenLine,
    BarChart2,
    AppWindow,
    Globe2,
    Mic,
    // Industries
    Network,
    Landmark,
    ClipboardList,
    ScanLine,
    Truck,
    Receipt,
    Warehouse,
    BookOpen,
    ContactRound,
    Hospital,
    Pill,
    CalendarClock,
    UserRound,
    Presentation,
    MonitorPlay,
    PenSquare,
    School,
    UserCheck,
    BookMarked,
    BedDouble,
    BookCheck,
    Plane,
    MapPinned,
    Palmtree,
    Gem,
    Ticket,
    PackageCheck,
    Navigation,
    Container,
    Bus,
    Gauge,
    ParkingCircle,
    FileSpreadsheet,
    ShieldCheck,
    Banknote,
    Calculator,
    BarChart3,
    Shirt,
    Sofa,
    PackagePlus,
    Paintbrush,
    // Cloud & AI
    Database,
    Radio,
    CloudCog,
    Layers3,
    HardDrive,
    RefreshCw,
    MessageSquareMore,
    BotMessageSquare,
    Sparkles,
    SearchCode,
    ThumbsUp,
    FileOutput,
} from "lucide-react";

import ContentfulImgIcon from "@/assets/solution-icon/Contentful--Streamline-Svg-Logos.svg";
import SupabaseImgIcon from "@/assets/solution-icon/supabase-logo-icon.svg";
import LangChainImgIcon from "@/assets/solution-icon/langchain-color.svg";
import MistralAIImgIcon from "@/assets/solution-icon/Mistral-Ai-Icon--Streamline-Svg-Logos.svg";
import PayUImgIcon from "@/assets/solution-icon/PAYU_LOGO_SQUARE_LIME-ai.svg";
import PineconeImgIcon from "@/assets/solution-icon/Pinecone-Icon--Streamline-Svg-Logos.svg";
import SanityImgIcon from "@/assets/solution-icon/Sanity.svg";
import AnthropicImgIcon from "@/assets/solution-icon/anthropic-1.svg";
import AWSImgIcon from "@/assets/solution-icon/aws-color.svg";
import AzureImgIcon from "@/assets/solution-icon/azure-color.svg";
import DigitalOceanImgIcon from "@/assets/solution-icon/digitalocean-icon-1.svg";
import FigmaImgIcon from "@/assets/solution-icon/figma-icon.svg";
import FirebaseImgIcon from "@/assets/solution-icon/firebase-1.svg";
import FreshdeskImgIcon from "@/assets/solution-icon/freshdesk-icon.svg";
import GitHubImgIcon from "@/assets/solution-icon/github.svg";
import GCPImgIcon from "@/assets/solution-icon/google-cloud-1.svg";
import GroqImgIcon from "@/assets/solution-icon/groq.webp";
import HubSpotImgIcon from "@/assets/solution-icon/hubspot-1.svg";
import HuggingFaceImgIcon from "@/assets/solution-icon/huggingface-2.svg";
import JiraImgIcon from "@/assets/solution-icon/jira-1.svg";
import NotionImgIcon from "@/assets/solution-icon/notion-2.svg";
import OllamaImgIcon from "@/assets/solution-icon/ollama.webp";
import OpenAIImgIcon from "@/assets/solution-icon/openai-2.svg";
import PayloadImgIcon from "@/assets/solution-icon/payload-1.svg";
import PayPalImgIcon from "@/assets/solution-icon/paypal-4.svg";
import PostmanImgIcon from "@/assets/solution-icon/postman.svg";
import RazorpayImgIcon from "@/assets/solution-icon/razorpay.svg";
import SalesforceImgIcon from "@/assets/solution-icon/salesforce-2.svg";
import SlackImgIcon from "@/assets/solution-icon/slack-new-logo.svg";
import StrapiImgIcon from "@/assets/solution-icon/strapi-icon-svgrepo-com.svg";
import StripeImgIcon from "@/assets/solution-icon/stripe-4.svg";
import V0ImgIcon from "@/assets/solution-icon/v0.svg";
import WordPressImgIcon from "@/assets/solution-icon/wordpress-2.svg";
import ZohoImgIcon from "@/assets/solution-icon/zoho-1.svg";

import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

type SolutionIcon =
    | { type: "lucide"; icon: LucideIcon }
    | { type: "image"; src: StaticImageData | string };

export type SolutionItem = {
    name: string;
    icon: SolutionIcon;
};

export type SolutionGroup = {
    heading: string;
    href?: string; // optional — only Section 1 uses it
    hreftext?: string; // optional — only Section 1 uses it
    items: SolutionItem[];
};

export const byServices: SolutionGroup[] = [
    {
        heading: "Web Development",
        href: "/services/web-development",
        hreftext: "Web",
        items: [
            {
                name: "Company Portfolio",
                icon: { type: "lucide", icon: Briefcase },
            },
            {
                name: "Landing Page",
                icon: { type: "lucide", icon: MousePointerClick },
            },
            {
                name: "Web Portal",
                icon: { type: "lucide", icon: Globe },
            },
            {
                name: "Blog / Magazine",
                icon: { type: "lucide", icon: Newspaper },
            },
            {
                name: "SaaS Dashboard",
                icon: { type: "lucide", icon: LayoutDashboard },
            },
            {
                name: "Custom Admin Panel",
                icon: { type: "lucide", icon: Settings2 },
            },
            {
                name: "Personal Branding",
                icon: { type: "lucide", icon: UserCircle },
            },
            {
                name: "Membership Site",
                icon: { type: "lucide", icon: BadgeCheck },
            },
            {
                name: "Client Portal",
                icon: { type: "lucide", icon: FolderOpen },
            },
            {
                name: "Event Website",
                icon: { type: "lucide", icon: CalendarDays },
            },
            {
                name: "Directory Website",
                icon: { type: "lucide", icon: List },
            },

            {
                name: "Progressive Web App",
                icon: { type: "lucide", icon: Smartphone },
            },
            {
                name: "Multi-language Website",
                icon: { type: "lucide", icon: Languages },
            },
        ],
    },

    {
        heading: "Mobile App Development",
        href: "/services/app-development",
        hreftext: "App",
        items: [
            {
                name: "Dating App",
                icon: { type: "lucide", icon: Heart },
            },
            {
                name: "Food Delivery App",
                icon: { type: "lucide", icon: UtensilsCrossed },
            },
            {
                name: "Grocery App",
                icon: { type: "lucide", icon: ShoppingBasket },
            },
            {
                name: "Home Services App",
                icon: { type: "lucide", icon: Home },
            },
            {
                name: "OTT Streaming App",
                icon: { type: "lucide", icon: Tv2 },
            },
            {
                name: "Telemedicine App",
                icon: { type: "lucide", icon: Stethoscope },
            },
            {
                name: "Fitness App",
                icon: { type: "lucide", icon: Dumbbell },
            },
            {
                name: "E-learning App",
                icon: { type: "lucide", icon: GraduationCap },
            },
            {
                name: "Ride Booking App",
                icon: { type: "lucide", icon: Car },
            },
            {
                name: "Real Estate App",
                icon: { type: "lucide", icon: Building2 },
            },
            {
                name: "Inventory App",
                icon: { type: "lucide", icon: PackageSearch },
            },
            {
                name: "Doctor Booking App",
                icon: { type: "lucide", icon: ClipboardPlus },
            },
            {
                name: "Salon Booking App",
                icon: { type: "lucide", icon: Scissors },
            },
            {
                name: "Social Media App",
                icon: { type: "lucide", icon: Share2 },
            },
            {
                name: "News & Media App",
                icon: { type: "lucide", icon: Rss },
            },
            {
                name: "On-demand App",
                icon: { type: "lucide", icon: Zap },
            },
        ],
    },

    {
        heading: "E-Commerce Development",
        href: "/services/e-commerce",
        hreftext: "E-Commerce",
        items: [
            {
                name: "Multi-Vendor Marketplace",
                icon: { type: "lucide", icon: Store },
            },
            {
                name: "Subscription Store",
                icon: { type: "lucide", icon: RefreshCcw },
            },
            {
                name: "Grocery Delivery Platform",
                icon: { type: "lucide", icon: ShoppingCart },
            },
            {
                name: "Rental eCommerce",
                icon: { type: "lucide", icon: KeyRound },
            },
            {
                name: "Headless Commerce Store",
                icon: { type: "lucide", icon: Layers },
            },
            {
                name: "B2B Wholesale Store",
                icon: { type: "lucide", icon: Handshake },
            },
            {
                name: "Mobile Commerce App",
                icon: { type: "lucide", icon: SmartphoneNfc },
            },
        ],
    },

    {
        heading: "SEO Services",
        href: "/services/seo",
        hreftext: "SEO",
        items: [
            {
                name: "Technical SEO",
                icon: { type: "lucide", icon: Code2 },
            },
            {
                name: "On-Page SEO",
                icon: { type: "lucide", icon: FileText },
            },
            {
                name: "Off-Page & Link Building",
                icon: { type: "lucide", icon: Link },
            },
            {
                name: "Local SEO",
                icon: { type: "lucide", icon: MapPin },
            },
            {
                name: "E-Commerce SEO",
                icon: { type: "lucide", icon: ShoppingBag },
            },
            {
                name: "Content Strategy & Blogging",
                icon: { type: "lucide", icon: PenLine },
            },
            {
                name: "SEO Audit & Reporting",
                icon: { type: "lucide", icon: BarChart2 },
            },
            {
                name: "App Store Optimisation",
                icon: { type: "lucide", icon: AppWindow },
            },
            {
                name: "International SEO",
                icon: { type: "lucide", icon: Globe2 },
            },
            {
                name: "Voice Search Optimisation",
                icon: { type: "lucide", icon: Mic },
            },
        ],
    },
];

export const byIndustries: SolutionGroup[] = [
    {
        heading: "Business & Enterprise",
        items: [
            {
                name: "ERP System",
                icon: { type: "lucide", icon: Network },
            },
            {
                name: "Custom CRM",
                icon: { type: "lucide", icon: ContactRound },
            },
            {
                name: "Loan Servicing Platform",
                icon: { type: "lucide", icon: Landmark },
            },
            {
                name: "Order Management System",
                icon: { type: "lucide", icon: ClipboardList },
            },
            {
                name: "POS System",
                icon: { type: "lucide", icon: ScanLine },
            },
            {
                name: "Subscription Management Platform",
                icon: { type: "lucide", icon: RefreshCcw },
            },
            {
                name: "Supply Chain Management System",
                icon: { type: "lucide", icon: Truck },
            },
            {
                name: "Billing Platform",
                icon: { type: "lucide", icon: Receipt },
            },
            {
                name: "Vendor Management Portal",
                icon: { type: "lucide", icon: Handshake },
            },
            {
                name: "Warehouse Management System",
                icon: { type: "lucide", icon: Warehouse },
            },
            {
                name: "Catalog Management System",
                icon: { type: "lucide", icon: BookOpen },
            },
        ],
    },

    {
        heading: "Healthcare & Medical",
        items: [
            {
                name: "Hospital Management System",
                icon: { type: "lucide", icon: Hospital },
            },
            {
                name: "Medical Billing Platform",
                icon: { type: "lucide", icon: FileText },
            },
            {
                name: "Medical Inventory System",
                icon: { type: "lucide", icon: PackageSearch },
            },
            {
                name: "Medical Scheduling Platform",
                icon: { type: "lucide", icon: CalendarClock },
            },
            {
                name: "Patient Management Portal",
                icon: { type: "lucide", icon: UserRound },
            },
            {
                name: "Pharmacy Management System",
                icon: { type: "lucide", icon: Pill },
            },
            {
                name: "Doctor Booking Portal",
                icon: { type: "lucide", icon: ClipboardPlus },
            },
        ],
    },

    {
        heading: "Education & E-Learning",
        items: [
            {
                name: "Coaching Platform",
                icon: { type: "lucide", icon: Presentation },
            },
            {
                name: "E-Learning Platform",
                icon: { type: "lucide", icon: MonitorPlay },
            },
            {
                name: "Exam Portal",
                icon: { type: "lucide", icon: PenSquare },
            },
            {
                name: "Learning Management System",
                icon: { type: "lucide", icon: GraduationCap },
            },
            {
                name: "School Management System",
                icon: { type: "lucide", icon: School },
            },
        ],
    },

    {
        heading: "Real Estate & Property",
        items: [
            {
                name: "Property Management Platform",
                icon: { type: "lucide", icon: Building2 },
            },
            {
                name: "Real Estate Agency Portal",
                icon: { type: "lucide", icon: Home },
            },
            {
                name: "Real Estate CRM",
                icon: { type: "lucide", icon: ContactRound },
            },
            {
                name: "Real Estate Listing Website",
                icon: { type: "lucide", icon: MapPin },
            },
            {
                name: "Rental eCommerce Platform",
                icon: { type: "lucide", icon: KeyRound },
            },
        ],
    },

    {
        heading: "Events, Hospitality & Travel",
        items: [
            {
                name: "Event Management Platform",
                icon: { type: "lucide", icon: CalendarDays },
            },
            {
                name: "Hotel Management System",
                icon: { type: "lucide", icon: BedDouble },
            },
            {
                name: "Reservation System",
                icon: { type: "lucide", icon: BookCheck },
            },
            {
                name: "Restaurant Management System",
                icon: { type: "lucide", icon: UtensilsCrossed },
            },
            {
                name: "Travel Agency Portal",
                icon: { type: "lucide", icon: Plane },
            },
            {
                name: "Venue Management Platform",
                icon: { type: "lucide", icon: MapPinned },
            },
            {
                name: "Visitor Management System",
                icon: { type: "lucide", icon: UserCheck },
            },
            {
                name: "Vacation Rental Platform",
                icon: { type: "lucide", icon: Palmtree },
            },
            {
                name: "Wedding Planning Portal",
                icon: { type: "lucide", icon: Gem },
            },
            {
                name: "Event Ticketing Platform",
                icon: { type: "lucide", icon: Ticket },
            },
        ],
    },

    {
        heading: "Automotive, Transport & Logistics",
        items: [
            {
                name: "Car Rental Platform",
                icon: { type: "lucide", icon: Car },
            },
            {
                name: "Delivery Management System",
                icon: { type: "lucide", icon: PackageCheck },
            },
            {
                name: "Logistics Platform",
                icon: { type: "lucide", icon: Truck },
            },
            {
                name: "Parking Management System",
                icon: { type: "lucide", icon: ParkingCircle },
            },
            {
                name: "Shipment Tracking System",
                icon: { type: "lucide", icon: Container },
            },
            {
                name: "Transportation Management Platform",
                icon: { type: "lucide", icon: Bus },
            },
            {
                name: "Ride Booking Platform",
                icon: { type: "lucide", icon: Navigation },
            },
            {
                name: "Fleet Management System",
                icon: { type: "lucide", icon: Gauge },
            },
        ],
    },

    {
        heading: "Finance & Legal",
        items: [
            {
                name: "Billing & Invoicing Platform",
                icon: { type: "lucide", icon: FileSpreadsheet },
            },
            {
                name: "Insurance Agency Portal",
                icon: { type: "lucide", icon: ShieldCheck },
            },
            {
                name: "Payroll Management System",
                icon: { type: "lucide", icon: Banknote },
            },
            {
                name: "Accounting Platform",
                icon: { type: "lucide", icon: Calculator },
            },
            {
                name: "Financial Reporting Dashboard",
                icon: { type: "lucide", icon: BarChart3 },
            },
        ],
    },

    {
        heading: "Retail & E-Commerce",
        items: [
            {
                name: "Multi-Vendor Marketplace",
                icon: { type: "lucide", icon: Store },
            },
            {
                name: "Subscription-based Store",
                icon: { type: "lucide", icon: RefreshCcw },
            },
            {
                name: "Grocery Delivery Platform",
                icon: { type: "lucide", icon: ShoppingBasket },
            },
            {
                name: "Fashion Store",
                icon: { type: "lucide", icon: Shirt },
            },
            {
                name: "Furniture Store",
                icon: { type: "lucide", icon: Sofa },
            },
            {
                name: "Restaurant Ordering System",
                icon: { type: "lucide", icon: UtensilsCrossed },
            },
            {
                name: "Rental eCommerce",
                icon: { type: "lucide", icon: KeyRound },
            },
            {
                name: "Dropshipping Store",
                icon: { type: "lucide", icon: PackagePlus },
            },
            {
                name: "Booking Store",
                icon: { type: "lucide", icon: BookCheck },
            },
            {
                name: "Online Course Store",
                icon: { type: "lucide", icon: BookMarked },
            },
            {
                name: "Product Customization Platform",
                icon: { type: "lucide", icon: Paintbrush },
            },
        ],
    },
];

export const byCloudAI: SolutionGroup[] = [
    {
        heading: "Cloud Solutions",
        items: [
            {
                name: "Cloud DB",
                icon: { type: "lucide", icon: Database },
            },
            {
                name: "CDN & Streaming",
                icon: { type: "lucide", icon: Radio },
            },
            {
                name: "Serverless Architecture",
                icon: { type: "lucide", icon: CloudCog },
            },
            {
                name: "3-Tier Caching",
                icon: { type: "lucide", icon: Layers3 },
            },
            {
                name: "Cloud Storage",
                icon: { type: "lucide", icon: HardDrive },
            },
            {
                name: "Real-time Sync",
                icon: { type: "lucide", icon: RefreshCw },
            },
            {
                name: "Multi-region Deployment",
                icon: { type: "lucide", icon: Globe },
            },
        ],
    },

    {
        heading: "AI Solutions",
        items: [
            {
                name: "AI Chatbot",
                icon: { type: "lucide", icon: MessageSquareMore },
            },
            {
                name: "Virtual Assistant",
                icon: { type: "lucide", icon: BotMessageSquare },
            },
            {
                name: "Generative AI Tools",
                icon: { type: "lucide", icon: Sparkles },
            },
            {
                name: "RAG-based Search",
                icon: { type: "lucide", icon: SearchCode },
            },
            {
                name: "Voice Assistant",
                icon: { type: "lucide", icon: Mic },
            },
            {
                name: "Recommender System",
                icon: { type: "lucide", icon: ThumbsUp },
            },
            {
                name: "Auto-response System",
                icon: { type: "lucide", icon: Zap },
            },
            {
                name: "AI-powered Analytics Dashboard",
                icon: { type: "lucide", icon: BarChart3 },
            },
            {
                name: "Automated Report Generation",
                icon: { type: "lucide", icon: FileOutput },
            },
        ],
    },
];

export const byPlatforms: SolutionGroup[] = [
    {
        heading: "CMS & Content",
        items: [
            {
                name: "WordPress",
                icon: { type: "image", src: WordPressImgIcon },
            },
            {
                name: "Sanity",
                icon: { type: "image", src: SanityImgIcon },
            },
            {
                name: "Strapi",
                icon: { type: "image", src: StrapiImgIcon },
            },
            {
                name: "Contentful",
                icon: { type: "image", src: ContentfulImgIcon },
            },
            {
                name: "Payload CMS",
                icon: { type: "image", src: PayloadImgIcon },
            },
        ],
    },

    {
        heading: "CRM & Business",
        items: [
            {
                name: "Zoho",
                icon: { type: "image", src: ZohoImgIcon },
            },
            {
                name: "HubSpot",
                icon: { type: "image", src: HubSpotImgIcon },
            },
            {
                name: "Salesforce",
                icon: { type: "image", src: SalesforceImgIcon },
            },
            {
                name: "Freshdesk",
                icon: { type: "image", src: FreshdeskImgIcon },
            },
        ],
    },

    {
        heading: "Payments",
        items: [
            {
                name: "Stripe",
                icon: { type: "image", src: StripeImgIcon },
            },
            {
                name: "Razorpay",
                icon: { type: "image", src: RazorpayImgIcon },
            },
            {
                name: "PayPal",
                icon: { type: "image", src: PayPalImgIcon },
            },

            {
                name: "PayU",
                icon: { type: "image", src: PayUImgIcon },
            },
        ],
    },

    {
        heading: "Automation & Workflow",
        items: [
            {
                name: "GitHub",
                icon: { type: "image", src: GitHubImgIcon },
            },
            {
                name: "Postman",
                icon: { type: "image", src: PostmanImgIcon },
            },
            {
                name: "Notion",
                icon: { type: "image", src: NotionImgIcon },
            },
            {
                name: "Figma",
                icon: { type: "image", src: FigmaImgIcon },
            },
            {
                name: "Jira",
                icon: { type: "image", src: JiraImgIcon },
            },
            {
                name: "Slack",
                icon: { type: "image", src: SlackImgIcon },
            },
        ],
    },

    {
        heading: "Cloud Providers",
        items: [
            {
                name: "AWS",
                icon: { type: "image", src: AWSImgIcon },
            },
            {
                name: "Google Cloud",
                icon: { type: "image", src: GCPImgIcon },
            },
            {
                name: "Azure",
                icon: { type: "image", src: AzureImgIcon },
            },
            {
                name: "Vercel",
                icon: { type: "image", src: V0ImgIcon },
            },
            {
                name: "Firebase",
                icon: { type: "image", src: FirebaseImgIcon },
            },
            {
                name: "Supabase",
                icon: { type: "image", src: SupabaseImgIcon },
            },
            {
                name: "DigitalOcean",
                icon: { type: "image", src: DigitalOceanImgIcon },
            },
        ],
    },

    {
        heading: "AI & LLM Platforms",
        items: [
            {
                name: "OpenAI",
                icon: { type: "image", src: OpenAIImgIcon },
            },
            {
                name: "Anthropic Claude",
                icon: { type: "image", src: AnthropicImgIcon },
            },
            {
                name: "Mistral",
                icon: { type: "image", src: MistralAIImgIcon },
            },
            {
                name: "HuggingFace",
                icon: { type: "image", src: HuggingFaceImgIcon },
            },
            {
                name: "LangChain",
                icon: { type: "image", src: LangChainImgIcon },
            },
            {
                name: "Pinecone",
                icon: { type: "image", src: PineconeImgIcon },
            },

            {
                name: "Groq",
                icon: { type: "image", src: GroqImgIcon },
            },
            {
                name: "Ollama",
                icon: { type: "image", src: OllamaImgIcon },
            },
        ],
    },
];
