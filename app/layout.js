import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata = {
	title: 'Las Romero',
	description:
		'Welcome to Las Romero, your premier destination for high-quality services. Discover our strategic location, immediate and efficient service, and comfortable, air-conditioned rooms.',
	keywords:
		'Las Romero, accommodation, services, strategic location, efficient service, comfortable rooms, tour guide, classic car tours, beverages and food',
	author: 'Amauris David González Suárez',
	openGraph: {
		title: 'Las Romero',
		description:
			'Welcome to Las Romero, your premier destination for high-quality services. Discover our strategic location, immediate and efficient service, and comfortable, air-conditioned rooms.',
		images: [
			{
				url: 'grid/1.png',
				width: 800,
				height: 600,
				alt: 'Las Romero Header Image',
			},
		],
		url: 'https://las-romero.vercel.app/',
		type: 'website',
		siteName: 'Las Romero',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			snippet: true,
		},
	},
}

export const viewport = {
	themeColor: '#000000',
}

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-black to-slate-950 min-h-screen`}>
				<main role='main'>{children}</main>
			</body>
		</html>
	)
}
