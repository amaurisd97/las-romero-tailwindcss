import Image from 'next/image'

export default function () {
	return (
		<header className='md:h-56 lg:h-72 xl:h-96 lg:w-11/12 xl:w-4/5 m-auto md:flex md:justify-between'>
			<h1 className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl ml-10 md:ml-10 md:mr-10 lg:ml-28 lg:mt-20 xl:ml-28 md:mt-14 xl:mt-28  md:p-3 lg:p-0 md:bg-gradient-to-r md:from-white md:to-slate-500 md:text-transparent md:bg-clip-text uppercase xl:mr-5 hidden md:block'>
				<span className='font-bold'>Las</span> <br /> <span className='ml-6'>Romero</span>
			</h1>
			<Image
				src='/service-bg.png'
				alt='living-room'
				height={415}
				width={654}
				className='md:h-56 lg:h-72 md:rounded-bl-3xl lg:rounded-bl-3xl lg:rounded-tl-3xl w-screen object-cover lg:mr-0 lg:m-auto lg:w-[500px] xl:w-[654px]'
				priority
			/>
			<h1 className='md:hidden text-4xl sm:text-5xl md:text-6xl text-center mt-3 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text uppercase'>
				<span className='font-bold'>Las</span> Romero
			</h1>
		</header>
	)
}
