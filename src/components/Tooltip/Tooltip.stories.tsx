import { Meta, StoryObj } from '@storybook/react'

import Tooltip from '.'

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	args: {
		children: 'Tooltip',
	},
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
