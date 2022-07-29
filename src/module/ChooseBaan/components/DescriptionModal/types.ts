import { IBaan } from 'common/types/baan'

export interface IDescriptionModal {
  baan?: IBaan
  canSelect?: boolean
  open: boolean
  onConfirm(id: number): void
  onClose(): void
}
