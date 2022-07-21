import { IBaan } from './baan'
import { IShortUser } from './user'

export interface IGroup {
  id: string
  leaderID: string
  token: string
  members: IShortUser[]
  baans: IBaan[] // !not in DTO yet
}

export interface IGroupPublic {
  id: string
  token: string
  leader: IShortUser
}
