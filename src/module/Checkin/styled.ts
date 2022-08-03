import { styled } from 'config/stitches.config'

export const CheckinContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  maxWidth: '500px',
  margin: '0 2rem',
  padding: '1rem',
  backgroundColor: '$white',
  boxShadow:
    '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
  borderRadius: '8px',
})
