import { Member } from 'dto/groupDTO'

export interface KickMemberModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  member: Member
}
