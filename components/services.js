import ServiceCard from './service-card'

const services = [
	{
		src: '/grid/2.png',
		alt: 'Guía Turístico',
		title: 'Guía Turístico',
		description: 'Descubre los secretos mejor guardados de la ciudad con la ayuda de nuestro guía turístico.',
	},
	{
		src: '/grid/2.png',
		alt: 'Paseos en Carros Clásicos',
		title: 'Paseos en Carros Clásicos',
		description: 'Disfruta de un viaje al pasado con nuestros paseos en carros clásicos. Explora la ciudad con estilo y elegancia.',
	},
	{
		src: '/grid/2.png',
		alt: 'Bebidas y Comidas',
		title: 'Bebidas y Comidas',
		description: 'Deléitate con una selección de bebidas y comidas preparadas con ingredientes frescos y locales.',
	},
]

export default function Services() {
	return (
		<section className='flex flex-col w-screen md:w-4/5 lg:w-11/12 xl:w-4/5 m-auto text-slate-100'>
			<h2 className='text-2xl md:text-4xl text-center mt-12 uppercase bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text'>
				Nuestros Servicios
			</h2>
			<h3 className='text-xl md:text-2xl text-center mt-12 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text'>
				Comodidades y Beneficios
			</h3>
			<p className='m-2 sm:m-10 md:text-lg text-center text-sm p-1 sm:p-5 lg:p-0'>
				En "Las Romero", no solo ofrecemos un lugar cómodo para hospedarte, sino también una experiencia única con servicios excepcionales
				que harán de tu estancia algo inolvidable:
			</p>

			<div className='flex flex-wrap justify-center lg:justify-between gap-5 mt-2'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						{...service}
					/>
				))}
			</div>
			<p className='m-2 sm:m-10 md:text-lg text-center text-sm p-1 sm:p-5 lg:p-0'>
				Nuestro objetivo es hacer que te sientas no solo como un huésped, sino como parte de nuestra familia. Ven y vive una experiencia
				excepcional con nuestros servicios diseñados especialmente para ti.
				<br />
				¡Esperamos darte la bienvenida muy pronto! 😊
			</p>
		</section>
	)
}
