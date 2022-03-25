import { useCallback, useState } from 'react'

const useCopyToClipboard = () => {
  const [tooltipText, setTooltipText] = useState<string>('Copy')

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setTooltipText('Copied')
    setTimeout(() => {
      setTooltipText('Copy')
    }, 2500)
  }, [])

  return { copyToClipboard, tooltipText }
}

export default useCopyToClipboard
