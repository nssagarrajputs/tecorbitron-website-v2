import Link from "next/link";
import { ArrowRight } from "lucide-react";

import b1 from "@/assets/services/services-ai-ml.jpg";
import b2 from "@/assets/services/services-app.jpg";
import Image from "next/image";

const recent = [
    {
        category: "Web Development",
        thumbnail: b1,
        title: "Why Next.js is the Best Choice for Your Business Website in 2025",
        summary:
            "Explore how artificial intelligence is reshaping industries, from healthcare to entertainment, and what the future holds for this cutting-edge technology.",
        date: "Mar 01, 2025",
        slug: "nextjs-best-choice-2025",
        gradient: "from-deepspace to-deepspace-soft",
    },
    {
        category: "SEO",
        thumbnail: b2,
        title: "10 SEO Strategies That Actually Work for Small Businesses in India",
        summary:
            "Discover how cloud computing is revolutionizing the way businesses operate, offering scalability, flexibility, and cost-efficiency.",
        date: "Feb 22, 2025",
        slug: "seo-strategies-small-business-india",
        gradient: "from-deepspace-rich to-deepspace",
    },
];

export default function RecentBlogs() {
    return (
        <section className="bg-white px-4 pb-10">
            <div className="mx-auto max-w-5xl pt-8 pb-16">
                <h2 className="mb-8 text-2xl font-black">
                    Recently Added <span className="text-malachite">Blogs</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {recent.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-deepspace-soft hover:border-malachite/30 hover:shadow-deepspace/20 flex flex-col overflow-hidden rounded-xl transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div
                                className={`relative flex h-60 items-center justify-center overflow-hidden`}
                            >
                                <Image
                                    src={post.thumbnail}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover transition-all duration-400 group-hover:scale-[1.1]"
                                />

                                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                                <h3 className="group-hover:text-malachite-soft text-2xl leading-snug font-black tracking-tight text-white transition-colors duration-200">
                                    {post.title}
                                </h3>
                                <p className="leading-relaxed text-white/60 transition-colors duration-200">
                                    {post.summary}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                    <span className="text-xs font-medium text-white/30">
                                        {post.date}
                                    </span>
                                    <span className="text-malachite inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-all duration-200 group-hover:gap-2 group-hover:opacity-100">
                                        Read <ArrowRight size={10} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
