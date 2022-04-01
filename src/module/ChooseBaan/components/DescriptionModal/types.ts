export interface IDescriptionModal {
  key: string
  open: boolean
  onConfirm(key: string): void
  onClose(): void
}
