import { ICropMetadata } from 'common/types/crop'
import { getCroppedImage } from 'common/utils/imageHelper'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback, useState } from 'react'

export const useImageHooks = (handleClose: () => void) => {
  const [cropMetadata, setCropMetadata] = useState<ICropMetadata>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const [tmpImg, setTmpImg] = useState<string>('')
  const { setUploadImg } = useFormContext()

  const handleSubmitImage = useCallback(async () => {
    const croppedImage = await getCroppedImage(tmpImg, cropMetadata)
    setUploadImg(croppedImage)

    handleClose()
  }, [cropMetadata, handleClose, setUploadImg, tmpImg])

  return { tmpImg, setTmpImg, handleSubmitImage, setCropMetadata }
}
