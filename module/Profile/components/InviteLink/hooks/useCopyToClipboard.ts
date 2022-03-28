import { useCallback, useState } from 'react'

const useCopyToClipboard = () => {
  const [tooltipText, setTooltipText] = useState<string>('Copy')

  const handleCopyToClipboard = useCallback(() => {
    setTooltipText('Copied')
    setTimeout(() => {
      setTooltipText('Copy')
    }, 2500)
  }, [])

  return { handleCopyToClipboard, tooltipText }
}

export default useCopyToClipboard
