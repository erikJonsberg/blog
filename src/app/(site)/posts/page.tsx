import { SanityDocument } from "next-sanity";
import Posts from "../components/posts/all-posts";
import { postsQuery } from "@/src/sanity/lib/queries";
import { sanityFetch } from "@/src/sanity/lib/fetch";

export default async function AllPosts() {
	const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight dark:text-gray-50 text-gray-900 sm:text-4xl'>
						Everything
					</h2>
					<p className='mt-2 text-lg leading-8 dark:text-gray-200 text-gray-600'>
						Tips and tricks for building your next project and then some
					</p>
				</div>
				<Posts posts={posts} />
			</div>
		</div>
	);
}
