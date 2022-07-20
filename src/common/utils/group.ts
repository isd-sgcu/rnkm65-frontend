import { AxiosResponse } from 'axios'
import { IGroup } from 'common/types/group'
import { GroupDTO } from 'dto/groupDTO'
import { apiClient } from './axios'

const transformGroupDTOtoIGroup = (group: GroupDTO): IGroup => ({
  id: group.id,
  leaderID: group.leader_id ?? '',
  members: group.members ?? [],
  baans: group.baans ?? [],
})

export const getGroupProfile = async (): Promise<IGroup | null> => {
  let res: AxiosResponse
  try {
    res = await apiClient.get<GroupDTO>('/group')
  } catch (err) {
    return null
  }

  const group = transformGroupDTOtoIGroup(res.data)
  return group
}
