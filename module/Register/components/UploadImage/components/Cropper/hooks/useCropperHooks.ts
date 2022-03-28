import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useState,
} from 'react'

import { ICropMetadata } from '../../../types'
import { blobToDataURL } from '../../../utils/imageHelper'

export const useCropperHooks = (
  inputRef: MutableRefObject<HTMLInputElement | null>,
  setImg: Dispatch<SetStateAction<string>>,
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [isDrag, setDrag] = useState(false)
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCropMetaData({ ...croppedAreaPixels })
    },
    [setCropMetaData]
  )

  const handleSelectFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
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
  }, [inputRef])

  const handleOnDrop = useCallback(
    async (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const { files } = e.dataTransfer
      if (files) {
        const imgFile = files[0]

        const imageUrl = await blobToDataURL(imgFile)
        setImg(imageUrl)
      }
      setDrag(false)
    },
    [setImg]
  )

  const handleOnDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }, [])

  const handleOnDragLeave = useCallback(() => {
    setDrag(false)
  }, [])

  return {
    crop,
    setCrop,
    zoom,
    setZoom,
    isDrag,
    onCropComplete,
    handleInputClick,
    handleSelectFile,
    handleOnDrop,
    handleOnDragOver,
    handleOnDragLeave,
  }
}
