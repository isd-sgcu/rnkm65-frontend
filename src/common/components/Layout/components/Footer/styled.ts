import { styled } from 'config/stitches.config'

export const FooterContainer = styled('div', {
  backgroundColor: '$new-footer',
  color: '$white',
  textAlign: 'center',
  padding: '7px',
  gap: '7px',
})

export const LogoContainer = styled('div', {
  margin: 'auto',
  height: '45px',
  width: '25px',
  position: 'relative',
})

export const SponserLogoContainer = styled('div', {
  display: 'flex',
  width: 'fit-content',
  margin: '10px auto',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '8px',
})

export const SponserLogo = styled('div', {
  position: 'relative',
  margin: 'auto 0',
})
