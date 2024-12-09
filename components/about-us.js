import Image from 'next/image'

export default function () {
	return (
		<section
			id='about-us'
			className='lg:w-11/12 xl:w-4/5 m-auto mt-20 text-slate-100'>
			<h2 className='text-2xl md:text-4xl text-center mt-12 uppercase bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text'>
				Conócenos
			</h2>
			<div className='flex mt-2 md:mt-10'>
				<p className='text-sm md:text-base text-center lg:text-left p-5 lg:p-0 m-auto lg:mr-14 '>
					Bienvenidos a "Las Romero", tu nuevo hogar lejos de casa. Nuestra misión es proporcionar un espacio cómodo, accesible y acogedor
					para aquellos que buscan un lugar donde quedarse, ya sea por estudios, trabajo o viajes de placer. Ofrecemos habitaciones modernas
					y bien equipadas, diseñadas para satisfacer todas tus necesidades. Cada espacio está climatizado y preparado para brindarte el
					máximo confort, asegurando que tengas todo lo necesario para una estancia cómoda y productiva.
				</p>
				<Image
					src={'/services.png'}
					width={650}
					height={250}
					alt='Services and amenities of Las Romero'
					className='lg:block hidden object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl xl:rounded-none lg:w-[450px] lg:h-[370px] xl:w-[650px] xl:h-[350px]'
					loading='lazy'
					quality={90}
				/>
			</div>
		</section>
	)
}
