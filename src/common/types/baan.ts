export enum BaanSize {
  Small,
  Medium,
  Large,
  ExtraLarge,
}
export interface IShortBaan {
  id: number
  name: string
  imageUrl: string
}

export interface IBaan extends IShortBaan {
  capacity: number
  size: BaanSize
  description: string
  facebook: string
  ig: string
}
