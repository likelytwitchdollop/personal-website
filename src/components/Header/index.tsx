import Button from 'components/Button'
import { motion } from 'framer-motion'
import utils from 'utils'

const Header = () => {
	return (
		<header>
			<a
				className='full-width font-medium text-xs text-white text-center bg-black h-10 flex flex-col justify-center items-center'
				href='https://www.gethelga.com'
				target='_blank'
				rel='noreferrer'
			>
				<p>Launched helga: skincare made happy! See early progress.</p>
			</a>

			<div className='h-[100px] flex flex-row justify-between items-center max-w-6xl mx-auto mb-20'>
				<motion.a
					href='/'
					initial={{ scale: 100 }}
					animate={{
						scale: 1,
						transition: {
							duration: 1,
						},
					}}
					className='block relative w-12 aspect-square rounded-full bg-black
        after:bg-black-100 after:w-full after:h-full after:rounded-full after:z-[-1] after:absolute after:top-0 after:right-0 after:opacity-0 after:transition after:duration-300 after:ease-out hover:after:opacity-100 hover:after:scale-[1.5]
        '
				>
					<span className='sr-only'>Home</span>
				</motion.a>

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
						<li className='hover:font-bold transition duration-300 ease-in-out'>
							<a
								href='https://cynthiamahofa.vercel.app'
								target='_blank'
								rel='noreferrer'
							>
								.blog
							</a>
						</li>
					</ul>
				</nav>

				<Button title='Contact' onClick={utils.emailMe} />
			</div>
		</header>
	)
}

export default Header
