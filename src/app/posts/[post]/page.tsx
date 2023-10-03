import { getPost } from "@/src/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { components } from "@/src/sanity/sanity-utils";

type Props = {
	params: { post: string };
};

export default async function Post({ params }: Props) {
	const slug = params.post;

	const post = await getPost(slug);

	return (
		<section className='min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='flex items-center justify-center p-6'>
				<h1 className='font-extrabold text-7xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
					{post.title}
				</h1>
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl z-0'>
					<Image
						src={post.mainImage}
						width={1024}
						height={768}
						alt={post.title}
						className='rounded-lg drop-shadow-md mb-6'
					/>

					<PortableText value={post.body} components={components} />
				</div>
			</div>
		</section>
	);
}
