import { ComponentProps, ElementType } from 'react'
import { Container, TextContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof Container> {
  as?: ElementType
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <Container>
      <TextContent>{text}</TextContent>
    </Container>
  )
}

Tooltip.displayName = 'Tooltip'
