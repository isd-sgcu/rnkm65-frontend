import { styled } from 'config/stitches.config'
import Div100vh from 'react-div-100vh'

export const LayoutContainer = styled(Div100vh, {
  backgroundColor: '$yellow',
  display: 'flex',
  flexDirection: 'column',
})

export const ContentContainer = styled('div', {
  flexGrow: 1,
})
