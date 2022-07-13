import React, { createContext, useContext, useMemo, useState } from 'react'

import { BackgroundType, IBackgroundContext } from './types'

const BackgroundContext = createContext<IBackgroundContext>(
  {} as IBackgroundContext
)

export const useBackground = () => useContext(BackgroundContext)

export const BackgroundProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [type, setType] = useState<BackgroundType>('default')
  const value = useMemo(
    () => ({
      type,
      setType,
    }),
    [type, setType]
  )

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  )
}
