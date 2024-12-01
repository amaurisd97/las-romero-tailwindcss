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
	description: 'Las Romero, un lugar para que te sientas como en casa',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-black to-slate-950 min-h-screen`}>
				{children}
			</body>
		</html>
	)
}
