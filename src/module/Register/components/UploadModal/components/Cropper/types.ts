import { ICropMetadata } from 'common/types/crop'
import { Dispatch, SetStateAction } from 'react'

export interface IImageCropperProps {
  img: string
  setImg: Dispatch<SetStateAction<string>>
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
}
