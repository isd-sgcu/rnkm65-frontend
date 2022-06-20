export interface ConfirmationModalProps {
  open: boolean
  actionI18NKey: string
  acceptButtonI18NKey: string
  declinButtonI18NKey: string
  onAccept: () => void
  onDecline: () => void
}
