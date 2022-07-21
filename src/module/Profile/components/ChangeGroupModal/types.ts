import { IShortUser } from 'common/types/user'

export interface ChangeGroupModalProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  leader: IShortUser
}
