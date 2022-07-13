import { styled } from 'config/stitches.config'

export const Hidden = styled('div', {
  variants: {
    variant: {
      xlup: {
        display: 'none',
        '@lg': {
          display: 'block',
        },
      },
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
      lgdown: {
        '@lg': {
          display: 'none',
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
