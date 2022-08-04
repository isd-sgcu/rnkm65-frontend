import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
  '@md': {
    flexDirection: 'row',
  },
  variants: {
    variant: {
      normal: {
        flexDirection: 'column',
      },
      eStamp: {
        flexDirection: 'row',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  height: '280px',
  width: '200px',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  '@sm': {
    height: '55vw',
    width: '40vw',
  },
})

export const EditProfileButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  color: '$blue',
  fontSize: '1.25rem',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  marginTop: '8px',
})
