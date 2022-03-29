import { IUser } from 'common/types/user'

export interface MemberProps extends IUser {
  isKing?: boolean
  isDeletable?: boolean
}
