import { styled } from 'config/stitches.config'

export const StyledImage = styled('div', {
  position: 'relative',
  borderRadius: '8px',
  width: 'min(87vw, 304px)',
  height: 'min(87vw, 304px)',
  overflow: 'hidden',
  margin: '10px',
})
export const PaperStampContainer = styled('div', {
  position: 'relative',
  alignContent: 'center',
  justifyContent: 'center',
})
export const StampPieceContainer = styled('div', {
  width: '86%',
  height: '86%',
  position: 'absolute',
  top: '7.5%',
  left: '7%',
})
