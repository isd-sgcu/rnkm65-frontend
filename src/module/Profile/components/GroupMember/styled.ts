import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$new-gray',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '20px',
  flexBasis: 0,
  flexGrow: 1,
  '@md': {
    padding: '15px 10px',
    borderRadius: '10px',
  },
})

export const MembersContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  marginTop: '20px',
  justifyContent: 'center',
  '@sm': { gap: '10px' },
})

export const ImageContainer = styled('div', {
  height: 'min(35vw, 160px)',
  width: 'min(25vw, 120px)',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '2px 2px 2px 0px #24066840',
  marginBottom: '8px',
})
