import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@itl-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/itl7git.png',
    alt: 'Italo Leal',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WidthFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
