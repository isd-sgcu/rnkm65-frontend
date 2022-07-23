import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 2rem',
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
})
export const PinCardContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
})
