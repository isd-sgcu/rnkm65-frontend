import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '20px',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 20px 20px 20px',

  '@md': {
    flexDirection: 'column',
  },
  '@xs': {
    margin: '0 10px 10px 10px',
  },
})

export const GroupContainer = styled('div', {
  display: 'flex',
  marginTop: '20px',
  gap: '20px',
  '@xl': {
    gap: 0,
    flexDirection: 'column-reverse ',
  },
})

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
