import { useAuth } from 'common/contexts/AuthContext'
import { apiClient } from 'common/utils/axios'
import { PageType } from 'module/Ticket/types'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'

export const useRedeemTicket = () => {
  const { user, refreshContext } = useAuth()
  const [loading, setLoading] = useState(true)
  const [pageStatus, setPageStatus] = useState(PageType.redeem)
  const i18nKey = useMemo(() => PageType[pageStatus], [pageStatus])
  const router = useRouter()

  useEffect(() => {
    if (user?.year !== '1') {
      router.replace('/')
      return
    }

    if (user?.isGotTicket) {
      setPageStatus(PageType.alreadyRedeem)
    }

    setLoading(false)
  }, [user, router])

  const handleSubmit = useCallback(async () => {
    if (
      pageStatus === PageType.redeemSuccess ||
      pageStatus === PageType.alreadyRedeem ||
      pageStatus === PageType.error
    ) {
      router.push('/')
      return
    }

    setLoading(true)
    try {
      const res = await apiClient.post('/qr/ticket')
      if (res.status !== 204) {
        throw new Error('Cannot redeem ticket. Response code is not 204')
      }
      await refreshContext()
      setPageStatus(PageType.redeemSuccess)
    } catch (err) {
      setPageStatus(PageType.error)
    } finally {
      setLoading(false)
    }
  }, [pageStatus, router, refreshContext])

  return {
    loading,
    i18nKey,
    pageStatus,
    handleSubmit,
  }
}
