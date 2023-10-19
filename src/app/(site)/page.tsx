import PostsGrid from "./components/posts/posts-grid";
import WaterDropHero from "./components/layout/hero-2";

export default async function Home() {
	return (
		<main className='min-h-screen container mx-auto'>
			<WaterDropHero />

			<div className='relative mb-16'>
				<div
					className='absolute inset-0 flex items-center'
					aria-hidden='true'
				></div>
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
