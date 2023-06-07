/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'

import { Button, Dot, PageTitle, Tooltip } from 'components'
import { motion } from 'framer-motion'
import utils from 'utils'

const POINTS = [
	{
		short: 'detail orientated',
		long: 'high code quality requires high quality standards',
		addon: 'aka: self-ware perfectionism',
	},
	{
		short: 'passionate about software engineering',
		long: 'code should read like well-written prose',
		addon: 'because going fast means going well',
	},
	{
		short: 'builds engaging and impactful digital products',
		long: 'what we build can shape the future',
		addon: 'we can make it a good one',
	},
]

const ContactSection = () => {
	const [selectedPoint, setSelectedPoint] = useState(POINTS[0])
	const [text, setText] = useState('')

	useEffect(() => {
		const timeout = setTimeout(() => {
			setText(selectedPoint.long.slice(0, text.length + 1))
		}, 100)

		return () => {
			return clearTimeout(timeout)
		}
	}, [text])

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
				<motion.div
					key={selectedPoint.short}
					className='text-center my-[240px]'
				>
					<span className='block text-[64px] text-center blinking-cursor mb-12'>
						{text}
					</span>

					<motion.span
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: {
								duration: 1,
								delay: selectedPoint.long.length * 0.115,
							},
						}}
						className='text-[24px]'
					>
						{selectedPoint.addon}
					</motion.span>
				</motion.div>

				<div className='text-xl flex flex-row justify-between items-center'>
					{POINTS.map((point) => {
						const isSelected = point.short === selectedPoint.short

						return (
							<>
								<button
									type='button'
									onClick={() => {
										setSelectedPoint(point)
										setText('')
									}}
								>
									<span
										className={`${
											isSelected ? 'text-black' : 'text-primary-100'
										}`}
									>
										{point.short}
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
