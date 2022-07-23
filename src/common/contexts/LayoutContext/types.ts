export interface ILayoutContext {
  backgroundType: BackgroundType
  setBackgroundType: (type: BackgroundType) => void
  isHideFooter: boolean
  setHideFooter: (isHideFooter: boolean) => void
}

export type BackgroundType = 'default' | 'bottom'
