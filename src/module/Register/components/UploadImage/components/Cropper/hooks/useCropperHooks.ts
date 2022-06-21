import { ICropMetadata } from 'common/types/crop'
import { blobToDataURL } from 'common/utils/imageHelper'
import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useState,
} from 'react'

const ALLOW_EXT = ['image/png', 'image/jpeg', 'image/webp']
const FILE_LIMIT = 4 * 1048567
type IErrorType = 'fileLimit' | 'invalidMime' | ''

export const useCropperHooks = (
  inputRef: MutableRefObject<HTMLInputElement | null>,
  setImg: Dispatch<SetStateAction<string>>,
  setCropMetaData: Dispatch<SetStateAction<ICropMetadata>>
) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [isDrag, setDrag] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [errorType, setErrorType] = useState<IErrorType>('')

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCropMetaData({ ...croppedAreaPixels })
    },
    [setCropMetaData]
  )

  const prepareImage = useCallback(
    async (file: File) => {
      const imageUrl = await blobToDataURL(file)
      const mimeType = imageUrl.substring(
        imageUrl.indexOf(':') + 1,
        imageUrl.indexOf(';')
      )

      // File limit exceeds
      if (file.size > FILE_LIMIT) {
        setErrorType('fileLimit')
        return
      }

      // Invalid mime type
      if (!ALLOW_EXT.includes(mimeType)) {
        setErrorType('invalidMime')
        return
      }

      setErrorType('')
      setImg(imageUrl)
    },
    [setImg]
  )

  const handleSelectFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.files) {
        const imgFile = e.target.files[0]

        await prepareImage(imgFile)
      }
    },
    [prepareImage]
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

        await prepareImage(imgFile)
      }
      setDrag(false)
    },
    [prepareImage]
  )

  const handleOnDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }, [])

  const handleOnDragLeave = useCallback(() => {
    setDrag(false)
  }, [])

  return {
    errorType,
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
