export interface InfoModalProps {
  open: boolean
  onClose: () => void
  titleI18NKey: string
  messageI18NKey: string
  buttonI18NKey?: string
  overridedI18NMessage?: string
}
