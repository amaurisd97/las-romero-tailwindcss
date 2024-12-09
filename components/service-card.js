import Image from 'next/image'

export default function ServiceCard({ src, alt, title, description }) {
	return (
		<div className='flex flex-col max-w-72 text-slate-100 rounded-xl text-center'>
			<Image
				src={src}
				width={410}
				height={300}
				alt={alt}
				className='rounded-full w-72 h-72'
				loading='lazy'
			/>
			<p className='p-3 h-32'>
				<span className='font-bold'>{title}:</span> <br />
				{description}
			</p>
		</div>
	)
}
