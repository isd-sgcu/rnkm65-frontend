export interface IDescriptionModal {
  baanKey: string
  open: boolean
  onConfirm(key: string): void
  onClose(): void
}
