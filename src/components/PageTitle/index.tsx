type PageTitleProps = {
	children: React.ReactNode | React.ReactNode[]
}

const PageTitle = ({ children }: PageTitleProps) => {
	return (
		<h2 className='font-mono font-bold text-5xl text-right mb-20'>
			{children}
		</h2>
	)
}

export default PageTitle
