import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  padding: '2rem',
  gap: '1rem',
  display: 'flex',
  maxWidth: '1200px',

  '@md': {
    flexDirection: 'column',
  },
})

export const ChoosenContainer = styled('div', {
  position: 'sticky',
  top: 0,
  minWidth: '300px',

  '@md': {
    minWidth: 'unset',
  },
})

export const CatalogContainer = styled('div', {
  backgroundColor: '$new-gray',
  padding: '1.5rem',
  borderRadius: '1rem',
})

export const CardContainer = styled('div', {
  display: 'grid',
  paddingTop: '1rem',
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(5, 1fr)',
  justifyContent: 'space-evenly',
  '@xl': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@sm': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@xs': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})
