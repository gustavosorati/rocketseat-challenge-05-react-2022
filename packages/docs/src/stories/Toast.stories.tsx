import type { Meta, StoryObj } from '@storybook/react'
import { ToastProps } from '@gt-ignite-ui/react'
import { ToastContent } from '../components/ToastContent'

export default {
  title: 'Data display/Toast',
  component: ToastContent,

  args: {
    title: 'Agendamento realizado',
    body: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj = {}
