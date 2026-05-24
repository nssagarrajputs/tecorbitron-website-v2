import type { StaticImageData } from "next/image";

// ─── Web Development ──────────────────────────────────────────────────────────
import React from "@/assets/technology-icon/react.svg";
import Nextjs from "@/assets/technology-icon/next-js.svg";
import TypeScript from "@/assets/technology-icon/typescript.svg";
import Angular from "@/assets/technology-icon/angular.svg";
import Nodejs from "@/assets/technology-icon/nodejs.svg";
import Express from "@/assets/technology-icon/expressjs.svg";
import Laravel from "@/assets/technology-icon/laravel-2.svg";
import PHP from "@/assets/technology-icon/php-4.svg";

// ─── App Development ──────────────────────────────────────────────────────────
import ReactNative from "@/assets/technology-icon/react-native.svg";
import Flutter from "@/assets/technology-icon/flutter.svg";
import Swift from "@/assets/technology-icon/swift-15.svg";

// ─── Backend & Languages ──────────────────────────────────────────────────────
import Java from "@/assets/technology-icon/java-14.svg";
import SpringBoot from "@/assets/technology-icon/spring-3.svg";
import Python from "@/assets/technology-icon/python-5.svg";
import Go from "@/assets/technology-icon/go-lang.svg";
import Cplusplus from "@/assets/technology-icon/c.svg";

// ─── Databases ────────────────────────────────────────────────────────────────
import PostgreSQL from "@/assets/technology-icon/postgresql.svg";
import MySQL from "@/assets/technology-icon/mysql-logo-pure.svg";
import MongoDB from "@/assets/technology-icon/mongodb-icon-1.svg";
import Redis from "@/assets/technology-icon/redis.svg";

// ─── Cloud & Infrastructure ─────────────────────────────────────────────────
import AWS from "@/assets/technology-icon/aws-2.svg";
import GCP from "@/assets/technology-icon/google-cloud-1.svg";
import Azure from "@/assets/technology-icon/azure-2.svg";
import DigitalOcean from "@/assets/solution-icon/digitalocean-icon-1.svg";
import Firebase from "@/assets/solution-icon/firebase-1.svg";
import Supabase from "@/assets/solution-icon/supabase-logo-icon.svg";

// ─── E-Commerce & CMS ─────────────────────────────────────────────────────────
import WordPress from "@/assets/solution-icon/wordpress-2.svg";
import Stripe from "@/assets/solution-icon/stripe-4.svg";
import Razorpay from "@/assets/solution-icon/razorpay.svg";
import PayPal from "@/assets/solution-icon/paypal-4.svg";
import PayU from "@/assets/solution-icon/PAYU_LOGO_SQUARE_LIME-ai.svg";
import Sanity from "@/assets/solution-icon/Sanity.svg";
import Strapi from "@/assets/solution-icon/strapi-icon-svgrepo-com.svg";
import Payload from "@/assets/solution-icon/payload-1.svg";
import Contentful from "@/assets/solution-icon/Contentful--Streamline-Svg-Logos.svg";

// ─── AI & Automation ──────────────────────────────────────────────────────────
import OpenAI from "@/assets/solution-icon/openai-2.svg";
import Anthropic from "@/assets/solution-icon/anthropic-1.svg";
import LangChain from "@/assets/solution-icon/langchain-color.svg";
import HuggingFace from "@/assets/solution-icon/huggingface-2.svg";
import Groq from "@/assets/solution-icon/groq.webp";
import Ollama from "@/assets/solution-icon/ollama.webp";
import Mistral from "@/assets/solution-icon/Mistral-Ai-Icon--Streamline-Svg-Logos.svg";
import Pinecone from "@/assets/solution-icon/Pinecone-Icon--Streamline-Svg-Logos.svg";

// ─── Design & Tools ───────────────────────────────────────────────────────────
import Figma from "@/assets/technology-icon/figma-icon.svg";
import GitHub from "@/assets/solution-icon/github.svg";
import Postman from "@/assets/solution-icon/postman.svg";
import Jira from "@/assets/solution-icon/jira-1.svg";
import Slack from "@/assets/solution-icon/slack-new-logo.svg";
import Notion from "@/assets/solution-icon/notion-2.svg";
import HubSpot from "@/assets/solution-icon/hubspot-1.svg";
import Zoho from "@/assets/solution-icon/zoho-1.svg";
import Salesforce from "@/assets/solution-icon/salesforce-2.svg";
import Freshdesk from "@/assets/solution-icon/freshdesk-icon.svg";
import V0 from "@/assets/solution-icon/v0.svg";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TechnologyItem = {
    name: string;
    icon: StaticImageData | string;
};

export type TechnologyGroup = {
    heading: string;
    items: TechnologyItem[];
};

// ─── Groups ───────────────────────────────────────────────────────────────────

export const byWebDevelopment: TechnologyGroup = {
    heading: "Web Development",
    items: [
        { name: "React", icon: React },
        { name: "Next.js", icon: Nextjs },
        { name: "TypeScript", icon: TypeScript },
        { name: "Angular", icon: Angular },
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: Express },
        { name: "Laravel", icon: Laravel },
        { name: "PHP", icon: PHP },
    ],
};

export const byAppDevelopment: TechnologyGroup = {
    heading: "App Development",
    items: [
        { name: "React Native", icon: ReactNative },
        { name: "Flutter", icon: Flutter },
        { name: "Swift", icon: Swift },
        { name: "Java", icon: Java },
        { name: "Spring Boot", icon: SpringBoot },
    ],
};

export const byBackendLanguages: TechnologyGroup = {
    heading: "Backend & Languages",
    items: [
        { name: "Python", icon: Python },
        { name: "Go", icon: Go },
        { name: "Java", icon: Java },
        { name: "Spring Boot", icon: SpringBoot },
        { name: "C / C++", icon: Cplusplus },
        { name: "Node.js", icon: Nodejs },
    ],
};

export const byDatabases: TechnologyGroup = {
    heading: "Databases",
    items: [
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "MySQL", icon: MySQL },
        { name: "MongoDB", icon: MongoDB },
        { name: "Redis", icon: Redis },
        { name: "Firebase", icon: Firebase },
        { name: "Supabase", icon: Supabase },
    ],
};

export const byCloudInfrastructure: TechnologyGroup = {
    heading: "Cloud & Infrastructure",
    items: [
        { name: "AWS", icon: AWS },
        { name: "Google Cloud", icon: GCP },
        { name: "Microsoft Azure", icon: Azure },
        { name: "DigitalOcean", icon: DigitalOcean },
        { name: "Firebase", icon: Firebase },
        { name: "Supabase", icon: Supabase },
    ],
};

export const byEcommerceCms: TechnologyGroup = {
    heading: "E-Commerce & CMS",
    items: [
        { name: "WordPress", icon: WordPress },
        { name: "Sanity", icon: Sanity },
        { name: "Strapi", icon: Strapi },
        { name: "Payload CMS", icon: Payload },
        { name: "Contentful", icon: Contentful },
        { name: "Stripe", icon: Stripe },
        { name: "Razorpay", icon: Razorpay },
        { name: "PayPal", icon: PayPal },
        { name: "PayU", icon: PayU },
    ],
};

export const byAiAutomation: TechnologyGroup = {
    heading: "AI & Automation",
    items: [
        { name: "OpenAI", icon: OpenAI },
        { name: "Anthropic", icon: Anthropic },
        { name: "LangChain", icon: LangChain },
        { name: "Hugging Face", icon: HuggingFace },
        { name: "Groq", icon: Groq },
        { name: "Ollama", icon: Ollama },
        { name: "Mistral AI", icon: Mistral },
        { name: "Pinecone", icon: Pinecone },
    ],
};

export const byDesignTools: TechnologyGroup = {
    heading: "Design & Collaboration",
    items: [
        { name: "Figma", icon: Figma },
        { name: "GitHub", icon: GitHub },
        { name: "Postman", icon: Postman },
        { name: "Jira", icon: Jira },
        { name: "Slack", icon: Slack },
        { name: "Notion", icon: Notion },
        { name: "v0", icon: V0 },
    ],
};

export const byMarketingCrm: TechnologyGroup = {
    heading: "SEO, CRM & Support",
    items: [
        { name: "HubSpot", icon: HubSpot },
        { name: "Zoho", icon: Zoho },
        { name: "Salesforce", icon: Salesforce },
        { name: "Freshdesk", icon: Freshdesk },
    ],
};

/** All groups in page order — use on /technologies */
export const technologyGroups: TechnologyGroup[] = [
    byWebDevelopment,
    byAppDevelopment,
    byBackendLanguages,
    byDatabases,
    byCloudInfrastructure,
    byEcommerceCms,
    byAiAutomation,
    byDesignTools,
    byMarketingCrm,
];
