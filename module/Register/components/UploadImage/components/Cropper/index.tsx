import Typography from 'common/components/Typography'
import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'

import { blobToDataURL } from '../../utils/imageHelper'
import { CropperContainer, InputFileContainer, RootContainer } from './styled'
import { IImageCropperProps } from './types'

export const ImageCropper = (props: IImageCropperProps) => {
  const { img, setImg, setCropMetaData } = props
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCropMetaData({ ...croppedAreaPixels })
    },
    [setCropMetaData]
  )

  const handleSelectFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.files) {
        const imgFile = e.target.files[0]

        const imageUrl = await blobToDataURL(imgFile)
        setImg(imageUrl)
      }
    },
    [setImg]
  )

  const handleInputClick = useCallback(() => {
    const currentRef = inputRef.current
    if (currentRef) {
      currentRef.value = ''
      currentRef.click()
    }
  }, [])

  return (
    <RootContainer>
      <input
        accept="image/*"
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleSelectFile}
      />
      {!img && (
        <InputFileContainer onClick={handleInputClick}>
          <Typography variant="subhead3">คลิกเพื่ออัพโหลดรูป</Typography>
        </InputFileContainer>
      )}
      {img && (
        <CropperContainer>
          <Cropper
            image={img}
            crop={crop}
            zoom={zoom}
            cropShape="rect"
            aspect={2 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </CropperContainer>
      )}
    </RootContainer>
  )
}
