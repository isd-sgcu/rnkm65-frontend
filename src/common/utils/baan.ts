import { IBaan } from 'common/types/baan'
import { BaanDTO } from 'dto/baanDTO'

import { httpGet } from './axios'

const convertBaanDTOtoIBaan = (
  baanDTO: BaanDTO,
  locale: 'TH' | 'EN'
): IBaan => ({
  id: baanDTO.id,
  name: baanDTO[`name${locale}`],
  description: baanDTO[`description${locale}`],
  facebook: baanDTO.facebook,
  facebookUrl: baanDTO.facebookUrl,
  imageUrl: baanDTO.imageUrl,
  ig: baanDTO.instagram,
  igUrl: baanDTO.instagramUrl,
  size: baanDTO.size || 0,
})

export const getBaanInfo = async (locale?: string): Promise<Array<IBaan>> => {
  const res = await httpGet('/baan')
  const baan = res.data as Array<BaanDTO>

  const localeStr = (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'

  return baan.map((b) => convertBaanDTOtoIBaan(b, localeStr))
}
