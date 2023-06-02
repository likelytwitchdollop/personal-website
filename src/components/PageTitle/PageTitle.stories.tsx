import { Meta, StoryObj } from '@storybook/react'

import PageTitlte from '.'

const meta: Meta<typeof PageTitlte> = {
	title: 'Components/PageTitlte',
	component: PageTitlte,
	args: {
		children: '.work',
	},
}

export default meta
type Story = StoryObj<typeof PageTitlte>

export const Default: Story = {}
