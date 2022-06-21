import { IBaan } from 'common/types/baan'
import { useState } from 'react'

interface Baan extends IBaan {
  isSelected: boolean
  order: number | null
}

export const useBaans = (initBaans: IBaan[]) => {
  const [baans] = useState<Baan[]>(
    initBaans.map((v) => ({ ...v, isSelected: false, order: null }))
  )

  return { baans }
}
