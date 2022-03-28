import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  '@md': {
    display: 'flex',
    gap: '20px',
  },
})

export const ImageContainer = styled('div', {
  height: '280px',
  width: '200px',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  marginBottom: '16px',
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
