import { PortableTextBlock } from "sanity";

export type Post = {
	_id: string;
	publishedAt: string;
	title: string;
	slug: string;
	mainImage: string;
	body: PortableTextBlock[];
};

export type Author = {
	_id: string;
	name: string;
	image: string;
	bio: PortableTextBlock[];
};

export type Category = {
	_id: string;
	title: string;
	description: string;
};
