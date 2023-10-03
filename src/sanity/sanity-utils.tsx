import { groq } from "next-sanity";
import { Post } from "../../types/post";
import { client } from "./config/client";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

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

// Barebones lazy-loaded image component
const imageComponent = ({ value, isInline }: any) => {
	const { width, height } = getImageDimensions(value);
	return (
		<Image
			src={urlBuilder(client)
				.image(value)
				.width(isInline ? 100 : 800)
				.fit("max")
				.auto("format")
				.url()}
			alt={value.alt || " "}
			width={width}
			height={height}
			loading='lazy'
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? "inline-block" : "block",

				// Avoid jumping around with aspect-ratio CSS property
				aspectRatio: width / height,
			}}
		/>
	);
};

export const components = {
	types: {
		image: imageComponent,
		// Any other custom types you have in your content
		// Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
	},
};
