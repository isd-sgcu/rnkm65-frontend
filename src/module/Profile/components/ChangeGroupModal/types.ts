import { Member } from 'dto/groupDTO'

export interface ChangeGroupModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  king: Member
  members: Member[]
}
