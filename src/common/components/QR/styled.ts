import { styled } from 'config/stitches.config'

export const QRcontainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
})

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
    position : 'relative',
    
})

//button to go back to previous page
export const BackButton = styled('button', {
    position : 'absolute',
    right : '15px',
    top : '15px',
    width : '30px',
    height : '30px',
    backgroundColor : '$white',
    borderRadius: '0.5rem',
    border : 'none',
    outline : 'none',
    cursor : 'pointer',
    zIndex : '51',
    filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
})

//button to go back to come to QR page
export const CameraButton = styled('button', {
    position : 'absolute',
    bottom : '0',
    right : '0',
    width : '100%',
    height : '100%',
    backgroundColor : '$white',
    border : 'none',
    outline : 'none',
    cursor : 'pointer',
    zIndex : '1',
})