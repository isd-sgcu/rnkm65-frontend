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
      mdup: {
        display: 'none',
        '@sm': {
          display: 'block',
        },
      },
      smup: {
        display: 'none',
        '@xs': {
          display: 'block',
        },
      },

      mddown: {
        '@md': {
          display: 'none',
        },
      },
      smdown: {
        '@sm': {
          display: 'none',
        },
      },
      xsdown: {
        '@xs': {
          display: 'none',
        },
      },
    },
  },
})
