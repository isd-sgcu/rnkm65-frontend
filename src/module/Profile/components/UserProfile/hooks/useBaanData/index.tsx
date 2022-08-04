import { IBaan } from 'common/types/baan'
import { getBaanInfoById } from 'common/utils/baan'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

export const useBaanData = (baanId?: string) => {
  const [baan, setBaan] = useState<IBaan | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const { locale } = useRouter()

  const handleError = useErrorHandler()

  useEffect(() => {
    const fetchBaan = async () => {
      try {
        const baanInfo = await getBaanInfoById(baanId || '', locale)
        setBaan(baanInfo)
      } catch (err) {
        handleError(err)
      } finally {
        setIsLoading(false)
      }
    }
    if (!baanId) return
    fetchBaan()
  }, [baanId, handleError, locale])

  return { baan, isLoading }
}
