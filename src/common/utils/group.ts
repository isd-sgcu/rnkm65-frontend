import { AxiosError, AxiosResponse } from 'axios'
import { IGroup, IGroupPublic } from 'common/types/group'
import { IUser } from 'common/types/user'
import { GroupDTO, GroupPublicDTO } from 'dto/groupDTO'

import { apiClient } from './axios'

const transformGroupDTOtoIGroup = (
  group: GroupDTO,
  locale: 'TH' | 'EN'
): IGroup => ({
  id: group.id,
  leaderID: group.leaderID ?? '',
  members: group.members ?? [],
  baans:
    group.baans?.map((val) => ({
      id: val.id,
      name: val[`name${locale}`],
      imageUrl: val.imageUrl,
    })) ?? [],
  token: group.token ?? '',
})

export const getGroupProfile = async (
  locale?: string
): Promise<IGroup | null> => {
  let res: AxiosResponse
  try {
    res = await apiClient.get<GroupDTO>('/group')
  } catch (err) {
    return null
  }

  const tLocale = (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'
  const group = transformGroupDTOtoIGroup(res.data, tLocale)
  return group
}

export const getGroupPublicProfile = async (
  token: string
): Promise<IGroupPublic | null> => {
  let res: AxiosResponse
  try {
    res = await apiClient.get<GroupPublicDTO>(
      `/group/${encodeURIComponent(token)}`
    )
  } catch (err) {
    return null
  }

  return res.data
}

export const postJoinGroup = async (token: string): Promise<boolean> => {
  let res: AxiosResponse
  try {
    res = await apiClient.post(`/group/${encodeURIComponent(token)}`)
  } catch (err) {
    const message = (err as AxiosError).response?.data.message
    if (message) {
      throw new Error(message)
    }
    throw new Error('No Response from Server')
  }

  if (res.status !== 200) {
    throw new Error(res.data.message)
  }

  return true
}

export const canJoinGroup = (user?: IUser) =>
  (user?.studentID || '').startsWith('65')
