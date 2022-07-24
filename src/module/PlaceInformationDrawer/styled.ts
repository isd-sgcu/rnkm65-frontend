import { styled } from '@stitches/react'

export const Box = styled('div', {
  position: 'relative',
  borderRadius: '30px',
  boxShadow: '0px -1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  Width: '100vw',
  maxWidth: '420px',
  height: 'auto',
  fontFamily: '$FCSubjectRounded',
  fontWeight: '400',
  background: '#FAFAFA',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1.25rem',
  paddingTop: '1.25rem',
  paddingBottom: '1.25rem',
  marginTop: '4vh',
})

export const TextBox = styled('div', {
  marginLeft: '40px',
  marginRight: '40px',
  maxHeight: '30vh',
  overflow: 'auto',
  width: 'fit-content',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#F3F4F6',
    borderRadius: '20px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#D1D5DB',
    borderRadius: '20px',
  },
})

export const CheckInButton = styled('button', {
  width: '300px',
  height: '45px',
  borderRadius: '6px',
})

export const ImageContainer = styled('div', {
  position: 'absolute',
  right: '20px',
})
