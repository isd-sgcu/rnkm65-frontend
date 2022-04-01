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
  display: 'flex',
  position: 'relative',

  flexWrap: 'wrap',
  paddingTop: '1rem',
  justifyContent: 'space-around',
})
