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
    Users,
    Landmark,
    ClipboardList,
    ScanLine,
    Truck,
    Receipt,
    Warehouse,
    BookOpen,
    ContactRound,
    GitMerge,
    Building,
    Hospital,
    Pill,
    Video,
    CalendarClock,
    UserRound,
    Presentation,
    MonitorPlay,
    PenSquare,
    School,
    UserCheck,
    BookMarked,
    Glasses,
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
    ScanFace,
    Banknote,
    Calculator,
    BarChart3,
    Shirt,
    Sofa,
    PackagePlus,
    Printer,
    Download,
    HandCoins,
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
    // Platforms & Tools
    PenTool,
    Server,
    FileJson,
    LayoutGrid,
    Megaphone,
    Cloud,
    Headphones,
    CreditCard,
    IndianRupee,
    Wallet,
    Square,
    CircleDollarSign,
    Cat,
    Send,
    NotebookPen,
    Pen,
    Kanban,
    MessageSquare,
    CloudLightning,
    Triangle,
    Flame,
    Droplets,
    BrainCircuit,
    Wind,
    Smile,
    Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type SolutionItem = {
    name: string;
    icon: LucideIcon | StaticImageData;
};

type SolutionGroup = {
    heading: string;
    href?: string; // optional — only Section 1 uses it
    items: SolutionItem[];
};

// ─────────────────────────────────────────────
// Section 1 — Solution by Services
// ─────────────────────────────────────────────

export const byServices: SolutionGroup[] = [
    {
        heading: "Web Development",
        href: "/services/web-development",
        items: [
            { name: "Company Portfolio", icon: Briefcase },
            { name: "Blog / Magazine", icon: Newspaper },
            { name: "SaaS Dashboard", icon: LayoutDashboard },
            { name: "Custom Admin Panel", icon: Settings2 },
            { name: "Personal Branding", icon: UserCircle },
            { name: "Membership Site", icon: BadgeCheck },
            { name: "Client Portal", icon: FolderOpen },
            { name: "Event Website", icon: CalendarDays },
            { name: "Directory Website", icon: List },
            { name: "Landing Page", icon: MousePointerClick },
            { name: "Web Portal", icon: Globe },
            { name: "Progressive Web App (PWA)", icon: Smartphone },
            { name: "Multi-language Website", icon: Languages },
        ],
    },
    {
        heading: "Mobile App Development",
        href: "/services/app-development",
        items: [
            { name: "Dating App", icon: Heart },
            { name: "Food Delivery App", icon: UtensilsCrossed },
            { name: "Grocery App", icon: ShoppingBasket },
            { name: "Home Services App", icon: Home },
            { name: "OTT Streaming App", icon: Tv2 },
            { name: "Telemedicine App", icon: Stethoscope },
            { name: "Fitness App", icon: Dumbbell },
            { name: "E-learning App", icon: GraduationCap },
            { name: "Ride Booking App", icon: Car },
            { name: "Real Estate App", icon: Building2 },
            { name: "Inventory Management App", icon: PackageSearch },
            { name: "Doctor Booking App", icon: ClipboardPlus },
            { name: "Salon Booking App", icon: Scissors },
            { name: "Social Media App", icon: Share2 },
            { name: "News & Media App", icon: Rss },
            { name: "On-demand Service App", icon: Zap },
        ],
    },
    {
        heading: "E-Commerce Development",
        href: "/services/e-commerce",
        items: [
            { name: "Multi-Vendor Marketplace", icon: Store },
            { name: "Subscription Store", icon: RefreshCcw },
            { name: "Grocery Delivery Platform", icon: ShoppingCart },
            { name: "Rental eCommerce", icon: KeyRound },
            { name: "Headless Commerce Store", icon: Layers },
            { name: "B2B Wholesale Store", icon: Handshake },
            { name: "Mobile Commerce App", icon: SmartphoneNfc },
        ],
    },
    {
        heading: "SEO Services",
        href: "/services/seo",
        items: [
            { name: "Technical SEO", icon: Code2 },
            { name: "On-Page SEO", icon: FileText },
            { name: "Off-Page & Link Building", icon: Link },
            { name: "Local SEO", icon: MapPin },
            { name: "E-Commerce SEO", icon: ShoppingBag },
            { name: "Content Strategy & Blogging", icon: PenLine },
            { name: "SEO Audit & Reporting", icon: BarChart2 },
            { name: "App Store Optimisation (ASO)", icon: AppWindow },
            { name: "International SEO", icon: Globe2 },
            { name: "Voice Search Optimisation", icon: Mic },
        ],
    },
];

// ─────────────────────────────────────────────
// Section 2 — Solution by Industries
// ─────────────────────────────────────────────

export const byIndustries: SolutionGroup[] = [
    {
        heading: "Business & Enterprise",
        items: [
            { name: "ERP System", icon: Network },
            { name: "Custom CRM", icon: ContactRound },
            { name: "Loan Servicing Platform", icon: Landmark },
            { name: "Order Management System", icon: ClipboardList },
            { name: "POS System", icon: ScanLine },
            { name: "Subscription Management Platform", icon: RefreshCcw },
            { name: "Supply Chain Management System", icon: Truck },
            { name: "Billing Platform", icon: Receipt },
            { name: "Vendor Management Portal", icon: Handshake },
            { name: "Warehouse Management System", icon: Warehouse },
            { name: "Catalog Management System", icon: BookOpen },
        ],
    },
    {
        heading: "Healthcare & Medical",
        items: [
            { name: "Hospital Management System", icon: Hospital },
            { name: "Medical Billing Platform", icon: FileText },
            { name: "Medical Inventory System", icon: PackageSearch },
            { name: "Medical Scheduling Platform", icon: CalendarClock },
            { name: "Patient Management Portal", icon: UserRound },
            { name: "Pharmacy Management System", icon: Pill },
            { name: "Doctor Booking Portal", icon: ClipboardPlus },
        ],
    },
    {
        heading: "Education & E-Learning",
        items: [
            { name: "Coaching Platform", icon: Presentation },
            { name: "E-Learning Platform", icon: MonitorPlay },
            { name: "Exam Portal", icon: PenSquare },
            { name: "Learning Management System (LMS)", icon: GraduationCap },
            { name: "School Management System", icon: School },
        ],
    },
    {
        heading: "Real Estate & Property",
        items: [
            { name: "Property Management Platform", icon: Building2 },
            { name: "Real Estate Agency Portal", icon: Home },
            { name: "Real Estate CRM", icon: ContactRound },
            { name: "Real Estate Listing Website", icon: MapPin },
            { name: "Rental eCommerce Platform", icon: KeyRound },
        ],
    },
    {
        heading: "Events, Hospitality & Travel",
        items: [
            { name: "Event Management Platform", icon: CalendarDays },
            { name: "Hotel Management System", icon: BedDouble },
            { name: "Reservation System", icon: BookCheck },
            { name: "Restaurant Management System", icon: UtensilsCrossed },
            { name: "Travel Agency Portal", icon: Plane },
            { name: "Venue Management Platform", icon: MapPinned },
            { name: "Visitor Management System", icon: UserCheck },
            { name: "Vacation Rental Platform", icon: Palmtree },
            { name: "Wedding Planning Portal", icon: Gem },
            { name: "Event Ticketing Platform", icon: Ticket },
        ],
    },
    {
        heading: "Automotive, Transport & Logistics",
        items: [
            { name: "Car Rental Platform", icon: Car },
            { name: "Delivery Management System", icon: PackageCheck },
            { name: "Logistics Platform", icon: Truck },
            { name: "Parking Management System", icon: ParkingCircle },
            { name: "Shipment Tracking System", icon: Container },
            { name: "Transportation Management Platform", icon: Bus },
            { name: "Ride Booking Platform", icon: Navigation },
            { name: "Fleet Management System", icon: Gauge },
        ],
    },
    {
        heading: "Finance & Legal",
        items: [
            { name: "Billing & Invoicing Platform", icon: FileSpreadsheet },
            { name: "Insurance Agency Portal", icon: ShieldCheck },
            { name: "Payroll Management System", icon: Banknote },
            { name: "Accounting Platform", icon: Calculator },
            { name: "Financial Reporting Dashboard", icon: BarChart3 },
        ],
    },
    {
        heading: "Retail & E-Commerce",
        items: [
            { name: "Multi-Vendor Marketplace", icon: Store },
            { name: "Subscription-based Store", icon: RefreshCcw },
            { name: "Grocery Delivery Platform", icon: ShoppingBasket },
            { name: "Fashion Store", icon: Shirt },
            { name: "Furniture Store", icon: Sofa },
            { name: "Restaurant Ordering System", icon: UtensilsCrossed },
            { name: "Rental eCommerce", icon: KeyRound },
            { name: "Dropshipping Store", icon: PackagePlus },
            { name: "Booking Store", icon: BookCheck },
            { name: "Online Course Store", icon: BookMarked },
            { name: "Product Customization Platform", icon: Paintbrush },
        ],
    },
];

// ─────────────────────────────────────────────
// Section 3 — Cloud & AI Integrations
// ─────────────────────────────────────────────

export const byCloudAI: SolutionGroup[] = [
    {
        heading: "Cloud Solutions",
        items: [
            { name: "Cloud DB", icon: Database },
            { name: "CDN & Streaming", icon: Radio },
            { name: "Serverless Architecture", icon: CloudCog },
            { name: "3-Tier Caching", icon: Layers3 },
            { name: "Cloud Storage", icon: HardDrive },
            { name: "Real-time Sync", icon: RefreshCw },
            { name: "Multi-region Deployment", icon: Globe },
        ],
    },
    {
        heading: "AI Solutions",
        items: [
            { name: "AI Chatbot", icon: MessageSquareMore },
            { name: "Virtual Assistant", icon: BotMessageSquare },
            { name: "Generative AI Tools", icon: Sparkles },
            { name: "RAG-based Search", icon: SearchCode },
            { name: "Voice Assistant", icon: Mic },
            { name: "Recommender System", icon: ThumbsUp },
            { name: "Auto-response System", icon: Zap },
            { name: "AI-powered Analytics Dashboard", icon: BarChart3 },
            { name: "Automated Report Generation", icon: FileOutput },
        ],
    },
];

// ─────────────────────────────────────────────
// Section 4 — Platforms & Tools
// ─────────────────────────────────────────────

export const byPlatforms: SolutionGroup[] = [
    {
        heading: "CMS & Content",
        items: [
            { name: "WordPress", icon: Globe },
            { name: "Sanity", icon: PenTool },
            { name: "Strapi", icon: Server },
            { name: "Contentful", icon: FileJson },
            { name: "Payload CMS", icon: Database },
        ],
    },
    {
        heading: "CRM & Business",
        items: [
            { name: "Zoho", icon: LayoutGrid },
            { name: "HubSpot", icon: Megaphone },
            { name: "Salesforce", icon: Cloud },
            { name: "Freshdesk", icon: Headphones },
        ],
    },
    {
        heading: "Payments",
        items: [
            { name: "Stripe", icon: CreditCard },
            { name: "Razorpay", icon: IndianRupee },
            { name: "PayPal", icon: Wallet },
            { name: "Square", icon: Square },
            { name: "Cashfree", icon: Banknote },
            { name: "PayU", icon: CircleDollarSign },
        ],
    },
    {
        heading: "Automation & Workflow",
        items: [
            { name: "GitHub", icon: Cat },
            { name: "Postman", icon: Send },
            { name: "Notion", icon: NotebookPen },
            { name: "Figma", icon: Pen },
            { name: "Jira", icon: Kanban },
            { name: "Slack", icon: MessageSquare },
        ],
    },
    {
        heading: "Cloud Providers",
        items: [
            { name: "AWS", icon: Cloud },
            { name: "Google Cloud", icon: CloudCog },
            { name: "Azure", icon: CloudLightning },
            { name: "Vercel", icon: Triangle },
            { name: "Firebase", icon: Flame },
            { name: "Supabase", icon: Database },
            { name: "DigitalOcean", icon: Droplets },
        ],
    },
    {
        heading: "AI & LLM Platforms",
        items: [
            { name: "OpenAI", icon: BrainCircuit },
            { name: "Anthropic Claude", icon: Sparkles },
            { name: "Mistral", icon: Wind },
            { name: "HuggingFace", icon: Smile },
            { name: "LangChain", icon: Link },
            { name: "Pinecone", icon: Triangle },
            { name: "Weaviate", icon: Network },
            { name: "Groq", icon: Zap },
            { name: "Ollama", icon: Terminal },
        ],
    },
];
