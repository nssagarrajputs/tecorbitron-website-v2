import Hero from "@/components/page/blog/Hero";
import BlogListing from "@/components/page/blog/BlogListing";
import RecentBlogs from "@/components/page/blog/RecentBlogs";

import { client } from "@/sanity/client";
import {
    BLOG_LISTING_QUERY,
    BLOG_CATEGORIES_QUERY,
} from "@/sanity/queries/blog";


export default async function Blog() {

      const [posts, categories] = await Promise.all([
          client.fetch(BLOG_LISTING_QUERY),
          client.fetch(BLOG_CATEGORIES_QUERY),
      ]);


    return (
        <main>
            <Hero />
            <RecentBlogs />
            <BlogListing posts={posts} categories={categories} />
        </main>
    );
}
