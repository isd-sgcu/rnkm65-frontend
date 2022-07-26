import { styled } from 'config/stitches.config'

export const MessageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  width: '100%',
  textAlign: 'center',
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: '#ECEDF2',
  borderRadius: '20px',
  gap: '8px',
  padding: '40px 20px',
  width: '100%',
  '@md': {
    fontSize: '12px',
    padding: '20px 30px',
  },
})
