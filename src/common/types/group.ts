import { IBaan } from './baan'
import { IShortUser } from './user'

export interface IGroup {
  id: string
  leaderID: string
  members: IShortUser[]
  baans: IBaan[] // !not in DTO yet
}
