import { AxiosError } from 'axios'
import { IBaan } from 'common/types/baan'
import { getBaanInfoById } from 'common/utils/baan'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useBaanData = (baanId?: string) => {
  const [baan, setBaan] = useState<IBaan>()
  const [isLoading, setIsLoading] = useState(true)
  const { locale } = useRouter()

  useEffect(() => {
    const fetchBaan = async () => {
      try {
        const baanInfo = await getBaanInfoById(baanId || '', locale)
        setBaan(baanInfo)
      } catch (err) {
        throw new Error((err as AxiosError).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBaan()
  }, [baanId, locale])

  return { baan, isLoading }
}
