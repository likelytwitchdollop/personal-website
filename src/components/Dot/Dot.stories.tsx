import { Meta, StoryObj } from '@storybook/react'

import Dot from '.'

const meta: Meta<typeof Dot> = {
	title: 'Components/Dot',
	component: Dot,
}

export default meta
type Story = StoryObj<typeof Dot>

export const Default: Story = {}
