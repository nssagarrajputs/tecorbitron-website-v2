import { groq } from "next-sanity";

// Homepage ke liye — sirf 3 latest posts
export const BLOG_TEASER_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    readTime,
    "category": categories[0]->name,
    "coverImage": coverImage.asset->url,
  }
`;

// Blog page ke liye — 2 latest posts
export const RECENT_BLOGS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) [0...2] {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "category": categories[0]->name,
    "coverImage": coverImage.asset->url,
  }
`

// Sab posts — blog listing ke liye
export const BLOG_LISTING_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    readTime,
    "category": categories[0]->name,
    "coverImage": coverImage.asset->url,
  }
`

// Sab unique categories
export const BLOG_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(name asc) {
    name,
    "slug": slug.current,
  }
`