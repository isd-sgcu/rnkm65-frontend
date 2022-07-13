import { IImageSize } from 'common/types/crop'

export interface IUploadModalProps {
  i18nPrefix?: string
  aspectRatio?: number
  handleClose: () => void
  onSubmit?: (image: string, options?: IImageSize) => void | Promise<void>
}
