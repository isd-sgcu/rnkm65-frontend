import { IBaan } from 'common/types/baan'

export interface IDescriptionModal {
  baan?: IBaan
  open: boolean
  onConfirm(id: number): void
  onClose(): void
}
