import Header from '@/components/header-test'
import NavBar from '@/components/nav-bar'
import ShowUp from '@/components/show-up'
import AboutUs from '@/components/about-us'
import Services from '@/components/services'

export default function Home() {
	return (
		<>
			<NavBar />
			<main role='main'>
				<Header />
				<ShowUp />
				<AboutUs />
				<Services />
			</main>
		</>
	)
}
