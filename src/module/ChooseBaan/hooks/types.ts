import { BaanSize, IBaan } from 'common/types/baan'

export interface Baan extends IBaan {
  isSelected: boolean
  order: number | null
}

export interface Filter {
  search: string
  size: Array<BaanSize>
}
