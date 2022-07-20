import { IShortUser, IUser } from 'common/types/user'

export interface GroupMemberProps {
  members: IShortUser[]
  disabled?: boolean
}
