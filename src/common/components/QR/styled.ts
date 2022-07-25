import { styled } from 'config/stitches.config'

export const Camera = styled('div', {
    width : '100%',
    height : '100%',
    display : 'flex',
    alignItems : 'center',
    flexDirection : 'column',
    position : 'relative',
    overflow : 'hidden',
})

export const CameraContainer = styled('div', {
    width : '100%',
    maxWidth : '65ch',
    height : '100%',
    display : 'flex',
    alignItems : 'center',
    backgroundColor : '$white',
    position : 'relative',
    
})
