'use client'
import { useState } from 'react'

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='w-full  text-slate-100'>
			<div className='lg:w-4/5 m-auto flex justify-between items-center p-4'>
				<a
					href='#about-us'
					className='p-4 rounded-xl m-4 bg-gradient-to-r from-white to-slate-500 text-transparent bg-clip-text uppercase'>
					<span className='font-extrabold'>LAS</span> ROMERO
				</a>
				<div className='lg:hidden'>
					<button
						onClick={toggleMenu}
						className='p-2 rounded-xl text-slate-100 focus:outline-none'>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
					</button>
				</div>
				<div className='hidden lg:flex mt-7'>
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
					<a
						href='#'
						className='p-3 rounded-xl m-4 text-slate-100 hover:underline hover:underline-offset-4'>
						Contactenos
					</a>
				</div>
			</div>
			{isMenuOpen && (
				<div className='lg:hidden absolute -mt-10 rounded-xl bg-slate-950 right-4 gap-1 text-center border border-solid border-slate-500 z-10'>
					<a
						href='#'
						className='block p-3 rounded-xl  text-slate-100 hover:underline hover:underline-offset-4'>
						Servicios
					</a>
					<a
						href='#about-us'
						className='block p-3 rounded-xl  text-slate-100 hover:underline hover:underline-offset-4'>
						Conócenos
					</a>
					<a
						href='#'
						className='block p-3 rounded-xl  text-slate-100 hover:underline hover:underline-offset-4'>
						Un vistazo
					</a>
					<a
						href='#'
						className='block p-3 rounded-xl  text-slate-100 hover:underline hover:underline-offset-4'>
						Contactenos
					</a>
				</div>
			)}
		</nav>
	)
}
