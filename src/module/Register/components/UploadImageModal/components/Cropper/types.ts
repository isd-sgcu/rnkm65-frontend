import { ICropMetadata } from 'common/types/crop'
import { Dispatch, SetStateAction } from 'react'

export interface IImageCropperProps {
  img: string
  i18nPrefix?: string
  setImg: Dispatch<SetStateAction<string>>
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
}
