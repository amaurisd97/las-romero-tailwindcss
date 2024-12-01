export default function () {
	return (
		<>
			<nav className='lg:w-4/5 m-auto hidden lg:flex md:justify-between  '>
				<a
					href='#about-us'
					className='p-4 rounded-xl m-4 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text uppercase'>
					<span className='font-extrabold'>LAS</span> ROMERO
				</a>
				<div className='mt-7'>
					<a
						href='#'
						className='p-3 rounded-xl m-4 text-slate-100 hover:underline hover:underline-offset-4'>
						Servicios
					</a>
					<a
						href='#about-us'
						className='p-3 rounded-xl m-4 text-slate-100 hover:underline hover:underline-offset-4'>
						Sobre nosotros
					</a>
					<a
						href='#'
						className='p-3 rounded-xl m-4 text-slate-100 hover:underline hover:underline-offset-4'>
						Un vistazo
					</a>
				</div>
				<a
					href='#'
					className='p-3 rounded-xl m-4 text-slate-100 hover:underline hover:underline-offset-4'>
					Contactenos
				</a>
			</nav>
		</>
	)
}
