import { Tooltip as RTooltip } from 'react-tooltip'

type TooltipProps = {
	id: string
	content: string
	children: React.ReactNode | React.ReactNode[]
}

const Tooltip = ({ id, content, children }: TooltipProps) => {
	return (
		<>
			<RTooltip
				id={id}
				className='bg-white text-black text-[16px] text-center z-[9999] opacity-100 shadow p-4 transition duration-500 ease-in-out will-change-auto w-[300px]'
			/>

			<span
				data-tooltip-id={id}
				data-tooltip-content={content}
				data-tooltip-place='top'
				className={`border-b-2 border-black pb-[2px] border-dashed 
        ${
					content
						? 'hover:text-primary-100 hover:border-b-primary-100 transition duration-300 ease-in-out'
						: ''
				}
        `}
			>
				{children}
			</span>
		</>
	)
}

export default Tooltip
