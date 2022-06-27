import { IBaan } from 'common/types/baan'
import { useCallback, useState } from 'react'

export const useBaanModal = () => {
  const [baan, setBaan] = useState<IBaan | null>(null)

  const open = useCallback((cBaan: IBaan) => () => setBaan(cBaan), [])

  const close = useCallback(() => setBaan(null), [])

  return { open, close, baan }
}
