import { Button, Toast } from '@gt-ignite-ui/react'
import { useState } from 'react'

type Props = {
  title: string
  body: string
}

export function ToastContent({ title, body }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Button onClick={() => setIsOpen(true)}>Agendar</Button>

      <Toast title={title} body={body} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
