import Button from 'components/Button'
import { motion } from 'framer-motion'
import utils from 'utils'

const Header = () => {
	return (
		<header className='h-[100px] flex flex-row justify-between items-center max-w-6xl mx-auto mb-20'>
			<motion.div
				initial={{ scale: 100 }}
				animate={{
					scale: 1,
					transition: {
						duration: 1,
					},
				}}
				className='w-12 aspect-square rounded-full bg-black z-[9999]'
			/>

			<nav>
				<ul className='font-mono font-medium flex flex-row space-x-14'>
					<li className='hover:font-bold transition duration-300 ease-in-out'>
						<a
							href='/'
							onClick={(event) => {
								event?.preventDefault()
							}}
						>
							.about
						</a>
					</li>
					<li className='hover:font-bold transition duration-300 ease-in-out'>
						<a
							href='https://www.linkedin.com/in/cynthia-mahofa/'
							target='_blank'
							rel='noreferrer'
						>
							.experience
						</a>
					</li>
					<li className='hover:font-bold transition duration-300 ease-in-out'>
						<a href='#work'>.work</a>
					</li>
					<li className='hover:font-bold transition duration-300 ease-in-out'>
						<a href='#contact'>.contact</a>
					</li>
					<li className='text-primary-100'>
						<a
							href='/'
							onClick={(event) => {
								event?.preventDefault()
							}}
						>
							.blog
						</a>
					</li>
				</ul>
			</nav>

			<Button title='Contact' onClick={utils.emailMe} />
		</header>
	)
}

export default Header
