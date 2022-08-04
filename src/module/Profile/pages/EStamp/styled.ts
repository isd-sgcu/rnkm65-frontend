import { styled } from 'config/stitches.config'

export const EStampProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  paddingBottom: '4rem',
})

export const JoinBaanContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '0.5rem',
})

export const ActionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem',
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
})

export const TicketStatusContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 2rem',
  background: '$new-gray',
  borderRadius: '0 0 0.5rem 0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
})
