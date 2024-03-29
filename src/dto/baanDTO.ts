import { BaanSize } from 'common/types/baan'

export interface ShortBaanDTO {
  id: number
  nameEN: string
  nameTH: string
  imageUrl: string
}

export interface BaanDTO extends ShortBaanDTO {
  size: BaanSize
  descriptionEN: string
  descriptionTH: string
  facebook: string
  facebookUrl: string
  instagram: string
  instagramUrl: string
  line: string
  lineUrl: string
}
