import { BaanSize } from 'common/types/baan'

export interface BaanDTO {
  id: number
  name: string
  capacity: number
  size: BaanSize
  image_url: string
  description: string
}
