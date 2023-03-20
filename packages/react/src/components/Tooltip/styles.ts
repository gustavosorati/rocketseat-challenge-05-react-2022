import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '5px',
  color: '$gray100',
  padding: '12px 16px',

  width: 'max-content',
  position: 'absolute',
  bottom: '95%',
  left: '50%',
  transform: 'translateX(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0px 5px 10px rgba(0,0,0,.25)',

  '&:after': {
    content: '',
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'inherit',

    borderTopLeftRadius: 999,
    rotate: '45deg',
  },
})

export const TextContent = styled(Text, {
  color: '$gray200',
})
