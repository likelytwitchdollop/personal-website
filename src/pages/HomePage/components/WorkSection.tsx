import { useState } from 'react'

import { PageTitle } from 'components'
import Dot from 'components/Dot'
import Icon from 'components/Icon'
import utils from 'utils'

const WorkSection = () => {
	const [selectedProject, setSelectedProject] = useState(utils.PROJECTS[0])

	return (
		<article id='work' className='my-[120px]'>
			<PageTitle>.work</PageTitle>
			<h3 className='font-mono text-xl text-primary-100 mb-1'>
				Featured Projects
			</h3>
			<h4 className='font-bold text-4xl mb-20'>{selectedProject.name}</h4>

			<div className='flex flex-row justify-between gap-x-10 mb-10'>
				<picture>
					<img
						src={selectedProject.images.desktop}
						alt={selectedProject.name}
						className='rounded'
					/>
				</picture>

				<section className='w-1/3 flex flex-col space-y-8'>
					<p className='line-clamp-3 p-4 border-2 border-black border-dashed rounded'>
						{selectedProject.description}
					</p>

					<div className='self-end'>
						<h5 className='font-bold text-xl text-right mb-2'>Technologies</h5>
						<div className='flex flex-row items-center space-x-4'>
							{selectedProject.technologies.map((technology, index) => {
								const isEnd = selectedProject.technologies.length - 1 === index

								return (
									<>
										<span>{technology}</span>
										{!isEnd && <Dot />}
									</>
								)
							})}
						</div>
					</div>

					<div className='flex flex-row space-x-4 self-end'>
						<a
							href={selectedProject.links.github}
							target='_blank'
							rel='noreferrer'
						>
							<span aria-hidden>
								<Icon name='github' animation='shake' />
							</span>
							<span className='sr-only'>View projet on GitHub</span>
						</a>
						<a
							href={selectedProject.links.liveDemo}
							target='_blank'
							rel='noreferrer'
						>
							<span aria-hidden>
								<Icon name='globe' animation='shake' />
							</span>
							<span className='sr-only'>Go to live demo</span>
						</a>
					</div>
				</section>
			</div>

			<div className='flex flex-row space-x-5' role='tablist'>
				{utils.PROJECTS.map((project) => {
					const isSelected = selectedProject.name === project.name

					return (
						<button
							type='button'
							role='tab'
							onClick={() => {
								setSelectedProject(project)
							}}
							className={`w-5 aspect-square rounded-full hover:cursor-pointer
                ${
									isSelected
										? 'bg-white opacity-100 shadow'
										: 'bg-black opacity-10'
								}
                hover:opacity-25
                transition duration-300 ease-in-out
                `}
						>
							<span className='sr-only'>{project.name}</span>
						</button>
					)
				})}
			</div>
		</article>
	)
}

export default WorkSection
