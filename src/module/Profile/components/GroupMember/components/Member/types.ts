import { IShortUser } from 'common/types/user'

export interface MemberProps extends IShortUser {
  isKing?: boolean
  isDeletable?: boolean
}
