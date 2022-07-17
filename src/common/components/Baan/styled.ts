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

export const InformationContainer = styled('div', {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: 7,
  right: 7,
  zIndex: 1,
  backgroundColor: '$new-primary',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  display: 'none',
  cursor: 'pointer',

  variants: {
    show: {
      true: {
        '@md': {
          display: 'flex',
        },
      },
      false: {},
    },
  },

  defaultVariants: {
    show: false,
  },
})
