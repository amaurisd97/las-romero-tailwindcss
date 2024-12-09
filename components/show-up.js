import Image from 'next/image'

export default function () {
	return (
		<section className='w-4/5 m-auto'>
			<h2 className='text-xl md:text-3xl text-center mt-12 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text'>
				Espacio ideal, vida ideal, sientete en casa.
			</h2>
			<div className='flex flex-wrap mt-10 md:gap-4 justify-start lg:justify-center content-center '>
				<div className='md:text-xl flex w-80 text-center  place-items-center md:w-[370px] h-28 md:h-36 md:ml-0 sm:bg-slate-900 mt-5 text-slate-100 rounded-xl'>
					<Image
						src={'/grid/1.png'}
						width={205}
						height={150}
						alt='Strategic and convenient location'
						className='rounded-full sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none sm:rounded-br-none w-20 sm:w-40 md:w-52 h-20 sm:h-28 md:h-36'
					/>
					<h3 className='text-xs sm:text-base md:text-xl m-4 sm:m-5'>Localización Estratégica y Conveniente</h3>
				</div>
				<div className='flex w-80 text-center place-items-center md:w-[370px] h-28 md:h-36  md:ml-32 lg:ml-0 xl:mt-24 mt-5 sm:bg-slate-900 text-slate-100 rounded-xl '>
					<Image
						src={'/grid/2.png'}
						width={205}
						height={150}
						alt='Immediate and efficient service'
						className='rounded-full sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none sm:rounded-br-none w-20 sm:w-40 md:w-52 h-20 sm:h-28 md:h-36'
					/>
					<h3 className='text-xs sm:text-base md:text-xl m-4 sm:m-5 w-full'>Atención inmediata y eficiente</h3>
				</div>
				<div className='flex w-80 text-center  place-items-center md:w-[370px] h-28 md:h-36 md:ml-60 lg:ml-0 sm:bg-slate-900 mt-5 text-slate-100  rounded-xl '>
					<Image
						src={'/grid/2.png'}
						width={205}
						height={150}
						alt='Comfortable and air-conditioned rooms'
						className='rounded-full sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none sm:rounded-br-none w-20 sm:w-40 md:w-52 h-20 sm:h-28 md:h-36'
					/>
					<h3 className='text-xs sm:text-base md:text-xl m-4 sm:m-5 sm:mt-3'>Disfruta de Habitaciones Climatizadas y Confortables</h3>
				</div>
			</div>
		</section>
	)
}
