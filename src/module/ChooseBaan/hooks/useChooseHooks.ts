import { useSwitch } from 'common/hooks/useSwitch'
import { useCallback, useState } from 'react'

const useChooseHooks = () => {
  const [baanId, setBaanId] = useState<Array<number>>([])
  const [modalId, setModalId] = useState(-1)
  const {
    state: openModal,
    handleOpen,
    handleClose: closeModal,
  } = useSwitch(false)

  const handleDeleteBaan = useCallback(
    (idx: number) => {
      setBaanId(baanId.filter((num) => num !== idx))
    },
    [baanId]
  )

  const handleAddBaan = useCallback(
    (idx: number) => {
      setBaanId([...baanId, idx])
    },
    [baanId]
  )

  const handleClickInformation = useCallback(
    (idx: number) => {
      setModalId(idx)
      handleOpen()
    },
    [handleOpen]
  )

  return {
    modalId,
    baanId,
    openModal,
    closeModal,
    handleDeleteBaan,
    handleAddBaan,
    handleClickInformation,
  }
}

export { useChooseHooks }
