import { ComponentProps, ElementType } from 'react'
import { AvatarFallback, AvatarContainer, AvatarImage } from './styles'
import { User } from '@phosphor-icons/react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  as?: ElementType
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
