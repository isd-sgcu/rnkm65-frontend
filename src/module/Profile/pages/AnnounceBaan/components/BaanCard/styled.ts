import { styled } from 'config/stitches.config'

export const CardContainer = styled('div', {
  backgroundColor: '$new-gray',
  border: '2px solid $blue',
  borderRadius: '1rem',
  minWidth: '300px',
  maxWidth: '300px',

  '@lg': {
    maxWidth: 'none',
  },
})

export const CardTitle = styled('div', {
  backgroundColor: '$new-primary',
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
  minWidth: '180px',
  maxWidth: '180px',
  height: 'auto',
  overflow: 'hidden',
  borderRadius: '1rem',

  '@lg': {
    minWidth: '120px',
    maxWidth: '120px',
  },

  '@sm': {
    width: '60vw',
    minWidth: 'auto',
    maxWidth: 'auto',
    height: 'auto',
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
