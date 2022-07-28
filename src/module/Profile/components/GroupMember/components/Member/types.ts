import { IShortUser } from 'common/types/user'

export interface MemberProps {
  user: IShortUser
  isKing?: boolean
  isDeletable?: boolean
  onDelete(user: IShortUser): void
}
