import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  padding: '2rem',
  gap: '1rem',
  display: 'flex',

  '@md': {
    flexDirection: 'column',
  },
})

export const CatalogContainer = styled('div', {
  backgroundColor: '$purple400',
  padding: '1.5rem',
  border: '2px solid $blue',
  borderRadius: '1rem',
})

export const CardContainer = styled('div', {
  display: 'grid',
  paddingTop: '1rem',
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(5, 1fr)',
  justifContent: 'space-evenly',
  '@xl': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@sm': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@xs': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})
