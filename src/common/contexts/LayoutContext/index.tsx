import React, { createContext, useContext, useMemo, useState } from 'react'

import { BackgroundType, ILayoutContext } from './types'

const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext)

export const useLayout = () => useContext(LayoutContext)

export const LayoutProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [backgroundType, setBackgroundType] =
    useState<BackgroundType>('default')
  const [isHideFooter, setHideFooter] = useState<boolean>(false)

  const value = useMemo(
    () => ({
      backgroundType,
      setBackgroundType,
      isHideFooter,
      setHideFooter,
    }),
    [backgroundType, setBackgroundType, isHideFooter, setHideFooter]
  )

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}
