import { css, styled } from 'config/stitches.config'

export const CardContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
})

export const DescriptionContainer = styled('div', {
  position: 'absolute',
  top: 0,
  zIndex: 90,
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '8px',
  border: '2px solid $blue',
  width: '350px',

  transition: 'transform 300ms ease-in-out',
  '@md': {
    display: 'none',
  },

  variants: {
    pos: {
      left: {
        left: 0,
        transformOrigin: 'top left',
      },
      right: {
        right: 0,
        transformOrigin: 'top right',
      },
    },
    open: {
      true: {
        transform: 'scale(1)',
      },
      false: {
        transform: 'scale(0)',
      },
    },
  },

  defaultVariants: {
    pos: 'left',
    open: 'true',
  },
})

export const ImageDescription = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const SocialDescription = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
  gap: '0.5rem',
})

export const StyledImage = styled('div', {
  minWidth: '90px',
  maxWidth: '90px',
  height: '90px',
  padding: '2px',
  border: '$pink500 1px solid',
  backgroundColor: '$pink500',
  borderRadius: '4px',
})

export const RoundedImage = css({
  borderRadius: '4px',
})
