import axios from 'axios'
import { IBaan } from 'common/types/baan'
import { API_BASE_URL } from 'config/env'
import { BaanDTO } from 'dto/baanDTO'

const convertBaanDTOtoIBaan = (
  baanDTO: BaanDTO,
  locale: 'TH' | 'EN'
): IBaan => ({
  id: baanDTO.id,
  name: baanDTO[`name${locale}`],
  description: baanDTO[`description${locale}`]
    .replaceAll(/[\n]*(?=[\n])/g, '')
    .replaceAll('\n', '\n\n'),
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

  return baan.map((b) => convertBaanDTOtoIBaan(b, localeStr))
}
