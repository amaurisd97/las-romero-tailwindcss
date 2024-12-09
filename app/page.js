import Head from 'next/head'
import Header from '@/components/header-test'
import NavBar from '@/components/nav-bar'
import ShowUp from '@/components/show-up'
import AboutUs from '@/components/about-us'
import Services from '@/components/services'

export default function Home() {
	return (
		<>
			<Head>
				<title>Las Romero - Home</title>
				<meta
					name='description'
					content='Welcome to Las Romero, your premier destination for high-quality services. Discover our strategic location, immediate and efficient service, and comfortable, air-conditioned rooms.'
				/>
				<meta
					name='keywords'
					content='Las Romero, accommodation, services, strategic location, efficient service, comfortable rooms, tour guide, classic car tours, beverages and food'
				/>
				<meta
					name='author'
					content='Your Name or Company'
				/>
				<meta
					property='og:title'
					content='Las Romero - Home'
				/>
				<meta
					property='og:description'
					content='Welcome to Las Romero, your premier destination for high-quality services. Discover our strategic location, immediate and efficient service, and comfortable, air-conditioned rooms.'
				/>
				<meta
					property='og:image'
					content='/public/header-bg.png'
				/>
				<meta
					property='og:url'
					content='https://yourdomain.com'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:site_name'
					content='Las Romero'
				/>
				<script type='application/ld+json'>
					{`
						{
							"@context": "https://schema.org",
							"@type": "WebSite",
							"url": "https://yourdomain.com",
							"name": "Las Romero",
							"description": "Welcome to Las Romero, your premier destination for high-quality services. Discover our strategic location, immediate and efficient service, and comfortable, air-conditioned rooms.",
							"potentialAction": {
								"@type": "SearchAction",
								"target": "https://yourdomain.com/search?q={search_term_string}",
								"query-input": "required name=search_term_string"
							}
						}
					`}
				</script>
			</Head>
			<>
				<NavBar />
				<Header />
				<ShowUp />
				<AboutUs />
				<Services />
			</>
		</>
	)
}
