import { Button, Tooltip } from 'components'
import Icon from 'components/Icon'
import { motion } from 'framer-motion'
import utils from 'utils'

const HeroSection = () => {
	return (
		<section className='flex flex-col relative'>
			<div className='self-end mb-[120px]'>
				<h1 className='font-bold text-[96px] text-right leading-none'>
					<motion.span
						initial={{ opacity: 0, x: 100 }}
						animate={{
							opacity: 100,
							x: 0,
							transition: { delay: 1.2, duration: 0.5 },
						}}
						className='block mr-[288px]'
					>
						Cynthia
					</motion.span>
					<motion.span
						initial={{ opacity: 0, x: -100 }}
						animate={{
							opacity: 100,
							x: 0,
							transition: { delay: 1.2, duration: 0.5 },
						}}
						className='block'
					>
						Mahofa.
					</motion.span>
				</h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{
						opacity: 100,
						y: 0,
						transition: { delay: 1.7, duration: 0.5 },
					}}
					className='text-[26px] text-primary-100 text-right tracking-[0.2px]'
				>
					Building{' '}
					<Tooltip id='hands-clapping' content=''>
						👏🏾
					</Tooltip>{' '}
					things for the web
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{
					opacity: 100,
					y: 0,
					transition: {
						delay: 2.5,
						duration: 0.5,
					},
				}}
				className='flex flex-col items-center'
			>
				<p className='text-center text-lg mb-[64px]'>
					A Full-Stack (Javascript/TypeScript) Engineer
					<br />
					focused on building{' '}
					<Tooltip id='exceptional' content=''>
						exceptional
					</Tooltip>
					<br />
					digital products.
				</p>

				<Button title='Get In Touch' size='lg' onClick={utils.emailMe} />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{
					opacity: 100,
					y: 0,
					transition: {
						delay: 2.5,
						duration: 0.5,
					},
				}}
				className='absolute bottom-0 space-y-4 flex flex-col items-center'
			>
				<div className='space-y-2'>
					<motion.a
						initial={{ opacity: 0, y: '-100vw' }}
						animate={{
							opacity: 100,
							y: 0,
							transition: {
								delay: 4.5,
								duration: 0.5,
							},
						}}
						href='https://github.com/likelytwitchdollop'
						target='_blank'
						rel='noreferrer'
						className='block'
					>
						<span aria-hidden>
							<Icon name='github' size='lg' animation='shake' />
						</span>
						<span className='sr-only'>View projet on GitHub</span>
					</motion.a>

					<motion.a
						initial={{ opacity: 0, y: '-100vw' }}
						animate={{
							opacity: 100,
							y: 0,
							transition: {
								delay: 4,
								duration: 0.5,
							},
						}}
						href='https://www.linkedin.com/in/cynthia-mahofa/'
						target='_blank'
						rel='noreferrer'
						className='block'
					>
						<span aria-hidden>
							<Icon name='linkedin' size='lg' animation='shake' />
						</span>
						<span className='sr-only'>View projet on GitHub</span>
					</motion.a>
				</div>

				<div aria-hidden className='bg-black w-1 h-48' />
			</motion.div>
		</section>
	)
}

export default HeroSection
