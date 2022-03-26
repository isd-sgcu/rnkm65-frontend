import { User } from 'common/types/user'

export interface MemberProps extends User {
  isKing?: boolean
  isDeletable?: boolean
}
