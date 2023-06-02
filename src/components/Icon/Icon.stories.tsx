import { Meta, StoryObj } from '@storybook/react'

import Icon from '.'

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	args: {
		name: 'github',
	},
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {}
