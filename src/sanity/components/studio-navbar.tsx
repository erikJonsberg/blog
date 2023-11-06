import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
	return (
		<div>
			<div className='flex items-center justify-between p-5'>
				<Link className='flex items-center text-yellow-400' href='/'>
					<ArrowUturnLeftIcon className='w-6 h-6 text-yellow-400 mr-2' />
					Back to website
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}
