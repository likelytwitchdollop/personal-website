/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import { Button, PageTitle, Tooltip } from 'components'
import Dot from 'components/Dot'
import { motion } from 'framer-motion'
import utils from 'utils'

const POINTS = [
	{ short: '👀 orientated', long: 'detail orientated' },
	{
		short: 'passionate about 💻🔨',
		long: 'passionate about software engineering',
	},
	{
		short: 'builds 👏🏾 digital products',
		long: 'builds engaging and impactful digital products',
	},
]

const ContactSection = () => {
	const [selectedPoint, setSelectedPoint] = useState(POINTS[0])

	return (
		<section id='contact' className='mb-[240px]'>
			<PageTitle>.contact</PageTitle>
			<p className='text-xl'>
				Currently looking for <b>new and exciting opportunities</b> to <br />
				build <Tooltip>👏🏾</Tooltip> things to release into the wild. If you're
				looking for an <br />
				experienced <Tooltip>multi-faceted</Tooltip> software engineering
				professional
				<br />
				who is:
			</p>

			<div className='mb-[200px]'>
				<motion.span
					key={selectedPoint.short}
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 100, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					className='block text-[64px] text-center my-[240px]'
				>
					{selectedPoint.short} <motion.span aria-hidden>|</motion.span>
				</motion.span>

				<div className='text-xl flex flex-row justify-between items-center'>
					{POINTS.map((point) => {
						const isSelected = point.short === selectedPoint.short

						return (
							<>
								<button
									type='button'
									onClick={() => {
										setSelectedPoint(point)
									}}
								>
									<span
										className={`${
											isSelected ? 'text-black' : 'text-primary-100'
										}`}
									>
										{point.long}
									</span>
								</button>
								<Dot />
							</>
						)
					})}
				</div>
			</div>

			<div className='flex flex-col items-center'>
				<p className='mb-12 text-xl'>Then let's have a chat 👋🏾</p>
				<Button title='Say Hello' size='lg' onClick={utils.emailMe} />
			</div>
		</section>
	)
}

export default ContactSection
