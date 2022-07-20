import { IShortUser } from 'common/types/user'

export interface JoinGroupModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  leader: IShortUser
}
