import Image from "next/image";

export default function Logo() {
	return (
		<div className='flex items-center justify-center'>
			<Image
				src={"/images/black-logo.svg"}
				alt='Erik Jonsberg logo'
				width={80}
				height={80}
				className='w-20 h-auto'
			/>
		</div>
	);
}
