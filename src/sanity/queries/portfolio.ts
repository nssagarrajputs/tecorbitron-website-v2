import { groq } from "next-sanity";

// Homepage ke liye — sirf 3 featured projects
export const PORTFOLIO_PREVIEW_QUERY = groq`
  *[_type == "project" && featured == true] | order(completedAt desc) [0...3] {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    projectTypes,
  }
`;

// Portfolio listing page
export const PORTFOLIO_LIST_QUERY = groq`
  {
    "featured": *[_type == "project" && featured == true] | order(completedAt desc) [0] {
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "industries": industries[]->name,
      techStack,
      summary,
      livePreview,
    },
    "rest": *[_type == "project"] | order(completedAt desc) {
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "industries": industries[]->name,
      techStack,
      livePreview,
    }
  }
`;

export const PORTFOLIO_DETAIL_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    techStack,
    projectTypes,
    completedAt,
    livePreview,
    summary,
    problem,
    solution,
    process,
    challenges,
    result,
    "screenshots": screenshots[]{
      "url": asset->url,
      alt
    },
    testimonialQuote,
    clientName,
    designation,
    companyName,
    showClientPublicly,
  }
`;

export const PORTFOLIO_RELATED_QUERY = groq`
  *[_type == "project" && slug.current != $slug] | order(completedAt desc) [0...3] {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
  }
`;