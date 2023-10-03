"use client";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export default function Hero() {
	return (
		<section className='max-w-3xl px-4 sm:px-6 lg:px-8 mb-16 mt-8 mx-auto'>
			<div className='flex justify-start items-center gap-8 mb-8'>
				<div className='p-2 w-28 bg-purple-600 rounded-3xl rotate-12 shrink'>
					<Image
						src='/images/hero.jpg'
						priority
						alt='Erik Jonsberg'
						width={200}
						height={200}
						className='rounded-3xl -rotate-6'
					/>
				</div>
				<h1 className='text-7xl font-extrabold'>
					Hi, I&apos;m{" "}
					<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
						Erik
					</span>
				</h1>
			</div>
			<p>
				Civil ashamed nothing wanted enabled danger favour water prudent winding
				written projection most. Preference property help indulged over
				moonlight delicate northward sweetness merely replied pronounce. Become
				coming stanhill resolved drawings wish provided answer result out.
				Piqued addition raillery thrown possible read raising dull wrote pursuit
				felicity curiosity elderly face returned see. Declared but impossible no
				household visitor fruit parties end through power out burst offended
				among.
			</p>
			<Disclosure>
				<Disclosure.Button className='py-2'>View long bio</Disclosure.Button>
				<Disclosure.Panel className='text-gray-500'>
					<p>
						Now blushes after enough added given extremely securing are
						continual existence fond strictly turned evening looking determine.
						Unwilling cordially ecstatic. Dissimilar venture design parlors
						journey points garrets pasture overcame. Result except journey other
						thoroughly excellence missed aware. Breeding length deficient easily
						things settled sometimes sister enquire delighted beauty next
						pianoforte conduct.
					</p>
					<p>
						Forty remain round performed bore except sufficient winter. Books
						wholly contained suffering resolution conveying remember followed
						green. It frankness books even summer them manner given. Returned
						quit evening uncommonly depend why warmly raptures principles.
						Wisdom laughter unable fact so taken unpleasing that held hardly.
					</p>
				</Disclosure.Panel>
			</Disclosure>
		</section>
	);
}
