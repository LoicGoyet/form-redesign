import type { Meta, StoryObj } from '@storybook/react'
import { Input, types } from './index'

const meta = {
  title: 'Design System/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: types,
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '',
  },
}
