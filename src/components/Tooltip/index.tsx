type TooltipProps = {
	children: React.ReactNode | React.ReactNode[]
}

const Tooltip = ({ children }: TooltipProps) => {
	return (
		<span className='border-b-2 border-black pb-[2px] border-dashed hover:text-primary-100 hover:cursor-pointer hover:border-b-primary-100 transition duration-300 ease-in-out'>
			{children}
		</span>
	)
}

export default Tooltip
