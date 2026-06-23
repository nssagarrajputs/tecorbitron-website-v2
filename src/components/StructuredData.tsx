// ─── Internal renderer — not exported ────────────────────────────────────────
// Every schema component below builds its own JSON-LD object and calls this to render it. Pages never call this directly and never pass raw `data`.

function Schema({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── Global — used once, in layout.tsx ───────────────────────────────────────
// Organization + WebSite. Every other schema in this file references the
// Organization's @id — this is the foundation everything else builds on.

export function GlobalSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "Organization",
                        "@id": "https://www.tecorbitron.com/#organization",
                        name: "Tecorbitron Solutions Pvt. Ltd.",
                        url: "https://www.tecorbitron.com",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://www.tecorbitron.com/android-chrome-512x512.png",
                        },
                        foundingDate: "2024-08-05",
                        founders: [
                            { "@type": "Person", name: "Sagar Chauhan" },
                        ],
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "S9, Angel Mega Mall",
                            addressLocality: "Ghaziabad",
                            addressRegion: "Uttar Pradesh",
                            postalCode: "201010",
                            addressCountry: "IN",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-9084800496",
                            email: "contact@tecorbitron.com",
                            contactType: "customer service",
                            availableLanguage: ["English", "Hindi"],
                        },
                        sameAs: [
                            "https://www.linkedin.com/company/tecorbitrons",
                            "https://www.instagram.com/tecorbitron",
                            "https://www.facebook.com/tecorbitron",
                            "https://www.youtube.com/@Tecorbitron",
                        ],
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://www.tecorbitron.com/#website",
                        url: "https://www.tecorbitron.com",
                        name: "Tecorbitron Solutions",
                        publisher: {
                            "@id": "https://www.tecorbitron.com/#organization",
                        },
                    },
                ],
            }}
        />
    );
}

// ─── Homepage — used in (home)/page.tsx ──────────────────────────────────────
// name + description mirror the real metadata in layout.tsx, so this schema
// never drifts from the page's actual title/description tags.

export function HomePageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://www.tecorbitron.com/#homepage",
                url: "https://www.tecorbitron.com",
                name: "Tecorbitron – Web, App & Digital Solutions for Startups and SMBs",
                description:
                    "We build websites, apps, and digital systems for startups and growing businesses. Modern tech, transparent pricing, and 3 months support included.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── Contact — used in contact/page.tsx ──────────────────────────────────────
// `about` references the Organization rather than re-stating phone/email/
// address here — those live once in GlobalSchema, this just points at them.

export function ContactPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://www.tecorbitron.com/contact/#webpage",
                url: "https://www.tecorbitron.com/contact",
                name: "Contact Us — Tecorbitron",
                description:
                    "Got a project in mind? Get in touch with Tecorbitron — we'll get back to you within 24 hours. Let's build something great together.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── About — used in about/page.tsx ──────────────────────────────────────────
// name + description mirror real about/page.tsx metadata. Includes the
// founder as a `mentions` Person entity, since the page has a dedicated
// founder section with his name, title, and LinkedIn.

export function AboutPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "@id": "https://www.tecorbitron.com/about/#webpage",
                url: "https://www.tecorbitron.com/about",
                name: "About Tecorbitron – Founder-Led Digital Solutions Company",
                description:
                    "Learn about Tecorbitron — a founder-led digital solutions company based in Ghaziabad, India. Modern web, app, and e-commerce solutions for startups and SMBs.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
                mentions: {
                    "@type": "Person",
                    name: "Sagar Chauhan",
                    jobTitle: "Founder & CEO",
                    url: "https://www.linkedin.com/in/nssagarrajput",
                },
            }}
        />
    );
}

// ─── Services — one component per real service page ─────────────────────────
// All four share an identical shape: name + description mirror each page's
// real metadata.title/description exactly, so schema never drifts from the
// visible page content. `provider` always points at the Organization.

export function WebServiceSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.tecorbitron.com/services/web-development/#service",
                name: "Web Development Company — Tecorbitron",
                url: "https://www.tecorbitron.com/services/web-development",
                description:
                    "We design and develop websites and web applications that load fast, rank well, and convert visitors into customers — built specifically for your business goals.",
                serviceType: "Web Development",
                areaServed: ["India", "International"],
                provider: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

export function AppServiceSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.tecorbitron.com/services/app-development/#service",
                name: "App Development Company — Tecorbitron",
                url: "https://www.tecorbitron.com/services/app-development",
                description:
                    "We design and develop mobile apps that perform on every platform — Android, iOS, and cross-platform. Built for startups and businesses ready to go mobile.",
                serviceType: "App Development",
                areaServed: ["India", "International"],
                provider: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

export function EcommerceServiceSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.tecorbitron.com/services/ecommerce-development/#service",
                name: "E-Commerce Development Company — Tecorbitron",
                url: "https://www.tecorbitron.com/services/ecommerce-development",
                description:
                    "We build online stores that load fast, convert well, and are easy to manage — on Shopify, WooCommerce, or fully custom. Built for businesses ready to sell online.",
                serviceType: "E-Commerce Development",
                areaServed: ["India", "International"],
                provider: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

export function SeoServiceSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.tecorbitron.com/services/seo-and-marketing/#service",
                name: "SEO Services Company — Tecorbitron",
                url: "https://www.tecorbitron.com/services/seo-and-marketing",
                description:
                    "We improve your search visibility with technical, on-page, and content SEO strategies that bring real, qualified traffic and measurable business results.",
                serviceType: "SEO & Digital Growth",
                areaServed: ["India", "International"],
                provider: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── Services hub — used in services/page.tsx ────────────────────────────────
// Lightweight ItemList referencing the 4 Service @ids above — no duplicated content. The page itself should render this ALONGSIDE all 4 individual service schema components, so /services carries full Service detail for each of the 4 real cards shown on that page, not just references:   <ServicesPageSchema />   <WebServiceSchema />   <AppServiceSchema />   <EcommerceServiceSchema />   <SeoServiceSchema />

export function ServicesPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                "@id": "https://www.tecorbitron.com/services/#servicelist",
                name: "Explore Our Services — Tecorbitron",
                description:
                    "From websites and apps to e-commerce and SEO — built for startups and businesses. Fast delivery, transparent pricing, 3 months support included.",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@id": "https://www.tecorbitron.com/services/web-development/#service",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        item: {
                            "@id": "https://www.tecorbitron.com/services/app-development/#service",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        item: {
                            "@id": "https://www.tecorbitron.com/services/ecommerce-development/#service",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 4,
                        item: {
                            "@id": "https://www.tecorbitron.com/services/seo-and-marketing/#service",
                        },
                    },
                ],
            }}
        />
    );
}

// ─── Solutions — used in solutions/page.tsx ──────────────────────────────────
// Lightweight CollectionPage, not a full breakdown of every solution item — the byServices/byIndustries/byCloudAI/byPlatforms lists are short names + icons, not enough unique content per item to justify individual Service entities the way the 4 main service pages did.

export function SolutionsPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": "https://www.tecorbitron.com/solutions/#webpage",
                url: "https://www.tecorbitron.com/solutions",
                name: "Digital Solutions for Every Business — Tecorbitron",
                description:
                    "From custom websites and web apps to CRM, ERP, LMS, and e-commerce — Tecorbitron builds digital solutions tailored to your business needs and goals.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── Case Studies listing — used in case-studies/page.tsx ───────────────────
// Lightweight CollectionPage for the listing page itself. The individual case study schema (CaseStudySchema, dynamic) is separate and lives on each case-studies/[slug] detail page.

export function CaseStudiesPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": "https://www.tecorbitron.com/case-studies/#webpage",
                url: "https://www.tecorbitron.com/case-studies",
                name: "Case Studies — Real Projects by Tecorbitron",
                description:
                    "See what we've built — real projects delivered for startups and businesses across industries. From websites and apps to e-commerce and custom digital solutions.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── Case Study detail — used in case-studies/[slug]/page.tsx ───────────────
// Dynamic — takes the fetched project object as a prop, since this data only exists after the page's own client.fetch resolves. Fixes two bugs from the old portfolioProjectSchema(): URLs now use /case-studies/ instead of the stale /portfolio/, and techStack (an array of {name, category} objects) is mapped to names before joining, instead of being joined directly as if it were a flat string array.

type CaseStudyProject = {
    title: string;
    slug: string;
    summary?: string;
    thumbnail: string | null;
    completedAt?: string;
    techStack?: { name: string; category: string }[];
};

export function CaseStudySchema({ project }: { project: CaseStudyProject }) {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "@id": `https://www.tecorbitron.com/case-studies/${project.slug}/#creativework`,
                name: project.title,
                description: project.summary ?? project.title,
                image:
                    project.thumbnail ??
                    "https://www.tecorbitron.com/og-image.png",
                url: `https://www.tecorbitron.com/case-studies/${project.slug}`,
                creator: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
                dateCreated: project.completedAt,
                keywords: project.techStack
                    ?.map((tech) => tech.name)
                    .join(", "),
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://www.tecorbitron.com/case-studies/${project.slug}`,
                },
            }}
        />
    );
}

// ─── Blog listing — used in blog/page.tsx ────────────────────────────────────
// Lightweight CollectionPage for the listing page itself. The individual post schema (BlogPostSchema, dynamic) is separate and lives on each blog/[slug] detail page.

export function BlogPageSchema() {
    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": "https://www.tecorbitron.com/blog/#webpage",
                url: "https://www.tecorbitron.com/blog",
                name: "Insights — Tecorbitron",
                description:
                    "Expert articles, practical guides, and industry updates from the Tecorbitron team — written to help you build, grow, and scale your business online.",
                isPartOf: {
                    "@id": "https://www.tecorbitron.com/#website",
                },
                about: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
            }}
        />
    );
}

// ─── Blog Post detail — used in blog/[slug]/page.tsx ─────────────────────────
// Dynamic — takes the fetched post object as a prop, since this data only exists after the page's own client.fetch resolves. Adds category + tags as keywords, which the old blogPostSchema() never included despite the data being available.

type BlogPostData = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    coverImage: string | null;
    category?: string;
    tags?: string[];
    author?: { name: string } | null;
};

export function BlogPostSchema({ post }: { post: BlogPostData }) {
    const keywords = [post.category, ...(post.tags ?? [])]
        .filter(Boolean)
        .join(", ");

    return (
        <Schema
            data={{
                "@context": "https://schema.org",
                "@type": "Article",
                "@id": `https://www.tecorbitron.com/blog/${post.slug}/#article`,
                headline: post.title,
                description: post.excerpt,
                image:
                    post.coverImage ??
                    "https://www.tecorbitron.com/og-image.png",
                datePublished: post.publishedAt,
                ...(keywords ? { keywords } : {}),
                author: {
                    "@type": "Person",
                    name: post.author?.name ?? "Sagar Chauhan",
                    url: "https://www.linkedin.com/in/nssagarrajput",
                },
                publisher: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://www.tecorbitron.com/blog/${post.slug}`,
                },
            }}
        />
    );
}
