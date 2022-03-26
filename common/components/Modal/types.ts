export interface IModalProps {
  open: boolean
  canClickBackdrop?: boolean
  onClose: () => void
  rootClassName?: string
  modalClassName?: string
}
