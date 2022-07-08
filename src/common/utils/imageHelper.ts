import { ICropMetadata, IImageSize } from 'common/types/crop'

const imageWidth = 200
const imageHeight = 300

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

export const getImageData = async (url: string, metadata: IImageSize) => {
  const img = await createImage(url)
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  canvas.width = img.width
  canvas.height = img.height
  context.drawImage(img, 0, 0)
  const myData = context.getImageData(
    0,
    0,
    metadata.width,
    metadata.height
  ).data
  return myData
}

export const blobToDataURL = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const image = new FileReader()
    image.addEventListener('load', (e) => resolve(e.target?.result as string))
    image.addEventListener('error', (error) => reject(error))
    image.readAsDataURL(blob)
  })

export const b64ToBlob = async (dataURI: string) => {
  const res = await fetch(dataURI)
  const blob = await res.blob()
  return blob
}

export const getCroppedImage = async (url: string, position: ICropMetadata) => {
  const currentImage = await createImage(url)
  const newImage = document.createElement('canvas')
  const context = newImage.getContext('2d')

  const { height, width, x, y } = position

  newImage.width = imageWidth
  newImage.height = imageHeight

  context?.drawImage(
    currentImage,
    x,
    y,
    width,
    height,
    0,
    0,
    imageWidth,
    imageHeight
  )

  const convertToBlob = new Promise<Blob>((resolve, reject) => {
    newImage.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('Failed to convert to blob'))
    })
  })

  const blobResult = await convertToBlob
  const dataURL = await blobToDataURL(blobResult)

  return dataURL
}
