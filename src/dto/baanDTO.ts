enum BaanSize {
  Small,
  Medium,
  Large,
}

export interface BaanDTO {
  id: number
  name: string
  capacity: number
  size: BaanSize
  image_url: string
  description: string
}
