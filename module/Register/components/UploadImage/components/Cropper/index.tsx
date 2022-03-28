import Typography from 'common/components/Typography'
import { useTranslation } from 'next-i18next'
import { memo, useRef } from 'react'
import Cropper from 'react-easy-crop'
import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

import { useCropperHooks } from './hooks/useCropperHooks'
import {
  CropperContainer,
  InputFileContainer,
  InputFileZone,
  RootContainer,
  ZoomContainer,
  ZoomInput,
} from './styled'
import { IImageCropperProps } from './types'

const ImageCropper = memo((props: IImageCropperProps) => {
  const { img, setImg, setCropMetaData } = props
  const { t } = useTranslation('register')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const {
    crop,
    errorType,
    handleInputClick,
    handleOnDragLeave,
    setCrop,
    setZoom,
    zoom,
    isDrag,
    handleOnDragOver,
    handleOnDrop,
    handleSelectFile,
    onCropComplete,
  } = useCropperHooks(inputRef, setImg, setCropMetaData)

  return (
    <RootContainer>
      <input
        accept="image/png, image/jpeg, image/webp"
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleSelectFile}
      />
      {!img && (
        <InputFileContainer>
          <Typography variant="subhead3">
            {isDrag
              ? t('uploadModal.dragDropFallback')
              : t('uploadModal.uploadFallback')}
          </Typography>
          <InputFileZone
            role="none"
            onClick={handleInputClick}
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            onDragLeave={handleOnDragLeave}
          />
        </InputFileContainer>
      )}
      {img && (
        <>
          <CropperContainer
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            onDragLeave={handleOnDragLeave}
          >
            <Cropper
              image={img}
              crop={crop}
              zoom={zoom}
              cropShape="rect"
              aspect={2 / 3}
              minZoom={1}
              maxZoom={9}
              zoomSpeed={0.5}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </CropperContainer>
          <ZoomContainer>
            <FiZoomOut size={24} />
            <ZoomInput
              type="range"
              min={1}
              max={9}
              step={0.5}
              value={zoom}
              onChange={(e) => setZoom(+e.currentTarget.value)}
            />
            <FiZoomIn size={24} />
          </ZoomContainer>
        </>
      )}
      <Typography css={{ fontWeight: 'bold', marginTop: '1rem' }} color="error">
        {errorType && t(`error.${errorType}`)}
      </Typography>
    </RootContainer>
  )
})

export default ImageCropper
