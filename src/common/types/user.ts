export interface IUser {
  id: string
  studentID: string
  faculty: string
  year: string
  firstname: string
  lastname: string
  nickname: string
  email: string
  phone: string
  lineID: string
  disease: string
  allergyFood: string
  allergyMedicine: string
  foodRestriction: string
  imageUrl: string
  vaccineCertificateUrl: string
}

export interface IUserProfileProps extends IUser {
  withoutEditButton?: boolean
}
