import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    body,
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    categories[]->{
        title,
    },
    }`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    body,
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    categories[]->{
        title,
    },
    }`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
