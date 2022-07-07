import { IImageSize } from 'common/types/crop'

export interface IUploadModalProps {
  i18nPrefix?: string
  handleClose: () => void
  onSubmit?: (image: string, options?: IImageSize) => void | Promise<void>
}
