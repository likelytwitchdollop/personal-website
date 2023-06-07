import { Header, ScrollToTop } from 'components'
import Cursor from 'components/Cursor'
import Footer from 'components/Footer'

import { ContactSection, HeroSection, WorkSection } from './components'

const HomePage = () => {
	return (
		<main className='max-w-6xl mx-auto relative'>
			<Cursor />

			<span className='flex flex-col items-center justify-center xl:hidden min-h-screen'>
				Coming soon.
			</span>

			<section className='hidden xl:block'>
				<Header />

				<HeroSection />

				<WorkSection />

				<ContactSection />

				<Footer />

				<ScrollToTop />
			</section>
		</main>
	)
}

export default HomePage
