import { styled } from 'config/stitches.config'

export const JoinBaanContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '0.5rem',
})

export const ActionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingLeft: '1.5rem',

  '@md': {
    paddingLeft: 0,
  },
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  padding: '1.5rem 2rem',
  background: '$new-primary',
  borderRadius: '0.5rem',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const RedeemTicketContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$new-gray',
  borderRadius: '0 0 0.5rem 0.5rem',
})

export const TicketStatusContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
})
