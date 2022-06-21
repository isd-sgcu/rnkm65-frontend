import { BaanProps } from 'common/components/Baan/types'

export interface ICardBaanProps extends BaanProps {
  onClick: (id: number) => void
  description?: string
  facebook?: string
  ig?: string
}
