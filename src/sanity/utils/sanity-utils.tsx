import { groq } from "next-sanity";
import { Post } from "../../../types/post";
import { client } from "../lib/client";

export async function getPosts(): Promise<Post[]> {
	return client.fetch(
		groq`*[_type == "post"]{
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
            }`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]{
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
            }`,
		{ slug }
	);
}
