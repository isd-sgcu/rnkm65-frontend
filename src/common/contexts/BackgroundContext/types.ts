export interface IBackgroundContext {
  type: BackgroundType
  setType: (type: BackgroundType) => void
}

export type BackgroundType = 'default' | 'bottom'
