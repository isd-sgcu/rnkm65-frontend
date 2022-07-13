import { styled } from 'config/stitches.config'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '10px 40px',
  '@lg': {
    gap: '8px',
  },
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

export const IconContainer = styled('div', {
  display: 'flex',
  gap: '8px',
})
