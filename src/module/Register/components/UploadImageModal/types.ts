export interface IUploadModalProps {
  i18nPrefix?: string
  handleClose: () => void
  onSubmit?: (image: string) => void
}
