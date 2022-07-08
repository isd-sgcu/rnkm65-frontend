import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$new-gray',
  border: '2px solid $blue',
  borderRadius: '20px',
  textAlign: 'left',
  padding: '20px',
  flexGrow: 1,
  flexBasis: 0,
  display: 'flex',
  flexDirection: 'row',

  '@md': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const HourglassContainer = styled('div', {
  height: '200px',
  width: '150px',
  marginTop: '-20px',
  marginBottom: '-20px',
  position: 'relative',
  '@lg': {
    width: '250px',
  },
})

export const TextContainer = styled('div', {
  '@md': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
