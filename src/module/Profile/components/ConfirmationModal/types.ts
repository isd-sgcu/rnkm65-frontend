export interface ConfirmationModalProps {
  open: boolean
  actionI18NKey: string
  acceptButtonI18NKey: string
  declineButtonI18NKey: string
  onAccept: () => void
  onDecline: () => void
}
