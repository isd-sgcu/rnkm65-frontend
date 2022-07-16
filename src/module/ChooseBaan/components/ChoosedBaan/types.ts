import { IShortBaan } from 'common/types/baan'

export interface ChoosedBannProps {
  baans: IShortBaan[]
  handleDelete: (index: number) => void
  handleConfirm?: () => void
}
