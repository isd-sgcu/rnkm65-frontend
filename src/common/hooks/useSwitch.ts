import { useCallback, useState } from 'react'

export function useSwitch(initial: boolean) {
  const [state, setState] = useState(initial)

  const handleOpen = useCallback(() => {
    setState(true)
  }, [])

  const handleClose = useCallback(() => {
    setState(false)
  }, [])

  return { state, handleOpen, handleClose }
}
