import { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop'

import { CropperContainer } from './styled'

export function ImageCropper() {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [img, setImg] = useState<string | null>(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  const readFile = useCallback((e: ProgressEvent<FileReader>) => {
    setImg(e.target?.result as string)
  }, [])

  const handleSelectFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.files) {
        const imgFile = e.target.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', readFile)
        reader.readAsDataURL(imgFile)
      }
    },
    [readFile]
  )

  const handleInputClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      e.currentTarget.value = ''
    },
    []
  )

  return (
    <div>
      <input
        type="file"
        onClick={handleInputClick}
        onChange={handleSelectFile}
      />
      {img && (
        <>
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
          <input type="range" min={1} max={9} step={2} />
        </>
      )}
    </div>
  )
}
