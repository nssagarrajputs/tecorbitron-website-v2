import Hero from "@/components/page/blog/Hero";
import BlogListing from "@/components/page/blog/BlogListing";
import RecentBlogs from "@/components/page/blog/RecentBlogs";

export default function Blog() {
    return (
        <main>
            <Hero />
            <RecentBlogs />
            <BlogListing />
        </main>
    );
}
