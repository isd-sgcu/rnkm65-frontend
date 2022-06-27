import { IShortBaan } from 'common/types/baan'

export interface BaanProps extends IShortBaan {
  index?: number
  textPosition?: 'bottom' | 'right'
  enableModal?: boolean
  onClickModal?: () => void
}
