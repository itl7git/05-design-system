import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4x' },
      '5xl': { fontSize: '$5x' },
      '6xl': { fontSize: '$6x' },
      '7xl': { fontSize: '$7x' },
      '8xl': { fontSize: '$8x' },
      '9xl': { fontSize: '$9x' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
