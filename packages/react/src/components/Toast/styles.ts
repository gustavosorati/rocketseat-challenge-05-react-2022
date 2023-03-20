import { keyframes, styled } from '../../styles'
import { Text } from '../Text'

const slideIn = keyframes({
  '0%': {
    right: '-360px',
    opacity: 0,
    visibility: 'hidden',
  },
  '100%': { translateX: '100%', opacity: 1, visibility: 'visible' },
})

const slideOut = keyframes({
  '0%': { translateX: '100%', opacity: 1, visibility: 'visible' },
  '100%': {
    right: '-360px',
    opacity: 0,
    visibility: 'hidden',
  },
})

export const Container = styled('div', {
  backgroundColor: '$gray900',
  border: '1px solid $gray600',
  borderRadius: '5px',
  padding: '12px 20px',
  width: 'fit-content',
  minWidth: '360px',
  position: 'absolute',
  right: '0',
  bottom: '20px',
  opacity: 0,
  visibility: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  button: {
    all: 'unset',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },

  variants: {
    visible: {
      true: {
        animation: `${slideIn} 200ms forwards`,
      },
      false: {
        animation: `${slideOut} 200ms forwards`,
      },
    },
  },
})

export const TextContent = styled(Text, {
  color: '$gray200',
})
