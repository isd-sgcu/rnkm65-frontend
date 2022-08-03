import { styled } from 'config/stitches.config'

const stampPieceSize = 'calc(calc(100% - 10px) / 3)'
export const StyledImage = styled('div', {
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'absolute',
  width: stampPieceSize,
  height: stampPieceSize,
  transform: 'translate(-50%, -50%)',
  margin: '0px',
})
