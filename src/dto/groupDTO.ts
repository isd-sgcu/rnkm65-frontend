export interface Member {
  title: string
  firstname: string
  lastname: string
  nickname: string
  image_url: string
}

export interface GroupDTO {
  baan_id: number[]
  members: Member[]
}
