import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '20px',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 20px 20px 20px',
  alignItems: 'center',
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
  '@md': {
    flexDirection: 'column',
  },
})
