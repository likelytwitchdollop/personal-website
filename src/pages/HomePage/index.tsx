import { useEffect, useState } from 'react'

import { Header } from 'components'
import Cursor from 'components/Cursor'
import Footer from 'components/Footer'
import { AnimatePresence, motion } from 'framer-motion'

import { ContactSection, HeroSection, WorkSection } from './components'

const HomePage = () => {
	const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const toggleScrollToTopButton = () => {}
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 500 && !showScrollToTopButton) {
				setShowScrollToTopButton(true)
			}

			if (window.scrollY < 500 && showScrollToTopButton) {
				setShowScrollToTopButton(false)
			}
		})

		return () => {
			window.removeEventListener('scroll', toggleScrollToTopButton)
		}
	})

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

				<AnimatePresence>
					{showScrollToTopButton && (
						<motion.button
							type='button'
							onClick={scrollToTop}
							className='fixed text-2xl bottom-8 right-16'
							initial={{ opacity: 0 }}
							animate={{ opacity: 100 }}
							exit={{ opacity: 0 }}
						>
							<span className='sr-only'>Scroll to top</span>👆🏾
						</motion.button>
					)}
				</AnimatePresence>
			</section>
		</main>
	)
}

export default HomePage
