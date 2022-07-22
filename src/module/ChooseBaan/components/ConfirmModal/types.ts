export interface IConfirmModalProps {
  open: boolean
  allowSubmit: boolean
  onClose: () => void
  onConfirm: () => void | Promise<void>
}
