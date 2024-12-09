import Image from 'next/image'
export default function Header() {
	return (
		<header className='w-full text-slate-100'>
			<div className='lg:w-4/5 m-auto flex justify-between items-center p-4'>
				<Image
					src={'1.svg'}
					width={80}
					height={80}
					alt='house'
					className='absolute right-[20%] top-20 md:hidden '
				/>
				<h1 className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl ml-10 md:ml-10 md:mr-10 lg:ml-28 lg:mt-10 xl:ml-28 md:mt-10 xl:mt-10 md:p-3 lg:p-0 md:bg-gradient-to-r md:from-white md:to-slate-500 md:text-transparent md:bg-clip-text uppercase xl:mr-5 hidden md:block'>
					<span className='font-bold'>Las</span> <br /> <span className='ml-6'>Romero</span>
				</h1>
				<Image
					src='/service-bg.png'
					alt='living-room'
					height={415}
					width={654}
					className='hidden md:block md:h-56 lg:h-72 md:rounded-bl-3xl lg:rounded-bl-3xl lg:rounded-tl-3xl w-screen object-cover lg:mr-0 lg:m-auto lg:w-[500px] xl:w-[654px]'
					priority
				/>
				<h1 className='w-4/5 absolute  text-center top-24 md:hidden text-5xl md:text-6xl mt-3 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text uppercase font-bold'>
					<span className='ml-[-50%] '>Las</span>
					<br />
					<span className='ml-[10%] font-normal'>Romero</span>
				</h1>
				<small className=' top-96 md:hidden mt-16 ml-24 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text  font-bold p-5'>
					No hay mejor lugar para sentirte en casa
				</small>
				<Image
					src={'2.svg'}
					width={80}
					height={80}
					alt='house'
					className='absolute left-[10%] top-52 md:hidden '
				/>
			</div>
		</header>
	)
}
