import { styled } from 'config/stitches.config'
import { IoMenuSharp } from 'react-icons/io5'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '10px 40px',
  '@md': {
    padding: '10px 30px',
  },
  '@sm': {
    padding: '10px 24px',
  },
})

export const LogoContainer = styled('div', {
  flexGrow: 1,
})

export const Logo = styled('div', {
  height: '86px',
  width: '135px',
  position: 'relative',
  '@md': {
    height: '72px',
    width: '112px',
  },
  '@sm': {
    height: '48px',
    width: '75px',
  },
})

export const Menu = styled(IoMenuSharp, {
  color: '$blue',
  fontSize: '2rem',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
})
