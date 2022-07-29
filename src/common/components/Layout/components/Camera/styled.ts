import { styled } from 'config/stitches.config'

export const CameraButton = styled('button', {
    position : 'absolute',
    bottom : '0',
    width : '100px',
    height : '100px',
    border : '$white',
    borderRadius : '50%',
    backgroundColor : '$white',
    cursor : 'pointer',
    zIndex : '2',
    left : '50%',
    transform: 'translate(-50%, 0)',
})

export const WhiteBar = styled('div', {
    position : 'relative',
    bottom : '0',
    height : '70px',
    backgroundColor : '$white',
    zIndex : '2',
})

export const ButtonContainer = styled('div', {
    position : 'absolute',
    bottom : '0',
    width : '100%',
})