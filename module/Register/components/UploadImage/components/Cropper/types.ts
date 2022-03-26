import { Dispatch, SetStateAction } from 'react'

import { ICropMetadata } from '../../types'

export interface IImageCropperProps {
  img: string
  setImg: Dispatch<SetStateAction<string>>
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
}
