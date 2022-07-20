import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
})

export const ContentContainer = styled('div', {
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$white',
  padding: '1rem',
  gap: '1.25rem',
  borderRadius: '15px',
  boxShadow:
    '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
})
