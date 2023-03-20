import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@gt-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    text: '21 de Outubro - Indisponível',
  },
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Button onClick={() => setIsOpen(!isOpen)}>
              Exibir
              {isOpen && Story()}
            </Button>
          </div>
        </div>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj = {}
