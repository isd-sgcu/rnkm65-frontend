import { Member } from 'dto/groupDTO'

export interface JoinGroupModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  king: Member
  members: Member[]
}
