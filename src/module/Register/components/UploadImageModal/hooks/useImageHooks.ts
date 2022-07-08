import { ICropMetadata, IImageSize } from 'common/types/crop'
import { getCroppedImage } from 'common/utils/imageHelper'
import { useCallback, useState } from 'react'

export const useImageHooks = (
  handleClose: () => void,
  onSubmit?: (x: string, options?: IImageSize) => void | Promise<void>
) => {
  const [cropMetadata, setCropMetadata] = useState<ICropMetadata>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const [tmpImg, setTmpImg] = useState<string>('')
  const [innerError, setInnerError] = useState<string>('')

  const handleSubmitImage = useCallback(async () => {
    setInnerError('')
    try {
      const croppedImage = await getCroppedImage(tmpImg, cropMetadata)
      const { width, height } = cropMetadata

      await onSubmit?.(croppedImage, { width, height })

      handleClose()
    } catch (err: unknown) {
      setInnerError((err as Error).message)
    }
  }, [cropMetadata, handleClose, onSubmit, tmpImg])

  return { tmpImg, setTmpImg, handleSubmitImage, setCropMetadata, innerError }
}
