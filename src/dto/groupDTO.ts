import { IBaan } from 'common/types/baan'
import { IShortUser } from 'common/types/user'

export interface Member {
  title: string
  firstname: string
  lastname: string
  nickname: string
  image_url: string
}

export interface GroupDTO {
  // todo: change group dto
  id: string
  leaderID: string
  members: IShortUser[]
  baans: IBaan[] // !not in DTO yet
  token: string
}

export interface GroupPublicDTO {
  id: string
  token: string
  leader: IShortUser
}
