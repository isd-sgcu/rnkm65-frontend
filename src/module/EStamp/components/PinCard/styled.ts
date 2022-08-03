import { styled } from 'config/stitches.config'

export const Card = styled('div', {
  width: '100%',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  overflow: 'hidden',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  border: '1px solid $new-border-gray',
  borderRadius: '6px',
  backgroundColor: '$white',
})

export const StyledImage = styled('div', {
  position: 'relative',
  height: '100%',
  aspectRatio: '1',
})
