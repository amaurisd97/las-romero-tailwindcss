import Image from 'next/image'

export default function () {
	return (
		<section className='flex flex-col w-4/5 m-auto text-slate-100'>
			<h2 className='text-4xl text-center mt-12 uppercase'>Nuestros Servicios</h2>
			<h3 className='text-2xl text-center mt-12'>Comodidades y Beneficios</h3>
			<p className='m-10 text-lg text-center'>
				En &quot;Las Romero&quot;, no solo ofrecemos un lugar cómodo para hospedarte, sino también una experiencia única con servicios
				excepcionales que harán de tu estancia algo inolvidable:
			</p>

			<div className='flex flex-wrap justify-center gap-5 mt-2'>
				<div className=' flex flex-col max-w-[380px]  text-slate-100 rounded-xl text-center'>
					<Image
						src={'/grid/2.png'}
						width={410}
						height={300}
						alt='ubicacion'
						className='rounded-tl-xl rounded-tr-xl'
					/>
					<p className='p-3 h-28 bg-slate-900 rounded-bl-xl rounded-br-xl'>
						<span className='font-bold'>Guía Turístico:</span> <br />
						Descubre los secretos mejor guardados de la ciudad con la ayuda de nuestro guía turístico.
					</p>
				</div>
				<div className=' flex flex-col max-w-[380px] text-slate-100 rounded-xl text-center'>
					<Image
						src={'/grid/2.png'}
						width={410}
						height={300}
						alt='ubicacion'
						className='rounded-tl-xl rounded-tr-xl'
					/>
					<p className='p-3 h-28 bg-slate-900 rounded-bl-xl rounded-br-xl'>
						<span className='font-bold'>Paseos en Carros Clásicos:</span> <br />
						Disfruta de un viaje al pasado con nuestros paseos en carros clásicos. Explora la ciudad con estilo y elegancia.
					</p>
				</div>
				<div className=' flex flex-col max-w-[380px] text-slate-100 rounded-xl text-center'>
					<Image
						src={'/grid/2.png'}
						width={410}
						height={300}
						alt='ubicacion'
						className='rounded-tl-xl rounded-tr-xl'
					/>
					<p className='p-3 h-28 bg-slate-900 rounded-bl-xl rounded-br-xl'>
						<span className='font-bold'>Bebidas y Comidas:</span> <br />
						Deléitate con una selección de bebidas y comidas preparadas con ingredientes frescos y locales.
					</p>
				</div>
			</div>
			<p className='mt-1 text-lg text-center'>
				Nuestro objetivo es hacer que te sientas no solo como un huésped, sino como parte de nuestra familia. Ven y vive una experiencia
				excepcional con nuestros servicios diseñados especialmente para ti.
				<br />
				¡Esperamos darte la bienvenida muy pronto! 😊
			</p>
		</section>
	)
}
