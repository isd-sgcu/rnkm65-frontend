export interface IUser {
  firstname: string
  lastname: string
  imageUrl: string
}

export interface IUserProfileProps extends IUser {
  withoutEditButton?: boolean
}
