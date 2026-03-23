import { groq } from "next-sanity";

// Homepage ke liye — sirf 3 featured projects
export const PORTFOLIO_PREVIEW_QUERY = groq`
  *[_type == "project" && featured == true] | order(completedAt desc) [0...3] {
    projectName,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
  }
`;

// Portfolio listing page
export const PORTFOLIO_LIST_QUERY = groq`
  {
    "featured": *[_type == "project" && featured == true] | order(completedAt desc) [0] {
      projectName,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "industries": industries[]->name,
     "techStack": techStack[]->name,
      summary,
      livePreview,
    },
    "rest": *[_type == "project"] | order(completedAt desc) {
    projectName,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "industries": industries[]->name,
       "techStack": techStack[]->name,
      livePreview,
    }
  }
`;

export const PORTFOLIO_DETAIL_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
     projectName,
     title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    "techStack": techStack[]->{name, category},
    projectTypes,
    completedAt,
    livePreview,
    summary,
    problem,
    solution,
    result,
    "screenshots": screenshots[]{
      "url": asset->url,
      alt
    },
  }
`;

export const PORTFOLIO_RELATED_QUERY = groq`
  *[_type == "project" && slug.current != $slug] | order(completedAt desc) [0...3] {
    projectName,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
  }
`;
