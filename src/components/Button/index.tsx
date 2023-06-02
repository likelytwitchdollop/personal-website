type ButtonProps = {
	title: string
	onClick: () => void
	// eslint-disable-next-line react/require-default-props
	size?: 'sm' | 'lg'
}

const Button = ({ title, onClick, size = 'sm' }: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`font-mono font-bold bg-black rounded text-white leading-none
      ${size === 'sm' ? 'h-10 px-6' : ''}
      ${size === 'lg' ? 'h-14 px-14' : ''}
      hover:px-10
      transtion duration-300 ease-in-out
      `}
		>
			{title}
		</button>
	)
}

export default Button
