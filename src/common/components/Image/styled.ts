import { css, keyframes } from 'config/stitches.config'

const ImageSkeleton = keyframes({
  '0%': {
    backgroundColor: '#A6A6A6',
  },
  '50%': {
    backgroundColor: '#cbccd1',
  },
  '100%': {
    backgroundColor: '#A6A6A6',
  },
})

export const LoadingImage = css({
  variants: {
    loading: {
      true: {
        animation: `${ImageSkeleton} 1s ease-in-out infinite`,
      },
      false: {},
    },
  },

  defaultVariants: {
    loading: 'true',
  },
})
