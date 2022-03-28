import { css } from 'config/stitches.config'

export const modalStyle = css({
  width: '100%',
  maxWidth: '700px',
  paddingLeft: '4rem !important',
  paddingRight: '4rem !important',

  '@sm': {
    paddingLeft: '2rem !important',
    paddingRight: '2rem !important',
  },
})
