import { styled } from 'config/stitches.config'

export const CardContainer = styled('div', {
  backgroundColor: '$purple400',
  border: '2px solid $blue',
  borderRadius: '1rem',
  minWidth: '300px',
})

export const CardTitle = styled('div', {
  backgroundColor: '$blue',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
  padding: '0.5rem',
})

export const CardBodyContainer = styled('div', {
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1rem',
})

export const CardImageContainer = styled('div', {
  width: '140px',
  height: '170px',
  overflow: 'hidden',
  borderRadius: '1rem',
})

export const CardContactContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})
