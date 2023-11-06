import { SanityDocument } from "@sanity/client";
import Post from "../../components/posts/single-post";
import { postPathsQuery, postQuery } from "@/src/sanity/lib/queries";
import { sanityFetch, token } from "@/src/sanity/lib/fetch";
import { client } from "@/src/sanity/lib/client";
import PreviewProvider from "@/src/app/(site)/components/providers/preview-provider";
import PreviewPost from "@/src/app/(site)/components/posts/preview-post";
import { draftMode } from "next/headers";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
	// Important, use the plain Sanity Client here
	const posts = await client.fetch(postPathsQuery);

	return posts;
}

export default async function Page({ params }: { params: any }) {
	const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
	const isDraftMode = draftMode().isEnabled;

	if (isDraftMode && token) {
		return (
			<PreviewProvider token={token}>
				<PreviewPost post={post} />
			</PreviewProvider>
		);
	}

	return <Post post={post} />;
}
