import { IGroup } from 'common/types/group'
import { IShortUser, IUser } from 'common/types/user'

export const isGroupKing = (group: IGroup) => (user: IUser | IShortUser) =>
  user.id === group.leaderID
