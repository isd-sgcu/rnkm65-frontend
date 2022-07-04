import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  backgroundColor: '$new-primary',
  border: 'solid 2px $blue',
  borderRadius: '11px',
  padding: '30px 25px',
  display: 'flex',
  gap: '30px',
  width: '100%',
  '@md': {
    flexDirection: 'column',
    gap: '10px',
    padding: '15px 20px',
  },
  '@sm': {
    padding: '10px 15px',
    borderRadius: '6px',
  },
})

export const Tooltip = styled(Typography, {
  position: 'absolute',
  zIndex: 100,
  padding: '3px 10px 3px 10px',
  bottom: 'calc(100% + 7px)',
  left: '50%',
  borderRadius: '2px',
  transform: 'translate(-50%, 0)',
  backgroundColor: '$blue',
  cursor: 'default',
  color: '$white',
  display: 'none',
  '&::after': {
    content: ' ',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '$blue transparent transparent transparent',
  },
})

export const LinkContainer = styled('div', {
  backgroundColor: '$white',
  border: 'solid 2px $new-primary',
  borderRadius: '36px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  padding: '5px 25px',

  '&:hover': {
    [`& ${Tooltip}`]: {
      display: 'block',
    },
  },

  '@sm': {
    borderRadius: '6px',
  },
})

export const CopyIcon = styled('div', {
  color: '$white',
  backgroundColor: '$new-secondary',
  height: '36px',
  width: '36px',
  borderRadius: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.1rem',
  paddingLeft: '1.5px',
  flexShrink: 0,
  marginLeft: '5px',

  '@sm': {
    height: '25px',
    width: '25px',
    padding: '0 4px 0 5px',
  },
})
