import { BaanSize } from 'common/types/baan'

export interface BaanDTO {
  id: number
  nameEN: string
  nameTH: string
  size: BaanSize
  descriptionEN: string
  descriptionTH: string
  facebook: string
  facebookUrl: string
  imageUrl: string
  instagram: string
  instagramUrl: string
  line: string
  lineUrl: string
}
