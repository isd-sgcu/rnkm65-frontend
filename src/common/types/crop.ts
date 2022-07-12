export interface IImageSize {
  width: number
  height: number
}

export interface ICropMetadata extends IImageSize {
  x: number
  y: number
}
