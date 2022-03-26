import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$purple400',
  border: '2px solid $blue',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '20px',
  flexGrow: 1,
  flexBasis: 0,
})

export const HousesContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  marginTop: '20px',
  justifyContent: 'center',
})
