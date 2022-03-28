import { styled } from 'config/stitches.config'

export const Hidden = styled('div', {
  variants: {
    variant: {
      lgup: {
        display: 'none',
        '@md': {
          display: 'block',
        },
      },
      mddown: {
        '@md': {
          display: 'none',
        },
      },
    },
  },
})
