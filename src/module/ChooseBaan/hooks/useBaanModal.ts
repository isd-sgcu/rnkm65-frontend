import { IBaan } from 'common/types/baan'
import { useCallback, useState } from 'react'

export const useBaanModal = () => {
  const [baan, setBaan] = useState<IBaan | null>(null)
  const [openModal, setOpenModal] = useState(false)

  const open = useCallback(
    (cBaan: IBaan) => () => {
      setBaan(cBaan)
      setOpenModal(true)
    },
    []
  )

  const close = useCallback(() => setOpenModal(false), [])

  return { open, close, baan, openModal }
}
