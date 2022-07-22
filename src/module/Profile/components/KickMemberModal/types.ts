import { IShortUser } from 'common/types/user'

export interface KickMemberModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  member: IShortUser
}
