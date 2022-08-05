import axios from 'axios'
import { IBaan } from 'common/types/baan'
import { IGroup } from 'common/types/group'
import { API_BASE_URL } from 'config/env'
import { BaanDTO } from 'dto/baanDTO'

export const convertBaanDTOtoIBaan = (
  baanDTO: BaanDTO,
  locale: 'TH' | 'EN'
): IBaan => ({
  id: baanDTO.id,
  name: baanDTO[`name${locale}`],
  description: baanDTO[`description${locale}`],
  facebook: baanDTO.facebook || '',
  facebookUrl: baanDTO.facebookUrl || '',
  imageUrl: baanDTO.imageUrl || '',
  ig: baanDTO.instagram || '',
  igUrl: baanDTO.instagramUrl || '',
  size: baanDTO.size || 0,
})

export const getBaanInfo = async (locale?: string): Promise<Array<IBaan>> => {
  const res = await axios.get(`${API_BASE_URL}/baan`)
  const baan = res.data as Array<BaanDTO>

  const localeStr = (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'

  if (!baan) return []

  return baan.map((b) => convertBaanDTOtoIBaan(b, localeStr))
}

export const haveBaan = (group?: IGroup) => group?.baans?.length !== 0

export const getBaanInfoById = async (
  id: string,
  locale?: string
): Promise<IBaan> => {
  const res = await axios.get(`${API_BASE_URL}/baan/${id}`)
  const baan = res.data as BaanDTO

  const localeStr = (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'

  if (!baan) return {} as IBaan

  return convertBaanDTOtoIBaan(baan, localeStr)
}
