import { styled } from 'config/stitches.config'

export const BaanContainer = styled('div', {
  display: 'flex',
  flexGrow: 1,
  variants: {
    textPosition: {
      bottom: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '15px',
      },
    },
  },
  defaultVariants: { textPosition: 'bottom' },
})

export const StyledImage = styled('div', {
  position: 'relative',
  borderRadius: '8px',
  width: 'min(24vw, 120px)',
  height: 'min(24vw, 120px)',
  overflow: 'hidden',
})

export const ImageContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',
  padding: '3px',
  backgroundColor: '$new-secondary',
  marginBottom: '10px',
})

export const IndexContainer = styled('div', {
  borderRadius: '8px 0 8px 0',
  backgroundColor: '$new-secondary',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '33px',
  height: '33px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@sm': {
    width: '25px',
    height: '25px',
  },
})
