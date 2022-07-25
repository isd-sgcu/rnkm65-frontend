import { httpPost } from 'common/utils/axios'
import { PageType } from 'module/FreshmenNightCheck/types'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'

export const useCheckinHooks = (pageMode: PageType) => {
  const [isLoading, setLoading] = useState(false)
  const [pageStatus, setPageStatus] = useState(pageMode)
  const i18nKey = useMemo(() => PageType[pageStatus], [pageStatus])
  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    if (
      pageStatus === PageType.checkinSuccess ||
      pageStatus === PageType.checkoutSuccess ||
      pageStatus === PageType.error
    ) {
      router.push('/')
      return
    }

    setLoading(true)
    try {
      await httpPost('/api/checkin', {})
      if (pageStatus === PageType.checkin) {
        setPageStatus(PageType.checkinSuccess)
      }

      if (pageStatus === PageType.checkout) {
        setPageStatus(PageType.checkoutSuccess)
      }
    } catch (err) {
      setPageStatus(PageType.error)
    } finally {
      setLoading(false)
    }
  }, [pageStatus, router])

  return {
    isLoading,
    i18nKey,
    handleSubmit,
  }
}
