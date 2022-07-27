import { AxiosResponse } from 'axios'
import { IUser } from 'common/types/user'
import { UserDTO } from 'dto/userDTO'

import { apiClient } from './axios'
import { convertBaanDTOtoIBaan } from './baan'

const transformUserDTOtoIUser = (user: UserDTO, locale: 'TH' | 'EN') => ({
  id: user.id,
  studentID: user.studentID,
  faculty: user.faculty,
  year: user.year,
  title: user.title || 'Mr.',
  firstname: user.firstname ?? '',
  lastname: user.lastname ?? '',
  nickname: user.nickname ?? '',
  email: user.email ?? '',
  phone: user.phone ?? '',
  lineID: user.lineID ?? '',
  disease: user.disease ?? '',
  allergyFood: user.allergyFood ?? '',
  allergyMedicine: user.allergyMedicine ?? '',
  foodRestriction: user.foodRestriction ?? '',
  imageUrl: user.imageUrl ?? '',
  canSelectBaan: user.canSelectBaan ?? false,
  isVerify: user.isVerify ?? false,
  groupId: user.groupId ?? '',
  baan: user.baan && convertBaanDTOtoIBaan(user.baan, locale),
})

const getUserProfile = async (locale?: string): Promise<IUser | null> => {
  let res: AxiosResponse
  const localeStr = (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'
  try {
    res = await apiClient.get<UserDTO>('/auth/me')
  } catch (err) {
    return null
  }

  const user = transformUserDTOtoIUser(res.data, localeStr)
  return user
}

export { getUserProfile }
