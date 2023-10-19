import { getPost } from "@/src/sanity/sanity-utils";
import Image from "next/image";
import { PortableTextComponent } from "@/src/sanity/portable-text-utils";

type Props = {
	params: { post: string };
};

export default async function Post({ params }: Props) {
	const slug = params.post;

	const post = await getPost(slug);

	return (
		<article className='min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 prose dark:prose-invert'>
			<div className='flex items-center justify-center p-6'>
				<h1 className='font-extrabold text-7xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
					{post.title}
				</h1>
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					<Image
						src={post.mainImage}
						width={1024}
						height={768}
						alt={post.title}
						className='rounded-lg drop-shadow-md mb-6 z-0'
					/>

					<PortableTextComponent value={post.body} />
				</div>
			</div>
		</article>
	);
}
