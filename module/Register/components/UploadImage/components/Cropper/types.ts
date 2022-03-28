import { ICropMetadata } from 'module/Register/components/UploadImage/types'
import { Dispatch, SetStateAction } from 'react'

export interface IImageCropperProps {
  img: string
  setImg: Dispatch<SetStateAction<string>>
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
}
