import { colors } from '@gt-ignite-ui/tokens'
import { X } from 'phosphor-react'
import { ComponentProps, ElementType } from 'react'
import { Heading } from '../Heading'
import { Container, TextContent } from './styles'

export interface ToastProps extends ComponentProps<typeof Container> {
  as?: ElementType
  title: string
  body: string
  isOpen: boolean
  setIsOpen: (status: boolean) => void
}

export function Toast({ title, body, isOpen, setIsOpen }: ToastProps) {
  return (
    <Container visible={isOpen}>
      <div>
        <Heading size="sm">{title}</Heading>

        <button onClick={() => setIsOpen(false)}>
          <X size={20} color={colors.gray100} />
        </button>
      </div>
      <TextContent>{body}</TextContent>
    </Container>
  )
}

Toast.displayName = 'Toast'
