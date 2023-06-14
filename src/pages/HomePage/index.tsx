import { Cursor, Footer, Header, ScrollToTop } from 'components'

import { ContactSection, HeroSection, WorkSection } from './components'

const HomePage = () => {
	return (
		<div className='max-w-6xl mx-auto relative'>
			<Cursor />
			<ScrollToTop />

			<Header />

			<main>
				<span className='flex flex-col items-center justify-center xl:hidden min-h-screen'>
					Coming soon.
				</span>

				<section className='hidden xl:block'>
					<HeroSection />

					<WorkSection />

					<ContactSection />
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default HomePage
