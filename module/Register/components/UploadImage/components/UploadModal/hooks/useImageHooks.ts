import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback, useState } from 'react'

import { getCroppedImage } from '../../../utils/imageHelper'
import { ICropMetadata } from '../types'

export const useImageHooks = (handleClose: () => void) => {
  const [cropMetadata, setCropMetadata] = useState<ICropMetadata>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const [tmpImg, setTmpImg] = useState<string>('')
  const { setImgRequired, setUploadImg } = useFormContext()

  const handleSubmitImage = useCallback(async () => {
    const croppedImage = await getCroppedImage(tmpImg, cropMetadata)
    setUploadImg(croppedImage)
    setImgRequired(false)

    handleClose()
  }, [cropMetadata, handleClose, setImgRequired, setUploadImg, tmpImg])

  return { tmpImg, setTmpImg, handleSubmitImage, setCropMetadata }
}
