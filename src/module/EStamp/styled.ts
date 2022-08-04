import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0rem 2rem 5rem 2rem',
  '@lg': {
    paddingBottom: '2.5rem',
  },
})

export const StampContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 1rem',
})
export const PinContainer = styled('div', {
  width: 'min(90vw, 419px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginBottom: '80px',
})
export const PinCardContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
})
