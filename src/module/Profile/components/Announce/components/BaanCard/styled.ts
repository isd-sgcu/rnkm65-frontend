import { styled } from 'config/stitches.config'

export const CardContainer = styled('div', {
  backgroundColor: '$purple400',
  border: '2px solid $blue',
  borderRadius: '1rem',
  minWidth: '300px',
})

export const CardTitle = styled('div', {
  backgroundColor: '$blue',
  borderTopLeftRadius: '0.75rem',
  borderTopRightRadius: '0.75rem',
  padding: '0.5rem',
})

export const CardBody = styled('div', {
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  rowGap: '1rem',
  alignItems: 'center',

  '@lg': {
    alignItems: 'start',
  },
})

export const CardImage = styled('div', {
  width: '140px',
  height: '170px',
  overflow: 'hidden',
  borderRadius: '1rem',

  '@sm': {
    width: '25vw',
    height: '30vw',
  },
})

export const CardContact = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const CardBodyHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  '@lg': {
    flexDirection: 'row',
    alignItems: 'start',
    gap: '1rem',
  },
})
