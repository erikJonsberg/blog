// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import FeaturedPosts from "./featured-posts";
import { postsQuery } from "@/src/sanity/lib/queries";

export default function PreviewPosts({
	posts = [],
}: {
	posts: SanityDocument[];
}) {
	const [data] = useLiveQuery(posts, postsQuery);

	return <FeaturedPosts posts={data} />;
}
