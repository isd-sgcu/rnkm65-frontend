export interface IModalProps {
  open: boolean
  canClickBackdrop?: boolean
  onClose: () => void
  showCloseIcon?: boolean
  rootClassName?: string
  modalClassName?: string
}
