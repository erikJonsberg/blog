import PostsGrid from "./components/posts/posts-grid";
import Hero from "./components/layout/hero";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export default async function Home() {
	return (
		<main className='min-h-screen container mx-auto'>
			<Hero />

			<div className='relative mb-16'>
				<div className='absolute inset-0 flex items-center' aria-hidden='true'>
					<div className='w-full border-t border-gray-300' />
				</div>
				<div className='relative flex justify-center'>
					<span className='bg-[#F3F3F3] dark:bg-[#062438] bg-blend-hue px-8 text-gray-500'>
						<RocketLaunchIcon
							className='h-8 w-8 text-purple-600'
							aria-hidden='true'
						/>
					</span>
				</div>
			</div>
			<h2 className='text-3xl text-center font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl'>
				My Projects
			</h2>
			<div className='mt-5'>
				<PostsGrid />
			</div>
		</main>
	);
}
