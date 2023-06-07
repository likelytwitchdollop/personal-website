import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

import { motion } from 'framer-motion'

type CursorProps = {
	// eslint-disable-next-line react/require-default-props
	color?: 'black'
}

const Cursor = ({ color = 'black' }: CursorProps, ref: React.Ref<unknown>) => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
	const [cursorVariant, setCursorVariant] = useState('default')

	useEffect(() => {
		const getMousePosition = (event: MouseEvent) => {
			setCursorPosition({
				x: event.clientX,
				y: event.clientY,
			})
		}

		window.addEventListener('mousemove', getMousePosition)

		return () => {
			window.removeEventListener('mousemove', getMousePosition)
		}
	})

	const variants = {
		default: {
			x: cursorPosition.x - 16,
			y: cursorPosition.y - 16,
		},
		mouseEnter: {
			x: cursorPosition.x - 16,
			y: cursorPosition.y - 16,
		},
	}

	const handleMouseEnter = () => {
		setCursorVariant('mouseEnter')
	}

	const handleMouseLeave = () => {
		setCursorVariant('default')
	}

	useImperativeHandle(ref, () => {
		return {
			handleMouseEnter,
			handleMouseLeave,
		}
	})

	return (
		<motion.div
			variants={variants}
			animate={cursorVariant}
			className={`
      ${color === 'black' ? 'bg-black' : ''}
      w-8 aspect-square rounded-full fixed top-0 left-0 pointer-events-none z-[9999]`}
		/>
	)
}

export default forwardRef(Cursor)
